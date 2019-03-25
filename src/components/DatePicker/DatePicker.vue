<template>
  <b-datepicker
          ref="date"
          icon="calendar-today"
          :value="value"
          v-bind="$attrs"
          v-on="$listeners"
  >
  </b-datepicker>
</template>

<script>
  export default {
    name: 'DatePicker',
    props: {
      value: {
        type: [Date]
      }
    },
    mounted() {
      const input = this.$el.querySelector('input')
      const menu = this.$el.querySelector('.dropdown-menu')
      const { bottom, left } = input.getBoundingClientRect()
      menu.style.position = 'fixed'
      menu.style.top = `${bottom}px`
      menu.style.left = `${left}px`
    }
  }
</script>

<style lang="scss" scoped>
</style>
