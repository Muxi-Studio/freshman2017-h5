<template>
    <div class="product-page-all">
       <turn-back @spanorama="spanorama()"></turn-back>
        <div class="title">
          产品组
        </div>
            <center-words></center-words>
            <div class="diamond">
                <div class="diamond-inner"></div>
            </div>
            <div class="center-introduce">
                产品的引领者 团队的粘合剂<br>
                <i></i>不断迸发的产品灵感<br>
                <i></i>技术与人文紧密接轨<br>
                <i></i>以需求分析精品分析<br>
                <i></i>到项目开发流程把控<br>
                最终实现产品运营 步步迭代<br>
            </div>
           <!-- continue -->
            <div class="center-introduce-right-insert">
              

                来<br>
                感<br>
                受<br>
            </div>
            <div class="center_sprite">
                <div class="center_sprite_inner"></div>
            </div>
            
            <div class="bottom-word1">
                <div class="bottom-word1-inner"></div>
            </div>
            <div class="bottom-word2">
                <div class="bottom-word2-inner"></div>
            </div>
            <div class="bottom-word3">
                <div class="bottom-word3-inner"></div>
            </div>
            <div class="bottom-word4">
                <div class="bottom-word4-inner"></div>
            </div>
            <div class="bottom-word5">
                <div class="bottom-word5-inner"></div>
            </div>
            <div class="bottom-word6">
                <div class="bottom-word6-inner"></div>
            </div>
            <div class="bottom-word7">
               <div class="bottom-word7-inner"></div>
            </div>
            <div class="bottom-word8">
                <div class="bottom-word8-inner"></div>
            </div>
            <div class="bottom-word9">
               <div class="bottom-word9-inner">  </div>
            </div>
        </div>
</template>
<script>
import turn_back from "./turn-back.vue";
import center_words from "./center-words";
export default {
    data() {
        return {

        }
    },
    methods: {
        spanorama: function() {
            this.$emit('panorama');
        }
    },
     components: {
    "turn-back": turn_back,
    "center-words":center_words,
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

@mixin rootpos($top, $left) {
    position: fixed;
    top: ($top/1334*100);
    left: ($left/750*100);
}
@mixin animfirst($function){
  animation: $function 2s ease infinite;
  -webkit-animation:  $function 2s ease infinite;
  -o-animation:  $function 2s ease infinite;
  -moz-animation:  $function 2s ease infinite;
}
@mixin animsecond($function){
  animation: $function 2s ease-in 0.5s infinite;
  -webkit-animation:  $function 2s ease-in 0.5s infinite;
  -o-animation:  $function 2s ease-in  0.5s infinite;
  -moz-animation:  $function 2s ease-in 0.5s infinite;
}
@keyframes out {
   from{
      opacity: 1;
   }
   to{
       opacity: 0;
    }
}
@-webkit-keyframes out {
    from{
        opacity: 1;
   }
   to{
       opacity: 0;
    }
}
@keyframes hidd {
   from{
      opacity: 0;
   }
   to{
       opacity: 1;
    }
}
@-webkit-keyframes hidd {
   from{
      opacity: 0;
   }
   to{
       opacity: 1;
    }
}

.product-page-all {
    -webkit-text-size-adjust: none;
    width: 100%;
    min-height: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url('http://static.muxixyz.com/2017h5/detail-background.png');
}


.title {
  padding-top: (136vh/1334*100);
  text-align: center;
  font-size: (90vw/750*100);
  color: rgb(255, 255, 255);
}
// .center-word{
//     margin-top: (15vh/1334*100)!important;
// }
.center-introduce{
    margin-top: (40vh/1334*100);
    text-align: center;
    color: rgb(255, 255, 255);
    font-size: (28vw/750*100);
    line-height: (50vh/1334*100);
}
i{
    margin-left: -3.2em;
}
.diamond{
    @include father(98vw,21vh ,400vh ,330vw );
    position: relative;
    top: (20vh/1334*100);
    left: (668vw/1500*100);
}
.diamond-inner{
     @include sprite($product-center-diamond,$product-center-diamond-height );
}
.center-introduce-right-insert{
@include father(85vw,168vh ,495vh ,470vw );
position: relative;
left: (926vw/1500*100);
top: (-490vh/2668*100);
text-align: center;
background: radial-gradient(rgba(253, 175, 39,0.5),rgba(253,175,39,0.2),rgba(253,175,39,0)); /* 标准的语法 */
color: rgb(253, 175, 39);
text-shadow:0 0 10px rgb(253, 175, 39);
font-size: (32vw/750*100);
border-style: solid;
border-width: (2vw/750*100);
border-color: rgb(255, 255, 255);
padding-top: 0.6em ;
}
.center_sprite{
    @include father(662vw,505vh,745vh,105vw )
}
.center_sprite_inner{
    @include sprite($product-center-sprite,$product-center-sprite-height);
}

.bottom-word1{
    @include father(11vw,218vh ,960vh ,89vw);
    @include animfirst(out);

}
.bottom-word1-inner{
    @include sprite($product-bottom-word-large,$product-bottom-word-large-height);
    height: 70%;
}
.bottom-word2{
    @include father(11vw,218vh ,998vh ,137vw );
    opacity: 0;
    @include animsecond(hidd);
}
.bottom-word2-inner{
    @include sprite($product-bottom-word-large,$product-bottom-word-large-height);
}
.bottom-word3{
    @include animfirst(out);
    @include father(22vw,152vh ,1005vh ,210vw );
}
.bottom-word3-inner{
    @include sprite($product-bottom-word-short,$product-bottom-word-short-height);
}
.bottom-word4{
    opacity: 0;
    @include father(22vw,152vh ,1057vh ,423vw );
     @include animsecond(hidd);
}
.bottom-word4-inner{
    @include sprite($product-bottom-word-short,$product-bottom-word-short-height);
    height: 40%;
}
.bottom-word5{
     @include animfirst(out);
     @include father(22vw,152vh ,1063vh ,445vw );
}
.bottom-word5-inner{
    @include sprite($product-bottom-word-short,$product-bottom-word-short-height);
}
.bottom-word6{
    opacity: 0;
    @include father(11vw,218vh ,1069vh ,481vw );
     @include animsecond(hidd);
}
.bottom-word6-inner{
    @include sprite($product-bottom-word-large,$product-bottom-word-large-height);
    height: 50%;
}
.bottom-word7{
     @include animfirst(out);
     @include father(22vw,152vh ,1069vh ,521vw );
    
}
.bottom-word7-inner{
     @include sprite($product-bottom-word-short,$product-bottom-word-short-height);
}

.bottom-word8{
     opacity: 0;
     @include father(11vw,218vh ,1055vh ,675vw );
     @include animsecond(hidd);
}
.bottom-word8-inner{
      @include sprite($product-bottom-word-large,$product-bottom-word-large-height);
      height: 70%;
}
.bottom-word9{
     @include father(11vw,218vh ,1048vh ,692vw );
}
.bottom-word9-inner{
     @include animfirst(out);
      @include sprite($product-bottom-word-large,$product-bottom-word-large-height);
      height: 60%;
}


</style>

