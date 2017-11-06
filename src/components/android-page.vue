<template>
<div class="android-page-all">
    <turn-back></turn-back>
        <div class="title">
          安卓组
        </div>
        <center-words class="center-words"></center-words>
          <div class="android-picture">
            <div class="android-picture-inner"></div>
          </div>
          <div class="android-introduce">
              界面打造高手<br>
              实现用户交互<br>
              对接后端数据<br>
              完美展现产品
          </div>
          <div class="android-center-picture">
            <div class="android-center-picture-inner"></div>
          </div>
           <div class="android-near-words">
            <div class="android-near-words-inner"></div>
          </div>
           <div class="android-away-words">
            <div class="android-away-words-inner"></div>
          </div>
           <div class="android-center-sprite">
            <div class="android-center-sprite-inner"></div>
          </div>
          <div class="android-left-picture">
            <div class="android-left-picture-inner"></div>
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
@mixin anim($function,$staytime,$time,$way){
  animation: $function $staytime $way $time infinite;
  -webkit-animation:  $function $staytime $way $time infinite;
  -o-animation:  $function $staytime $way  $time infinite;
  -moz-animation:  $function $staytime $way $time infinite;
}
@keyframes out {
   50%{
       opacity: 0;
      transform:  translateY(-1.5vh);
   }
    100%{
    
      transform: translateY(0vh);
    }

}
@-webkit-keyframes out {
    50%{
       opacity: 0;
       transform:  translateY(-1.5vh);
        
   }
    100%{
      transform: translateY(0vh);
    }
}
@keyframes outsecond {
   50%{
      opacity: 1;
      transform:  translateY(-1.5vh);
   }
    100%{
    
      transform: translateY(0vh);
    }

}
@-webkit-keyframes outsecond {
    50%{
       opacity: 1;
       transform:  translateY(-1.5vh);
        
   }
    100%{
      transform: translateY(0vh);
    }
}
@keyframes shake {
   50%{
     transform: translateY(-1.5vh);
   }
    100%{
      transform:  translateY(0vh);
    }

}
@-webkit-keyframes shake {
    50%{
        transform: translateY(-1.5vh);
   }
    100%{
       transform:  translateY(0vh);
    }
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
// .center-word{
//    margin-top: (30vh/1334*100)!important;
// }
.android-introduce{
    text-align: center;
    font-size: (27vw/750*100);
    color: rgb(255, 255, 255);
    margin-top: (79vh/1334*100);
    line-height: (50vh/1334*100);
    letter-spacing: 0.3em;
}
.android-picture{
  @include father(153vw,169vh ,372vh ,340vw);
}
.android-picture-inner{
  @include sprite($android-center-picture,$android-center-picture-height);
  height: 50%;
}

.android-center-picture{
  @include anim(shake,2s ,0s ,ease );
  @include father(153vw,180vh ,640vh ,310vw);
}
.android-center-picture-inner{
   @include sprite($android-center-picture,$android-center-picture-height);
}
.android-near-words{
  @include anim(out,2s ,0s ,ease );
  @include father(272vw, 408vh,820vh ,253vw );
}
.android-near-words-inner{
  @include sprite($android-near-words,$android-near-words-height);
}
.android-away-words{
  opacity: 0;
  @include anim(outsecond,2s ,1s ,ease );
  @include father(443vw,516vh , 647vh,170vw )
}
.android-away-words-inner{
  @include sprite($android-away-words,$android-away-words-height);
}
.android-center-sprite{
  @include father(466vw,381vh , 917vh, 150vw);
}
.android-center-sprite-inner{
  @include sprite($android-center-sprite,$android-center-sprite-height);
}
.android-left-picture{
   @include anim(shake,2s ,0s ,ease );
  @include father(153vw,169vh ,802vh ,525vw);
}
.android-left-picture-inner{
   @include sprite($android-center-picture,$android-center-picture-height);
   height: 50%;
}

// .center-words-inner{
//     @include sprite($android-center-word,$android-center-word-height);
// }
// .center-light{
//   animation: fade 2s ease  infinite;
//   @include father(128vw,93vh ,533vh ,285vw );
// }
// .center-light-inner{
//   @include sprite($android-center-light,$android-center-light-height);
// }
// .center_sprite{
//     @include father(519vw,503vh,645vh,163vw );
// }
// .center_sprite_inner{
//     @include sprite($android-center-sprite,$android-center-sprite-height);
// }
// .center-grid{
    
//   @include father(356vw,466vh ,598vh ,240vw );
// }
// .center-grid-inner{
//   @include sprite($android-center-grid,$android-center-grid-height);
// }
// .left_yellow_triangle{
//   animation: fade 2s ease  infinite;
//   @keyframes fade {
//     50%{
//       opacity: 0;
//     }
//     100%{
//       opacity: 0.5;
//     }
//   }
//   @include father(117vw, 140vh, 902vh, 55vw);
// }
// .left_yellow_triangle_inner{
//   @include sprite($android-left-yellow-triangle,$android-left-yellow-triangle-height);
// }
// .left_root{
//   @include father(61vw,171vh , 968vh,80vw );
// }
// .left_root_inner{
//   @include sprite($android-left-root,$android-left-root-height);
// }
</style>