<template>
  <div class='loading'>

       
         <div class="loading_light">
            <div class="loading_sun">
           </div>
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

      }
    },
     methods:{
      
    }
    
  }
</script>

<style lang="sass">
 @import url('../sprite/_sprites_inners.scss');
 
 .loading_sprite{
   
    // @include sprite($img_1)
    // height: 200px;
    // width: auto;
    // margin-top: 2rem;
    // position: relative;
    // left: 50%;
    // transform:translate(-50%);
    // margin-left: -50%;

//     background-image: url('../sprite/sprite.jpg');
}
.loading{
    width: 100%;
    min-height: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center ;
    background-size: cover;
     background-image:url('../sprite/sprite_inners.jpg'); 
    font-family: 'DejaVu Serif', 'Times New Roman', Times, "PingFang SC", "Hiragino Sans GB", "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", serif;
}
.loading_wave{
    position: relative;
    // top: 220px;
    left: 50%;
    margin-left: -5rem;
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
.loading_sun{
    position: relative;
    right: 0;
    bottom: 0;
    width: 60px;
    line-height: 100px;
    background-color: white;
    border-radius: 100px 100px 0 0;
    height: 30px;
    z-index: 3;
}
.loading_light{
    padding-top: 30%;
    margin-left:70%;
}

.loading_button{
  display: inline-block;
  position: relative;
//   top: 300px;
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