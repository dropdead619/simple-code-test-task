<template>
  <button
    class="w-full h-full flex flex-row self-stretch bg-white border border-[#E9F0EB] rounded-[22px] cursor-pointer overflow-hidden disabled:opacity-40 disabled:cursor-not-allowed"
    :class="{ 'shadow-input': props.isActive }"
    :disabled="!props.available"
    @click="toggleCard()"
  >
    <div class="flex flex-row w-full h-full px-8 py-6">
      <div class="flex flex-col items-start w-1/2">
        <div class="flex flex-col items-start w-full text-2xl font-bold capitalize gap-y-1 text-mainDark">
          {{ formattedType }}
          <span v-if="!props.available" class="text-xl font-normal text-start text-mainDark text-opacity-20 hyphens-auto">Not availible in that city</span>
        </div>
        <span class="mt-auto text-[#78A1BB] text-3xl font-bold">{{ props.price }}$</span>
      </div>
      <PickUpIcon v-if="props.type === 'pickup'" class=" ml-auto w-[140px]" />
      <SmallCarIcon v-else-if="props.type === 'courier'" class=" ml-auto w-[140px]" />
      <BoxIcon v-else-if="props.type === 'post'" class="ml-auto w-[140px]" />
    </div>
    <div v-if="props.isActive && props.available" class="w-[16%] min-h-[200px] h-full flex justify-center items-center bg-activeGradient">
      <svg
        fill="#fff"
        height="30"
        viewBox="0 0 20 20"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
      </svg>
    </div>
  </button>
</template>

<script setup lang="ts">
import PickUpIcon from 'icons/pickup.svg';
import SmallCarIcon from 'icons/small-car.svg';
import BoxIcon from 'icons/box.svg';

const props = defineProps<{
  type: string
  available: boolean
  price: number
  isActive: boolean
}>();

const emit = defineEmits(['toggleActive']);

const formattedType = computed(() => {
  if (props.type === 'pickup')
    return 'Pick Up';

  return props.type;
});

function toggleCard() {
  emit('toggleActive');
}
</script>
