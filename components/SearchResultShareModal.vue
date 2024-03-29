<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useToggleStore } from "~/store/toggle";
  import { useProtocolStore } from "~/store/protocol";

  const { toggleShareModal } = useToggleStore();
  const protocolStore = useProtocolStore();
  const { selectedProtocols, oneLink } = storeToRefs(protocolStore);
  const { resetOneLink } = protocolStore;
  const { baseURL } = useRuntimeConfig().public;

  let linksToShare = computed(() => {
    let links: string;
    if (oneLink.value != null) {
      links = baseURL.concat(`/search/${oneLink.value}`);
    } else {
      links = selectedProtocols.value
        .map((id) => {
          return baseURL.concat(`/search/${id}`);
        })
        .join(" ");
    }
    return links;
  });

  let isCopiedToClipboard = ref(false);

  const numLinks = computed(() => {
    return oneLink.value != null ? 1 : selectedProtocols.value.length;
  });

  const thisOrThese = computed(() => {
    return numLinks.value > 1 ? "these" : "this";
  });

  function copyToClipBoard() {
    useMyUtils().copyTextToClipboard(linksToShare.value);
    isCopiedToClipboard.value = true;
    setTimeout(() => (isCopiedToClipboard.value = false), 3000);
  }

  function closeModal() {
    if (oneLink.value) resetOneLink();
    toggleShareModal();
  }
</script>

<template>
  <div class="popup-background z-20">
    <div
      class="max-w-md h-72 mx-4 mt-32 bg-white rounded-sm shadow-lg p-8 md:mx-auto"
    >
      <header class="flex justify-between items-center">
        <p>Share {{ numLinks }} protocol{{ numLinks > 1 ? "s" : "" }} via:</p>
        <button @click="closeModal">
          <Icon name="uiw:close-square-o" size="24" />
        </button>
      </header>
      <div class="flex justify-center gap-x-16 py-8 text-[--gray600]">
        <NuxtLink
          :to="`mailto:?subject=I wanted you to see ${thisOrThese} protocols &amp;body=${linksToShare}`"
          target="_blank"
          title="Share by Email"
          class="flex flex-col items-center btn btn-hover-blue"
        >
          <Icon name="material-symbols:alternate-email-rounded" size="48px" />
          <span class="text-xs">Email</span>
        </NuxtLink>
        <NuxtLink
          :to="`https://api.whatsapp.com/send?text=${linksToShare}/`"
          target="_blank"
          data-action="share/whatsapp/share"
          title="Share by Whatsapp"
          class="flex flex-col items-center btn btn-hover-blue"
        >
          <Icon name="ri:whatsapp-line" size="48px" />
          <span class="text-xs">Whatsapp</span>
        </NuxtLink>
      </div>
      <div
        :class="[
          isCopiedToClipboard
            ? 'bg-[--alertSuccess] text-white'
            : 'bg-[--blue300]',
        ]"
        class="flex justify-between border border-[--gray400] p-2 rounded-md"
      >
        <div
          :class="[isCopiedToClipboard ? 'text-base' : 'text-xs']"
          class="px-3 grid place-items-center"
        >
          <span v-if="!isCopiedToClipboard">{{
            useMyUtils().useEllipsize(linksToShare, 45)
          }}</span>
          <span v-else
            >Link{{ numLinks > 1 ? "s" : "" }} copied to clipboard!</span
          >
        </div>
        <button
          :class="[isCopiedToClipboard ? '' : 'btn-blue']"
          class="btn rounded-lg mt-2 md:mt-0"
          @click="copyToClipBoard"
        >
          <Icon name="carbon:copy" size="24" class="text-white" />
        </button>
      </div>
    </div>
  </div>
</template>
