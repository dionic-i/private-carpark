<template>
  <div :class="['card', isBooked ? 'active' : '']">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="photo" alt="Car image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="is-size-6 title">{{ title }}</p>
        </div>
      </div>
      <div class="content">
        <p>{{ description }}</p>
        <ul class="options is-size-7">
          <li><strong>Max скорость: </strong>{{ maxSpeed }} км/ч</li>
          <li><strong>Пробег: </strong>{{ currentRun }} тыс. км.</li>
        </ul>
      </div>
    </div>
    <footer class="card-footer">
      <toggle-car-booking-button
              :car-id="carId"
              :title="title"
              :is-allowed-booking="!isBooked"
              v-bind="$attrs"
              v-on="$listeners"
      ></toggle-car-booking-button>
    </footer>
  </div>
</template>

<script>

  import { ToggleCarBookingButton } from '../ToggleCarBookingButton'

  export default {
    name: 'CarCard',
    components: {
      ToggleCarBookingButton
    },
    props: {
      carId: {
        type: Number,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      photo: {
        type: String,
        default: 'https://bulma.io/images/placeholders/1280x960.png'
      },
      maxSpeed: {
        type: Number,
        required: true
      },
      currentRun: {
        type: Number,
        required: true
      },
      isBooked: {
        type: Boolean,
        default: false
      },
    },
    computed: {
      linkText() {
        return this.isActive ? 'Отказаться' : 'Забронировать'
      }
    },
  }
</script>

<style lang="scss" scoped>
  .options {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .active {
    border: 2px solid hsl(141, 71%, 48%)
  }

  .card-content {
    padding: 0.5rem;
  }
</style>
