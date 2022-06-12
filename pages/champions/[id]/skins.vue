<script setup>
const championName = useRoute().params.id;
const champion = useState(`${championName}`);
//TODO Попробовать сделать компонент keep-alive, чтобы изображения не загружались снова
</script>

<template>
  <div>
    <ChampionsSkins :skins="champion.skins" :name="championName" />
  </div>
</template>