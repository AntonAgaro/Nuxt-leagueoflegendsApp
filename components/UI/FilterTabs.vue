<script setup lang="ts">
  interface FilterTabsProps {
    tabs: string[];
    activeTab: string;
  }

  const props = defineProps<FilterTabsProps>();
  const emits = defineEmits(['setActiveTab'])
</script>

<template>
  <div>
    <ul class="filter-tabs">
      <li v-for="tab in tabs" :key="tab" class="filter-tabs__tab" :class="{active: activeTab === tab}"
        @click="$emit('setActiveTab', tab)">
        {{ tab }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.filter-tabs {
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  list-style: none;

  &__tab {
    background: transparent;
    color: inherit;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    border: 1px solid rgba(0, 0, 0, .125);
    cursor: pointer;

    &.active {
      background-color: #0d6efd;
      color: #fff;
    } 
  }
}
</style>