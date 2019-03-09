<template>
  <div id="k2mu">
    <nav-bar />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import AppFooter from './components/AppFooter'
import NavBar from './components/NavBar'

export default {
  components: { NavBar, AppFooter }
}
</script>

<style lang="stylus">
body
  --color-text: #e1e1e1
  --color-bg #1f1f1f
  --color-link #ea8e6a
  background-color var(--color-bg)

#k2mu
  font-family 'Creepster', -apple-system, cursive
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color var(--color-text)

  &, *
    cursor none !important

.vvspaceship-text
  font-family 'Roboto', -apple-system, sans-serif
</style>
