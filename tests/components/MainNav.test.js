import MainNaV from "@/components/MainNaV.vue";
import { shallowMount } from "@vue/test-utils";
describe("MainNaV", () => {
  it("displays company name", async () => {
    // const wrapper = shallowMount(MainNaV);
    // const wrapper = mount(index, { localVue })
    // await wrapper.vm.$forceUpdate();
    // wrapper.setData({ readersNumber: 1 });
    // console.log(wrapper);
    // expect(wrapper.vm.$data.readersNumber).toBe("1");
  });

  it("displays menu items for navigation", () => {
    const wrapper = shallowMount(MainNaV);
    // const navigation = wrapper.find("li"); //找到單一
    const navigation = wrapper.findAll("[data-test='main-nav']"); //找到全部
    const items = navigation.map((d) => d.text());
    expect(items).toEqual(["Teams", "Locations", "Students", "Jobs"]);
  });
});

describe("when user is logged out", () => {
  it("promps user to sign it", () => {
    const wrapper = shallowMount(MainNaV, {
      data() {
        return {
          isLogin: false,
        };
      },
    });
    const loginButton = wrapper.find("[data-test='login-button']");
    const image = wrapper.find("[data-test='profile-image']");

    expect(loginButton.exists()).toBe(true);
    expect(image.exists()).toBe(false);
  });
});

// mount 渲染全部，渲染children
//  shallowMount 則是只渲染目前被測試的組件，若是其中有子組件的會被渲染為 stub，
