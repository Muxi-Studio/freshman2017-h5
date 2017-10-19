<template>
  <div class="app-all">
    <design-page></design-page>
    <!-- <product-page></product-page> -->
    <!-- <first-page></first-page> -->
    <!-- <test-panorama></test-panorama> -->
    <!-- <panorama v-if="showPage==='panorama'"></panorama> -->
    <!-- <loading v-if="showPage==='loading'"></loading> -->
    <!-- <question v-if="showPage==='question'"></question> -->
  </div>
</template>


<script>
import productPage from './product-page.vue'
import red from './red.vue'
import designPage from './design-page.vue'
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
     'product-page':productPage,
     'design-page':designPage,
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
