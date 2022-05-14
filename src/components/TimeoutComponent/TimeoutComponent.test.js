import React from "react";
import { shallow } from "enzyme";
import TimeoutComponent from "./TimeoutComponent";
import { Card, CardBody, CardHeader, ButtonGroup, Button } from "reactstrap";

describe("TimeoutComponent", () => {
  let timeoutComponent;
  const shallowComponent = () => {
    if (!timeoutComponent) timeoutComponent = shallow(<TimeoutComponent />);

    return timeoutComponent;
  };

  it("should render one Card", () => {
    expect(shallowComponent().find(Card).length).toBe(1);
  });
  it("should render one CardHeader inside Card", () => {
    expect(
      shallowComponent()
        .find(Card)
        .find(CardHeader).length
    ).toBe(1);
  });
  it("should render one CardBody inside Card", () => {
    expect(
      shallowComponent()
        .find(Card)
        .find(CardBody).length
    ).toBe(1);
  });
  it("should render one ButtonGroup inside CardBody", () => {
    expect(
      shallowComponent()
        .find(Card)
        .find(CardBody)
        .find(ButtonGroup).length
    ).toBe(1);
  });
  it("should render 3 Button inside ButtonGroup", () => {
    expect(
      shallowComponent()
        .find(Card)
        .find(CardBody)
        .find(ButtonGroup)
        .find(Button).length
    ).toBe(3);
  });
});
