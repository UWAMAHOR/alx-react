import { shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";
import { getFullYear, getFooterCopy } from "../utils/utils";

describe("Footer test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });
