// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@pinia/nuxt'
    ],
    css: [
        '@/assets/css/main.css'
    ],
    app: {
        head: {
            title: 'CarePromptSearch',
            meta: [
                { name: 'description', content: 'Easy search for concise obstetric emergency protocols' }
            ]
        }
    }
})
