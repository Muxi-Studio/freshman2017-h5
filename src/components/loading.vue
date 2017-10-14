<template>
  <div class='loading'>
      <div class="loading_sun_all">
       <div class="loading_sun" :class="{'loading_only_sun':light}"></div>
       </div>
       <div class="loading_sprite" ></div>
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
 .loading_sun_all{
     height: 170px;
     margin-left: 60%;
     padding-top: 20%;
     margin-bottom: -10%;
 }
 .loading_sun{
    @include sprite($sun,$sun-height);
    background-repeat:no-repeat;
}
.loading_only_sun{
     @include sprite($only-sun,$only-sun-height);
     background-repeat:no-repeat;
}
 .loading_sprite{
    @include sprite($shouye,$shouye-height);
    background-repeat:no-repeat;
    position: relative;
    left: 50%;
    transform:translate(-45%);
    height:300px;
}
.loading{
    width: 100%;
    min-height: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center ;
    background-size: cover;
    background-image:url('../sprite/sprite.jpg'); 
    font-family: 'DejaVu Serif', 'Times New Roman', Times, "PingFang SC", "Hiragino Sans GB", "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", serif;
}
.loading_wave{
    position: relative;
    left: 50%;
    margin-left: -5rem;
    -webkit-animation: larg 2s ease forwards;
    @-webkit-keyframes larg {
        to{
            width: 10rem;
        }
    }
    animation: larg 2s ease forwards;
    @keyframes larg {
        to{
            width: 10rem;
        }
    }
    width:0;
    height: 7.5px;
    background-size: 15px 15px;
    background-repeat: repeat-x;
    background-image: linear-gradient(135deg,transparent 45%, #CC9900 55%,transparent 60%),linear-gradient(45deg,transparent 45%,#CC9900 55%,transparent 60%);
}
.loading_button{
  display: inline-block;
  position: relative;
  left: 50%;
  transform:translate(-50%);
  margin-top: 1em;
  padding: 5pt 0pt;
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
  font-size: 15pt;
  display: inline-block;  
  border-radius: 5pt;
  color:#CC9900;
  padding: 0 0.83em;
  border-style: solid;
  border-width: thin;
  border-color:#CC9900;
}
</style>