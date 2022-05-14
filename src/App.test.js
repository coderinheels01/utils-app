import App from "./App";
import { shallow } from "enzyme";
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import { Routes, Route } from "react-router-dom";

describe("App", () => {
  let appComponent;
  const shallowMount = () => {
    if (!appComponent) appComponent = shallow(<App />);
    return appComponent;
  };

  it("should render a 'div' tag ", () => {
    expect(shallowMount().find("div").length).toBe(1);
  });
  it("should render a 'Container' component inside 'div' tag ", () => {
    expect(
      shallowMount()
        .find("div")
        .find(Container).length
    ).toBe(1);
  });
  it("should render a 'Nav' component inside 'Container' component ", () => {
    expect(
      shallowMount()
        .find("div")
        .find(Container)
        .find(Nav).length
    ).toBe(1);
  });
  it("should render a 'NavItem' component inside 'Nav' component ", () => {
    expect(
      shallowMount()
        .find("div")
        .find(Container)
        .find(Nav)
        .find(NavItem).length
    ).toBe(1);
  });
  it("should render a 'NavLink' component inside 'NavItem' component ", () => {
    expect(
      shallowMount()
        .find("div")
        .find(Container)
        .find(Nav)
        .find(NavItem)
        .find(NavLink).length
    ).toBe(1);
  });
  it("should pass '/toggle' as href into 'NavLink' component ", () => {
    expect(
      shallowMount()
        .find("div")
        .find(Container)
        .find(Nav)
        .find(NavItem)
        .find(NavLink)
        .props().href
    ).toEqual("/toggle");
  });

  it("should render a 'Routes' component inside 'div' tag ", () => {
    expect(
      shallowMount()
        .find("div")
        .find(Routes).length
    ).toBe(1);
  });
  it("should render a 'Route' component inside 'Route' component ", () => {
    expect(
      shallowMount()
        .find("div")
        .find(Routes)
        .find(Route).length
    ).toBe(1);
  });
});
