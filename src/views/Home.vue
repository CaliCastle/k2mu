<template>
  <div class="k2mu min-h-screen">
    <Hero />
    <main></main>
    <KnifeCursor />
    <Particles />
  </div>
</template>

<script>
import Hero from '../components/Hero'
import KnifeCursor from '../components/KnifeCursor'
import Particles from '../components/Particles'

export default {
  name: 'home',
  components: { Particles, Hero, KnifeCursor },
  data() {
    return {
      ready: false
    }
  }
}
</script>
