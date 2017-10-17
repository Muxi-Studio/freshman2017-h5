<template>
  <div class="app-all">
    <first-page></first-page>
    <!-- <test-panorama></test-panorama> -->
    <!-- <panorama v-if="showPage==='panorama'"></panorama> -->
    <!-- <loading v-if="showPage==='loading'"></loading> -->
    <!-- <question v-if="showPage==='question'"></question> -->
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
import loading from './loading.vue'
import question from './question-page.vue'
import panorama from './panorama.vue'
import testPanorama from './text-panorama.vue'
import firstPage from './first-page.vue'
export default {
  data(){
    return {
     showPage:'loading'
    }
  },
    components: {
     'red':red,
     'green':green,
     'blue':blue,
     'loading':loading,
     'question':question,
     'panorama':panorama,
     'test-panorama':testPanorama,
     'first-page':firstPage
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
