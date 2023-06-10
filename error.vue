<script setup>
  defineProps(["error"]);
  const handleClearError = () => clearError({ redirect: "/" });
</script>

<template>
  <div
    class="flex justify-center items-center bg-[--blue100] px-2 py-16 lg:px-16 2xl:container 2xl:mx-auto"
  >
    <div class="flex flex-col items-center gap-8 md:flex-row md:gap-16">
      <div class="text-center md:text-left">
        <h2 class="heading-2">{{ error.statusCode }}</h2>
        <p class="pb-4">{{ error.message }}</p>
        <ul class="flex justify-center md:justify-start">
          <div class="pr-2 border-r border-[--gray400]">
            <li>
              <NuxtLink class="block btn btn-blue" to="/search">
                <Icon name="prime:search" />&nbsp;Search
              </NuxtLink>
            </li>
          </div>
          <div class="pl-2">
            <li>
              <button class="btn btn-blue-inverse" @click="handleClearError()">
                Back home
              </button>
            </li>
          </div>
        </ul>
      </div>
      <img
        src="~/assets/images/error.webp"
        alt=""
        class="order-first w-[160px] md:order-last md:w-[240px]"
      />
    </div>
  </div>
</template>
