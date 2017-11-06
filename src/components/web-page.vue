<template>
  <div class="web-page-all">
    <turn-back></turn-back>
       <div class="border">
                <div class="border-left"></div>
                <div class="border-bottom"></div>
                <div class="border-top"></div>
                <div class="border-right"></div>
       </div>
       <div class="title">
         <div class="title-inner"></div>
       </div>
      <div class="feeling-word">
        来感受
      </div>
       <div class="center-words">
            界面的缔造者<br>
            产品的后备军<br>
            展现网站特效<br>
            构建数据信息  
       </div>
       <div class="center-white-light">
         <div class="center-white-light-inner"></div>
       </div>
       <div class="center-word-p">
         <div class="center-word-p-inner"></div>
       </div>
       <div class="center-sprite">
         <div class="center-sprite-inner"></div>
       </div>
       <div class="bottom-left-word1">
         <div class="bottom-left-word1-inner"></div>
       </div>
       <div class="bottom-left-word2 short-word1">
         <div class="bottom-left-word2-inner"></div>
       </div>
       <div class="bottom-left-word3">
         <div class="bottom-left-word3-inner"></div>
       </div>
       <div class="bottom-left-word2-except short-word2">
         <div class="bottom-left-word2-inner"></div>
       </div>
       <div class="bottom-left-word4">
         <div class="bottom-left-word4-inner"></div>
       </div>
       <div class="bottom-left-word5 large-word1">
          <div class="bottom-left-word5-inner"></div>
       </div>
            <div class="bottom-left-word5 large-word2">
          <div class="bottom-left-word5-inner"></div>
       </div>
         <div class="bottom-left-word2 short-word3">
         <div class="bottom-left-word2-inner"></div>
       </div>
          <div class="bottom-left-word5 large-word3">
          <div class="bottom-left-word5-inner"></div>
       </div>
          <div class="bottom-left-word5 large-word4">
          <div class="bottom-left-word5-inner"></div>
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
    addgreen: function() {
      this.$emit("toblue");
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
.web-page-all {
  width: 100%;
  min-height: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url("../assets/asserts_common/detail-background.png");
  font-family: "DejaVu Serif", "Times New Roman", Times, "PingFang SC",
    "Hiragino Sans GB", "Source Han Sans CN", "Source Han Sans SC",
    "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti",
    SimHei, "WenQuanYi Zen Hei Sharp", serif;
}

.title {
  @include father(430vw,90vh,162vh,164vw);
}
.title-inner {
  @include sprite($web-title,$web-title-height);
  background-repeat: no-repeat;
}
.feeling-word {
  @include pos(308vh,285vw);
  color: rgb(255, 255, 255);
  font-size: (45vw/750*100);
  line-height: 100%;
  letter-spacing: (7vw/750*100);
  
}
.border-top:before {
  content: "";
  @include father(0vw, 3vw, 292vh,249vw );
  background-color: rgb(176, 105, 22);
  @keyframes appendtop {
    to {
      width: (229vw/750*100);
    }
  }
  animation: appendtop 2s ease 1s forwards;
}
.border-left:before {
  content: "";
  @include father(3vw,0vh ,292vh,247vw );
  background-color: rgb(176, 105, 22);
  @keyframes appendleft {
    to {
      height: (74vh/1334*100);
    }
  }
  animation: appendleft 1s ease forwards;
}
.border-right:after {
  content: "";
  @include father(3vw, 0vh,292vh,477vw );
  background-color: rgb(176, 105, 22);
  @keyframes appendright {
    to {
      height: (74vh/1334*100);
    }
  }
  animation: appendright 1s ease 3s forwards;
}
.border-bottom:after {
  content: "";
  @include father(0vw, 3vw,364vh,247vw );
  background-color: rgb(176, 105, 22);
  @keyframes appendbottom {
    to {
      width: (229vw/750*100);
    }
  }
  animation: appendbottom 2s ease 1s forwards;
}
.center-words {
  text-align: center;
  padding-top: (410vh/1334*100);
  font-size: (25vw/750*100);
  line-height: (36vh/1334*100);
  color: rgb(255, 255, 255);
  letter-spacing: (8vw/750*100);
}

.center-white-light{
  @include father(198vw,124vh ,553vh ,289vw );
    animation: change-light 2s ease-in 0.5s infinite; 
    @keyframes change-light {
        to{
            opacity: 0;
            transform: translateY(-10vh/1334*100);
        }
    }
}
.center-white-light-inner{
  @include sprite($web-center-white-light,$web-center-white-light-height);
}
.center-word-p{
  @include father(62vw,68vh ,636vh ,360vw );
  animation: change-word-p 2s ease-in  infinite; 
  @keyframes change-word-p {
    50%{
      transform: translateY(-10vh/1334*100);
    }
     to{
          transform: translateY(0vh/1334*100);
        }
  }
}
.center-word-p-inner{
  @include sprite($web-center-word-p,$web-center-word-p-height);
}
.center-sprite{
  animation: change-sprite 2s ease-in infinite; 
    @keyframes change-sprite {
        50%{
            transform: translateY(20vh/1334*100);
        }
         to{
            transform: translateY(0vh/1334*100);
        }
    }
  @include father(403vw,475vh ,690vh ,212vw);
}
.center-sprite-inner{
  @include sprite($web-center-sprite,$web-center-sprite-height);
}
.bottom-left-word1{
    animation: change-bottom-words 2s ease-in 1s infinite; 
    @keyframes change-bottom-words {
        50%{
               opacity: 0;
            transform: translateY(-20vh/1334*100);
        }
         to{
         
            transform: translateY(0vh/1334*100);
        }
    }
  @include father(137vw, 357vh,779vh , 137vw);

}
.bottom-left-word1-inner{
  @include sprite($web-bottom-left-word1,$web-bottom-left-word1-height);
}
.bottom-left-word2{
 animation: change-bottom-words 2s ease-in infinite; 
 width:(6vw/750*100);
 height:(72vh/1334*100);
}
.bottom-left-word2-inner{
  @include sprite($web-bottom-left-word2,$web-bottom-left-word2-height);
}
.short-word1{
  @include pos(781vh,220vw);
}
.short-word2{
  @include pos(1172vh,346vw);
}
.short-word3{
  @include pos(927vh,557vw);
}
.bottom-left-word3{
  animation: change-bottom-words 2s ease-in 1s infinite; 
  @include father(137vw,357vh ,896vh ,218vw);
}
.bottom-left-word3-inner{
  @include sprite($web-bottom-left-word1,$web-bottom-left-word1-height);
  height: 80%;
}
.bottom-left-word4{
  animation: change-bottom-words 2s ease-in 1s infinite; 
  @include father(126vw,217vh,984vh,432vw);
}
.bottom-left-word4-inner{
  @include sprite($web-bottom-left-word4,$web-bottom-left-word4-height);
}
.bottom-left-word5{
   animation: change-bottom-words 2s ease-in  infinite; 
   width: (34vw/750*100);
   height: (400vh/1334*100);
}
.bottom-left-word5-inner{
  @include sprite($web-bottom-left-word5,$web-bottom-left-word5-height);
}
.large-word1{
   animation: change-bottom-words 2s ease-in 1s infinite; 
  @include pos(981vh,495vw);
  width:(6.3vw/750*100);
  height:(335.7vh/1334*100);
}
.bottom-left-word2-except{
 animation: change-bottom-words 2s ease-in  infinite; 
 width:(9vw/750*100);
 height:(108vh/1334*100);
}
.large-word2{
  width:(5.6vw/750*100);
  height:(298.4vh/1334*100);
  @include pos(936vh,517vw);
}
.large-word3{
   animation: change-bottom-words 2s ease-in 1s infinite; 
  @include pos(825vh,597vw);
}
.large-word4{
  @include pos(700vh,620vw);
}
</style>