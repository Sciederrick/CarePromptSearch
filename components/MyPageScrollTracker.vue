<script setup>
const emit = defineEmits(['handleVisibleTarget'])
let scrolled = 0;
let scrollDirection = 'down';

function handleScroll() {
    scrollDirection = window.scrollY > scrolled ? 'down' : 'up';
    scrolled = window.scrollY;
    // throttling to optimize performance: https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
    window.requestAnimationFrame(() => {
        emit('handleVisibleTarget', scrollDirection);
    });


}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
<template></template>