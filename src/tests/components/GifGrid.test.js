import React from "react";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Test GifGrid", () => {
  const category = "Mononoke";

  test("should render GifGrid correctly", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} key={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should get gifs when useFetchGifs response", () => {
    const gifs = [
      {
        id: "mockid12345",
        url: "https://mockurl.com",
        title: "Mock title",
      },
      {
        id: "mockid456789",
        url: "https://mockurl.com",
        title: "Mock title 2",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} key={category} />);

    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
