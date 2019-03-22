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
                  ref="speed"
                  :items="speedRange"
                  :withEmpty="true"
                  :value="speed"
                  @input="onChangeMaxSpeed"
          ></base-select>
        </b-field>
        <b-field label="Пробег, тыс. км.">
          <base-select
                  ref="run"
                  :items="runRange"
                  :withEmpty="true"
                  :value="run"
                  @input="onChangeCurrentRun"
          ></base-select>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>

  import { BaseSelect } from '../BaseSelect'

  export default {
    name: 'CarsFilter',
    components: {
      BaseSelect
    },
    props: {
      speedRange: {
        type: Array,
        default: () => {
          return []
        }
      },
      runRange: {
        type: Array,
        default: () => {
          return []
        }
      },
      speed: {
        type: [Number, String],
        default: 0
      },
      run: {
        type: [Number, String],
        default: 0
      }
    },
    methods: {
      onChangeMaxSpeed(value) {
        this.$emit('change-speed', value)
      },
      onChangeCurrentRun(value) {
        this.$emit('change-run', value)
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
