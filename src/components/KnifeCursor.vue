<template>
  <div class="cursor-wrapper" :class="{ stab: isMouseDown }">
    <div
      ref="cursor-claw"
      class="cursor cursor--claw"
      :style="{ zIndex: cursorMeta.z }"
    ></div>
    <div
      ref="cursor-knife"
      class="cursor cursor--knife"
      :style="{ zIndex: cursorMeta.z - 10 }"
    ></div>
    <canvas
      ref="cursor-canvas"
      class="cursor cursor--canvas"
      :style="{ zIndex: cursorMeta.z - 20 }"
      resize
    ></canvas>
  </div>
</template>

<script>
import paper from 'paper'
import SimplexNoise from 'simplex-noise'
import { TweenMax } from 'gsap/TweenMax'

export default {
  data() {
    return {
      cursor: { x: -100, y: -100 },
      isMouseDown: false,
      cursorMeta: {
        lastX: 0,
        lastY: 0,
        isStuck: false,
        showCursor: false,
        group: {},
        stuckX: {},
        stuckY: {},
        fillOuterCursor: {},
        z: 16000
      }
    }
  },
  mounted() {
    this.setupCursorTracking()
    this.setupKnifeables()
    this.setupCanvas()

    this.$root.$on('nav-toggled', this.navToggled)

    requestAnimationFrame(this.renderCursor)
  },
  methods: {
    navToggled(isOpened) {
      this.cursorMeta.z = isOpened === true ? 17000 : 16000
    },
    setupCursorTracking() {
      document.addEventListener('mousemove', e => {
        this.cursor = { x: e.clientX, y: e.clientY }
      })
    },
    setupKnifeables() {
      for (const knifeable of document.querySelectorAll('.knifeable')) {
        knifeable.addEventListener('mouseenter', this.handleMouseEnter)
        knifeable.addEventListener('mouseleave', this.handleMouseLeave)
      }
    },
    setupCanvas() {
      const canvas = this.$refs['cursor-canvas'],
        shapeBounds = {
          width: 75,
          height: 75
        }
      paper.setup(canvas)

      const strokeColor = 'rgba(225, 15, 25, 0.5)',
        stuckStrokeColor = 'rgba(225, 15, 25, 0.75)',
        strokeWidth = 4,
        segments = 30
      const radius = 12,
        noiseScale = 180,
        noiseRange = 6

      let isNoisy = false

      const polygon = new paper.Path.RegularPolygon(
        new paper.Point(0, 0),
        segments,
        radius
      )
      polygon.strokeColor = strokeColor
      polygon.strokeWidth = strokeWidth
      polygon.smooth()

      this.cursorMeta.group = new paper.Group([polygon])
      this.cursorMeta.group.applyMatrix = false

      const noise = polygon.segments.map(() => new SimplexNoise())
      let bigCoordinates = []

      const lerp = (a, b, n) => {
        return (1 - n) * a + n * b
      }

      const map = (value, in_min, in_max, out_min, out_max) => {
        return (
          ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
        )
      }

      // the draw loop of Paper.js
      // (60fps with requestAnimationFrame under the hood)
      paper.view.onFrame = event => {
        // using linear interpolation, the circle will move 0.2 (20%)
        // of the distance between its current position and the mouse
        // coordinates per Frame
        const { lastX, lastY, group, isStuck, stuckX, stuckY } = this.cursorMeta
        const { x, y } = this.cursor

        if (!isStuck) {
          // move shape around normally
          this.cursorMeta.lastX = lerp(lastX, x, 0.35)
          this.cursorMeta.lastY = lerp(lastY, y, 0.35)
          group.position = new paper.Point(lastX, lastY)
          polygon.strokeColor = strokeColor
        } else {
          this.cursorMeta.lastX = lerp(lastX, stuckX, 0.35)
          this.cursorMeta.lastY = lerp(lastY, stuckY, 0.35)
          group.position = new paper.Point(lastX, lastY)
          polygon.strokeColor = stuckStrokeColor
        }

        if (isStuck && polygon.bounds.width < shapeBounds.width) {
          polygon.scale(1.15)
        } else if (!isStuck && polygon.bounds.width > 30) {
          if (isNoisy) {
            polygon.segments.forEach((segment, i) => {
              segment.point.set(bigCoordinates[i][0], bigCoordinates[i][1])
            })
            isNoisy = false
            bigCoordinates = []
          }

          const scaleDown = 0.85
          polygon.scale(scaleDown)
        }

        if (isStuck && polygon.bounds.width >= shapeBounds.width) {
          isNoisy = true
          if (bigCoordinates.length === 0) {
            polygon.segments.forEach((segment, i) => {
              bigCoordinates[i] = [segment.point.x, segment.point.y]
            })
          }

          polygon.segments.forEach((segment, i) => {
            const noiseX = noise[i].noise2D(event.count / noiseScale, 0),
              noiseY = noise[i].noise2D(event.count / noiseScale, 1)

            const distortionX = map(noiseX, -1, 1, -noiseRange, noiseRange),
              distortionY = map(noiseY, -1, 1, -noiseRange, noiseRange)

            const newX = bigCoordinates[i][0] + distortionX,
              newY = bigCoordinates[i][1] + distortionY

            segment.point.set(newX, newY)
          })
        }

        polygon.smooth()
      }
    },
    handleMouseDown() {
      this.isMouseDown = true
    },
    handleMouseUp() {
      this.isMouseDown = false
    },
    handleMouseEnter(event) {
      const { currentTarget } = event
      const bounds = currentTarget.getBoundingClientRect()

      this.cursorMeta.stuckX = Math.round(bounds.left + bounds.width / 2)
      this.cursorMeta.stuckY = Math.round(bounds.top + bounds.height / 2)
      this.cursorMeta.isStuck = true
    },
    handleMouseLeave() {
      this.cursorMeta.isStuck = false
    },
    renderCursor() {
      const { x, y } = this.cursor,
        claw = this.$refs['cursor-claw'],
        knife = this.$refs['cursor-knife']

      TweenMax.set(claw, { x, y })
      TweenMax.set(knife, { x, y })

      requestAnimationFrame(this.renderCursor)
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
  left: 1.32rem
  top: 1.3rem
  background: url('../assets/claw@2x.png') center no-repeat
  background-size: contain

.cursor--knife
  width: 3.5rem;
  height: 3.5rem;
  left: -0.5rem;
  top: -0.25rem;
  background: url('../assets/knife@2x.png') center no-repeat
  background-size: contain

.cursor--canvas
  width: 100vw
  height: 100vh
</style>
