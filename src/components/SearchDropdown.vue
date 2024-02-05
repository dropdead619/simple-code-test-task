<template>
  <div class="bg-white" :class="{ 'pb-4 rounded-[30px] border-l border-r border-b shadow-input': listVisible }">
    <div class="relative w-full h-full">
      <input
        id="searchInput"
        v-model="inputData"
        autocomplete=""
        class="w-full py-4 px-9 text-mainDark text-2xl leading-none font-bold border border-[#E9F0EB] outline-none rounded-full placeholder:text-lg placeholder:text-[#D9E4DC] placeholder:font-normal caret-blue-500"
        :class="{
          'pr-[34%] border-none': listVisible,
          'border-[red]': buttonType === 'delete',
        }"
        placeholder="Enter name of the city"
        type="text"
        @focus="showAllCities = true"
        @input="handleInput"
      >
      <Button
        v-if="inputData"
        :variant="buttonType"
        @delete="inputData = ''"
        @enter="sendQuery()"
      />
    </div>
    <Transition>
      <ul v-if="listVisible" class="max-h-[400px] h-full w-full px-4 z-30 overflow-y-auto">
        <li
          v-for="(city, idx) in (showAllCities ? popularCities : matchingCities)"
          :key="idx"
          class="flex flex-row items-center justify-between px-5 py-2.5 text-mainDark text-xl border-[#E9F0EB] border-b cursor-pointer last-of-type:border-none hover:bg-black hover:bg-opacity-10"
          @click="inputData = city"
        >
          {{ city }}
          <span
            v-if="availableCities.includes(city)"
            class="text-base text-lightGray"
          >
            availible
          </span>
        </li>
      </ul>
    </Transition>
  </div>
  <span class="inline-block py-1 text-[red]">{{ error ? error : '' }}</span>
</template>

<script setup lang="ts">
import { availableCities, popularCities } from '../constants';
import type { VariantType } from '../types';
import Button from './Button .vue';

const error = ref<string>('');
const inputData = ref<string>('');
const matchingCities = ref<string[]>([]);
const buttonType = ref<VariantType>('enter');
const showAllCities = ref<boolean>(false);
const router = useRouter();

const listVisible = computed(() => {
  return showAllCities.value || (inputData.value.length > 0 && matchingCities.value.length > 0);
});

function handleInput() {
  error.value = '';
  inputData.value.length ? showAllCities.value = false : showAllCities.value = true;
}

function closeDropdown(e: MouseEvent) {
  if (!document?.getElementById('searchInput')?.contains(e.target as Node))
    showAllCities.value = false;
}

function sendQuery() {
  const formattedData = inputData.value.trim().replace(/ /g, '').toLowerCase();

  if (availableCities.includes(inputData.value)) {
    error.value = '';

    router.push({
      name: '',
      query: { search: formattedData },
    });
  } else {
    error.value = 'We didn’t found such city. Please check spelling';
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdown);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', closeDropdown);
});

watch(() => inputData.value, (newValue) => {
  matchingCities.value = popularCities.filter(city => city.toLowerCase().includes(newValue.toLowerCase()));
  buttonType.value = matchingCities.value.length > 0 ? 'enter' : 'delete';
});

watch(inputData, (newInputData) => {
  if (!newInputData)
    router.replace({ query: {} });
});
</script>
