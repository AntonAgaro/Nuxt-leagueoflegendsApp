<script setup lang="ts">
  interface ChampionCardProps {
    name: string;
    title: string;
  }

  const props = defineProps<ChampionCardProps>();
</script>

<template>
  <div class="card" style="width: 18rem;">
    <img :src="`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`" class="card-img-top"
      :alt="name">
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">{{ title }}</p>
      <NuxtLink :to="`/champions/${name}/about`" class="btn btn-primary">to {{ name }} page</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>