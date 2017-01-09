
import first from "./components/one.vue";
//import second from "./components/second.vue";
import third from "./components/third.vue";

import second from "./components/second.vue";

import index from "./components/index.vue";

import four from "./components/four.vue";


//  在最外层的app.js 文件中注册 自定义的search 组件
  import header from "./components/header.vue";
      var Mycomponent = Vue.extend(header);
      Vue.component('myHeader',Mycomponent);

// 引入store 进行全局状态管理
import store from "./vuex/store";

//  在最外层注册组件

  //  import searchBody   froｍ　"./location.vue";
  //  var myComponent = Vue.extend(searchBody);
  //  Vue.component('location',myComponent);
  import searchBody   from　"./components/location.vue";
  var myComponent = Vue.extend(searchBody);
  Vue.component('location',myComponent);



let router = new VueRouter();

let App = Vue.extend({
         store:store
});
router.map({
    "/index":{
          name:"index",
          component:index,
          subRoutes:{
                "/":{
                     name:'first',
                     component:first
                },
                "/second/:name":{
                      name:"second",
                      component:second
                },
                "/third":{
                     name:"third",
                     component:third
                },
                "/four":{
                     name:'four',
                     component:four
                }
          }
    }
})

router.start(App,'body');
