import { mount } from '@vue/test-utils'
import Page from "./../../pages/index.vue"
describe("index page", () => {
    it("shows interactive click counter", async () => {
        const page = mount(Page)
        console.log(page.vm)
        expect(page.text()).toContain("0 clicks")
        const button = page.find("button")
        await button.trigger("click")
        expect(page.text()).toContain("1 clicks")
    })
})