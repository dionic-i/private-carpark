<template>
  <div>
    <div class="columns">
      <div class="column">
        <h2 class="subtitle has-text-weight-bold">Фильтр</h2>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="Max скорость, км/ч">
          <base-select
                  id="speed"
                  ref="speed"
                  :items="speedRange"
                  :value="speed"
                  @input="onChangeMaxSpeed"
          ></base-select>
        </b-field>
        <b-field label="Пробег, тыс. км.">
          <base-select
                  id="run"
                  ref="run"
                  :items="runRange"
                  :value="run"
                  @input="onChangeCurrentRun"
          ></base-select>
        </b-field>
        <div class="buttons">
          <button class="button is-primary is-medium full-width" @click="onResetFilter">Сбросить фильтр</button>
        </div>
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
        default: null
      },
      run: {
        type: [Number, String],
        default: null
      }
    },
    methods: {
      onResetFilter() {
        this.$emit('reset-filter')
      },
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
