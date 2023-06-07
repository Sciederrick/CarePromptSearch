<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useToggleStore } from "~/store/toggle";

  const toggleStore = useToggleStore();
  const { isMobileNavDrawerOpen: isOpen } = storeToRefs(toggleStore);
  const { toggleMobileNavDrawer } = toggleStore;

  async function goTo(route: "home" | "search") {
    toggleMobileNavDrawer();
    if (route == "home") {
      setTimeout(async () => {
        await navigateTo("/");
      }, 1000);
    } else if (route == "search") {
      setTimeout(async () => {
        await navigateTo("/search");
      }, 1000);
    }
  }
</script>

<template>
  <Transition name="slide-fade-drawer">
    <div v-show="isOpen" class="popup-background z-20 h-screen md:hidden">
      <div class="absolute inset-y-0 right-0 w-5/6 bg-white">
        <header
          class="p-4 flex justify-between items-center my-4 border-b border-b-1 border-[--gray100]"
        >
          <button @click="goTo('home')">
            <img
              src="~/assets/images/logo-black-transparent.png"
              width="175"
              alt="company logo"
            />
          </button>
          <button @click="toggleMobileNavDrawer">
            <Icon
              name="uiw:close-square-o"
              size="24"
              class="text-[--gray600]"
            />
          </button>
        </header>
        <div>
          <ul class="px-4 pb-4">
            <li class="py-2">
              <button class="w-full text-left" @click="goTo('home')">
                Home
              </button>
            </li>
            <li class="py-2">
              <button class="w-full text-left" @click="goTo('search')">
                Search
              </button>
            </li>
          </ul>
          <hr />
          <div class="p-4 pt-8">
            <button
              class="btn btn-blue w-full cursor-not-allowed"
              title="coming soon"
              disabled="true"
            >
              Contribute
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
  /* for navdrawer */
  .slide-fade-drawer-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-drawer-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-drawer-enter-from,
  .slide-fade-drawer-leave-to {
    transform: translateX(300px);
    opacity: 0;
  }
</style>
