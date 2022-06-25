<script setup lang="ts">
interface ItemsCardProps {
  path: string;
  title: string;
}

const props = defineProps<ItemsCardProps>()
</script>

<template>
    <article class="item-card">
      <img class="item-card__image" :src="path" :alt="title">
      <div class="item-card__title">{{ title }}</div>
    </article>
</template>


<style lang="scss" scoped>
  .item-card {
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    background-color: #fff;
    cursor: pointer;

    &:hover {
      box-shadow: 4px 4px 9px 0px rgba(50, 50, 50, 0.75);
    }

    &__image {
      max-width: 100%;
    }

    &__title {
      margin-top: 10px;
      font-weight: 600;
      text-align: center;
    }
  }
</style>