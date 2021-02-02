const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const webpack = require("webpack");
const path = require("path");

module.exports = {
	entry: "./src/index.jsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		sourceMapFilename: "bundle.map",
	},
	module: {
		rules: [
			{
				test: /(\.js$|\.tsx?$)/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env"],
					plugins: ["@babel/plugin-transform-runtime"],
				},
			},
		],
	},
	plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
};
