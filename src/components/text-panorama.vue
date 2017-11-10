<template>
  <div class="wrap"  @touchstart='Down($event)' @touchmove='Move($event)' @touchend='Up()' >
    <div id="this">
      <div id="loader"></div>

      <div id="panorama">
        <div class="face f1">
         
        </div>
        <div class="face f2">
           <div class="click-star" @click='Join()'>
            
          </div>
        </div>
        <div class="face f3">
            <div class="design-star"  @click='Design()'>
            
          </div>
        </div>
        <div class="face f4">
          <div class="product-star"  @click='Product()'>
            
          </div>
        </div>
        <div class="face f5">
          
        </div>
        <div class="face f6">
          <div class="android-star" @click='Android()'>
            
          </div>
        </div>
        <div class="face f7"></div>
        <div class="face f8">
          <div class="web-star"  @click='Web()'>
            
          </div>
        </div>
     
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaded: 0,
      drag: false,
      speed: 0.5,
      brake: 1,
      r: 0,
      x: 0,
      time: new Date(),
      o: 0,
      p: "",
      images: [
        "http://static.muxixyz.com/2017h5/panorama-background.png",
        "http://static.muxixyz.com/2017h5/panorama-background.png",
        "http://static.muxixyz.com/2017h5/panorama-background.png",
        "http://static.muxixyz.com/2017h5/panorama-background.png",
        "http://static.muxixyz.com/2017h5/panorama-background.png",
        "http://static.muxixyz.com/2017h5/panorama-background.png",
        "http://static.muxixyz.com/2017h5/panorama-background.png",
        "http://static.muxixyz.com/2017h5/panorama-background.png"
      ]
    };
  },
  methods: {
    Web:function(){
      console.log('son-web')
      this.$emit('web');
    },
    Android:function(){
      this.$emit('android');
    },

    Design:function(){
      this.$emit('design');
    },
    Product:function(){
      this.$emit('product');
    },
    Join:function(){
      window.location.href='http://cn.mikecrm.com/uBXlK1v';
    },
    Move: function(e) {
      let startPos = {
        x: e.touches[0].pageX,
        y: e.touches[0].pageY,
        time: +new Date()
      };
      let endPos = {
        x: e.touches[0].pageX - startPos.x,
        y: e.touches[0].pageY - startPos.y
      };
      let isScrolling = Math.abs(endPos.x) < Math.abs(endPos.y) ? 1 : 0; //isScrolling为1时，表示纵向滑动，0为横向滑动
      if (isScrolling === 0) {
        e.preventDefault(); //阻止触摸事件的默认行为，即阻止滚屏
      }
      if (this.drag) {
        this.r = this.x - e.touches[0].clientX;
        this.p.style.webkitTransform = "rotateY(" + this.r * 180 / 400 + "deg)";
        this.p.style.mozTransform = "rotateY(" + this.r * 180 / 400 + "deg)";
        this.p.style.transform = "rotateY(" + this.r * 180 / 400 + "deg)";
      }
    },
    Down: function(e) {
      this.o = this.r;
      this.x = this.r + e.touches[0].clientX;
      this.drag = true;
      this.time = new Date();
    },
    Up: function() {
      if (this.drag) {
        var time = new Date() - this.time;
        var path = this.r - this.o;
        this.speed = path / time * 5;
        this.brake = 1.01;
        this.drag = false;
      }
    }
  },

  created: function() {},

  mounted: function() {
    window.requestAnimFrame = (function() {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    })();
    this.$nextTick(() => {
      this.e = document.getElementById("this");
      this.p = document.getElementById("panorama");
      this.l = document.getElementById("loader");
      for (var i = 0; i < this.images.length; i++) {
        var img = new Image();
        this.loaded++;
        this.l.style.width = this.loaded / this.images.length * 100 + "%";
        if (this.loaded === this.images.length) {
          this.l.style.opacity = 0;
          this.p.style.opacity = 1;
        }
        img.src = this.images[i];
      }
      let self = this;
      let spin = function() {
        if (!self.drag) {
          self.r += self.speed;
          self.speed /= self.brake;
          self.p.style.webkitTransform =
            "rotateY(" + self.r * 180 / 400 + "deg)";
          self.p.style.mozTransform = "rotateY(" + self.r * 180 / 400 + "deg)";
          self.p.style.transform = "rotateY(" + self.r * 180 / 400 + "deg)";
        }
        window.requestAnimFrame(spin);
      };
      window.requestAnimFrame(spin);
    });
  }
};
</script>

<style lang="scss">
@import "../sprite/firstPage.scss";
.wrap {
  background: #fff;
  box-shadow: 0 0 3px #aaa;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  border-radius: 3px;
}

#this {
  height: 100%;
  width: 100%;
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
  left: 0;
  top: 198px;
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

#panorama,
#panorama .face {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

