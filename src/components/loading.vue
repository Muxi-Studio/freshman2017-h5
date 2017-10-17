<template>
  <div class='loading'>
      <div class="loading-star">
          <div class="loading-star-inner">

          </div>
      </div>
       <div class="loading_sun_all" :class="{'loading_only_sun':light}"> 
           <div class="loading_sun_all_inner"  :class="{'loading_only_sun_inner':light}" ></div>
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
    created:function(){
        setInterval(()=>{
            this.light=!this.light;
        },500);
    }
    
  }
</script>

<style lang="scss">
 @import '../sprite/innerSprite.scss';
 *{
     padding: 0;
     margin: 0;
 }
 .loading-star{
     padding-top: (2.47vh/47.06*100);
     margin-left: (3.74vw/26.46*100);
     width: (109vw/750*100);
     height: (101vh/1334*100);
 }
 .loading-star-inner{
     @include sprite($loading-star,$loading-star-height);
     
 }
 .loading_sun_all{
     position: absolute;
     top: (124vh/1334*100);
     right: (90vw/750*100);
     width: (127vw/750*100);
     height: (92.5vw/780*100);
 }
.loading_sun_all_inner{
    @include sprite($sun,$sun-height);
}

.loading_only_sun{
     position: absolute;
     top: (178vh/1334*100);
     right: (124vw/750*100);
     width: (53vw/750*100);
     height: (26vh/1334*100);
    
}
.loading_only_sun_inner{
     @include sprite($only-sun,$only-sun-height);
}
 .loading_sprite{
    position: absolute;
    top: (310vh/1334*100);
    left: (212vw/750*100);
    width:(356vw/750*100);
    height:(392vh/1334*100);
}
.loading_sprite-inner{
    @include sprite($shouye,$shouye-height);
}
.loading{
    width: 100%;
    min-height: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center ;
    background-size: cover;
    background-image:url('../assets/asserts_common/loading-background.png'); 
    font-family: 'DejaVu Serif', 'Times New Roman', Times, "PingFang SC", "Hiragino Sans GB", "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", serif;
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
  position: absolute;
  top: (739vh/1334*100);
  left: (298vw/750*100);
  height: (43vh/1334*100);
  width: (137vw/750*100);
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