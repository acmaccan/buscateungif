import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Test AddCategory", () => {
  const setCategories = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("should render AddCategory correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change input field", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";

    input.simulate("change", { target: { value } });
  });

  test("should not post information", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("should call setCategories and clean input", () => {
    const value = "Hola Mundo";

    wrapper.find("input").simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
