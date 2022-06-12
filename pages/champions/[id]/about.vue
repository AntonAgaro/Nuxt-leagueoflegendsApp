<script setup>
const championName = useRoute().params.id;
const champion = useState(`${championName}`);

</script>

<template>
  <div>
    <ChampionsAbout :name="championName" :text="champion.lore" />
  </div>
</template>