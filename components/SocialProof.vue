<script setup lang="ts">
  const { useDynamicImages } = useMyUtils();
  const images = useDynamicImages();
  const users = ref([
    { avatar: "user-1", name: "John Doe" },
    { avatar: "user-2", name: "John Doe" },
    { avatar: "user-3", name: "John Doe" },
    { avatar: "user-2", name: "John Doe" },
    { avatar: "user-1", name: "John Doe" },
  ]);
</script>

<template>
  <dl>
    <dt class="text-xs text-[#838383] pb-4">
      Serving <span class="md:hidden">1k+</span>
      <span class="hidden md:inline">1000+</span> doctors
    </dt>
    <div class="flex">
      <dd
        v-for="(user, index) in users"
        class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5"
      >
        <img
          :src="`${images[user.avatar]}`"
          :alt="user.name"
          class="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white object-cover"
          :key="index"
          loading="lazy"
        />
      </dd>
    </div>
  </dl>
</template>
