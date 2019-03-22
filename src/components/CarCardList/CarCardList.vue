<template>
  <div>
    <div class="columns">
      <div class="column">
        <h2 class="subtitle">{{ title }}</h2>
      </div>
    </div>
    <div class="columns is-multiline">
      <template v-if="cars.length > 0">
        <div class="column is-one-quarter" v-for="car in cars">
          <car-card
                  :key="car.id"
                  :car-id="car.id"
                  :title="car.title"
                  :description="car.description"
                  :max-speed="car.maxSpeed"
                  :current-run="car.currentRun"
                  :photo="car.photo"
                  :is-booked="car.isBooked"
                  v-bind="$attrs"
                  v-on="$listeners"
          ></car-card>
        </div>
      </template>
      <div class="column is-full" v-else>
        <h2 class="is-centred">{{ emptyText }}</h2>
      </div>
    </div>
  </div>
</template>

<script>

  import { CarCard } from '../CarCard'

  export default {
    name: 'CarCardList',
    components: {
      CarCard
    },
    props: {
      cars: {
        type: Array,
        default: () => {
          return []
        }
      },
      title: {
        type: String,
        default: 'Список машин'
      },
      emptyText: {
        type: String,
        default: 'У вас пока нет машин...'
      },
    },
  }
</script>

<style lang="scss">
</style>
