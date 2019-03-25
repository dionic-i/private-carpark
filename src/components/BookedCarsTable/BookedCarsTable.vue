<template>
  <div class="booked-cars-table">
    <div class="columns">
      <div class="column">
        <h2 class="subtitle has-text-weight-bold">{{ title }}</h2>
      </div>
    </div>
    <div class="columns">
      <div class="column is-full">
        <b-table
                style="margin-bottom: 1rem"
                :data="bookedCars"
                :columns="columns"
                :selected.sync="selected"
        >
          <template slot="empty">
            <section class="section">
              <div class="content has-text-grey has-text-centered">
                <p>
                  <b-icon
                          icon="emoticon-sad"
                          size="is-large">
                  </b-icon>
                </p>
                <p>{{ emptyText }}</p>
              </div>
            </section>
          </template>
        </b-table>
        <button
                class="button is-danger is-medium full-width"
                :disabled="!selected"
                @click="onCancelBooking"
        >
          Отменить бронь
        </button>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'BookedCarsTable',
    data() {
      const columns = [{
        field: 'id',
        label: 'Ид',
        width: '40',
      }, {
        field: 'carName',
        label: 'Машина',
        width: '250',
      }, {
        field: 'bookedDate',
        label: 'Дата',
      }]
      return {
        selected: null,
        columns,
      }
    },
    props: {
      bookedCars: {
        type: Array,
        default: () => {
          return []
        }
      },
      title: {
        type: String,
        default: 'Список забронированных машин'
      },
      emptyText: {
        type: String,
        default: 'У вас пока нет забронированных машин...'
      },
    },
    methods: {
      onCancelBooking() {
        const me = this
        if (me.selected) {
          const { id, bookedDate: date } = me.selected
          me.$emit('cancel-car-booking', { id, date })
        }
      },
    },
    watch: {
      bookedCars(newProps) {
        const me = this
        if (me.selected) {
          const isExists = newProps.find(item => item === me.selected)
          if (!isExists) {
            me.selected = null
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .booked-cars-table {
    margin-top: 2rem;
  }
</style>
