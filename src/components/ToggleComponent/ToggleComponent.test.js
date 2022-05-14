import React from "react";
import { shallow } from "enzyme";
import ToggleComponent from "./ToggleComponent";
import { Card, CardBody, CardHeader } from "reactstrap";

describe("ToggleComponent", () => {
  let toggleComponent;
  const shallowComponent = () => {
    if (!toggleComponent) toggleComponent = shallow(<ToggleComponent />);

    return toggleComponent;
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
});
