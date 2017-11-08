<template>
  <div class="design-page-all"> 
    <turn-back @spanorama="spanorama()"></turn-back>
       <div class="title">
        设计组
       </div>
      <center-words ></center-words>
      <div class="top-grid">
        <div class="top-grid-inner"></div>
      </div>
      <div class="center-introuduce">
        成为团队中的达芬奇<br>
        我们熟悉PS&nbsp;&nbsp; AI软件<br>
        勾勒最惊艳视觉界面<br>
        成为天马星空的一员
      </div>
       <div class="center-grid1">
         <div class="center-grid1-inner"></div>
       </div>
       <div class="center-grid2">
         <div class="center-grid2-inner"></div>
       </div>
       <div class="center-grid3">
         <div class="center-grid3-inner"></div>
       </div>
       <div class="center-grid4">
         <div class="center-grid4-inner"></div>
       </div>
       <div class="center-grid5">
         <div class="center-grid5-inner"></div>
       </div>
       <div class="center-grid6">
         <div class="center-grid6-inner"></div>
       </div>
       <div class="center-grid7">
         <div class="center-grid7-inner"></div>
       </div>
       <div class="center-sprite">
         <div class="center-sprite-inner"></div>
       </div>
       <div class="bottom-left-grid1">
         <div class="bottom-left-grid1-inner"></div>
       </div>
       <div class="bottom-left-grid2">
         <div class="bottom-left-grid2-inner"></div>
       </div>
        <div class="bottom-left-grid3">
         <div class="bottom-left-grid3-inner"></div>
       </div>
       <div class="bottom-left-grid4">
         <div class="bottom-left-grid4-inner"></div>
       </div>
        <div class="bottom-left-grid5">
         <div class="bottom-left-grid5-inner"></div>
       </div>
       <div class="bottom-left-grid6">
         <div class="bottom-left-grid6-inner"></div>
       </div>
        <div class="bottom-left-grid7">
         <div class="bottom-left-grid7-inner"></div>
       </div>
       <div class="bottom-left-grid8">
         <div class="bottom-left-grid8-inner"></div>
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
#center-word{
  padding-top: (15vh/1334*100);
}
.title {
  padding-top: (154vh/1334*100);
  text-align: center;
  font-size: (90vw/750*100);
  color: rgb(255, 255, 255);
  margin-left: -5vw;
}
.center-introuduce{
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
@keyframes shake {
   50%{
     transform: translateX(2.5vw) translateY(2.5vh);
   }
    100%{
       transform: translateX(0vw) translateY(0vh);
    }

}
@-webkit-keyframes shake {
    50%{
        transform: translateX(2.5vw) translateY(2.5vh);
   }
    100%{
       transform: translateX(0vw) translateY(0vh);
    }
}
@keyframes downout {
   50%{
     opacity: 1;
    
   }
    100%{
       transform:translateY(5vh);
       opacity: 0;
    }

}
@-webkit-keyframes downout {
   50%{
     opacity: 0;
   }
    100%{
       transform:translateY(5vh);
       opacity: 1;
    }
}


.center-sprite{
  @include father(666vw,421vh , 807vh, 90vw);
  @include anim(shake,2s,ease,0s);
}
.center-sprite-inner{
  @include sprite($design-center-sprite,$design-center-sprite-height);
}
.top-grid{
  @include father(154vw,139vh ,384vh,325vw );
  position: relative;
  top: (-10vh/1334*100);
  left: (330vw/750*100);
}
.top-grid-inner{
  @include grid($design-grid,$design-grid-height ,70% );
}

.center-grid1{
  opacity: 1;
  @include father(154vw,139vh ,653vh,320vw );
  @include anim(downout,2s,0s,ease);
}
.center-grid1-inner{
   @include grid($design-grid,$design-grid-height ,70% );
}
.center-grid2{
  opacity: 0;
  @include father(154vw,139vh ,699vh,350vw );
  @include anim(downout,2s,0.5s,ease);
}
.center-grid2-inner{
   @include grid($design-grid,$design-grid-height ,69% );
}
.center-grid3{
  opacity: 0;
  @include father(154vw,139vh ,723vh,290vw );
  @include anim(downout,2s,0.7s,ease);
}
.center-grid3-inner{
   @include grid($design-grid,$design-grid-height ,65% );
}
.center-grid4{
  opacity: 0;
  @include father(154vw,139vh ,770vh,330vw );
  @include anim(downout,2s,0.9s,ease);
}
.center-grid4-inner{
   @include grid($design-grid,$design-grid-height ,75% );
}

.center-grid5{
  opacity: 0;
  @include father(154vw,139vh ,740vh,380vw );
  @include anim(downout,2s,1.1s,ease);
}
.center-grid5-inner{
   @include grid($design-grid,$design-grid-height ,69% );
}
.center-grid6{
  opacity: 0;
  @include father(154vw,139vh ,750vh,450vw );
  @include anim(downout,2s,1.3s,ease);
}
.center-grid6-inner{
   @include grid($design-grid,$design-grid-height ,75% );
}
.center-grid7{
  opacity: 0;
  @include father(154vw,139vh ,800vh,422vw );
  @include anim(downout,2s,1.5s,ease);
}
.center-grid7-inner{
   @include grid($design-grid,$design-grid-height ,68% );
}
.bottom-left-grid1{
  opacity: 0;
   @include father(154vw,139vh ,1044vh,126vw );
   @include anim(downout,2s,2s,ease);
}
.bottom-left-grid1-inner{
  @include grid($design-grid,$design-grid-height ,70% );
}
.bottom-left-grid2{
  opacity: 0;
   @include father(154vw,139vh ,1079vh,244vw );
    @include anim(downout,2s,2.2s,ease);
}
.bottom-left-grid2-inner{
  @include grid($design-grid,$design-grid-height ,90% );
}
.bottom-left-grid3{
  opacity: 0;
   @include father(154vw,139vh ,1176vh,308vw );
    @include anim(downout,2s,2.4s,ease);
}
.bottom-left-grid3-inner{
  @include grid($design-grid,$design-grid-height ,50% );
}
.bottom-left-grid4{
  opacity: 0;
   @include father(154vw,139vh ,1193vh,357vw );
    @include anim(downout,2s,2.6s,ease);
}
.bottom-left-grid4-inner{
  @include grid($design-grid,$design-grid-height ,100% );
}
.bottom-left-grid5{
  opacity: 0;
   @include father(154vw,139vh ,1151vh,456vw );
    @include anim(downout,2s,2.8s,ease);
}
.bottom-left-grid5-inner{
  @include grid($design-grid,$design-grid-height ,60% );
}
.bottom-left-grid6{
  opacity: 0;
   @include father(154vw,139vh ,1230vh,493vw );
    @include anim(downout,2s,3s,ease);
}
.bottom-left-grid6-inner{
  @include grid($design-grid,$design-grid-height ,60% );
}
.bottom-left-grid7{
  opacity: 0;
   @include father(154vw,139vh ,1113vh,553vw );
    @include anim(downout,2s,2.4s,ease);
}
.bottom-left-grid7-inner{
  @include grid($design-grid,$design-grid-height ,70% );
}
.bottom-left-grid8{
  opacity: 0;
   @include father(154vw,139vh ,1181vh,593vw );
    @include anim(downout,2s,2.6s,ease);
}
.bottom-left-grid8-inner{
  @include grid($design-grid,$design-grid-height ,70% );
}

</style>