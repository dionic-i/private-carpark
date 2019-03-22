<template>
  <div class="columns is-gapless has-background-light">
    <div class="column is-6">
      <h1 class="title">{{ title }}</h1>
    </div>
    <div class="column is-6 has-text-right">
      <h1 class="title">
        {{ date }}
        Машина: {{ carName }}
      </h1>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    name: 'AppHeader',
    data() {
      return {
        date: moment().format('YYYY-MM-DD')
      }
    },
    props: {
      title: String,
      carName: {
        type: String,
        default: 'нет'
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
