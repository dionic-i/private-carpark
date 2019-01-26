<template>
  <div>
    <div class="columns">
      <div class="column">
        <h2 class="subtitle">Фильтр</h2>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="Max скорость, км/ч">
          <base-select
                  :items="speed"
                  :withEmpty="true"
                  :value="speedValue"
                  @select-item="onChangeMaxSpeed"
          ></base-select>
        </b-field>
        <b-field label="Пробег, тыс. км.">
          <base-select
                  :items="run"
                  :withEmpty="true"
                  @select-item="onChangeCurrentRun"
          ></base-select>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>

  import BaseSelect from '../BaseSelect/BaseSelect.vue'

  export default {
    name: 'CarsFilter',
    components: {
      BaseSelect
    },
    data() {

      const MAX_SPEED_RANGE = [
        { id: 1, name: '50-100' },
        { id: 2, name: '100-150' },
        { id: 3, name: '150-200' },
        { id: 4, name: '>200' },
      ]

      const RUN = [
        { id: 1, name: '0-20' },
        { id: 2, name: '20-40' },
        { id: 3, name: '40-60' },
        { id: 4, name: '60-100' },
        { id: 5, name: '>100' },
      ]

      return {
        speed: MAX_SPEED_RANGE,
        run: RUN,
        speedValue: 0,
        runValue: 0
      }
    },
    methods: {
      onChangeMaxSpeed(value) {
        this.speedValue = value
      },
      onChangeCurrentRun(value) {
        this.runValue = value
      }
    },
  }
</script>

<style lang="scss" scoped>
</style>
