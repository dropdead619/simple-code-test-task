<template>
  <div class="relative min-h-[100dvh] flex flex-col lg:flex-row">
    <div class="w-full overflow-y-auto bg-white h-inherit lg:w-1/2">
      <div class="max-w-[76%] h-full flex flex-col mx-auto">
        <Header />
        <MainContent />
        <Footer class="hidden lg:flex lg:mt-auto" />
      </div>
    </div>
    <div class="relative py-10 px-6 bg-secondBg rounded-t-[40px] overflow-hidden sm:rounded-l-[40px] md:px-[20%] md:py-10 lg:w-1/2 lg:fixed lg:right-0 lg:top-0 lg:bottom-0 lg:py-[70px] lg:px-[80px]">
      <RouterView />
    </div>
    <Footer class="mt-auto lg:hidden" />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import MainContent from './components/MainContent.vue';
</script>
