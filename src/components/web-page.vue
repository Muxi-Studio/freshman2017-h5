<template>
  <div class="web-page-all">
    <turn-back @spanorama="spanorama()"></turn-back>
       <div class="web-border">
                <div class="web-border-left"></div>
                <div class="web-border-bottom"></div>
                <div class="web-border-top"></div>
                <div class="web-border-right"></div>
       </div>
       <div class="web-title">
         <div class="web-title-inner"></div>
       </div>
      <div class="web-feeling-word">
        来感受
      </div>
       <div class="web-center-words">
            界面的缔造者<br>
            产品的后备军<br>
            展现网站特效<br>
            构建数据信息  
       </div>
       <div class="web-center-white-light">
         <div class="web-center-white-light-inner"></div>
       </div>
       <div class="web-center-word-p">
         <div class="web-center-word-p-inner"></div>
       </div>
       <div class="web-center-sprite">
         <div class="web-center-sprite-inner"></div>
       </div>
       <div class="web-bottom-left-word1">
         <div class="web-bottom-left-word1-inner"></div>
       </div>
       <div class="web-bottom-left-word2 web-short-word1">
         <div class="web-bottom-left-word2-inner"></div>
       </div>
       <div class="web-bottom-left-word3">
         <div class="web-bottom-left-word3-inner"></div>
       </div>
       <div class="web-bottom-left-word2-except web-short-word2">
         <div class="web-bottom-left-word2-inner"></div>
       </div>
       <div class="web-bottom-left-word4">
         <div class="web-bottom-left-word4-inner"></div>
       </div>
       <div class="web-bottom-left-word5 web-large-word1">
          <div class="web-bottom-left-word5-inner"></div>
       </div>
            <div class="web-bottom-left-word5 web-large-word2">
          <div class="web-bottom-left-word5-inner"></div>
       </div>
         <div class="web-bottom-left-word2 web-short-word3">
         <div class="web-bottom-left-word2-inner"></div>
       </div>
          <div class="web-bottom-left-word5 web-large-word3">
          <div class="web-bottom-left-word5-inner"></div>
       </div>
          <div class="web-bottom-left-word5 web-large-word4">
          <div class="web-bottom-left-word5-inner"></div>
       </div>
  </div>
</template>

<script>
import turn_back from './turn-back.vue'
export default {
  data() {
    return {};
  },
  methods: {
    spanorama: function() {
      this.$emit("panorama");
    }
  },
  components:{
    'turn-back':turn_back
  }
};
</script>

<style lang="scss">
@import "../sprite/firstPage.scss";
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
@mixin anim($function,$staytime,$way,$time,$end){
  animation: $function $staytime $way $time $end;
  -webkit-animation:  $function $staytime $way $time $end;
  -o-animation:  $function $staytime $way  $time $end;
  -moz-animation:  $function $staytime $way $time $end;
}
.web-page-all {
  width: 100%;
  min-height: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url("http://static.muxixyz.com/2017h5/detail-background.png");
}

.web-title {
  @include father(430vw,90vh,150vh,210vw);
}
.web-title-inner {
  @include sprite($web-title,$web-title-height);
  background-repeat: no-repeat;
}
.web-feeling-word {
  @include pos(308vh,285vw);
  color: rgb(255, 255, 255);
  font-size: (45vw/750*100);
  line-height: 100%;
  letter-spacing: (7vw/750*100);
  
}
.web-border-top:before {
  content: "";
  @include father(0vw, 3vw, 292vh,249vw );
  background-color: rgb(176, 105, 22);
  @keyframes appendtop {
    to {
      width: (229vw/750*100);
    }
  }
  @-webkit-keyframes appendtop {
    to {
      width: (229vw/750*100);
    }
  }
  @include anim(appendtop, 2s ,ease,1s,forwards )
}
.web-border-left:before {
  content: "";
  @include father(3vw,0vh ,292vh,247vw );
  background-color: rgb(176, 105, 22);
  @keyframes appendleft {
    to {
      height: (74vh/1334*100);
    }
  }
  @-webkit-keyframes appendleft {
    to {
      height: (74vh/1334*100);
    }
  }
   @include anim(appendleft, 1s ,ease,0s,forwards );
}
.web-border-right:after {
  content: "";
  @include father(3vw, 0vh,292vh,477vw );
  background-color: rgb(176, 105, 22);
  @keyframes appendright {
    to {
      height: (74vh/1334*100);
    }
  }
  @-webkit-keyframes appendright {
    to {
      height: (74vh/1334*100);
    }
  }
   @include anim(appendright, 2s ,ease,3s,forwards );
  
}
.web-border-bottom:after {
  content: "";
  @include father(0vw, 3vw,364vh,247vw );
  background-color: rgb(176, 105, 22);
  @keyframes appendbottom {
    to {
      width: (229vw/750*100);
    }
  }
  @-webkit-keyframes appendbottom {
    to {
      width: (229vw/750*100);
    }
  }
    @include anim(appendbottom, 2s ,ease,1s,forwards );
 
}
.web-center-words {
  text-align: center;
  padding-top: (410vh/1334*100);
  font-size: (25vw/750*100);
  line-height: (36vh/1334*100);
  color: rgb(255, 255, 255);
  letter-spacing: (8vw/750*100);
}

