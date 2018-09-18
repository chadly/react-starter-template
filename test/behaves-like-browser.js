import { JSDOM } from "jsdom";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

export default function() {
	// inspired by https://semaphoreci.com/community/tutorials/testing-react-components-with-enzyme-and-mocha

	beforeEach(function() {
		this.exposedProperties = ["document", "window", "navigator"];

		const dom = new JSDOM("<!DOCTYPE html><p>Hello world</p>");
		global.document = dom.window.document;

		global.window = dom.window;

		global.navigator = {
			userAgent: "node.js"
		};

		Object.keys(global.document.defaultView).forEach(property => {
			if (
				typeof global[property] === "undefined" &&
				// https://github.com/jsdom/jsdom/issues/2304
				property !== "localStorage" &&
				property !== "sessionStorage"
			) {
				this.exposedProperties.push(property);
				global[property] = global.document.defaultView[property];
			}
		});
	});

	afterEach(function() {
		this.exposedProperties.forEach(property => {
			delete global[property];
		});
	});
}
