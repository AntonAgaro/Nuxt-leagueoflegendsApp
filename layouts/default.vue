<script setup>
const { champions, mutateChampions } = useChampions();
if (!champions.value.length) {
  mutateChampions(useFetchChampions());
}
</script>
<template>
    <div class="wrapper">
      <Nav />
      <div class="content">
        <div class="container">
          <slot />
        </div>
      </div>
      <Footer />
    </div>
</template>

<style lang="scss">
@import "~/assets/app.scss"
</style>