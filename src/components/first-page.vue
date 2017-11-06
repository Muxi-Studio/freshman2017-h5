<template >
      <div class='first-page-all'>
          <div class="top-left-star star">
              <div class="top-left-star-inner"></div>
          </div>
          <div class="top-right-star star">
              <div class="top-right-star-inner"></div>
          </div>
          <div class="top-light">
              <div class="top-light-inner"></div>
          </div>
          <div class="top-sprite">
              <div class="top-sprite-inner"></div>
          </div>
          <div class="dynamic_word">
              <div class="dynamic_word_inner"></div>
          </div>
          <div class="center_sprite">
              <div class="center_sprite_inner">

              </div>
          </div>
          <div class="bottom-right-star">
             <div class="bottom-right-star-inner"></div> 
          </div>
          <div class="grid">
              <table>
                  <tr>
                      <td class=" up"><div class="grid_out"> <div class="grid_inner"></div></div></td>
                      <td class="down"><div class="grid_out"> <div class="grid_inner"></div></div></td>
                      <td class=" up"><div class="grid_out"> <div class="grid_inner"></div></div></td>
                      <td class=" down"><div class="grid_out"> <div class="grid_inner"></div></div></td>
                      <!-- <td class=" up"><div class="grid_out"> <div class="grid_inner"></div></div></td> -->
                  </tr>
                  <tr>
                    <td class="down"><div class="grid_out"> <div class="grid_inner"></div></div></td>
                      <td class="up"><div class="grid_out"> <div class="grid_inner"></div></div></td>
                      <td class="down"><div class="grid_out"> <div class="grid_inner"></div></div></td>
                      <td class=" up"><div class="grid_out"> <div class="grid_inner"></div></div></td>
                      <!-- <td class="down"><div class="grid_out"> <div class="grid_inner"></div></div></td> -->
                  </tr>
              </table>
            
          </div> 
          
          <div class="first-page_button">
           <a href="">
            <div class="first-page_button_word">点击进入>>></div>
          </a>
       </div>
      </div>

</template>

<script>
export default {
    data(){
      return {
	  }
	}
	  ,
    methods:{
   
    },
   mounted: function () {
   
}
   
  }
</script>

<style lang="scss">
@import '../sprite/firstPage.scss';
@mixin father($width,$height,$top,$left){
    width: ($width/750*100);
    height: ($height/1334*100);
    position: absolute;
    top: ($top/1334*100);
    left:($left/750*100) ; 
}
@mixin anim($function,$staytime,$way,$time,$end){
  animation: $function $staytime $way $time $end;
  -webkit-animation:  $function $staytime $way $time $end;
  -o-animation:  $function $staytime $way  $time $end;
  -moz-animation:  $function $staytime $way $time $end;
}
.first-page-all{
    width: 100%;
    min-height: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center ;
    background-size: cover;
    background-image:url('../assets/asserts_common/loading-background.png'); 
    font-family: 'DejaVu Serif', 'Times New Roman', Times, "PingFang SC", "Hiragino Sans GB", "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", serif;
}
.top-left-star{
    @include father(150vw,101vh,75vh,105vw);
}
.top-left-star-inner{
    opacity:0.1;
    @include sprite($first-page-top-left-star,$first-page-top-left-star-height);
}
.top-right-star{
      @include father(72vw,65vh,409vh,528vw);
}
.top-right-star-inner{
    opacity:0.3;
    @include sprite($first-page-top-right-star,$first-page-top-right-star-height);
}
.top-light{
    @include anim(hide ,1s ,ease, 0.5s ,infinite);
    @keyframes hide {
        to{
            opacity: 0;
        }
    }
    @-webkit-keyframes hide {
        to{
            opacity: 0;
        }
    }
    @include father(228vw,137vh,80vh,314vw);
}
.top-light-inner{
    @include sprite($first-page-light,$first-page-light-height);
}
.top-sprite{
    @include father(210vw,349vh,143vh,274vw)
}
.top-sprite-inner{
    @include sprite($first-page-static-word,$first-page-static-word-height);
}
.dynamic_word{
    @include father(124vw,64vh,363vh,276vw);
    @include anim(move, 1s, ease, 0s, infinite);
    @keyframes move {
        50%{
            transform: translateX(-10vw/750*100) translateY(-10vh/1334*100);
        }
        to{
            transform: translateX(0vw) translateY(0vh);
        }
    }
     @-webkit-keyframes move {
        50%{
            transform: translateX(-10vw/750*100) translateY(-10vh/1334*100);
        }
        to{
            transform: translateX(0vw) translateY(0vh);
        }
    }
}
.dynamic_word_inner{
    @include sprite($first-page-dynamic-word,$first-page-dynamic-word-height);
}
.center_sprite{
    @include father(683vw,687vh ,397vh,50vw)
}
.center_sprite_inner{
    @include sprite($first-page-center,$first-page-center-height);
}
.bottom-right-star{
     @include father(72vw,65vh,950vh,614vw);
}
.bottom-right-star-inner{
    opacity:0.3;
    @include sprite($first-page-top-right-star,$first-page-top-right-star-height);
}
table{
    position: absolute;
    top: (796vh/1334*100);
    left: (45vw/750*100);
   
}
tr{
transform: rotateZ(15deg);
-webkit-transform: rotateZ(15deg);
-moz-transform:  rotateZ(15deg);
-o-transform:  rotateZ(15deg);
}
td{
    margin: 0;
    padding: 0;
}
.up{
    transform: translateY(0vh/1334*100);
    -moz-transform: translateY(0vh/1334*100);
    -o-transform: translateY(0vh/1334*100);
    -webkit-transform: translateY(0vh/1334*100);
    @include anim(up, 1s, ease ,0s ,infinite);
    @keyframes up {
        to{
            transform: translateY(-10vh/1334*100);
        }
    }
     @-webkit-keyframes up {
        to{
            transform: translateY(-10vh/1334*100);
        }
    }
}
.down{
    transform:  translateY(-10vh/1334*100);
    -moz-transform: translateY(-10vh/1334*100);
    -o-transform: translateY(-10vh/1334*100);
    -webkit-transform: translateY(-10vh/1334*100);
     @include anim(down, 1s ,ease, 0s ,infinite);
    @keyframes down {
        to{
            transform: translateZ(0vh/1334*100) ;
        }
    }
     @-webkit-keyframes down {
        to{
            transform: translateZ(0vh/1334*100) ;
        }
    }
}

.grid_out{ 
width:(55vw/750*100);
height: (38vh/1334*100);
}
.grid_inner{
    @include sprite($first-page-grid,$first-page-grid-height);
    
}
.first-page_button{
  position: absolute;
  top: (1134vh/1334*100);
  left: (224vw/750*100);
  height: (81vh/1334*100);
  width: (310vw/750*100);
  border-radius: 5pt;
  border-style: solid;
  border-width: thin;
  border-color:#CC9900;
  border-radius: 5pt;
  background: radial-gradient(rgba(253, 175, 39,0.5),rgba(253,175,39,0.2),rgba(253,175,39,0)); 
}
a:link{
  text-decoration: none;
}
.first-page_button_word{
  width: 99%;
  font-size: (46vw/750*100);
  border-radius: 5pt;
  color:rgb(253,175,38);
  text-shadow: 0 0 10px rgb(253,175,38);
  margin: (8vh/1334*100) 0;
  text-align: center;
  border-style: solid;
  border-width: thin;
  border-color:rgb(253,175,38);
}

</style>


