<template>
  <div>
      <div class="green">
        <button @click="addgreen">change</button>
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
      addgreen:function(){
        this.$emit('toblue');
      }
    }
    
  }
</script>

<style lang="scss">
.green{
    background-color: green;
    height:1120px;
    width:1120px;
}
</style>