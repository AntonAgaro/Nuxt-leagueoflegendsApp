<script setup>
const props = defineProps({
  modelValue : {
    type: String,
    required: true
  }
});
const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <input 
      type="text" 
      class="form-control input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
</template>

<style lang="scss" scoped>
  .input {
    max-width: 50%;
  }
</style>