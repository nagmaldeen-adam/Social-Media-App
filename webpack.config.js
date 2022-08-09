const path = require("path");
const HtmlwebpackPlugin = require("html-webpack-plugin");
const miniExtractPlugin = require("mini-css-extract-plugin");
module.exports={
    entry:"/src/index.js",
    output:{ path:path.resolve(__dirname,"dist"), },
    devServer:{
        hot:true,
        port:3013
    },
    module:{
        rules: [
              {
                test: /\.(jpg|png|jpeg)$/,
                use: {
                loader: 'url-loader',
                     },
              },
            {
            test:/\.js$/,
            exclude:/node_modules/,
            use:{
                loader:"babel-loader",
                options:{
                    presets:["@babel/preset-env" ,"@babel/preset-react"],
                },
            },
            },
            {
                test:/\.css$/i,
                use:[
                    miniExtractPlugin.loader,"css-loader",
                ],
            },
        ]
    },
    plugins:[
        new HtmlwebpackPlugin({
            template:"./src/index.html",
        }),
        new  miniExtractPlugin(),
    ],
    
};