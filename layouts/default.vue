<script setup lang="ts">
  import { useAlertStore } from "~/store/alert";
  const { alert } = useAlertStore();
</script>

<template>
  <div>
    <header class="limit-width">
      <Transition name="slide-fade">
        <MyAlert
          :type="alert.type"
          :msg="alert.msg"
          class="fixed top-2 left-2 right-2 mx-auto"
        />
      </Transition>
      <MyNavBar />
    </header>
    <div>
      <MyMobileNavDrawer />
      <slot />
    </div>
    <footer class="bg-[--blue300] py-8 limit-width">
      <div class="flex flex-col flex-wrap gap-4 md:gap-16 md:flex-row">
        <NuxtLink to="/">
          <img
            src="~/assets/images/logo-black-transparent.png"
            class="pb-8"
            width="175"
            alt="company logo"
          />
        </NuxtLink>
        <section>
          <h3>Quick Links</h3>
          <ul class="py-2">
            <li class="py-2">
              <NuxtLink to="/search">Search</NuxtLink>
            </li>
            <li class="py-2">
              <NuxtLink
                to="#"
                class="text-[--gray400] cursor-not-allowed"
                title="coming soon"
                >Bookmarks</NuxtLink
              >
            </li>
          </ul>
        </section>
        <section>
          <h3>Powered by</h3>
          <ul class="py-2">
            <li class="py-2">
              <NuxtLink to="https://appwrite.io">
                <img
                  src="~/assets/images/appwrite_logo.svg"
                  class="object-fit max-w-[160px] max-h-[20px]"
                  alt="Appwrite logo"
                />
              </NuxtLink>
            </li>
            <li class="py-2">
              <NuxtLink to="https://typesense.org">
                <img
                  src="~/assets/images/typesense_logo.svg"
                  class="object-fit max-w-[160px] max-h-[20px]"
                  alt="Typesense logo"
                />
              </NuxtLink>
            </li>
          </ul>
        </section>
      </div>
      <p class="text-sm pt-16">copyright &copy; 2023 CarePrompt</p>
    </footer>
  </div>
</template>

<style scoped>
  /* for alerts */
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(-20px);
    opacity: 0;
  }
</style>
