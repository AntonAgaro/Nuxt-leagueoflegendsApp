<script setup lang="ts">
  interface ModalProps {
    title: string;
    isActive: boolean
  }

  const props = defineProps<ModalProps>()
  const emit = defineEmits(['closeModal'])

//Computed, чтобы через watch работать с body
  const isActive = computed(() => props.isActive)
  watch(isActive, (newValue) => {
    if(newValue) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  })
</script>

<template>
  <div>
    <div class="overlay" v-if="isActive" @click="$emit('closeModal')">
      <div class="modal-window" @click.stop>
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button type="button" class="btn-close" @click="$emit('closeModal')"></button>
        </div>
        <div class="modal-body">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999999;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.5);
  }
  .modal-window {
    max-width: 75%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 1rem;
  }
</style>