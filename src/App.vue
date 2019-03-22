<template>
  <div id="app">
    <div class="container is-fluid">
      <!-- Header -->
      <div class="columns">
        <div class="column is-full">
          <app-header :title="title"></app-header>
        </div>
      </div>

      <!-- Main section -->
      <div class="columns">
        <div class="column is-9 has-border-right">
          <car-card-list
                  :cars="carItems"
                  :booked-days="bookedDays"
                  @add-car-booking="onAddBooking"
                  @cancel-car-booking="onCancelBooking"
          ></car-card-list>
        </div>
        <div class="column is-3">
          <cars-filter
                  :speed-range="speedRange"
                  :run-range="runRange"
                  @change-speed="onChangeSpeed"
                  @change-run="onChangeRun"
          ></cars-filter>
        </div>
      </div>
    </div>

    <b-loading :active.sync="isLoading" :can-cancel="true"></b-loading>

    <portal-target name="modals"></portal-target>
  </div>
</template>

<script>
  import { get, call } from 'vuex-pathify'

  import { AppHeader } from './components/AppHeader'
  import { CarCardList } from './components/CarCardList'
  import { CarsFilter } from './components/CarsFilter'

  export default {
    name: 'app',
    components: {
      AppHeader,
      CarCardList,
      CarsFilter
    },
    data: function () {
      return {
        title: 'Мой автопарк',
      }
    },
    computed: {
      ...get('cars', [
        'speedRange',
        'runRange',
        'carItems',
        'isLoading',
        'speedValue',
        'runValue',
        'bookedDays'
      ]),
    },
    methods: {
      load: call('cars/LoadInfo'),
      filter: call('cars/ChangeFilter'),
      onAddBooking: call('cars/AddCarBooking'),
      onCancelBooking: call('cars/CancelCarBooking'),
      onChangeSpeed(value) {
        this.filter({ name: 'speedValue', value })
      },
      onChangeRun(value) {
        this.filter({ name: 'runValue', value })
      },
    },
    mounted() {
      this.load()
    }
  }
</script>

<style lang="scss" scoped>
  .has-border-right {
    border-right: 1px solid hsl(0, 0%, 71%);
  }
</style>
