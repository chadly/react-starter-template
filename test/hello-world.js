import { expect } from "chai";

describe("hello world", function() {
	describe("when hello worlding", function() {
		it("should hello world", function() {
			expect("hello world").to.contain("hello");
		});
	});
});
