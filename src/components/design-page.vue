<template>
  <div class="design-page-all"> 
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
      <div class="waiting-word">
        等着你
      </div>
       <div class="center-words">
                <div class="center-words-inner"></div>
        </div>
        <div class="right-smaller-grid smaller-grid1">
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
        </div>
  </div>
</template>

<script>
import turn_back from './turn-back.vue'
export default {
    data(){
      return {

      }
    },
     methods:{
      addblue:function(){
        this.$emit('toword');
      }
    },
    components:{
      'turn-back':turn_back
    }
    
  }
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
.design-page-all {
    width: 100%;
    min-height: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url('../assets/asserts_common/detail-background.png');
    font-family: 'DejaVu Serif', 'Times New Roman', Times, "PingFang SC", "Hiragino Sans GB", "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", serif;
}

// .turn_back {
//     @include father(187vw,
//     30vh,
//     52vh,
//     41vw);
//     color: rgb(230, 230, 230);
// }
// .turn_back_triangle{
//    float: left;
//    width: (45vw/750*100);
//    height: (31vh/1334*100);
// }
// .turn_back_triangle_inner{
//     @include sprite($product-triangle,$product-triangle-height);
// }
// .turn_back_word{
//     font-weight: bolder;
//     font-size: (26vw/750*100);
//     @include pos(0vh,63vw);
//     line-height:125%;
//     letter-spacing: (3vw/750*100);
// }
.title{
    @include father(395vw,91.5vh,144vh,174vw);
 
}
.title-inner{
    @include sprite($design-title,$design-title-height);
    background-repeat: no-repeat;
}

.waiting-word{
    @include pos(308vh,297vw);
    color: rgb(255,255,255);
    font-size:(42vw/750*100);
    line-height: 100%;
    letter-spacing: (7vw/750*100);
}
.border-top:before {
    content: '';
    @include father(0vw, 3vw, 292vh,249vw );
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
    @include father(3vw,0vh ,292vh,247vw );
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
    @include father(3vw, 0vh,292vh,477vw );
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
    @include father(0vw, 3vw,364vh,247vw );
    background-color:rgb(176,105,22);
        @keyframes appendbottom {
        to{
              width: (229vw/750*100);
        }
    }
    animation: appendbottom 2s ease 1s forwards;
}
.center-words{
    @include father(425vw,169vh ,384vh , 175vw);
}
.center-words-inner{
    @include sprite($design-center-word,$design-center-word-height);
}
.right-bigger-grid{
  width: (79vw/750*100);
  height: (42vh/1334*100);
}
.right-bigger-grid-inner{
  @include sprite($design-right-bigger-yellow-grid,$design-right-bigger-yellow-grid-height);
}
.right-smaller-grid{
  width: (35vw/750*100);
  height: (37vh/1334*100);
}
.right-smaller-grid-inner{
  @include sprite($design-right-smaller-yellow-gird,$design-right-smaller-yellow-gird-height);
}
.smaller-grid1{
  @include pos(669vh,444vw);
  animation: small-grid1-fade 2s ease infinite;
  @keyframes small-grid1-fade {
    to{
      opacity: 0;
      transform: translateX(-20vw/750*100);
    }
  }
}
.smaller-grid2{
  @include pos(714vh,529vw);
  animation: small-grid2-fade 2s ease infinite;
  @keyframes small-grid2-fade {
    to{
      opacity: 0;
      transform: translateX(20vw/750*100);
    }
  }
}
.smaller-grid3{
   animation: big-grid3-fade 2s  ease 1s infinite;
  @include pos(1152vh,470vw);
}
.smaller-grid4{
   animation: big-grid3-fade 2s  ease 1s infinite;
  @include pos(1197vh,555vw);
}
.bottom-left-like-smaller-grid1{
   @include pos(1097vh,358vw);
}
.bigger-grid1{
  animation: big-grid1-fade 2s ease infinite;
  @keyframes big-grid1-fade {
   to{
      opacity: 0;
      transform: translateY(-20vh/1334*100);
    }
  }
  @include pos(650vh,490vw);
}
.bigger-grid2{
  animation: big-grid2-fade 2s ease 1s infinite;
  @keyframes big-grid2-fade {
   to{
      opacity: 0;
    }
  }
  @include pos(688vh,479vw);

}
.bigger-grid3{
  @include pos(1133vh,516vw);
  animation: big-grid3-fade 2s  ease infinite;
  @keyframes big-grid3-fade {
    to{
      opacity: 0;
      transform: translateY(20vh/1334*100);
    }
  }
}
.bigger-grid4{
  @include pos(1171vh,506vw);
   animation: big-grid3-fade 2s  ease infinite;
}
.bottom-left-like-bigger-grid1{
  @include pos(1053vh,160vw);
   animation: big-grid3-fade 2s  ease infinite;
}
.bottom-left-like-bigger-grid2{
  @include pos(1049vh,235vw);
   animation: big-grid3-fade 2s  ease infinite;
}
.right-yellow-box{
    animation: center-sprite-shake 2s ease-in  infinite;
  @include father(415vw,322vh,665vh,280vw);
}
.right-yellow-box-inner{
  @include sprite($design-right-box,$design-right-box-height);
}
.left-white-grid{
  animation: center-sprite-shake 2s ease-in  infinite;
  @include father(120vw,102vh ,762vh ,122vw );
}
.left-white-grid-inner{
  @include sprite($design-left-white-gird,$design-left-white-gird-height);
}
.center-sprite{
  animation: center-sprite-shake 2s ease-in infinite;
  @keyframes center-sprite-shake {
    50%{
      transform: translateY(40vh/1330*100);
    }
    100%{
      transform: translateY(0vh/1330*100);
    }
  }
  @include father(590vw,375vh,809vh,55vw );

}
.center-sprite-inner{
  @include sprite($design-center-sprite,$design-center-sprite-height);
}
.bottom-left-yellow-grid1{
  @include father(33vw,35vh ,1064vh ,88vw );
   animation: big-grid3-fade 2s  ease 1s infinite;
}
.bottom-left-yellow-grid1-inner{
  @include sprite($design-bottom-left-gird1,$design-bottom-left-gird1-height);
}
.bottom-left-yellow-grid2{
  @include father(53vw,56vh ,1100vh ,207vw );
   animation: big-grid3-fade 2s  ease 1.5s infinite;
}
.bottom-left-yellow-grid2-inner{
  @include sprite($design-bottom-left-gird2,$design-bottom-left-gird2-height);
}
.bottom-left-yellow-grid3{
  @include father(27vw,29vh ,1195vh ,270vw );
   animation: big-grid3-fade 2s  ease 0.5s infinite;
}
.bottom-left-yellow-grid3-inner{
  @include sprite($design-bottom-left-gird3,$design-bottom-left-gird3-height);
}
.bottom-left-yellow-grid4{
   animation: big-grid3-fade 2s  ease 1s infinite;
  @include father(60vw,63vh ,1169vh ,359vw );
}
.bottom-left-yellow-grid4-inner{
  @include sprite($design-bottom-left-gird4,$design-bottom-left-gird4-height);
}


</style>