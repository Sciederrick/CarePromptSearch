<script setup lang="ts">
  const { useEllipsize } = useMyUtils();
  interface IResult {
    title: string;
    desc: string;
    date: string;
    position: number;
  }
  const result = defineProps<IResult>();

  async function seeResultDetails() {
    await navigateTo(`/search/details/${result.position}`);
  }
</script>

<template>
  <div
    class="flex border-b border-[#D9D9D9] py-6 gap-x-3 md:max-w-xl lg:max-w-4xl lg:gap-x-6"
  >
    <input type="checkbox" class="h-[20px] w-[20px] mt-1 lg:mt-2" />
    <div class="flex flex-col gap-y-2" @click="seeResultDetails">
      <h3 class="text-xl md:text-2xl">{{ result.title }}</h3>
      <p>{{ useEllipsize(result.desc, 125) }}</p>
      <p class="text-xs text-[#838383]">
        {{ new Date(result.date).toLocaleDateString() }}
      </p>
      <div class="flex gap-4 text-[--gray600] text-sm pt-2">
        <button class="btn-hover-blue">
          <Icon name="material-symbols:share-outline" />&nbsp;Share
        </button>
        <button class="btn-hover-blue">
          <Icon name="material-symbols:bookmark-outline-rounded" />&nbsp;Save
        </button>
      </div>
    </div>
  </div>
</template>
