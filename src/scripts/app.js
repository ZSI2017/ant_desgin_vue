
import first from "./components/one.vue";
//import second from "./components/second.vue";
import third from "./components/third.vue";

import second from "./components/second.vue";

import index from "./components/index.vue";


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
Vue.component('todo',{
      props:['todo'],
      template:'<li>  asdfsdf</li>'
})

router.map({
    "/index":{
          name:"index",
          component:index,
          subRoutes:{
                "/":{
                     name:'first',
                     component:first
                },
                "/second/:userId":{
                      name:"second",
                      component:second
                },
                "/third":{
                     name:"third",
                     component:third
                }
          }
    }
})

router.start(App,'body');
