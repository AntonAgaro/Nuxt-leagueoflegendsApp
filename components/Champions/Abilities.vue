<script setup lang="ts">
interface AbilitiesProps {
  spells: [{
    name: string,
    image: {
      full: string
    }
  }];
}
const props = defineProps<AbilitiesProps>();
</script>

<template>
  <div>
    <div class="champion__abilities">
      <div class="spell-card card" style="width: 18rem;" v-for="spell in spells"
        :key="spell.name">
        <img width="64" height="64" class="card-img-top"
          :src="`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/${spell.image.full}`" :alt="spell.name">
        <div class="card-body">
          <h5 class="card-title">{{ spell.name }}</h5>
          <NuxtLink class="btn btn-primary" to="#">Read more</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.champion__abilities {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.spell-card img {
  width: 64px;
  height: 64px;
}
</style>