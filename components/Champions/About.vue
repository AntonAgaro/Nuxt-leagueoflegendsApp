<script setup lang="ts">
interface AboutProps {
  name: string,
  text: string
}
const props = defineProps<AboutProps>();
</script>

<template>
  <div>
    <div class="champion">
      <img class="champion-img"
        :src="`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`" :alt="name">
      <div class="champion-text">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.champion {
  display: flex;
  justify-content: space-between;
}  
.champion-img {
  width: 49%;
}

.champion-text {
  width: 49%;
}
</style>