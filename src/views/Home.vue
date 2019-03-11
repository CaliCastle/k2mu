<template>
  <div class="k2mu min-h-screen">
    <ComingSoon v-if="!ready" />
    <main v-else></main>
    <KnifeCursor />
    <Particles />
  </div>
</template>

<script>
import ComingSoon from '../components/ComingSoon'
import KnifeCursor from '../components/KnifeCursor'
import Particles from '../components/Particles'

export default {
  name: 'home',
  components: { Particles, ComingSoon, KnifeCursor },
  data() {
    return {
      ready: false
    }
  }
}
</script>
