<template>
<div class="android-page-all">
    <turn-back></turn-back>
        <div class="title">
          安卓组
        </div>
        <center-words class="center-words"></center-words>
          <div class="android-picture"></div>
          <div class="android-introduce">
              界面打造高手<br>
              实现用户交互<br>
              对接后端数据<br>
              完美展现产品
          </div>
            <div class="center_sprite">
                <div class="center_sprite_inner"></div>
            </div>
            <div class="left_yellow_triangle">
              <div class="left_yellow_triangle_inner">

              </div>
            </div>
            <div class="center-grid">
              <div class="center-grid-inner">

              </div>
            </div>
            <div class="left_root">
              <div class="left_root_inner">

              </div>
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
    addred: function() {
      console.log("change to green");
      this.$emit("togreen");
    }
  },
  components: {
    "turn-back": turn_back,
    "center-words":center_words,
  }
};
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

.android-page-all {
    width: 100%;
    min-height: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url('../assets/asserts_common/detail-background.png');
    font-family: 'DejaVu Serif', 'Times New Roman', Times, "PingFang SC", "Hiragino Sans GB", "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", serif;
}


.title{
    text-align: center;
    padding-top: (142vh/1334*100);
    color: rgb(255, 255, 255);
    font-size: (80vw/750*100);
}
.center-word{
   margin-top: (30vh/1334*100)!important;
}
.android-introduce{
    text-align: center;
    font-size: (27vw/750*100);
    color: rgb(255, 255, 255);
    margin-top: (79vh/1334*100);
}








.center-words-inner{
    @include sprite($android-center-word,$android-center-word-height);
}
.center-light{
  animation: fade 2s ease  infinite;
  @include father(128vw,93vh ,533vh ,285vw );
}
.center-light-inner{
  @include sprite($android-center-light,$android-center-light-height);
}
.center_sprite{
    @include father(519vw,503vh,645vh,163vw );
}
.center_sprite_inner{
    @include sprite($android-center-sprite,$android-center-sprite-height);
}
.center-grid{
    
  @include father(356vw,466vh ,598vh ,240vw );
}
.center-grid-inner{
  @include sprite($android-center-grid,$android-center-grid-height);
}
.left_yellow_triangle{
  animation: fade 2s ease  infinite;
  @keyframes fade {
    50%{
      opacity: 0;
    }
    100%{
      opacity: 0.5;
    }
  }
  @include father(117vw, 140vh, 902vh, 55vw);
}
.left_yellow_triangle_inner{
  @include sprite($android-left-yellow-triangle,$android-left-yellow-triangle-height);
}
.left_root{
  @include father(61vw,171vh , 968vh,80vw );
}
.left_root_inner{
  @include sprite($android-left-root,$android-left-root-height);
}
</style>