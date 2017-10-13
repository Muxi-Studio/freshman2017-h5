<template>
  <div class="wrap">
  <div id="demo">

    <div id="loader"></div>

    <div id="panorama">
      <div class="face f1"></div>
      <div class="face f2"></div>
      <div class="face f3">
      </div>
      <div class="face f4">
        <div class="label" id="l1">
          Public Library
          <hr />
        </div>
      </div>
      <div class="face f5">
        <div class="label" id="l2">
          Hospital
          <hr />
        </div>
      </div>
      <div class="face f6">
        <div class="label" id="l3">
          Middle school
          <hr />
        </div>
      </div>
    </div>
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
      addblue:function(){
        this.$emit('toword');
      }
    },
    created:function(){
        window.requestAnimFrame = (function() {
            return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function(callback) {
            window.setTimeout(callback, 1000 / 60);
             };
         })();
    }
    
  }
</script>

<style lang="scss">
html, body {
  height: 100%; width: 100%;
}
body {
  margin: 0;
  background: #E3E3E3;
  font-family: "Times New Roman", Times, serif;
}

.wrap {
  background: #FFF;
  padding: 10px;
  box-shadow: 0 0 3px #AAA;
  margin: 0 auto;
  height: 400px; width: 400px;
  border-radius: 3px;
}
#demo {
  height: 100%; width: 100%;
  overflow: hidden;
  position: relative;
  -webkit-perspective: 300px;
  -moz-perspective: 300px;
  perspective: 300px;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
#loader {
  position: absolute;
  left: 0; top: 198px;
  height: 4px;
  background: #222;
  border-radius: 2px;
}
#panorama {
  opacity: 0;
  -webkit-transition: opacity 0.5s ease;
  -moz-transition: opacity 0.5s ease;
  transition: opacity 0.5s ease;
}
#panorama, #panorama .face {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
#panorama .face, .label {
  -webkit-backface-visibility:hidden;
  -moz-backface-visibility:hidden;
  backface-visibility:hidden;
}
#panorama .face:nth-child(1) {
  background-image: url("http://cs617727.vk.me/v617727366/942f/DqbS0IRIATA.jpg");
  -webkit-transform: rotateX(90deg) translateZ(-199px);
  -moz-transform: rotateX(90deg) translateZ(-199px);
  transform: rotateX(90deg) translateZ(-199px);
}
#panorama .face:nth-child(2) {
  background-image: url("http://cs617727.vk.me/v617727366/9436/Ig4ieHZXvNo.jpg");
  -webkit-transform: rotateX(-90deg) translateZ(-199px);
  -moz-transform: rotateX(-90deg) translateZ(-199px);
  transform: rotateX(-90deg) translateZ(-199px);
}
#panorama .face:nth-child(3) {
  background-image: url("http://cs617727.vk.me/v617727366/943d/g8xqn7S87kQ.jpg");
  -webkit-transform: rotateY(90deg) translateZ(-199px);
  -moz-transform: rotateY(90deg) translateZ(-199px);
  transform: rotateY(90deg) translateZ(-199px);
}
#panorama .face:nth-child(4) {
  background-image: url("http://cs617727.vk.me/v617727366/9444/DfhvfFfTarY.jpg");
  -webkit-transform: rotateY(-90deg) translateZ(-199px);
  -moz-transform: rotateY(-90deg) translateZ(-199px);
  transform: rotateY(-90deg) translateZ(-199px);

}
#panorama .face:nth-child(5) {
  background-image: url("http://cs617727.vk.me/v617727366/944b/-McVeNNxf-A.jpg");
  -webkit-transform: translateZ(-199px);
  -moz-transform: translateZ(-199px);
  transform: translateZ(-199px);
}
#panorama .face:nth-child(6) {
  background-image: url("http://cs617727.vk.me/v617727366/9452/w1bBTnHANig.jpg");
  -webkit-transform: rotateY(180deg) translateZ(-199px);
  -moz-transform: rotateY(180deg) translateZ(-199px);
  transform: rotateY(180deg) translateZ(-199px);
}

.label {
  position: absolute;
  color: #FFF;
  font-size: 16px;
  text-shadow: 1px 1px 2px #000;
  padding: 3px 3px 3px 0;
  font-style: italic;
}
.label:before, .label hr {
  position: absolute;
  left: 0; bottom: 0;
  height: 2px;
  background: #FFF;
}
.label:before {
  content: '';
  width: 100%;
  box-shadow: 1px 1px 2px rgba(0,0,0,.50);
}
.label hr {
  margin: 0; border: 0;
  box-shadow: 1px -1px 2px rgba(0,0,0,.50);
  -webkit-transform: rotate(110deg);
  -moz-transform: rotate(110deg);
  transform: rotate(110deg);
  -webkit-transform-origin: 1px 1px;
  -moz-transform-origin: 1px 1px;
  transform-origin: 1px 1px;
}
.label hr:before {
  content: '';
  position: absolute;
  right: -3px; top: -3px;
  height: 8px; width: 8px;
  background: #FFF;
  border-radius: 4px;
  box-shadow: 1px -1px 2px rgba(0,0,0,.50);
}

#l1 {
  left: 140px; bottom: 30px;
  -webkit-transform: translateZ(50px);
  -moz-transform: translateZ(50px);
  transform: translateZ(50px);
}
#l1 hr {width: 30px;}

#l2 {
  left: 190px; bottom: 70px;
  -webkit-transform: translateZ(70px);
  -moz-transform: translateZ(70px);
  transform: translateZ(70px);
}
#l2 hr {width: 70px;}

#l3 {
  left: 190px; bottom: 50px;
  -webkit-transform: translateZ(30px);
  -moz-transform: translateZ(30px);
  transform: translateZ(30px);
}
#l3 hr {width: 50px;}
</style>