// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@pinia/nuxt"],
  css: ["@/assets/css/main.css"],
  app: {
    head: {
      title: "CarePromptSearch",
      meta: [
        {
          name: "description",
          content: "Easy search for concise obstetric emergency protocols",
        },
      ],
    },
  },
  runtimeConfig: {
    typesenseKey: process.env.TYPESENSE_KEY,
    typesenseHost: process.env.TYPESENSE_HOST,
    typesensePort: process.env.TYPESENSE_PORT,
    typesenseProtocol: process.env.TYPESENSE_PROTOCOL,
    typesenseTimeoutSeconds: process.env.TYPESENSE_TIMEOUT_SECONDS,
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
});
