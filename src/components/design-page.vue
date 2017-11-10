<template>
  <div class="design-page-all"> 
    <turn-back @spanorama="spanorama()"></turn-back>
       <div class="design-title">
        设计组
       </div>
      <center-words ></center-words>
      <div class="design-top-grid">
        <div class="design-top-grid-inner"></div>
      </div>
      <div class="design-center-introuduce">
        成为团队中的达芬奇<br>
        轻松玩转PS&nbsp;&nbsp; AI软件<br>
        勾勒最惊艳视觉界面<br>
        成为天马星空的一员
      </div>
       <div class="design-center-grid1">
         <div class="design-center-grid1-inner"></div>
       </div>
       <div class="design-center-grid2">
         <div class="design-center-grid2-inner"></div>
       </div>
       <div class="design-center-grid3">
         <div class="design-center-grid3-inner"></div>
       </div>
       <div class="design-center-grid4">
         <div class="design-center-grid4-inner"></div>
       </div>
       <div class="design-center-grid5">
         <div class="design-center-grid5-inner"></div>
       </div>
       <div class="design-center-grid6">
         <div class="design-center-grid6-inner"></div>
       </div>
       <div class="design-center-grid7">
         <div class="design-center-grid7-inner"></div>
       </div>
       <div class="design-center-sprite">
         <div class="design-center-sprite-inner"></div>
       </div>
       <div class="design-bottom-left-grid1">
         <div class="design-bottom-left-grid1-inner"></div>
       </div>
       <div class="design-bottom-left-grid2">
         <div class="design-bottom-left-grid2-inner"></div>
       </div>
        <div class="design-bottom-left-grid3">
         <div class="design-bottom-left-grid3-inner"></div>
       </div>
       <div class="design-bottom-left-grid4">
         <div class="design-bottom-left-grid4-inner"></div>
       </div>
        <div class="design-bottom-left-grid5">
         <div class="design-bottom-left-grid5-inner"></div>
       </div>
       <div class="design-bottom-left-grid6">
         <div class="design-bottom-left-grid6-inner"></div>
       </div>
        <div class="design-bottom-left-grid7">
         <div class="design-bottom-left-grid7-inner"></div>
       </div>
       <div class="design-bottom-left-grid8">
         <div class="design-bottom-left-grid8-inner"></div>
       </div>
       
  </div>
</template>

<script>
import turn_back from "./turn-back.vue";
import center_words from "./center-words";
export default {
  data() {
    return {};
  },
  methods: {
    spanorama: function() {
      this.$emit("panorama");
    }
  },
  components: {
    "turn-back": turn_back,
    "center-words":center_words,
  }
};
</script>

<style lang="scss">
@import "../sprite/firstPage.scss";
@mixin father($width, $height, $top, $left) {
  position: absolute;
  width: ($width/750*100);
  height: ($height/1334*100);
  top: ($top/1334*100);
  left: ($left/750*100);
}

@mixin grid($sprite,$spriteheight,$height) {
 @include sprite($sprite,$spriteheight);
 height:$height;
  
}
.design-page-all {
  width: 100%;
  min-height: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url("http://static.muxixyz.com/2017h5/detail-background.png");
}

.design-title {
  padding-top: (154vh/1334*100);
  text-align: center;
  font-size: (90vw/750*100);
  color: rgb(255, 255, 255);
  margin-left: -5vw;
}
.design-center-introuduce{
  color: rgb(255, 255, 255);
  position: relative;
  top: (-60vh/1334*100);
  // margin-top: (80vh/1334*100);
  text-align: center;
  font-size: (32vw/750*100);

}
@mixin anim($function,$staytime,$time,$way){
  animation: $function $staytime $way $time infinite;
  -webkit-animation:  $function $staytime $way $time infinite;
  -o-animation:  $function $staytime $way  $time infinite;
  -moz-animation:  $function $staytime $way $time infinite;
}
@keyframes design-shake {
   50%{
     transform: translateX(1vw) translateY(1vh);
   }
    100%{
       transform: translateX(0vw) translateY(0vh);
    }

}
@-webkit-keyframes design-shake {
    50%{
        transform: translateX(1vw) translateY(1vh);
   }
    100%{
       transform: translateX(0vw) translateY(0vh);
    }
}
@keyframes design-downout {
   50%{
     opacity: 1;
    
   }
    100%{
       transform:translateY(5vh);
       opacity: 0;
    }

}
@-webkit-keyframes design-downout {
   50%{
     opacity: 0;
   }
    100%{
       transform:translateY(5vh);
       opacity: 1;
    }
}


