<script setup lang="ts">
//TODO Полностью описать skins как массив объектов с полями
interface SkinsProps {
  skins: [{
    name: string,
    num: string
  }];
  name: string;
}

const props = defineProps<SkinsProps>();
</script>

<template>
  <div>
    <div class="champion__skins">
      <ChampionsSkinCard v-for="skin in skins" :key="skin.name" :skin="skin" :name="name"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .champion__skins {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
</style>