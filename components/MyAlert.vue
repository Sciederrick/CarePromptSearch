<script setup lang="ts">
  interface IAlert {
    type: "info" | "error" | "warning" | "success" | undefined;
    msg: string;
  }
  defineProps<IAlert>();
</script>

<template>
  <div v-if="type == 'info'" class="alert bg-[--bgAlertInfo]">
    <Icon
      name="icon-park-outline:info"
      size="24px"
      class="text-[--alertInfo]"
    />
    <p>{{ $props.msg }}</p>
  </div>
  <div v-else-if="type == 'success'" class="alert bg-[--bgAlertSuccess]">
    <Icon
      name="mdi:success-circle-outline"
      size="24px"
      class="text-[--alertSuccess]"
    />
    <p>{{ $props.msg }}</p>
  </div>
  <div v-else-if="type == 'warning'" class="alert bg-[--bgAlertWarning]">
    <Icon name="jam:alert" size="24px" class="text-[--alertWarning]" />
    <p>{{ $props.msg }}</p>
  </div>
  <div v-else-if="type == 'error'" class="alert bg-[--bgAlertError]">
    <Icon name="mi:circle-error" size="24px" class="text-[--alertError]" />
    <p>{{ $props.msg }}</p>
  </div>
</template>
