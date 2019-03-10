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
    <a
      class="knifeable hamburger"
      href="#"
      @click.prevent="hamburgerOpen = !hamburgerOpen"
    >
      <span class="hamburger-icon block relative">
        <span v-for="n in 3" :key="n" class="block absolute w-full"></span>
      </span>
    </a>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar',
  data() {
    return {
      hamburgerOpen: false
    }
  },
  methods: {}
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
