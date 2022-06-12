<script setup lang="ts">
interface TabsProps {
  tabs: Array<{
    name: string,
    route: string,
  }>;
  activeTab: string;
}
  const props = defineProps<TabsProps>()
  const currentRoute = useRoute()
</script>

<template>
  <div>
    <div class="tabs list-group list-group-horizontal">
      <NuxtLink :to="route" class="tab list-group-item" v-for="{name, route} in tabs" :key="name"
        :class="{ active: route === currentRoute.path }">
          {{ name }}
      </NuxtLink>

    </div>
  </div>
</template>


<style lang="scss" scoped>
  .tabs {
    padding-top: 10px;
    list-style: none;
    display: flex;
    align-items: center;
  }

  .tab {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>