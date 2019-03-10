<template>
  <div
    class="coming-soon flex flex-col w-full h-screen justify-center items-center pt-16 md:p-0"
  >
    <div class="masked">
      <h1>Knife 2<br />Meat U</h1>
    </div>
    <p class="text-grey text-5xl">
      Coming soon...
    </p>
  </div>
</template>

<script>
export default {
  name: 'coming-soon'
}
</script>

<style lang="stylus" scoped>
.coming-soon {
  .masked {
    background url('../assets/teaser.gif') no-repeat
    background-size cover
    background-position 90% 50%
    &, & * {
      color var(--color-text)
      -webkit-background-clip text
      -webkit-text-fill-color rgba(#b52325, 0.2)
    }
  }

  h1 {
    font-size: 15vmax

    @media (min-width: 992px) {
      font-size: 21vmax
      letter-spacing: 1.2rem
    }
  }
}
</style>
