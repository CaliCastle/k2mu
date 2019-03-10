<template>
  <nav class="top-nav flex justify-end fixed pin-x px-8 pt-6">
    <a
      class="knifeable download has-title"
      href="https://itch.io/profile/vvspaceship"
      target="_blank"
      name="Download Game"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Rounded"
        class="fill-current"
        viewBox="0 0 24 24"
      >
        <path
          d="M18.705,7.004C17.839,4.056,15.149,2,12,2C9.709,2,7.561,3.138,6.258,5.004C2.479,5.143-0.486,8.523,0.066,12.44  C0.523,15.677,3.445,18,6.714,18L9,18v-5c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v5l3.266,0c2.842,0,5.388-2.054,5.7-4.878  C24.323,9.882,21.846,7.119,18.705,7.004z"
          id="cloud"
        ></path>
        <g>
          <path
            d="M12,12L12,12c0.552,0,1,0.448,1,1v7.001h2.087h0.078c0.372,0,0.558,0.449,0.295,0.712l-3.165,3.165   c-0.163,0.163-0.427,0.163-0.59,0L8.54,20.713c-0.263-0.263-0.077-0.712,0.295-0.712h0.078H11V13C11,12.448,11.448,12,12,12z"
            id="arrow"
          ></path>
        </g>
      </svg>
    </a>
    <a
      class="knifeable vvspaceship has-title"
      href="https://vvspaceship.website"
      target="_blank"
      name="very very spaceship"
    >
      <svg class="fill-current" viewBox="0 0 206 204" id="vvspaceship">
        <g stroke="none">
          <path
            d="M146,144 L166,144 L166,164 L146,164 L146,144 Z M166,164 L186,164 L186,184 L166,184 L166,164 Z M186,184 L206,184 L206,204 L186,204 L186,184 Z"
            id="trail"
          ></path>
          <path
            d="M126,67 L146,67 L146,20 L166,20 L166,106 L146,106 L146,125 L126,125 L126,126 L125.947931,126 L125.947931,145.766926 L106.5,145.766926 L105.99507,146 L106,164 L20,164 L20,146 L67,146 L67,126 L40,126 L40,106 L20,106 L20,86 L0,86 L0,0 L86,0 L86,20 L106,20 L106,40 L126,40 L126,67 Z M67,67 L67,87 L87,87 L87,67 L67,67 Z"
            id="body"
          ></path>
        </g>
      </svg>
    </a>
    <a class="knifeable hamburger" href="#" @click.prevent="toggleHamburger">
      <span class="hamburger-icon block relative">
        <span v-for="n in 3" :key="n" class="block absolute w-full"></span>
      </span>
    </a>
    <svg
      class="shape-overlays"
      :class="{ 'is-opened': isHamburgerOpen }"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      ref="shape-overlays"
    >
      <path class="shape-overlays__path"></path>
      <path class="shape-overlays__path"></path>
      <path class="shape-overlays__path"></path>
    </svg>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar',
  data() {
    return {
      isHamburgerOpen: false,
      shapeOverlays: {
        el: null,
        isAnimating: false,
        paths: [],
        numPoints: 18,
        duration: 600,
        delayPointsArray: [],
        delayPointsMax: 300,
        delayPerPath: 80,
        timeStart: Date.now()
      },
      // these easing functions are based on the code of glsl-easing module.
      // https://github.com/glslify/glsl-easings
      ease: {
        exponentialIn: t => {
          return t === 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0))
        },
        exponentialOut: t => {
          return t === 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t)
        },
        exponentialInOut: t => {
          return t === 0.0 || t === 1.0
            ? t
            : t < 0.5
            ? +0.5 * Math.pow(2.0, 20.0 * t - 10.0)
            : -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0
        },
        sineOut: t => {
          const HALF_PI = 1.5707963267948966
          return Math.sin(t * HALF_PI)
        },
        circularInOut: t => {
          return t < 0.5
            ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t))
            : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0)
        },
        cubicIn: t => {
          return t * t * t
        },
        cubicOut: t => {
          const f = t - 1.0
          return f * f * f + 1.0
        },
        cubicInOut: t => {
          return t < 0.5
            ? 4.0 * t * t * t
            : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0
        },
        quadraticOut: t => {
          return -t * (t - 2.0)
        },
        quarticOut: t => {
          return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0
        }
      }
    }
  },
  mounted() {
    this.shapeOverlays.el = this.$refs['shape-overlays']
    this.shapeOverlays.paths = this.shapeOverlays.el.querySelectorAll('path')
  },
  methods: {
    toggleHamburger() {
      if (this.shapeOverlays.isAnimating) return
      this.shapeOverlays.isAnimating = true
      this.toggleShapeOverlays()
    },
    toggleShapeOverlays() {
      const range = 4 * Math.random() + 6
      const { numPoints, delayPointsArray, delayPointsMax } = this.shapeOverlays

      for (let i = 0; i < numPoints; i++) {
        const radian = (i / (numPoints - 1)) * Math.PI
        delayPointsArray[i] =
          ((Math.sin(-radian) + Math.sin(-radian * range) + 2) / 4) *
          delayPointsMax
      }

      this.isHamburgerOpen = !this.isHamburgerOpen
      if (this.isHamburgerOpen) {
        this.$root.$emit('nav-toggled', true)
      }

      this.shapeOverlays.timeStart = Date.now()
      this.renderLoop()
    },
    updateShapePath(time) {
      const points = [],
        { numPoints, delayPointsArray, duration } = this.shapeOverlays

      for (let i = 0; i < numPoints + 1; i++) {
        points[i] =
          this.ease.cubicInOut(
            Math.min(Math.max(time - delayPointsArray[i], 0) / duration, 1)
          ) * 100
      }

      let str = ''
      str += this.isHamburgerOpen
        ? `M 0 0 V ${points[0]} `
        : `M 0 ${points[0]} `
      for (let i = 0; i < numPoints - 1; i++) {
        const p = ((i + 1) / (numPoints - 1)) * 100
        const cp = p - ((1 / (numPoints - 1)) * 100) / 2
        str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${
          points[i + 1]
        } `
      }
      str += this.isHamburgerOpen ? 'V 0 H 0' : 'V 100 H 0'

      return str
    },
    renderShapes() {
      const { paths, timeStart, delayPerPath } = this.shapeOverlays

      if (this.isHamburgerOpen) {
        for (let i = 0; i < paths.length; i++) {
          paths[i].setAttribute(
            'd',
            this.updateShapePath(Date.now() - (timeStart + delayPerPath * i))
          )
        }
      } else {
        for (let i = 0; i < paths.length; i++) {
          paths[i].setAttribute(
            'd',
            this.updateShapePath(
              Date.now() - (timeStart + delayPerPath * (paths.length - i - 1))
            )
          )
        }
      }
    },
    renderLoop() {
      this.renderShapes()

      const {
        timeStart,
        duration,
        delayPerPath,
        paths,
        delayPointsMax
      } = this.shapeOverlays

      if (
        Date.now() - timeStart <
        duration + delayPerPath * (paths.length - 1) + delayPointsMax
      ) {
        requestAnimationFrame(() => {
          this.renderLoop()
        })
      } else {
        if (this.isHamburgerOpen === false) {
          this.$root.$emit('nav-toggled', false)
        }

        this.shapeOverlays.isAnimating = false
      }
    }
  }
}
</script>

<style lang="stylus">
.top-nav {
    z-index: 15000

    a {
        color: #fff

        &, &:hover, &:focus {
            outline: none
        }

        &.knifeable {
            display: flex
            width: 5rem
            height: 5rem
            margin: 0.5rem
            justify-content: center
            align-items: center
            z-index: 5000
        }

        .hamburger-icon {
            width: 2.3rem
            height: 2rem

            span {
                background: var(--color-text)
                height: 0.2rem
                border-radius: 4px
                transition: all .15s ease

                &:nth-of-type(1) {
                    top: .25rem
                }

                &:nth-of-type(2) {
                    top: 0.8rem
                }

                &:nth-of-type(3) {
                    top: 1.45rem
                }
            }
        }

        svg {
            width: 1.8rem
            height: 1.8rem

            &, & * {
                transition: all .18s ease
            }
        }

        &:hover {
            .hamburger-icon {
                span {
                    background: var(--color-link)
                }
            }

            svg {
                fill: var(--color-link)
            }
        }
    }

    .download {
        svg {
            overflow visible
        }

        &:hover {
            svg {
                #cloud {
                    transform translateY(-0.05rem)
                }

                #arrow {
                    transform translateY(0.085rem)
                }
            }
        }
    }

    .has-title {
        position: relative

        &:before {
            content: attr(name)
            color: currentColor
            font-weight bold
            font-size 0.9rem
            text-align: center
            text-transform: lowercase
            font-family 'Roboto', -apple-system, sans-serif
            display: inline
            position: absolute
            opacity: 0
            transition: all 0.135s ease
            bottom: 0
            transform: translateY(50%)
        }

        &:hover {
            &:before {
                opacity: 1
                transform: translateY(115%)
            }
        }
    }

    .vvspaceship {
        svg {
            overflow: visible
            perspective 800px

            #body {
                transform-origin 50% 50%
                transform-style preserve-3d
            }
        }

        &:hover {
            svg {
                #trail {
                    animation thrusting 0.86s linear infinite
                }

                #body {
                    animation rotation 1.65s steps(6) infinite
                }
            }
        }
    }
}

.shape-overlays {
  width: 100vw
  height: 100vh
  position: fixed
  pointer-events none
  top: 0
  left: 0
  z-index: 4999

  path {
    &:nth-of-type(1) {
      fill: #c4dbea
    }

    &:nth-of-type(2) {
      fill: #4c688b
    }

    &:nth-of-type(3) {
      fill: #2e496a
    }
  }

  &.is-opened {
    pointer-events auto
  }
}

@keyframes rotation {
    0% {
        transform: translate3d(0, 0, 0)
    }

    25% {
        transform: translate3d(-4%, 3%, 0)
    }

    75% {
        transform: translate3d(5%, -3%, 0)
    }

    100% {
        transform: translate3d(0, 0, 0)
    }
}

@keyframes thrusting {
    0% {
        transform translate3d(0, 0, 0)
    }

    50% {
        transform translate3d(4.5%, 4.5%, 0)
    }

    100% {
        transform translate3d(0, 0, 0)
    }
}
</style>
