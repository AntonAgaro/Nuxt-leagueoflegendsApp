<script setup>
 const {data, error} = useFetch('http://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/item.json')
</script>

<template>
  <div>
{{data['data']}}
  </div>
</template>

<style scoped>

</style>