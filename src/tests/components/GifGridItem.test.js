import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Test GifGridItem", () => {
  const title = "Un título";
  const url = "https://localhost:3000/algo.jpg";
  const wrapper = shallow(<GifGridItem url={url} title={title} />);

  test("should render GifGridItem correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should have a paragraph with the title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("should have an image with the same url as props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("should have animate__fadeIn class", () => {
    const div = wrapper.find("div");
    const className = div.prop("className");
    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