.design-center-sprite{
  @include father(666vw,421vh , 807vh, 90vw);
  
}
.design-center-sprite-inner{
  @include anim(design-shake,2s, 0s ,ease );
  @include sprite($design-center-sprite,$design-center-sprite-height);
}
.design-top-grid{
  @include father(154vw,139vh ,384vh,325vw );
  position: relative;
  top: (-10vh/1334*100);
  left: (330vw/750*100);
}
.design-top-grid-inner{
  @include grid($design-grid,$design-grid-height ,70% );
}

.design-center-grid1{
  opacity: 1;
  @include father(154vw,139vh ,653vh,320vw );
  @include anim(design-downout,2s,0s,ease);
}
.design-center-grid1-inner{
   @include grid($design-grid,$design-grid-height ,70% );
}
.design-center-grid2{
  opacity: 0;
  @include father(154vw,139vh ,699vh,350vw );
  @include anim(design-downout,2s,0.5s,ease);
}
.design-center-grid2-inner{
   @include grid($design-grid,$design-grid-height ,69% );
}
.design-center-grid3{
  opacity: 0;
  @include father(154vw,139vh ,723vh,290vw );
  @include anim(design-downout,2s,0.7s,ease);
}
.design-center-grid3-inner{
   @include grid($design-grid,$design-grid-height ,65% );
}
.design-center-grid4{
  opacity: 0;
  @include father(154vw,139vh ,770vh,330vw );
 
}
.design-center-grid4-inner{
   @include grid($design-grid,$design-grid-height ,75% );
    @include anim(design-downout,2s,0.9s,ease);
}

.design-center-grid5{
  opacity: 0;
  @include father(154vw,139vh ,740vh,380vw );
  
}
.design-center-grid5-inner{
   @include grid($design-grid,$design-grid-height ,69% );
   @include anim(design-downout,2s,1.1s,ease);
}
.design-center-grid6{
  opacity: 0;
  @include father(154vw,139vh ,750vh,450vw );
 
}
.design-center-grid6-inner{
   @include grid($design-grid,$design-grid-height ,75% );
    @include anim(design-downout,2s,1.3s,ease);
}
.design-center-grid7{
  opacity: 0;
  @include father(154vw,139vh ,800vh,422vw );
 
}
.design-center-grid7-inner{
   @include grid($design-grid,$design-grid-height ,68% );
    @include anim(design-downout,2s,1.5s,ease);
}
.design-bottom-left-grid1{
   @include father(154vw,139vh ,1044vh,126vw );
 
}
.design-bottom-left-grid1-inner{
  opacity: 0;
  @include grid($design-grid,$design-grid-height ,70% );
  @include anim(design-downout,2s,2s,ease);
}
.design-bottom-left-grid2{
   @include father(154vw,139vh ,1079vh,244vw );
}
.design-bottom-left-grid2-inner{
  opacity: 0;
  @include grid($design-grid,$design-grid-height ,90% );
  @include anim(design-downout,2s,2.2s,ease);
}
.design-bottom-left-grid3{
 
   @include father(154vw,139vh ,1176vh,308vw );
    
}
.design-bottom-left-grid3-inner{
   opacity: 0;
  @include grid($design-grid,$design-grid-height ,50% );
  @include anim(design-downout,2s,2.4s,ease);
}
.design-bottom-left-grid4{
 
   @include father(154vw,139vh ,1193vh,357vw );
  
}
.design-bottom-left-grid4-inner{
   opacity: 0;
  @include grid($design-grid,$design-grid-height ,100% );
    @include anim(design-downout,2s,2.6s,ease);
}
.design-bottom-left-grid5{
  
   @include father(154vw,139vh ,1151vh,456vw );
   
}
.design-bottom-left-grid5-inner{
  opacity: 0;
  @include grid($design-grid,$design-grid-height ,60% );
   @include anim(design-downout,2s,2.8s,ease);
}
.design-bottom-left-grid6{

   @include father(154vw,139vh ,1230vh,493vw );
   
}
.design-bottom-left-grid6-inner{
    opacity: 0;
  @include grid($design-grid,$design-grid-height ,60% );
   @include anim(design-downout,2s,3s,ease);
}
.design-bottom-left-grid7{
  
   @include father(154vw,139vh ,1113vh,553vw );
  
}
.design-bottom-left-grid7-inner{
  opacity: 0;
  @include grid($design-grid,$design-grid-height ,70% );
    @include anim(design-downout,2s,2.4s,ease);
}
.design-bottom-left-grid8{
  
   @include father(154vw,139vh ,1181vh,593vw );
  
}
.design-bottom-left-grid8-inner{
  opacity: 0;
  @include grid($design-grid,$design-grid-height ,70% );
  @include anim(design-downout,2s,2.6s,ease);
}

</style>