<template>
<div class="android-page-all">
      <a class="turn-back" src="#">
            <div class="turn-back-triangle">
                <div class="turn-back-triangle-inner">

                </div>
            </div>
            <div class="turn-back-word">返回星球</div>
        </a>
        <div class="title">
            <div class="title-inner"></div>
        </div>
            <div class="border">
                <div class="border-left"></div>
                <div class="border-bottom"></div>
                <div class="border-top"></div>
                <div class="border-right"></div>
            </div>
            <div class="welcome-word">欢迎你</div>

            <div class="center-words">
                <div class="center-words-inner"></div>
            </div>
            <div class="center-light">
              <div class="center-light-inner">

              </div>
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
export default {
  data() {
    return {};
  },
  methods: {
    addred: function() {
      console.log("change to green");
      this.$emit("togreen");
    }
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

.turn-back {
    @include father(187vw,
    30vh,
    52vh,
    41vw);
    color: rgb(230, 230, 230);
}
.turn-back-triangle{
   float: left;
   width: (45vw/750*100);
   height: (31vh/1334*100);
}
.turn-back-triangle-inner{
    @include sprite($product-triangle,$product-triangle-height);
}
.turn-back-word{
    font-weight: bolder;
    font-size: (26vw/750*100);
    @include pos(0vh,63vw);
    line-height:125%;
    letter-spacing: (3vw/750*100);
}
.title{
    @include father(407vw,93vh,144vh,163vw);
 
}
.title-inner{
    @include sprite($android-title,$android-title-height);
    background-repeat: no-repeat;
}

.welcome-word{
    @include pos(298vh,290vw);
    color: rgb(255,255,255);
    font-size:(42vw/750*100);
    line-height: 100%;
    letter-spacing: (7vw/750*100);
}
.border-top:before {
    content: '';
    @include father(0vw, 3vw, 282vh,247vw );
    background-color:rgb(176,105,22);
    @keyframes appendtop {
        to{
            width: (229vw/750*100);
        }
    }
    animation: appendtop 2s ease 1s forwards;
}
.border-left:before {
    content: '';
    @include father(3vw,0vh ,281vh,247vw );
    background-color:rgb(176,105,22);
        @keyframes appendleft {
        to{
            height: (74vh/1334*100);
        }
    }
    animation: appendleft 1s ease  forwards;
}
.border-right:after {
    content: '';
    @include father(3vw, 0vh,281vh,477vw );
    background-color:rgb(176,105,22);
        @keyframes appendright {
        to{
             height: (74vh/1334*100);
        }
    }
    animation: appendright 1s ease 3s forwards;
}

.border-bottom:after {
    content: '';
    @include father(0vw, 3vw,353vh,247vw );
    background-color:rgb(176,105,22);
        @keyframes appendbottom {
        to{
              width: (229vw/750*100);
        }
    }
    animation: appendbottom 2s ease 1s forwards;
}
.center-words{
    @include father(345vw,136vh,372vh , 205vw);
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