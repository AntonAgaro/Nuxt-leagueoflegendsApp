<script setup lang="ts">
const {champions, mutateChampions} = useChampions();
if (!champions.value.length) {
  mutateChampions(useFetchChampions());
}

const filterTabs = ['All', 'Fighter', 'Tank', 'Mage', 'Marksman', 'Support', 'Assassin'];
const activeTab = ref('All');
const setActiveTab = (tab) => activeTab.value = tab;
const conditionForChampionFilter = computed(() => {
  if (activeTab.value === 'All') return champions.value;
  return champions.value.filter(champ => champ.tags.includes(activeTab.value))
});

const searchQuery = ref('');
const searchedChampion = computed(() => {
  return conditionForChampionFilter.value.filter(champion => champion.id.toLowerCase().includes(searchQuery.value.toLowerCase()))
})
</script>

<template>
  <div class="champions-wrapper">
    <UIInput placeholder="Search a champion..." v-model="searchQuery" />
    <UIFilterTabs 
      :tabs="filterTabs" 
      :active-tab="activeTab" 
      class="champions-filter-tabs" 
      @set-active-tab="setActiveTab"
    />
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

    .champions-filter-tabs {
      margin-top: 1rem;
    }
</style>