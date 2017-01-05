<style>

</style>

<template>
     <div>
       <p> 这是第二个路由  </p>
       <p> 过三秒后就再次跳转   </p>
     </div>

</template>

<script>
  export default{
        data(){
            return{

            }
        },
        vuex:{

        },
        created(){

        },
        ready(){

        let router = new VueRouter();
        setTimeout(function(){
              router.go({path:'/third'});
              console.log("跳转、");
        },3000)

        },
        methods:{

        }
  }

</script>
