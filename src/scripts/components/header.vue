<style lang="scss" scoped>
   header{
        border:0;
        padding:.1rem;
        height:.44rem;
        background:#bdbdc4;
        display:flex;
        flex-direction: row;
        align-items: center;
    h1{
       font-weight:bold;
       text-align: center;
   }
}
</style>



<template>
     <header>
        <h1>{{msgheader.title}}</h1>
     </header>
</template>


<script>

  export default {
      data(){
          return{

          }
      },
      props:{
          msgheader:{
               title:null
          }
      },
      create(){

      },
      ready(){

      },
      destory(){

      },
      methods:{


      }

  }

</script>
