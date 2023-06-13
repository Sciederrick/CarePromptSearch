<template>
  <div class="w-full pt-6 flex flex-col items-center gap-y-4">
    <img src="~/assets/images/no-data.webp" width="80" height="80" />
    <h3 class="text-xl text-center text-[--gray600] max-w-md md:text-2xl">
      <slot></slot>
    </h3>
  </div>
</template>
