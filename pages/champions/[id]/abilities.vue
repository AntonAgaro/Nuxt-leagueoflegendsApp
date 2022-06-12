<script setup>
const championName = useRoute().params.id;
const champion = useState(`${championName}`);

</script>
<template>
  <div>
    <ChampionsAbilities :spells="champion.spells" />
  </div>
</template>