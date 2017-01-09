var ET  = require("extract-text-webpack-plugin");
var webpack = require("webpack");

module.exports = {
     entry:{
          app:__dirname+"/src/scripts/app.js"
     },
     // sourcemap
      devtool:'source-map',

    
    //  启动入口
    output:{
         path:__dirname+ '/prd',
         filename:'bundle.js'
    },

    devServer:{
          contentBase:__dirname+ '/prd',
          port:8080,
          inline:true,
          host:'localhost',
          proxy:{
                '/rest/*':{
                    target:'http://localhost:3000',
                    secure:false,
                    pathRewrite:{
                         '^/rest':''
                    }
                }
          }
    },

    // 模块配置
      module:{
           loaders:[
                {
                    test:/\.css$/,
                    loader:'style!css'
                },{
                     test:/\.js$/,
                     loader:'babel',
                },{
                     test:/\.scss$/,
                     loader:ET.extract('style','css!sass')
                },{
                    test:/\.string$/,
                    loader:'string'
                },{
                     test:/\.vue$/,
                     loader:'vue'
                }
           ]
      },
      vue:{
            loaders:{
                 js:"babel",
                 scss:['vue-style-loader','css','sass'].join('!'),
                 css:ET.extract('vue-style-loader','css','scss'),
            }
      },
      plugins:[
        // webpack　　自带的一个压缩插件 UglifyJsPlugin,只需要在配置文件中引入即可
      new webpack.optimize.UglifyJsPlugin({
            compress:{
               warnings:false
            }
      }),
           //将scss文件单独经过scss,css 加载器编译后打包到一个单独的文件中bundle.css,
          new ET('bundle.css',{
              allChunks:true
          })
     ]
}
