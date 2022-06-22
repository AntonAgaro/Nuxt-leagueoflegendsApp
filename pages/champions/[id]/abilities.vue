<script setup>
const championName = useRoute().params.id;
const champion = useState(`${championName}`);
const abilities = [champion.value.passive, ...champion.value.spells];

</script>
<template>
  <div>
    <ChampionsAbilities :spells="abilities" />
  </div>
</template>