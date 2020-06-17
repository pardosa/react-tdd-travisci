import React from "react";
import App from "./App";
import { shallow, mount, render } from "enzyme";

describe("counter testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test("renders title of counter", () => {
    expect(wrapper.find("h1").text()).toContain("This is TDD counter App");
  });
});
