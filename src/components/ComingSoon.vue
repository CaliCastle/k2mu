<template>
  <div
    class="coming-soon flex flex-col w-full h-screen justify-center items-center"
  >
    <div class="masked">
      <h1>Knife 2 Meat U</h1>
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
.coming-soon
  .masked
    background url('../assets/crab-jam.gif') repeat
    background-size 13.2%
    &, & *
      color var(--color-text)
      -webkit-background-clip text
      -webkit-text-fill-color rgba(#b56659, 0.5)

  h1
    font-size 15vmax
</style>
