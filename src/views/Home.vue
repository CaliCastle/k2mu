<template>
  <div
    class="k2mu min-h-screen"
    @mousemove="trackCursor"
    @click="handleCursorClick"
  >
    <ComingSoon v-if="!ready" />
    <div v-else></div>
    <KnifeCursor :cursor="cursorInfo" />
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
      ready: true,
      cursorInfo: { x: -100, y: -100 }
    }
  },
  methods: {
    trackCursor(e) {
      this.cursorInfo = { x: e.clientX, y: e.clientY }
    },
    handleCursorClick(e) {
      // eslint-disable-next-line no-console
      console.info(e)
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
