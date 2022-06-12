<script setup lang="ts">
const championName = useRoute().params.id as string;
const { data, error } = await useFetch(`http://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion/${championName}.json`);

const champion = useState(`${championName}`, () => data.value["data"][championName]);

const tabs = [
  { name: 'About', route: `/champions/${championName}/about` },
  { name: 'Skins', route: `/champions/${championName}/skins` },
  { name: 'Abilities', route: `/champions/${championName}/abilities` }
];
const activeTab = ref('About');

</script>

<template>
  <div>
    <div class="champion-wrapper" v-if="data">
      <h1>{{ data["data"][championName].name }}</h1>
        <UITabs class="champion-wrapper__tabs" :tabs="tabs" :active-tab="activeTab"/>
      <NuxtPage />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.champion-wrapper {
  padding: 10px 0;

  &__tabs {
    margin-bottom: 2rem;
  }
}
</style>