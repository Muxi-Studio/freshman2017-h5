<template>
<div class="center-word">
   <div class="center-word1">秋招</div>
       <div class="center-word2">介绍</div>
</div>
</template>

<script>
export default {
    data(){
      return {
         
      }
    },
    computed:{
        go(){
            setInterval(()=>{
                 this.$emit('firstPage');
            },3000);
        }
    },
    
  }
</script>

<style lang="scss">
.center-word{
    margin-top: (50vh/1334*100);
    font-size: (44vw/750*100);
    color: rgb(255, 255, 255);
    text-align: center;
}

</style>