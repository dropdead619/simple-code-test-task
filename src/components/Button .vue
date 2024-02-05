<template>
  <button
    class="absolute top-0 right-0 z-10 flex items-center justify-center text-white rounded-full"
    :class="buttonClass"
    @click="buttonEmits()"
  >
    {{ props.variant === 'enter' ? 'enter' : 'X' }}
  </button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { VariantType } from '../types';

const props = defineProps({
  variant: {
    type: String as PropType<VariantType>,
    required: true,
    validator(value: string) {
      return ['enter', 'delete'].includes(value);
    },
  },
});

const emit = defineEmits(['enter', 'delete']);

const buttonClass = computed(() => ({
  'w-fit h-full px-4 text-base leading-none font-bold bg-blueGradient uppercase lg:text-2xl lg:px-10': props.variant === 'enter',
  'w-[62px] h-full text-base lg:text-2xl bg-redGradient': props.variant === 'delete',
}));

function buttonEmits() {
  emit(props.variant);
}
</script>
