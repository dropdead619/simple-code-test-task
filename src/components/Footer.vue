<template>
  <footer class="flex flex-wrap justify-between gap-6 px-5 mt-auto py-7 lg:px-0">
    <div class="text-sm font-normal text-opacity-50 text-mainDark">
      All rights reserved<br>
      Fast service {{ getYear }}
    </div>
    <div class="w-fit flex flex-row items-center gap-x-2.5 select-none">
      <img
        alt=""
        class="w-10"
        :src="Logo"
      >
      <img alt="" :src="Maestro">
      <img alt="" :src="Mastercard">
      <img alt="" :src="Visa">
    </div>
  </footer>
</template>

<script lang="ts" setup>
import Logo from 'images/logo.png';
import Maestro from 'images/maestro.png';
import Mastercard from 'images/mastercard.png';
import Visa from 'images/visa.png';

const getYear = computed(() => {
  return new Date().getFullYear();
});
</script>
