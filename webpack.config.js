/* eslint-env node */
/* eslint-disable import/no-commonjs */
const path = require("path");

module.exports = {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: {
					loader: "babel-loader"
				},
				include: [path.resolve("./src")]
			}
		]
	},
	devServer: {
		contentBase: "public",
		port: 1337
	}
};
