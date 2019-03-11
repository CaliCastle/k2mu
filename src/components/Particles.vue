<template>
  <div id="particles" class="fixed pin-t pin-l w-screen h-screen"></div>
</template>

<script>
import particles from '../assets/particles.json'

export default {
  name: 'particles',
  mounted() {
    window.particlesJS('particles', particles)
  }
}
</script>
