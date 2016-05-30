var path = require("path");
module.exports = {
    entry: {
	javascript: "./src/client/js/app.js",
	html: "./src/client/html/index.html",
    },
    output: {
	path: path.resolve(__dirname, "dist"),
	filename: "app.js"
    },
    module: {
	loaders: [
	    {
		test: /\.jsx?$/,
		exclude: /node_modules/,
		loader: 'babel',
		query: {
		    presets: ['es2015', 'react']
		}
	    },
	    {
		test: /\.html$/,
		loader: "file?name=[name].[ext]",
	    },
	]
    }
};
