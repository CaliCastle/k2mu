<template>
  <div
    class="k2mu min-h-screen"
    @mousemove="trackCursor"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
  >
    <ComingSoon v-if="!ready" />
    <div v-else></div>
    <KnifeCursor ref="cursor" :cursor="cursorInfo" />
  </div>
</template>

<script>
// import paper from 'paper'
import ComingSoon from '../components/ComingSoon'
import KnifeCursor from '../components/KnifeCursor'

export default {
  name: 'home',
  components: { ComingSoon, KnifeCursor },
  data() {
    return {
      ready: false,
      cursorInfo: { x: -100, y: -100 }
    }
  },
  methods: {
    trackCursor(e) {
      this.cursorInfo = { x: e.clientX, y: e.clientY }
    },
    handleMouseDown(e) {
      this.$refs.cursor.handleMouseDown(e)
    },
    handleMouseUp(e) {
      this.$refs.cursor.handleMouseUp(e)
    }
  }
}
</script>

<style lang="stylus">
.k2mu
  --color-text: #fff
  --color-bg #1f1f1f
  --color-link #df5a3a
  background-color var(--color-bg)
  &, *
    cursor none !important
</style>
