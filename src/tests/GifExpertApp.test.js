import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Test GifExpertApp", () => {
  test("should render GifExpertApp correctly", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should first", () => {
    const categories = [
      "My neighbor Totoro",
      "Spirited Away",
      "Princess Mononoke",
    ];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
