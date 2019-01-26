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
          <car-card-list :cars="cars"></car-card-list>
        </div>
        <div class="column is-3">
          <cars-filter></cars-filter>
          <!-- Карточка сегодняшней машины -->
        </div>
      </div>
    </div>

    <b-loading :active.sync="isLoading" :can-cancel="true"></b-loading>
  </div>
</template>

<script>

  import AppHeader from './components/AppHeader/AppHeader.vue'
  import CarCardList from './components/CarCardList/CarCardList.vue'
  import CarsFilter from './components/CarsFilter/CarsFilter.vue'

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
        isLoading: false,
        cars: []
      }
    },
    methods: {
      loadCars() {
        return new Promise((resolve) => {
          const data = require('./data/cars.json')
          setTimeout(() => {
            resolve(data.cars)
          }, 200)
        })
      }
    },
    mounted() {
      const me = this
      me.isLoading = true
      me.loadCars().then((cars) => {
        me.isLoading = false
        me.cars = cars
      })
    }
  }
</script>

<style lang="scss" scoped>
  .has-border-right {
    border-right: 1px solid hsl(0, 0%, 71%);
  }
</style>
