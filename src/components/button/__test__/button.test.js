import React from "react";
import ReactDOM from "react-dom";
import Button from "../button";
import { render, cleanup } from "@testing-library/react";

import renderer from "react-test-renderer";

afterEach(() => {
  cleanup;
});

it("render button without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
});

it("render button correctly", () => {
  const { getByTestId } = render(<Button label="Click Me!" />);
  expect(getByTestId("button")).toHaveTextContent("Click Me!");
});

it("render button correctly", () => {
  const { getByTestId } = render(<Button label="Click You!" />);
  expect(getByTestId("button")).toHaveTextContent("Click You!");
});

it("matches snapshot", () => {
  const tree = renderer.create(<Button label="Click You!" />).toJSON();
  expect(tree).toMatchSnapshot();
});
