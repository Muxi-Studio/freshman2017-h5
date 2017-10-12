<template>
  <div>
      <div class="red">
        <button @click="addred">change</button>
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
      addred:function(){
        console.log('change to green')
        this.$emit('togreen');
      }
    }
    
  }
</script>

<style lang="scss">
.red{
    background-color: red;
    height:1120px;
    width:1120px;
}
</style>