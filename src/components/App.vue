<template>
  <div class="app-all">
    <android-page v-if="show==='android-page'"></android-page>
    <web-page v-if="show==='web-page'"></web-page> 
    <design-page v-if="show==='design-page'"></design-page> 
     <product-page v-if="show==='product-page'"></product-page> 
     <first-page v-if="show==='first-page'"></first-page> 
     <!-- <test-panorama ></test-panorama> -->
     <panorama v-if="show==='panorama'"></panorama> 
     <loading v-if="show==='loading'"></loading>
    <question v-if="show==='question'"></question>
  </div>
</template>


<script>
import androidPage from './android-page.vue'
import productPage from './product-page.vue'
import webPage from './web-page.vue'
import designPage from './design-page.vue'
import loading from './loading.vue'
import question from './question-page.vue'
import panorama from './panorama.vue'
import testPanorama from './text-panorama.vue'
import firstPage from './first-page.vue'
export default {
  data(){
    return {
     show:"question"
    }
  },
    components: {
     'loading':loading,
     'first-page':firstPage,
     'question':question,
     'panorama':panorama,
     'product-page':productPage,
     'design-page':designPage,
     'web-page':webPage,
     'android-page':androidPage,
     'test-panorama':testPanorama, 
    },
    methods: {
      firstPage:function(){
        this.show='first-page';
      },
      questionPage:function(){
        this.show='question';
      },
      panorama:function(){
        this.show='panorama';
      },
      productPage:function(){
        this.show='product-page';
          
      },
      designPage:function(){
        this.show='design-page';
      },
      webPage:function(){
        this.show='web-page';
      },
      androidPage:function(){
        this.show='android-page';
      }
    }
  }
</script>
<style lang='scss'>
*{
  padding: 0;
  margin:0;
}
html,body{
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.app-all{
  height: 100vh;
}
</style>
