<template>
  <div
    class="k2mu min-h-screen"
    @mousemove="trackCursor"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
  >
    <ComingSoon v-if="!ready" />
    <main v-else>
      <NavBar />
    </main>
    <KnifeCursor ref="cursor" :cursor="cursorInfo" />
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import ComingSoon from '../components/ComingSoon'
import KnifeCursor from '../components/KnifeCursor'

export default {
  name: 'home',
  components: { NavBar, ComingSoon, KnifeCursor },
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
  --color-text: #e1e1e1
  --color-bg #1f1f1f
  --color-link #ea8e6a
  background-color var(--color-bg)
  &, *
    cursor none !important
</style>
