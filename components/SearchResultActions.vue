<template>
  <div class="flex flex-col md:flex-row md:gap-x-8 md:gap-y-0">
    <button class="text-[--gray600] btn-hover-blue py-2">
      <Icon name="material-symbols:bookmark-outline-rounded" size="24px" />
      &nbsp;Save
    </button>
    <button
      class="text-[--gray600] btn-hover-blue py-2"
      @click="useToggleShareModal"
    >
      <Icon name="material-symbols:share-outline" size="24px" />
      &nbsp;Share
    </button>
  </div>
</template>
