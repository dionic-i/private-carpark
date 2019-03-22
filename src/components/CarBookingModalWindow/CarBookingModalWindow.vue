<template>
  <b-modal
          :active="true"
          :canCancel="false"
  >
    <div class="modal-card" style="width: 400px; height: 500px;">
      <header class="modal-card-head">
        Бронирование машины:
        <span class="has-text-weight-bold">&nbsp;{{ title }}</span>
      </header>
      <section class="modal-card-body">
        <form>
          <b-field label="Дата бронирования">
            <b-datepicker
                    icon="calendar-today"
                    v-model="selectDate"
                    :unselectable-dates="unSelectableDates"
            >
            </b-datepicker>
          </b-field>
        </form>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-primary" @click="onConfirm">Выбрать</button>
        <button class="button is-normal" @click="onClose">Отмена</button>
      </footer>
    </div>
  </b-modal>
</template>

<script>
  import moment from 'moment'

  import { getDate } from '@/helpers/utils'
  import { DATE_FORMAT } from '@/app.constants'

  export default {
    name: 'CarBookingModalWindow',
    data() {
      return {
        selectDate: new Date()
      }
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
      bookedDays: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      unSelectableDates() {
        return this.bookedDays.map(date => getDate(date))
      }
    },
    methods: {
      onConfirm() {
        this.$emit('confirm', moment(this.selectDate).format(DATE_FORMAT))
      },
      onClose() {
        this.$emit('close')
      }
    },
    mounted() {
      console.log('CarBookingModalWindow', this.bookedDays)
    }
  }

</script>

<style lang="scss" scoped>
</style>