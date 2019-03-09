<template>
  <nav class="top-nav flex justify-end absolute pin-x px-8 pt-6">
    <a
      class="knifeable vvspaceship"
      href="https://vvspaceship.website"
      target="_blank"
    >
      <svg class="fill-current" viewBox="0 0 206 204">
        <g stroke="none">
          <path
            d="M146,144 L166,144 L166,164 L146,164 L146,144 Z M166,164 L186,164 L186,184 L166,184 L166,164 Z M186,184 L206,184 L206,204 L186,204 L186,184 Z"
            id="Trail"
          ></path>
          <path
            d="M126,67 L146,67 L146,20 L166,20 L166,106 L146,106 L146,125 L126,125 L126,126 L125.947931,126 L125.947931,145.766926 L106.5,145.766926 L105.99507,146 L106,164 L20,164 L20,146 L67,146 L67,126 L40,126 L40,106 L20,106 L20,86 L0,86 L0,0 L86,0 L86,20 L106,20 L106,40 L126,40 L126,67 Z M67,67 L67,87 L87,87 L87,67 L67,67 Z"
            id="Body"
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
.top-nav
  a
    color: #fff
    &, &:hover, &:focus
      outline: none

    &.knifeable
      display: flex
      width: 5rem
      height: 5rem
      margin: 0.5rem
      justify-content: center
      align-items: center

    .hamburger-icon
      width: 2.2rem
      height: 2rem

      span
        background: var(--color-text)
        height: 0.24rem
        border-radius: 4px

        &:nth-of-type(1)
          top: 0
        &:nth-of-type(2)
          top: 0.7rem
        &:nth-of-type(3)
          top: 1.4rem
    svg
      width: 2rem
      height: 2rem
</style>
