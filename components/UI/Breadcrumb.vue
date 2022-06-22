<script setup>
const route = useRoute();
const path = computed(() => ['Home', ...route.path.substring(1).split('/')]);
</script>

<template>
  <div>
    {{ path }}
    <nav aria-label="breadcrumb">
      <div class="breadcrumb">
        <NuxtLink
          v-for="link in path"
          :key="link"
          to="/" 
          class="breadcrumb-item active" 
          aria-current="page"
        >
        {{link}}
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>


<style lang="scss" scoped>

</style>