.web-center-white-light{
   @include father(198vw,124vh ,553vh ,289vw );
   @include anim(change-light, 2s ,ease-in,0.5s,infinite );
    @keyframes change-light {
        to{
            opacity: 0;
            transform: translateY(-10vh/1334*100);
        }
    }
    @-webkit-keyframes change-light {
        to{
            opacity: 0;
            transform: translateY(-10vh/1334*100);
        }
    }
}
.web-center-white-light-inner{
  @include sprite($web-center-white-light,$web-center-white-light-height);
}
.web-center-word-p{
  @include father(62vw,68vh ,636vh ,360vw );
  @include anim(change-word-p ,2s ,ease-in,0s,infinite );
  @keyframes change-word-p {
    50%{
      transform: translateY(-10vh/1334*100);
    }
     to{
          transform: translateY(0vh/1334*100);
        }
  }
   @-webkit-keyframes change-word-p {
    50%{
      transform: translateY(-10vh/1334*100);
    }
     to{
          transform: translateY(0vh/1334*100);
        }
  }
}
.web-center-word-p-inner{
  @include sprite($web-center-word-p,$web-center-word-p-height);
}
.web-center-sprite{
   @include anim(change-sprite ,2s ,ease-in,0s,infinite );
    @keyframes change-sprite {
        50%{
            transform: translateY(20vh/1334*100);
        }
         to{
           
            transform: translateY(0vh/1334*100);
        }
    }
@-webkit-keyframes change-sprite {
        50%{
            transform: translateY(20vh/1334*100);
        }
         to{
           
            transform: translateY(0vh/1334*100);
        }
    }
  @include father(403vw,475vh ,690vh ,212vw);
}
.web-center-sprite-inner{
  @include sprite($web-center-sprite,$web-center-sprite-height);
}
.web-bottom-left-word1{
   @include anim(change-bottom-words ,2s ,ease-in,1s,infinite );
  
@keyframes change-bottom-words {
        50%{
          
            transform: translateY(20vh/1334*100);
        }
         to{
          opacity: 0;
            transform: translateY(0vh/1334*100);
        }
    }
 @-webkit-keyframes change-bottom-words {
        50%{
           opacity: 0;
            transform: translateY(20vh/1334*100);
        }
         to{
          
            transform: translateY(0vh/1334*100);
        }
    }
  @include father(137vw, 357vh,779vh , 137vw);

}
@keyframes change-bottom-words2 {
        50%{
           opacity: 0;
           transform: translateY(20vh/1334*100);
        }
         to{
         
          transform: translateY(0vh/1334*100);
        }
    }
     @-webkit-keyframes change-bottom-words2 {
        50%{
          
            transform: translateY(20vh/1334*100);
        }
         to{
           opacity: 0;
            transform: translateY(0vh/1334*100);
        }
    }
.web-bottom-left-word1-inner{
  @include sprite($web-bottom-left-word1,$web-bottom-left-word1-height);
}
.web-bottom-left-word2{
 @include anim(change-bottom-words2 ,2s ,ease-in,1s,infinite );
 width:(6vw/750*100);
 height:(72vh/1334*100);
}
.web-bottom-left-word2-inner{
  @include sprite($web-bottom-left-word2,$web-bottom-left-word2-height);
}
.web-short-word1{
   @include anim(change-bottom-words2 ,2s ,ease-in,1s,infinite ); 
   @include pos(781vh,220vw);
}
.web-short-word2{
  @include pos(1172vh,326vw);
}
.web-short-word3{
  @include pos(927vh,507vw);
}
.web-bottom-left-word3{
  @include anim(change-bottom-words ,2s ,ease-in,1s,infinite ); 
  @include father(137vw,357vh ,896vh ,218vw);
}
.web-bottom-left-word3-inner{
  @include sprite($web-bottom-left-word1,$web-bottom-left-word1-height);
  height: 80%;
}
.web-bottom-left-word4{
@include anim(change-bottom-words ,2s ,ease-in,1s,infinite ); 
  @include father(126vw,217vh,984vh,382vw);
}
.web-bottom-left-word4-inner{
  @include sprite($web-bottom-left-word4,$web-bottom-left-word4-height);
}
.web-bottom-left-word5{
  @include anim(change-bottom-words ,2s ,ease-in,0s,infinite ); 
   width: (34vw/750*100);
   height: (400vh/1334*100);
}
.web-bottom-left-word5-inner{
  @include sprite($web-bottom-left-word5,$web-bottom-left-word5-height);
}
.web-large-word1{
  @include anim(change-bottom-words ,2s ,ease-in,1s,infinite ); 
  @include pos(981vh,495vw);
  width:(6.3vw/750*100);
  height:(335.7vh/1334*100);
}
.web-bottom-left-word2-except{
@include anim(change-bottom-words2 ,2s ,ease-in,1s,infinite ); 
 width:(9vw/750*100);
 height:(108vh/1334*100);
}
.web-large-word2{
  width:(5.6vw/750*100);
  height:(298.4vh/1334*100);
  @include pos(936vh,479vw);
}
.web-large-word3{
 @include anim(change-bottom-words ,2s ,ease-in,1s,infinite ); 
 @include pos(825vh,557vw);
}
.web-large-word4{
  @include pos(700vh,580vw);
}
</style>