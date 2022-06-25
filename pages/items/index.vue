<script setup>
const {items, mutateItems} = useItems();
if (!items.value.length) {
  mutateItems(useFetchItems())
}
</script>

<template>
    <div class="items-container">
      <ItemsCard class="items-container__item" v-for="item in items" :key="item.name" :title="item.name"
        :path="`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/item/${item.image.full}`" />
    </div>
</template>

<style lang="scss" scoped>
.items-container {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  &__item {
    flex-basis: 10%;
    min-height: 200px;
  }
}
</style>