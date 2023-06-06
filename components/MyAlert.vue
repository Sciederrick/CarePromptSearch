<script setup lang="ts">
  interface IAlert {
    type: "info" | "error" | "warning" | "success" | undefined;
    msg: string;
  }
  defineProps<IAlert>();
</script>

<template>
  <div
    v-if="type == 'info'"
    class="w-full flex gap-x-4 text-xs items-center px-4 py-2 my-4 bg-[--bgAlertInfo] md:text-sm"
  >
    <Icon name="icon-park-outline:info" size="24px" class="bg-[--alertInfo]" />
    <p>{{ $props.msg }}</p>
  </div>
  <div
    v-else-if="type == 'success'"
    class="w-full flex gap-x-4 text-xs items-center px-4 py-2 my-4 bg-[--bgAlertSuccess] md:text-sm"
  >
    <Icon
      name="mdi:success-circle-outline"
      size="24px"
      class="bg-[--alertSuccess]"
    />
    <p>{{ $props.msg }}</p>
  </div>
  <div
    v-else-if="type == 'warning'"
    class="w-full flex gap-x-4 text-xs items-center px-4 py-2 my-4 bg-[--bgAlertWarning] md:text-sm"
  >
    <Icon name="jam:alert" size="24px" class="bg-[--alertWarning]" />
    <p>{{ $props.msg }}</p>
  </div>
  <div
    v-else-if="type == 'error'"
    class="w-full flex gap-x-4 text-xs items-center px-4 py-2 my-4 bg-[--bgAlertError] md:text-sm"
  >
    <Icon name="mi:circle-error" size="24px" class="bg-[--alertError]" />
    <p>{{ $props.msg }}</p>
  </div>
</template>
