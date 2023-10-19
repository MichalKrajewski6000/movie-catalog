const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "/src/index.js",
    resolve: {
        extensions: ['.ts', '.js', '.json', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.m?js/,
                type: "javascript/auto",
                resolve: {
                  fullySpecified: false,
                },
              },
              {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
              },
              {
                test: /\.(css|s[ac]ss)$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
              },
              {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                },
              },
              {
                test: /\.json$/,
                use: {
                  loader: "json-loader",
                },
              },
              {
                test: /\.png$/i,
                use: [
                  {
                    loader: "file-loader",
                  },
                ],
              },
        
              {
                test: /\.svg$/,
                use: [
                  {
                    loader: "svg-url-loader",
                    options: {
                      limit: 10000,
                    },
                  },
                ],
              },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
        }),
    ],
};