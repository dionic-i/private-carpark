<template>
  <b-select
          ref="selectElement"
          v-bind="selectOptions"
          v-on="$listeners"
          :value="value"
  >
    <option
            v-for="item in selectItems"
            :key="item[idField]"
            :label="item[nameField]"
            :value="item[idField]"
    >
      {{ item[nameField] }}
    </option>
  </b-select>
</template>

<script>

  export default {
    name: 'BaseSelect',
    props: {
      idField: {
        type: String,
        default: 'id'
      },
      nameField: {
        type: String,
        default: 'name'
      },
      items: {
        type: Array,
        required: true
      },
      value: {
        type: [Number, String],
      },
      withEmpty: {
        type: Boolean,
        default: false
      },
      options: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    data() {
      return {
        selectItems: this.getComboItems()
      }
    },
    computed: {
      selectOptions() {
        const defOptions = {
          size: 'is-medium',
          expanded: true
        }
        return { ...defOptions, ...this.options }
      },
    },
    methods: {
      selectItem(value) {
        this.$emit('select-item', value)
      },
      focus() {
        if (this.$refs.selectElement && this.$refs.selectElement.focus) {
          this.$refs.selectElement.focus()
        }
      },
      getComboItems() {
        const selectItems = [...this.items]
        if (this.withEmpty) {
          selectItems.unshift({
            [this.idField]: 0,
            [this.nameField]: '',
          })
        }
        return selectItems
      }
    },
    watch: {
      items: function () {
        this.selectItems = this.getComboItems()
      }
    }
  }
</script>
