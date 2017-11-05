<template>
  <div class="design-page-all"> 
    <turn-back></turn-back>
       <div class="title">
        设计组
       </div>
      <center-words></center-words>
      <div class="grid3"></div>
      <div class="center-introuduce">
        成为团队中的达芬奇<br>
        我们熟悉PS&nbsp;&nbsp; AI软件<br>
        勾勒最惊艳视觉界面<br>
        成为天马星空的一员
      </div>
        <!-- <div class="right-smaller-grid smaller-grid1">
         <div class="right-smaller-grid-inner"></div>
        </div>
        <div class="right-smaller-grid smaller-grid2">
           <div class="right-smaller-grid-inner"></div>
        </div>
        <div class="right-bigger-grid bigger-grid1">
           <div class="right-bigger-grid-inner"></div>
        </div>
        <div class="right-bigger-grid bigger-grid2">
           <div class="right-bigger-grid-inner"></div>
        </div>
        <div class="right-yellow-box">
          <div class="right-yellow-box-inner"></div>
        </div>
        <div class="left-white-grid">
          <div class="left-white-grid-inner"></div>
        </div>
         <div class="center-sprite">
                <div class="center-sprite-inner"></div>
         </div>
        <div class="bottom-left-yellow-grid1">
          <div class="bottom-left-yellow-grid1-inner"></div>
        </div>
        <div class="bottom-left-yellow-grid2">
          <div class="bottom-left-yellow-grid2-inner"></div>
        </div>
        <div class="bottom-left-yellow-grid3">
          <div class="bottom-left-yellow-grid3-inner"></div>
        </div>
        <div class="right-bigger-grid bottom-left-like-bigger-grid1">
          <div class="right-bigger-grid-inner"></div>
        </div>
        <div class="right-bigger-grid bottom-left-like-bigger-grid2">
          <div class="right-bigger-grid-inner"></div>
        </div>
        <div class="right-smaller-grid  bottom-left-like-smaller-grid1">
          <div class="right-smaller-grid inner"></div>
        </div>
        <div class="bottom-left-yellow-grid4">
          <div class="bottom-left-yellow-grid1-inner"></div>
        </div>
        <div class="right-smaller-grid smaller-grid3">
           <div class="right-smaller-grid-inner"></div>
        </div>
        <div class="right-smaller-grid smaller-grid4">
           <div class="right-smaller-grid-inner"></div>
        </div>
        <div class="right-bigger-grid bigger-grid3">
           <div class="right-bigger-grid-inner"></div>
        </div>
        <div class="right-bigger-grid bigger-grid4" >
           <div class="right-bigger-grid-inner"></div>
        </div> -->
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
    addblue: function() {
      this.$emit("toword");
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
.design-page-all {
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
  padding-top: (154vh/1334*100);
  text-align: center;
  font-size: (90vw/750*100);
  color: rgb(255, 255, 255);
}
.center-introuduce{
  color: rgb(255, 255, 255);
  margin-top: (80vh/1334*100);
  text-align: center;
  font-size: (32vw/750*100);

}










.right-bigger-grid {
  width: (79vw/750*100);
  height: (42vh/1334*100);
}
.right-bigger-grid-inner {
  @include sprite($design-right-bigger-yellow-grid,$design-right-bigger-yellow-grid-height);
}
.right-smaller-grid {
  width: (35vw/750*100);
  height: (37vh/1334*100);
}
.right-smaller-grid-inner {
  @include sprite($design-right-smaller-yellow-gird,$design-right-smaller-yellow-gird-height);
}
.smaller-grid1 {
  @include pos(669vh,444vw);
  animation: small-grid1-fade 2s ease infinite;
  @keyframes small-grid1-fade {
    to {
      opacity: 0;
      transform: translateX(-20vw/750*100);
    }
  }
}
.smaller-grid2 {
  @include pos(714vh,529vw);
  animation: small-grid2-fade 2s ease infinite;
  @keyframes small-grid2-fade {
    to {
      opacity: 0;
      transform: translateX(20vw/750*100);
    }
  }
}
.smaller-grid3 {
  animation: big-grid3-fade 2s ease 1s infinite;
  @include pos(1152vh,470vw);
}
.smaller-grid4 {
  animation: big-grid3-fade 2s ease 1s infinite;
  @include pos(1197vh,555vw);
}
.bottom-left-like-smaller-grid1 {
  @include pos(1097vh,358vw);
}
.bigger-grid1 {
  animation: big-grid1-fade 2s ease infinite;
  @keyframes big-grid1-fade {
    to {
      opacity: 0;
      transform: translateY(-20vh/1334*100);
    }
  }
  @include pos(650vh,490vw);
}
.bigger-grid2 {
  animation: big-grid2-fade 2s ease 1s infinite;
  @keyframes big-grid2-fade {
    to {
      opacity: 0;
    }
  }
  @include pos(688vh,479vw);
}
.bigger-grid3 {
  @include pos(1133vh,516vw);
  animation: big-grid3-fade 2s ease infinite;
  @keyframes big-grid3-fade {
    to {
      opacity: 0;
      transform: translateY(20vh/1334*100);
    }
  }
}
.bigger-grid4 {
  @include pos(1171vh,506vw);
  animation: big-grid3-fade 2s ease infinite;
}
.bottom-left-like-bigger-grid1 {
  @include pos(1053vh,160vw);
  animation: big-grid3-fade 2s ease infinite;
}
.bottom-left-like-bigger-grid2 {
  @include pos(1049vh,235vw);
  animation: big-grid3-fade 2s ease infinite;
}
.right-yellow-box {
  animation: center-sprite-shake 2s ease-in infinite;
  @include father(415vw,322vh,665vh,280vw);
}
.right-yellow-box-inner {
  @include sprite($design-right-box,$design-right-box-height);
}
.left-white-grid {
  animation: center-sprite-shake 2s ease-in infinite;
  @include father(120vw,102vh ,762vh ,122vw );
}
.left-white-grid-inner {
  @include sprite($design-left-white-gird,$design-left-white-gird-height);
}
.center-sprite {
  animation: center-sprite-shake 2s ease-in infinite;
  @keyframes center-sprite-shake {
    50% {
      transform: translateY(40vh/1330*100);
    }
    100% {
      transform: translateY(0vh/1330*100);
    }
  }
  @include father(590vw,375vh,809vh,55vw );
}
.center-sprite-inner {
  @include sprite($design-center-sprite,$design-center-sprite-height);
}
.bottom-left-yellow-grid1 {
  @include father(33vw,35vh ,1064vh ,88vw );
  animation: big-grid3-fade 2s ease 1s infinite;
}
.bottom-left-yellow-grid1-inner {
  @include sprite($design-bottom-left-gird1,$design-bottom-left-gird1-height);
}
.bottom-left-yellow-grid2 {
  @include father(53vw,56vh ,1100vh ,207vw );
  animation: big-grid3-fade 2s ease 1.5s infinite;
}
.bottom-left-yellow-grid2-inner {
  @include sprite($design-bottom-left-gird2,$design-bottom-left-gird2-height);
}
.bottom-left-yellow-grid3 {
  @include father(27vw,29vh ,1195vh ,270vw );
  animation: big-grid3-fade 2s ease 0.5s infinite;
}
.bottom-left-yellow-grid3-inner {
  @include sprite($design-bottom-left-gird3,$design-bottom-left-gird3-height);
}
.bottom-left-yellow-grid4 {
  animation: big-grid3-fade 2s ease 1s infinite;
  @include father(60vw,63vh ,1169vh ,359vw );
}
.bottom-left-yellow-grid4-inner {
  @include sprite($design-bottom-left-gird4,$design-bottom-left-gird4-height);
}
</style>