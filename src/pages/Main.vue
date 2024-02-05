<template>
  <div v-if="isView" class="flex justify-center w-full">
    <div class="absolute right-[15%] top-10 text-black text-4xl text-opacity-10 font-bold lg:text-[90px] lg:leading-[80px]">
      Fast <br>
      Service
    </div>
    <CarIcon
      class="max-w-[240px] transition-all z-30 md:max-w-[400px]"
      :class="{ 'car-animation': !route.query.search }"
    />
    <RoadIcon class="absolute bottom-0 right-0" />
    <LineIcon class="absolute -bottom-20 lg:-bottom-10 xl:bottom-10 2xl:bottom-[10%]" />
  </div>
  <div v-else class="flex flex-col w-full h-full gap-y-5">
    <DeliveryCard
      v-for="(info, index) in deliveryInfo"
      :key="index"
      :available="info.available"
      class="flex-1"
      :is-active="index === activeElementIndex"
      :price="info.price"
      :type="info.type"
      @toggle-active="toggleActiveCard(index)"
    />
  </div>
</template>

<script setup lang="ts">
import RoadIcon from 'icons/road.svg';
import LineIcon from 'icons/line.svg';
import { fetchDelivery } from '../service';
import CarIcon from '../components/CarIcon.vue';
import DeliveryCard from '../components/DeliveryCard.vue';

const route = useRoute();
const isView = ref<boolean>(true);
const deliveryInfo = ref();
const activeElementIndex = ref();

const cityName = computed(() => {
  return route.query.search as string;
});
function fetchDeliveryInfo(search: string) {
  fetchDelivery(search)
    .then((res) => {
      isView.value = false;
      deliveryInfo.value = res;
    })
    .catch((e) => {
      if (e instanceof Error)
        console.error(e.message);
    });
}
function toggleActiveCard(index: number) {
  activeElementIndex.value = index;
}

watch(() => cityName.value, (newValue, oldValue) => {
  if (newValue !== oldValue)
    fetchDeliveryInfo(newValue);
});
</script>

<style scoped>
.car-animation {
  animation: moveCar 2s linear infinite;
}

@keyframes moveCar {
    0%, 100% {
        transform: translate(0, 0);
      }
      50% {
        transform: translate(100px, 100px);
      }
}
@media (max-width: 600px) {
  @keyframes moveCar {
      0%, 100% {
          transform: translate(0, 0);
      }
      50% {
          transform: translate(40px, 40px);
  }
}
}
</style>
