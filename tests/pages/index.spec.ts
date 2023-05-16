import { mount } from '@vue/test-utils';
// import Page from "./../../pages/index.vue";
import MyMainSearchInput from './../../components/MyMainSearchInput.vue';

// describe("index page", () => {
//     it("shows interactive click counter", async () => {
//         const page = mount(Page);
//         expect(page.text()).toContain("0 clicks");

//         const button = page.find("button");
//         await button.trigger("click");
//         expect(page.text()).toContain("1 clicks");
//     });
// });

describe("index page", () => {
    it("clicking enter switches to search", async () => {
        const wrapper = mount(MyMainSearchInput);
        const input = wrapper.find('input');

        await input.setValue('post-partum haemorrhage');

        expect(input.element.value).toBe('post-partum haemorrhage');
    });
});