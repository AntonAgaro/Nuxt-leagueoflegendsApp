<script setup>
  const {champions, mutateChampions} = useChampions();
  if (!champions.value.length) {
    mutateChampions(useFetchChampions());
  }

</script>

<template>
  <div>
    <h1>index</h1>
    {{ champions }}
  </div>
</template>

<style scoped>

</style>