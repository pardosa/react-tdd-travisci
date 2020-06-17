import React from "react";
import Counter from "./Counter";
import { shallow, mount, render } from "enzyme";

describe("counter testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Counter />);
  });

  test("render + button", () => {
    expect(wrapper.find("#increment-btn").text()).toContain("+");
  });

  test("render - button", () => {
    expect(wrapper.find("#decrement-btn").text()).toContain("-");
  });

  test("render a counter div", () => {
    expect(wrapper.find("#counter-div").text()).toBe("0");
  });

  test("click + btn and counter incremented", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-div").text()).toBe("1");
  });

  test("click - btn and counter decremented", () => {
    wrapper.find("#increment-btn").simulate("click");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-div").text()).toBe("0");
  });
});