#panorama .face,
.label {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
}
.click-star {
  width: 80%;
  height: 80%;
  background-position-x: 80%;
  background-position-y: 80%;
  background-image: url("http://static.muxixyz.com/2017h5/panoramic-click-star.png");
  background-size: 60%;
  background-repeat: no-repeat;
}
.product-star {
  width: 80%;
  height: 80%;
  background-position-x: 80%;
  background-position-y: 80%;
  background-image: url("http://static.muxixyz.com/2017h5/panoramic-product-star.png");
  background-size: 60%;
  background-repeat: no-repeat;
}
.design-star {
  width: 80%;
  height: 80%;
  background-position-x: 80%;
  background-position-y: 80%;
  background-image: url("http://static.muxixyz.com/2017h5/panoramic-design-star.png");
  background-size: 60%;
  background-repeat: no-repeat;
}
.android-star {
  width: 80%;
  height: 80%;
  background-position-x: 80%;
  background-position-y: 80%;
  background-image: url("http://static.muxixyz.com/2017h5/panoramic-android-star.png");
  background-size: 60%;
  background-repeat: no-repeat;
}
.web-star {
  width: 80%;
  height: 80%;
  background-position-x: 80%;
  background-position-y: 80%;
  background-image: url("http://static.muxixyz.com/2017h5/panoramic-web-star.png");
  background-size: 60%;
  background-repeat: no-repeat;
}
#panorama .face:nth-child(1) {
  // background-image: url("http://cs617727.vk.me/v617727366/942f/DqbS0IRIATA.jpg");
  background-image: url("http://static.muxixyz.com/2017h5/panorama-background.png");
  -webkit-transform: rotateX(90deg) translateZ(-155px);
  -moz-transform: rotateX(90deg) translateZ(-155px);
  transform: rotateX(90deg) translateZ(-30vh);
}

#panorama .face:nth-child(2) {
  //background-image: url("http://cs617727.vk.me/v617727366/9436/Ig4ieHZXvNo.jpg");
  background-image: url("http://static.muxixyz.com/2017h5/panorama-background.png");
  -webkit-transform: rotateX(-90deg) translateZ(-155px);
  -moz-transform: rotateX(-90deg) translateZ(-155px);
  transform: rotateX(-90deg) translateZ(-30vh);
}

#panorama .face:nth-child(3) {
  // background-image: url("http://cs617727.vk.me/v617727366/943d/g8xqn7S87kQ.jpg");
  background-image: url("http://static.muxixyz.com/2017h5/panorama-background.png");
  -webkit-transform: rotateY(90deg) translateZ(-155px);
  -moz-transform: rotateY(90deg) translateZ(-155px);
  transform: rotateY(-10deg) translateZ(-155px);
}

#panorama .face:nth-child(4) {
  // background-image: url("http://cs617727.vk.me/v617727366/9444/DfhvfFfTarY.jpg");
  background-image: url("http://static.muxixyz.com/2017h5/panorama-background.png");
  -webkit-transform: rotateY(-90deg) translateZ(-155px);
  -moz-transform: rotateY(-90deg) translateZ(-155px);
  transform: rotateY(-90deg) translateZ(-155px);
}

#panorama .face:nth-child(5) {
  //background-image: url("http://cs617727.vk.me/v617727366/944b/-McVeNNxf-A.jpg");
  background-image: url("http://static.muxixyz.com/2017h5/panorama-background.png");
  -webkit-transform: translateZ(-155px);
  -moz-transform: translateZ(-155px);
  transform: translateZ(-170px) ;
}

#panorama .face:nth-child(6) {
  // background-image: url("http://cs617727.vk.me/v617727366/9452/w1bBTnHANig.jpg");
  background-image: url("http://static.muxixyz.com/2017h5/panorama-background.png");
  -webkit-transform: rotateY(180deg) translateZ(-155px);
  -moz-transform: rotateY(180deg) translateZ(-155px);
  transform: rotateY(-180deg) translateZ(-155px);
}

#panorama .face:nth-child(7) {
  // background-image: url("http://cs617727.vk.me/v617727366/943d/g8xqn7S87kQ.jpg");
  background-image: url("http://static.muxixyz.com/2017h5/panorama-background.png");
  -webkit-transform: rotateY(45deg) translateZ(-165px);
  -moz-transform: rotateY(45deg) translateZ(-165px);
  transform: rotateY(45deg) translateZ(-165px);
}

#panorama .face:nth-child(8) {
  // background-image: url("http://cs617727.vk.me/v617727366/9444/DfhvfFfTarY.jpg");
  background-image: url("http://static.muxixyz.com/2017h5/panorama-background.png");
  -webkit-transform: rotateY(-270deg) translateZ(-155px);
  -moz-transform: rotateY(-270deg) translateZ(-155px);
  transform: rotateY(-270deg) translateZ(-155px);
}


</style>