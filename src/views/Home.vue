<template>
  <div class="k2mu min-h-screen">
    <ComingSoon v-if="!ready" />
    <main v-else></main>
    <KnifeCursor />
  </div>
</template>

<script>
import ComingSoon from '../components/ComingSoon'
import KnifeCursor from '../components/KnifeCursor'

export default {
  name: 'home',
  components: { ComingSoon, KnifeCursor },
  data() {
    return {
      ready: false
    }
  }
}
</script>
