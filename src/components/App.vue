<template>
  <div>
      <div class="swipe" v-finger:swipe="this.bar">swipe!</div>
  </div>
</template>


<script>
export default {
    data(){
      return {

      }
    },
    methods: {
      bar(e){
            console.log("swipe", e.direction)
      }
    },
  }
</script>


<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.swipe{
  font-size: 40px;
  color:white;
  width: 100%;
  line-height:400px;
  text-align: center;
  background-color: black;
}
</style>
