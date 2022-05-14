import App from "./App";
import { shallow } from "enzyme";

describe("Api", () => {
  let appComponent;
  const shallowMount = () => {
    if (!appComponent) appComponent = shallow(<App />);
    return appComponent;
  };

  it("should render a div ", () => {
    expect(shallowMount().find("div").length).toBe(1);
  });
});
