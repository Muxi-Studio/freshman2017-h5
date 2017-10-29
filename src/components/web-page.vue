<template>
  <div class="web-page-all">
        <div class="turn_back">
        <div class="turn_back_triangle">
          <div class="turn_back_triangle_inner"></div>
        </div>
        <div class="turn_back_word">
          返回星球
        </div>
      </div>
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
                <div class="center-words-inner"></div>
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
export default {
  data() {
    return {};
  },
  methods: {
    addgreen: function() {
      this.$emit("toblue");
    }
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
.turn_back {
  @include father(187vw,
    30vh,
    52vh,
    41vw);
  color: rgb(230, 230, 230);
}
.turn_back_triangle {
  float: left;
  width: (45vw/750*100);
  height: (31vh/1334*100);
}
.turn_back_triangle_inner {
  @include sprite($product-triangle,$product-triangle-height);
}
.turn_back_word {
  font-weight: bolder;
  font-size: (26vw/750*100);
  @include pos(0vh,63vw);
  line-height: 125%;
  letter-spacing: (3vw/750*100);
}
.title {
  @include father(430vw,90vh,141vh,164vw);
}
.title-inner {
  @include sprite($web-title,$web-title-height);
  background-repeat: no-repeat;
}
.feeling-word {
  @include pos(308vh,297vw);
  color: rgb(255, 255, 255);
  font-size: (42vw/750*100);
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
  @include father(183vw,157vh ,375vh , 292vw);
}
.center-words-inner {
  @include sprite($web-center-word,$web-center-word-height);
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
  @include father(371vw,429vh ,707vh ,212vw);
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
  @include father(39vw, 342vh,779vh , 137vw);

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
  @include pos(781vh,193vw);
}
.short-word2{
  @include pos(1172*0.95vh,346*0.95vw);
}
.short-word3{
  @include pos(927vh,557vw);
}
.bottom-left-word3{
  animation: change-bottom-words 2s ease-in 1s infinite; 
  @include father(28vw,281vh ,896vh ,218vw);
}
.bottom-left-word3-inner{
  @include sprite($web-bottom-left-word3,$web-bottom-left-word3-height);
}
.bottom-left-word4{
  animation: change-bottom-words 2s ease-in 1s infinite; 
  @include father(29vw,156vh,984vh,432vw);
}
.bottom-left-word4-inner{
  @include sprite($web-bottom-left-word4,$web-bottom-left-word4-height);
}
.bottom-left-word5{
   animation: change-bottom-words 2s ease-in  infinite; 
   width: (7vw/750*100);
   height: (373vh/1334*100);
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