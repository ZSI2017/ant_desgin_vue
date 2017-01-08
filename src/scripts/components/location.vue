<style>
  .outContent{
      align-items: center;
      width:100%;
      height:.54rem;
      background: #dbdbdb;
  }
  .inContent{
    margin-left: .14rem;
    border-radius: .04rem;
       background: #fff;
       width:3rem;
       height:.38rem;
  }
  .myInput{
      border:0;
       outline: 0;
  }
  .myImg{
         width:.2rem;

  }
</style>


<template>
  <div class="outContent am-flexbox">
    <div class="inContent am-flexbox">
          <img class="myImg" src="/images/localtion1.png" alt="">
           <input  class="myInput" placeholder="正在定位中"  />
    </div>

     <img  class="myImg" src="/images/localtion2.png" alt=""> <p> 定位 </p>
  </div>

</template>

<script>

      export default{
           data(){
                return{

                }
           },

           methods:{

           }

      }


</script>
