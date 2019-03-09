<template>
  <div class="cursor-wrapper">
    <div ref="cursor-claw" class="cursor cursor--claw"></div>
    <div ref="cursor-knife" class="cursor cursor--knife"></div>
    <canvas ref="cursor-canvas" class="cursor cursor--canvas" resize></canvas>
  </div>
</template>

<script>
import { TweenMax } from 'gsap/TweenMax'

export default {
  props: {
    cursor: {
      type: Object
    }
  },
  mounted() {
    requestAnimationFrame(this.renderCursor)
    // let canvas = this.$refs['cursor-canvas']
    // paper.setup(canvas)
  },
  methods: {
    renderCursor() {
      const { x, y } = this.cursor,
        claw = this.$refs['cursor-claw'],
        knife = this.$refs['cursor-knife']

      TweenMax.set(claw, { x, y })
      TweenMax.set(knife, { x, y })

      requestAnimationFrame(this.renderCursor)
    },
    handleCursorClick(e) {
      // eslint-disable-next-line no-console
      console.info(e)
    }
  }
}
</script>

<style lang="stylus" scoped>
.cursor
  position: fixed
  left: 0
  top: 0
  pointer-events: none

.cursor--claw
  width: 3rem
  height: 3rem
  left: 1rem
  top: 1rem
  z-index: 11000
  background: url('../assets/claw@2x.png') center no-repeat
  background-size: contain

.cursor--knife
  width: 3.5rem;
  height: 3.5rem;
  left: -0.8rem;
  top: -0.6rem;
  z-index: 10000
  background: url('../assets/knife@2x.png') center no-repeat
  background-size: contain

.cursor--canvas
  width: 100vw
  height: 100vh
  z-index: 12000
</style>
