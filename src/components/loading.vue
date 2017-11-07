<template>
  <div class='loading' :change='go'>
      <div class="loading_sun_light">
          <div class="loading_sun_light_inner"></div>
      </div>
       <div class="loading_sun" > 
           <div class="loading_sun_inner"></div>
       </div>
      
       <div class="loading_sprite" >
           <div class="loading_sprite-inner">

           </div>
       </div>
       <div class='loading_wave'></div>
       <div class="loading_button">
           <a href="">
            <div class="loading_button_word">木犀.COM</div>
          </a>
       </div>
  </div>
</template>

<script>
export default {
    data(){
      return {
          light:false
      }
    },
    computed:{
        go(){
            setInterval(()=>{
                 this.$emit('firstPage');
            },6000);
        }
    },
    
  }
</script>

<style lang="scss">
 @import '../sprite/innerSprite.scss';
 @mixin father($width, $height, $top, $left) {
    width: ($width/750*100);
    height: ($height/1334*100);
    position: absolute;
    top: ($top/1334*100);
    left: ($left/750*100);
}
 .loading_sun_light{
     @include father(273vw, 237vh,65vh ,422vw );
     animation: sun_light 1s ease  infinite;
     @keyframes sun_light {
       to{
            opacity: 0;
       }  
     }
 }
 .loading_sun_light_inner{
     @include sprite($sunlighe,$sunlighe-height);
 }
 .loading_sun{
     @include father(53vw, 26vh, 178vh,525vw );
 }
 .loading_sun_inner{
     @include sprite($only-sun,$only-sun-height);
}
 .loading_sprite{
    @include father(347vw, 404vh,312vh ,213vw );
}
.loading_sprite-inner{
    @include sprite($shuoye,$shuoye-height);
}
.loading{
    width: 100%;
    min-height: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center ;
    background-size: cover;
    background-image:url('../assets/asserts_common/loading-background.png'); 
}
.loading_wave{
    position: absolute;
    top: (690vh/1334*100);
    left:(236vw/750*100); 
    -webkit-animation: larg 2s ease forwards;
    @-webkit-keyframes larg {
        to{
            width: (330vw/750*100);
        }
    }
    animation: larg 2s ease forwards;
    @keyframes larg {
        to{
            width: (329vw/750*100);
        }
    }
    width:0;
    height: 7.5px;
    background-size: 15px 15px;
    background-repeat: repeat-x;
    background-image: linear-gradient(135deg,transparent 45%, #CC9900 55%,transparent 60%),linear-gradient(45deg,transparent 45%,#CC9900 55%,transparent 60%);
}
.loading_button{
  @include father(137vw, 43vh, 739vh,298vw );
  border-radius: 5pt;
  border-style: solid;
  border-width: thin;
  border-color:#CC9900;
  border-radius: 5pt;
}
a:link{
  text-decoration: none;
}
.loading_button_word{
  width: 100%;
  font-size: (20vw/750*100);
  border-radius: 5pt;
  color:#CC9900;
  margin: (5vh/1334*100) 0;
  text-align: center;
  border-style: solid;
  border-width: thin;
  border-color:#CC9900;
}
</style>