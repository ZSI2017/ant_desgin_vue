<style>
   #myImage{
        height:.6rem;
        width:.6rem;
        border-radius: .1rem
   }

</style>

<template>
   <my-header :msgheader.sync="mag"></my-header>
  <div class="am-list ">
      <a v-for="item in datasource"
         v-link="{name:'second', params: {name:item.title}}"
       class="am-list-item" style="border-bottom:.01rem solid #5c5c5c">
        <div class="am-list-thumb">
          <!-- A11Y: alt 信息增加对图片内容或者目的描述，如「xxx头像」 -->
          <img id="myImage" src="https://os.alipayobjects.com/rmsportal/OhSzVdRBnfwiuCK.png" alt="图片描述" />
        </div>
        <div class="am-list-content">
          <div class="am-list-title" style="font-size:.2rem,font-weight:bold">{{item.title}}</div>
          <div class="am-list-brief" style="font-size:.14rem;overflow:visible">{{item.subtitle}}</div>
          <div  class="am-list-brief" style="margin-top:.03rem">
             <p v-for="i in item.little" class="am-flexbox-item" style="display:inline-block;padding:.01rem;margin-right:.02rem;color:red;border:.01rem solid red;font-size:12px">{{i}}</p></div>
        </div>
        <div class="am-list-arrow" aria-hidden="true">
          <span class="am-icon arrow horizontal"></span>
        </div>
      </a>

</div>



</template>

<script>
   import  {changeIndex} from "../vuex/actions";

  export default{
        data(){
            return{
              mag:{
                  title:"one"
              },
              datasource:[]

            }
        },
        vuex:{
           actions:{
              change:changeIndex
           }

        },
        created(){
           this.$http.get("/rest/list2")
             .then(
                   (res) =>{
                    this.datasource = res.data.data;
                     console.log(res.data.data);
                   },(response) =>{
                        console.log("http error");
                   }
             )


        },
        ready(){
           this.change(0);
          let router = new VueRouter();
        // setTimeout(function(){
        //       router.go({path:'/index/third'});
        //       console.log("跳转、");
        // },3000)

        },
        methods:{

        }
  }

</script>
