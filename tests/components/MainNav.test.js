import { mount } from "@vue/test-utils";
import MainNaV from "@/components/MainNaV.vue";

describe("MainNaV", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNaV);
    console.log(wrapper.text());
    // console.log(wrapper.html());
  });
});
