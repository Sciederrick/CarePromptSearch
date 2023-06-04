<script setup lang="ts">
  import { useAlertStore } from "~/store/alert";
  const { alert } = useAlertStore();
</script>

<template>
  <header class="limit-width">
    <MyAlert :type="alert.type" :msg="alert.msg" />
    <MyNavBar />
  </header>
  <div>
    <slot />
  </div>
  <footer class="bg-[--blue300] py-8 limit-width">
    <div class="flex flex-col flex-wrap gap-8 md:flex-row md:gap-12">
      <NuxtLink to="/">
        <img
          src="~/assets/images/logo-black-transparent.png"
          class="pb-8"
          width="175"
          alt="company logo"
        />
      </NuxtLink>
      <section>
        <h3>Company</h3>
        <ul class="py-2">
          <li class="pb-1">
            <NuxtLink to="#">Terms & Conditions</NuxtLink>
          </li>
          <li class="pb-1">
            <NuxtLink to="#">About us</NuxtLink>
          </li>
        </ul>
      </section>
      <section>
        <h3>Contacts</h3>
        <ul class="py-2">
          <li class="pb-1">
            <NuxtLink to="#">johndoe@example.com</NuxtLink>
          </li>
          <li class="pb-1">
            <NuxtLink to="#">+254 733 333 333</NuxtLink>
          </li>
        </ul>
      </section>
      <section>
        <h3>Subscribe</h3>
        <p class="py-2">
          Receive product and protocol updates, <br />patient stories in your
          inbox
        </p>
        <form class="pt-1">
          <div
            class="grid border border-[--gray400] px-1 py-1 rounded-sm bg-[--blue300] md:inline-block"
          >
            <input
              class="px-3 outline-none bg-transparent"
              type="email"
              placeholder="Your email address"
            />
            <button class="btn btn-blue mt-2 md:mt-0">Subscribe</button>
          </div>
        </form>
      </section>
      <section
        class="flex gap-4 text-[--gray600] text-xs lg:flex-col lg:items-start"
      >
        <button class="py-2">
          <Icon name="jam:twitter-circle" size="32px" />&nbsp;Twitter
        </button>
        <button class="py-2">
          <Icon name="jam:facebook-circle" size="32px" />&nbsp;Facebook
        </button>
        <button class="py-2">
          <Icon name="jam:linkedin-circle" size="32px" />&nbsp;Linkedin
        </button>
      </section>
    </div>
    <p class="text-sm pt-16">copyright &copy; 2023 CarePrompt</p>
  </footer>
</template>
