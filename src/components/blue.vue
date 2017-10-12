<template>
  <div>
      <div class="blue">
        <button @click="addblue">change</button>
      </div>
  </div>
</template>

<script>
export default {
    data(){
      return {

      }
    },
     methods:{
      addblue:function(){
        this.$emit('toword');
      }
    }
    
  }
</script>

<style lang="scss">
.blue{
    background-color: blue;
    height:1120px;
    width:1120px;
}
</style>