import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = import.meta.dirname;

export default (env) => {
    return {
        mode: env.mode || "production",
        entry: path.resolve(__dirname, "src", "index.js"),
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "bundle.[contenthash].js",
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html") }),
        ],
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: "babel-loader",
                },
                {
                    test: /\.svg$/,
                    type: "asset/resource",
                },
            ],
        },
        resolve: {
            extensions: [".js"],
        },
        devServer: {
            port: 5000,
        },
    };
};
