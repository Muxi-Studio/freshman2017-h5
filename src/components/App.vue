<template>
  <div class="app-all">
    <android-page v-if="show==='android-page'" @panorama='panorama()'></android-page>
    <web-page v-if="show==='web-page'" @panorama='panorama()'></web-page> 
    <design-page v-if="show==='design-page'" @panorama='panorama()'></design-page> 
     <product-page v-if="show==='product-page'" @panorama='panorama()'></product-page> 
     <first-page v-if="show==='first-page'" @question="questionpage()"></first-page> 
     <test-panorama v-if="show==='parnorama-page'" @web="webpage()"  @design="designpage()" @product="productpage()" @android="androidpage()" ></test-panorama>
     <loading v-if="show==='loading'" @firstPage="firstpage()"></loading>
    <question v-if="show==='question-page'" @panorama="panorama()"></question>
    <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 loop='true' src="//music.163.com/outchain/player?type=2&id=33579211&auto=1&height=66"></iframe>
  </div>
</template>


<script>
import androidPage from './android-page.vue'
import productPage from './product-page.vue'
import webPage from './web-page.vue'
import designPage from './design-page.vue'
import loading from './loading.vue'
import question from './question-page.vue'
import testPanorama from './text-panorama.vue'
import firstPage from './first-page.vue'
export default {
  data(){
    return {
     show:"loading"
    }
  },
    components: {
     'loading':loading,
     'first-page':firstPage,
     'question':question,
     'product-page':productPage,
     'design-page':designPage,
     'web-page':webPage,
     'android-page':androidPage,
     'test-panorama':testPanorama, 
    },
    methods: {
      firstpage:function(){
        this.show='first-page';
      },
      questionpage:function(){
        this.show='question-page';
      },
      panorama:function(){
        console.log('faga')
        this.show='parnorama-page';
      },
      productpage:function(){
        this.show='product-page';
          
      },
      designpage:function(){
        this.show='design-page';
      },
      webpage:function(){
        this.show='web-page';
      },
      androidpage:function(){
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
  font-family: zhang;
}
@font-face {
  font-family: zhang;
  src: url('./zhangfont.ttf');
}
</style>
