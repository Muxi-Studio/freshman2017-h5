<template>
  <div class="app-all">
    <question v-if="showPage==='question'"></question>
    <!-- <red v-if="showNum===0" @togreen="addgreen()"></red>
    <green v-if="showNum===1" @toblue="addblue()"></green>
    <blue v-if="showNum===2" @toword="addword()"></blue>
    <play-word v-if='showNum===3'></play-word> -->
  </div>
</template>


<script>
import green from './green.vue'
import red from './red.vue'
import blue from './blue.vue'
import playWord from './playWord'
import question from './question-page'

export default {
  data(){
    return {
     showPage:'question'
    }
  },
    components: {
     'red':red,
     'green':green,
     'blue':blue,
     'play-word':playWord,
     'question':question
    },
    methods: {
      addgreen:function(){
        console.log('green')
        this.showNum=1;
        return this.showNum;
      },
      addblue:function(){
        this.showNum=2;
          return this.showNum;
      },
      addred:function(){
        this.showNum=0;
          return this.showNum;
      },
      addword:function(){
        this.showNum=3;
        return this.showNum;
      }
    }
  }
</script>
<style lang='scss'>
*{
  padding: 0;
  margin:0;
}
.app-all{
  height: 100vh;
}
</style>
