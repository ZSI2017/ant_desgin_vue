   import simplePlugins from "./plugin1.vue";

   let VuePlugin = ()=>{};

   VuePlugin.install = (Vue,options) =>{
          //1. 添加全局方法或属性
          // Vue.myGlobalMethod = ..

          // 2.添加全局资源
          // Vue.directive('my-directive',{})

          // 3.添加实例方法
          // Vue.prototype.$myMethod = ...

          Vue.component('vue-plugin',Vue.extend(simplePlugins));
   };

   export default VuePlugin;
