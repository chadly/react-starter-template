import { expect } from "chai";
import behavesLikeBrowser from "./behaves-like-browser";

import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import HelloWorld from "../src/hello-world";

configure({ adapter: new Adapter() });

describe("hello world", function() {
	behavesLikeBrowser();

	// https://github.com/airbnb/enzyme
	describe("when rendering the HelloWorld component", function() {
		beforeEach(function() {
			this.wrapper = mount(<HelloWorld />);
		});

		it("should render 'hello, world'", function() {
			expect(this.wrapper.contains("Hello, world")).to.be.true;
		});
	});
});
