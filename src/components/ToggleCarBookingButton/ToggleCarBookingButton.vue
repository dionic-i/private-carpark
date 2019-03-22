<template>
  <div class="has-text-centered">
    <a
            v-if="isAllowedBooking"
            href="#"
            class="card-footer-item has-text-success"
            @click.prevent="isVisible = true"
    >
      Забронировать
      <portal to="modals">
        <template v-if="isVisible">
          <car-booking-modal-window
                  v-bind="modalProps"
                  @confirm="addCarBooking"
                  @close="hideBookingWindow"
          ></car-booking-modal-window>
        </template>
      </portal>
    </a>
    <a
            href="#"
            class="card-footer-item has-text-danger"
            v-else
            @click.prevent="cancelCarBooking"
    >
      Отказаться
    </a>
  </div>
</template>

<script>

  import { CarBookingModalWindow } from '../CarBookingModalWindow'

  export default {
    name: 'ToggleCarBookingButton',
    components: {
      CarBookingModalWindow
    },
    data() {
      return {
        isVisible: false
      }
    },
    props: {
      carId: {
        type: Number,
        required: true
      },
      isAllowedBooking: {
        type: Boolean,
        required: true
      }
    },
    computed: {
      modalProps() {
        return {
          carId: this.carId,
          ...this.$attrs
        }
      },
    },
    methods: {
      hideBookingWindow() {
        this.isVisible = false
      },
      addCarBooking(date) {
        this.hideBookingWindow()
        this.$emit('add-car-booking', { id: this.carId, date })
      },
      cancelCarBooking() {
        this.$emit('cancel-car-booking', this.carId)
      }
    }
  }

</script>
