<template>
  <main class="flex flex-col py-[40px]">
    <div class="flex flex-col gap-y-4">
      <h1 class="text-4xl font-bold text-mainDark lg:text-5xl">
        Delivery cost
      </h1>
      <span class="text-base font-normal select-none text-lightGray hyphens-auto lg:text-2xl">
        Enter name of the city to count delivery cost
      </span>
    </div>

    <div class="w-full pt-10 lg:pt-20">
      <SearchDropdown />
    </div>

    <div class="flex flex-col pt-10 gap-y-5 sm:gap-y-10 lg:pt-20">
      <h3 class="text-base font-normal select-none text-mainDark lg:text-2xl">
        Most popular cities
      </h3>
      <div class="grid grid-cols-2 gap-x-3 lg:gap-x-20">
        <div
          v-for="(city, idx) in popularCities"
          :key="idx"
          class="border-[#E9F0EB] border-b"
        >
          <span class="inline-block px-4 py-4 text-sm text-lightGray lg:px-5 lg:text-xl">{{ city }}</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script  setup lang="ts">
import { popularCities } from '../constants';
import SearchDropdown from './SearchDropdown.vue';
</script>
