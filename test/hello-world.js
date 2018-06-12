import { expect } from "chai";
import behavesLikeBrowser from "./behaves-like-browser";

import React from "react";
import { mount } from "enzyme";

import HelloWorld from "../src/hello-world";

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
