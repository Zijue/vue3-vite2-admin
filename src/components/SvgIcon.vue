<template>
  <svg :class="svgClass" aria-hidden="true" v-bind="$attrs">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"

export default defineComponent({
  name: "SvgIcon",
  props: {
    prefix: {
      type: String,
      default: "icon"
    },
    iconName: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "#333"
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.iconName}`)
    // 添加类名 props.className外部传入自定义类名
    const svgClass = computed(() =>
      props.className ? `svg-icon ${props.className}` : "svg-icon"
    )
    return { symbolId, svgClass }
  }
})
</script>
<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  position: relative;
  fill: currentColor;
  vertical-align: -0.15em;
  overflow: hidden;
}
</style>
