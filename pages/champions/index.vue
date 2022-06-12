<script setup lang="ts">
const {champions, mutateChampions} = useChampions();
if (!champions.value.length) {
  mutateChampions(useFetchChampions());
}
const searchQuery = ref('');

const searchedChampion = computed(() => {
  return champions.value.filter(champion => champion.id.toLowerCase().includes(searchQuery.value.toLowerCase()))
})
</script>

<template>
  <div class="champions-wrapper">
    <UIInput placeholder="Search a champion..." v-model="searchQuery" />
    <div class="champions-container">
      <ChampionsCard v-for="champion in searchedChampion" :key="champion.id" :name="champion.id"
        :title="champion.title" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
    .champions-container {
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .champions-wrapper {
      padding-top: 10px;
    }
</style>