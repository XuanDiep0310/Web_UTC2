const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundle.js",
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"), // Alias tương ứng với thư mục 'src'
    },
    extensions: [".js", ".jsx", ".json"], // Định nghĩa các đuôi file có thể bỏ qua
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i, // Hỗ trợ các loại file ảnh
        type: "asset/resource", // Sử dụng module mặc định của Webpack
        generator: {
          filename: "assets/images/[name][ext]", // Đường dẫn file output
        },
      },
      {
        test: /\.module\.scss$/, // Rule cho CSS Modules
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]", // Định nghĩa tên class
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.scss$/, // Rule cho SCSS thông thường (không dùng CSS Modules)
        exclude: /\.module\.scss$/, // Loại trừ các file .module.scss
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/, // Rule cho file CSS thông thường
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
