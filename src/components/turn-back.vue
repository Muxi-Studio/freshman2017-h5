<template>
  <div class="turn_back" @click="back()">
        <!-- <iframe v-show="music" frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86  src="./turnbacksong"></iframe> -->
        <div class="turn_back_triangle">
          <div class="turn_back_triangle_inner"></div>
        </div>
        <div class="turn_back_word">
          返回星球
        </div>
      </div>
</template>

<script>
export default {
    data(){
      return {
         music:false
      }
    },
    computed:{
        go(){
            setInterval(()=>{
                 this.$emit('firstPage');
            },3000);
        }
    },
    methods:{
        back:function(){
            this.music=true;
            this.$emit('spanorama');
        }
    }
  }
</script>

<style lang="scss">
@import '../sprite/firstPage.scss';
 @mixin father($width, $height, $top, $left) {
    width: ($width/750*100);
    height: ($height/1334*100);
    position: absolute;
    top: ($top/1334*100);
    left: ($left/750*100);
}
@mixin pos($top, $left) {
    position: absolute;
    top: ($top/1334*100);
    left: ($left/750*100);
}
.turn_back {
    @include father(190vw,
    30vh,
    52vh,
    41vw);
    color: rgb(230,155,10);
    text-shadow:1px 1px 10px rgb(230,155,10);;
}
.turn_back_triangle{
   margin-top: -20%;
   margin-left: -15%;
   float: left;
   width: (128vw/750*100);
   height: (123vh/1334*100);
}
.turn_back_triangle_inner{
    @include sprite($product-triangle,$product-triangle-height);
}
.turn_back_word{
    font-weight: bolder;
    font-size: (26vw/750*100);
    @include pos(0vh,63vw);
    line-height:125%;
    letter-spacing: (3vw/750*100);
}
</style>