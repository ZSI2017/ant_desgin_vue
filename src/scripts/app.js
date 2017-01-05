
import first from "./components/one.vue";
//import second from "./components/second.vue";
import third from "./components/third.vue";



import guide from "./components/second.vue";

let router = new VueRouter();

let App = Vue.extend();

Vue.component('todo',{
      props:['todo'],
      template:'<li>  asdfsdf</li>'
})

var index = Vue.extend({
      template:'<h1>sadfg</h1>'
})


router.map({
  "/":{
           name:"guide",
           component:guide
           },
    "/index":{
          name:"index",
          component:first
    },
    "/third":{
          name:'third',
          component:third
    }
})

router.start(App,'body');
