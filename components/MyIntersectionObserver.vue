<script setup>
const emit = defineEmits(['intersecting']);
let observer;
let sections;
let observedTargets = [];
let targetId;
onMounted(() => {
    const options = {
        root: null,
        rootMargin: "-100px 0px -200px 0px", // shrink the size of the root element vertically
        threshold: 0,
    }
    observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            targetId = entry.target.getAttribute("id");
            if (entry && entry.isIntersecting) {
                observedTargets.push(targetId);
                emit('intersecting', { element: entry.target, id: targetId, status: true });
            } else {
                emit('intersecting', { element: entry.target, id: targetId, status: false });                  
            }
        })           
    }, options)

    sections = document.querySelectorAll("[data-observed='true']")
    sections.forEach(el => observer.observe(el))
})

onUnmounted(() => {
    sections.forEach(el => observer.unobserve(el))
    observer.disconnect()
    observedTargets.length = 0
})
</script>
<template></template>