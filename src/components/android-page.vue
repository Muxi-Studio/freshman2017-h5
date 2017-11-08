<template>
<div class="android-page-all">
    <turn-back  @spanorama="spanorama()"></turn-back>
        <div class="title">
          安卓组
        </div>
        <center-words></center-words>
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
@import '../sprite/firstPage.scss';
@mixin father($width, $height, $top, $left) {
    width: ($width/750*100);
    height: ($height/1334*100);
    position: fixed;
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
    background-image: url('http://static.muxixyz.com/2017h5/detail-background.png');
}


.title{
    text-align: center;
    padding-top: (142vh/1334*100);
    color: rgb(255, 255, 255);
    font-size: (80vw/750*100);
}
.android-introduce{
    text-align: center;
    font-size: (27vw/750*100);
    color: rgb(255, 255, 255);
    margin-top: (-89vh/1334*100);
    line-height: (50vh/1334*100);
    letter-spacing: 0.3em;
}
.android-picture{
  @include father(153vw,169vh ,370vh ,340vw);
  position: relative;
  top: 0;
  left: (340vw/750*100);
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
  @include father(272vw, 408vh,820vh ,283vw );
}
.android-near-words-inner{
  @include sprite($android-near-words,$android-near-words-height);
}
.android-away-words{
  opacity: 0;
  @include anim(outsecond,2s ,1s ,ease );
  @include father(443vw,516vh , 647vh,200vw )
}
.android-away-words-inner{
  @include sprite($android-away-words,$android-away-words-height);
}
.android-center-sprite{
  @include father(466vw,381vh , 917vh, 180vw);
}
.android-center-sprite-inner{
  @include sprite($android-center-sprite,$android-center-sprite-height);
}
.android-left-picture{
   @include anim(shake,2s ,0s ,ease );
  @include father(153vw,169vh ,802vh ,515vw);
}
.android-left-picture-inner{
   @include sprite($android-center-picture,$android-center-picture-height);
   height: 50%;
}
</style>