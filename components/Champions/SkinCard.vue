<script setup lang="ts">
//TODO Исправить пропсы здесь и в Skins.vue
interface SkinCardProps {
  skin: {
    name: string,
    num: string
  },
  name: string;
}
const props = defineProps<SkinCardProps>();
const isModalActive = ref(false);
const showModal = () => isModalActive.value = true;
</script>

<template>
  <div>
    <div class="skin-card card" style="width: 18rem;" @click="showModal">
      <img class="card-img-top"
        :src="`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${skin.num}.jpg`" :alt="skin.name">
      <div class="card-body">
        <h5 class="card-title">{{ skin.name }}</h5>
      </div>
    </div>
    <UIModalWindow :title="skin.name" :is-active="isModalActive" @close-modal="isModalActive = false">
      <img :src="`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${skin.num}.jpg`" :alt="skin.name">
    </UIModalWindow>
  </div>
</template>

<style lang="scss" scoped>
.skin-card {
  cursor: pointer;
}
</style>