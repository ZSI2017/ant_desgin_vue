<style scoped>

    img{
        width:100%;
        height:100%;
    }
    .myLi{
        margin-left: .25rem;
        border-bottom: .01rem solid #bdbdbd;
    }
    .myTitle{
         font-size: .18rem;
         font-weight: bold;

    }

</style>


<template>
     <my-header :msgheader.sync="mag"></my-header>
       <!-- 使用自定义 组件  -->
       <location> </location>
       <p>当前路径：{{$route.path}}</p>
       <!-- <p>当前的路由参数： {{$route}}</p> -->
       <ul>

          <li class="myLi" v-for="item in datasource" >
                <p class="myTitle">{{$route.params.name +item.title}}</p>
                <p>{{item.no1}}</p>
                <p>{{item.no2}}</p>
                <p>{{item.no3}}</p>
          </li>


       </ul>

</template>

<script>

 import { changeIndex} from "../vuex/actions";
 export default {
     data(){
            return {
              mag:{
                  title:"second"
              },
                datasource:[]
            }
     },
     vuex:{
       actions: {
            change:changeIndex
       }

     },
 created(){
      this.$http.get("/rest/list3")
         .then(
             (res) =>{
               this.datasource=res.data.data;
                console.log(res.data.data);
             },(response) =>{
                 console.log("error");
             }
         )

//   let router = new VueRouter();
  //  setTimeout(function(){
  //        router.go({path:'/index'});
  //        console.log("跳转、");
  //  },3000)

},
ready(){
      this.change(2);
      console.log(this.$route)
}
}

</script>
