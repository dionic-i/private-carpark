<template>
  <div id="app">
    <div class="container is-fluid">
      <!-- Header -->
      <div class="columns">
        <div class="column is-full">
          <app-header
                  :title="title"
                  :car-name="todayCar.title"
                  :date="currentDate"
                  @change-date="onChangeDay"
          >
          </app-header>
        </div>
      </div>

      <!-- Main section -->
      <div class="columns">
        <div class="column is-8 has-border-right">
          <car-card-list
                  :cars="carItems"
                  :booked-days="bookedDays"
                  :first-allowed-day="firstAllowedDay"
                  @add-car-booking="onAddBooking"
                  @cancel-car-booking="onCancelBooking"
          ></car-card-list>
        </div>
        <div class="column is-4">
          <cars-filter
                  :speed-range="speedRange"
                  :run-range="runRange"
                  :speed="speedValue"
                  :run="runValue"
                  @change-speed="onChangeSpeed"
                  @change-run="onChangeRun"
                  @reset-filter="reset"
          ></cars-filter>
          <booked-cars-table
              :bookedCars="bookedCars"
              @cancel-car-booking="onCancelBooking"
          >
          </booked-cars-table>
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
  import { BookedCarsTable } from './components/BookedCarsTable'

  export default {
    name: 'app',
    components: {
      AppHeader,
      CarCardList,
      CarsFilter,
      BookedCarsTable
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
        'bookedDays',
        'bookedCars',
        'firstAllowedDay',
        'todayCar',
        'currentDate'
      ]),
    },
    methods: {
      load: call('cars/LoadInfo'),
      filter: call('cars/ChangeFilter'),
      reset: call('cars/ResetFilter'),
      onAddBooking: call('cars/AddCarBooking'),
      onCancelBooking: call('cars/CancelCarBooking'),
      onChangeDay: call('cars/ChangeCurrentDay'),
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
