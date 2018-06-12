export default function() {
	beforeEach(function() {
		this.requests = [];

		global.fetch = (url, options) =>
			new Promise((resolve, reject) => {
				this.requests.push({ resolve, reject, url, options });
			});
	});

	afterEach(function() {
		delete global.fetch;
	});
}
