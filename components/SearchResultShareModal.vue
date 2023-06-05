<template>
  <div class="fixed inset-0 backdrop-blur-sm backdrop-opacity-95 bg-white/30">
    <div class="max-w-md h-72 mx-auto mt-32 bg-white rounded-sm shadow-lg p-8">
      <header class="flex justify-between items-center">
        <p>Share 2 Items via:</p>
        <button @click="useToggleShareModal">
          <Icon name="uiw:close-square-o" size="24" />
        </button>
      </header>
      <div class="flex justify-between gap-4 py-8 text-[--gray600]">
        <button class="py-2 flex flex-col items-center">
          <Icon name="material-symbols:alternate-email-rounded" size="48px" />
          <span class="text-xs">Email</span>
        </button>
        <button class="py-2 flex flex-col items-center">
          <Icon name="ri:whatsapp-line" size="48px" />
          <span class="text-xs">Whatsapp</span>
        </button>
        <button class="py-2 flex flex-col items-center">
          <Icon name="jam:linkedin-circle" size="48px" />
          <span class="text-xs">Linkedin</span>
        </button>
      </div>
      <div
        class="flex justify-between border border-[--gray400] p-2 rounded-md bg-[--blue300]"
      >
        <div class="px-3 text-xs grid place-items-center">
          https://care-prompt-search/example/3
        </div>
        <button class="btn btn-blue rounded-lg mt-2 md:mt-0">
          <Icon name="carbon:copy" size="24" class="text-white" />
        </button>
      </div>
    </div>
  </div>
</template>
