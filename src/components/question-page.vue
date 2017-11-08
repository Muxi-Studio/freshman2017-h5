<template >
 
      <div class="question-page question_word">
         <div class="question_word1">
           <div class="quesiont_word1_inner_word"></div>
        </div>
        <div class="question_left_ring">
          <div class="question_left_ring_inner"></div>
        </div>
        <div class="question_word2 ">
             你还有什么创意呢? 
        </div>
        <div class="question_grid_all">
          <div class="grid1">
            查成绩算学分<i></i>学而选课<i></i>问答机器人
          </div>
          <div class="grid2">
            一卡通<i></i><i></i>查电费
          </div>
          <div class="grid3">
            SO EASY
          </div>
        </div>    
        <div class="question_word">
          <form>
              <textarea id="typearea" disabled="disabled"  readonly="value" rows="10" cols="40" v-model="text" ></textarea>
          </form>
        </div>
        <div class="question_right_ring">
          <div class="question_right_ring_inner">

          </div>
        </div>
        <div class="question_button" @click="panorama()"> 
          
            <div class="question_button_word">点击进入
              <span class="triangle">>>></span></div>
          
        </div>

      </div>
 
</template>

<script>
export default {
    data(){
      return {
          change:1 ,
          speed:100,
          index:0,
          text_pos:0,
          baseText:',你好先锋军 #,如何成为一个有创造力的产品经理,变身前端高手,作为靠谱的后端工程师提高稳定数据与信息,用Java打造完美的手机端应用, ,# 木犀团队,向你发出邀请,快来实现你的互联网技术梦和产品梦！',
          text:''  
      }
    },
    methods:{
       panorama:function(){
        this.$emit('panorama');
       },
        type_text:function(){  
              let char=this.baseText[this.index];
              if(char!==','){
                  this.speed=100;
                  this.text=this.text.substring(0,this.index);
                  this.text=this.text+char+'_';  
              }
              else{
                  this.text=this.text+'_';
                  this.text=this.text.substring(0,this.index)+'\n';
                  this.speed=1500;   
              }     
        },
        clear:function(){
          clearInterval(this.change);
        },
       
    },
    created:function(){
      setInterval(()=>{
        this.change=setInterval(()=>{
            this.type_text();
            if(this.index<this.baseText.length-1)
              this.index++;
            else
              this.clear();
        },this.speed);
      },3500);      
    }
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

.question-page{
    width: 100%;
    min-height: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url('http://static.muxixyz.com/2017h5/question-background.png');
   
}
.question_word1{
  opacity: 0;
  animation: creat 1s ease forwards;
  -webkit-animation: creat 1s ease forwards;
  -moz-animation: creat 1s ease forwards;
  -o-animation: creat 1s ease forwards;
  @keyframes creat {
    100%{
      opacity: 1;
    }
  }
  @include father(686vw,231vh ,138vh ,94vw );
  text-align: center;
  
}
.quesiont_word1_inner_word{
  @include sprite($loading-head1,$loading-head1-height);
}
.question_left_ring{
  opacity: 0;
  animation: creat 1s ease 1s forwards;
  -webkit-animation: creat 1s ease 1s forwards;
  -moz-animation: creat 1s ease 1s forwards;
  -o-animation: creat 1s ease 1s forwards;
  @include father(167vw,162vh ,354vh,96vw );
}
.question_left_ring_inner{
  @include sprite($question-left-ring,$question-left-ring-height);
}
.question_word2{
  @include father(426vw,56vh ,394vh,174vw );
  font-size:1.2rem; 
  text-align: center;
  color:rgb(255,183,24);
  text-shadow:0 0 10px rgb(255,183,24);
  font-weight: bolder;
  opacity: 0;
  animation: creat 1s ease 1s forwards;
  -webkit-animation:  creat 1s ease 1s forwards;
  -o-animation:  creat 1s ease 1s forwards;
  -moz-animation:  creat 1s ease 1s forwards;
  @keyframes creat {
    100%{
      opacity: 1;
    }
  }
  @-webkit-keyframes creat{
    100%{
      opacity: 1;
    }
  }
  @-moz-keyframes creat {
    100%{
      opacity: 1;
    }
  }
}
i{
 margin-left: 2em;
}
.question_grid_all{
 position: absolute;
 top:(460vh/1334*100);
 left: (72vw/750*100);
 text-align: center;
}
.grid1{
  opacity: 0;
  animation: creat 1s ease 1.4s forwards;
  -webkit-animation:  creat 1s ease 1.4s forwards;
  -o-animation:  creat 1s ease 1.4s forwards;
  -moz-animation:  creat 1s ease 1.4s forwards;
}
.grid2{
  opacity: 0;
  animation: creat 1s ease 1.8s forwards;
  -webkit-animation: creat 1s ease 1.8s forwards;
  -o-animation:  creat 1s ease 1.8s forwards;
  -moz-animation:  creat 1s ease 1.8s forwards;
}
.grid3{
  opacity: 0;
  animation: creat 1s ease 2.3s forwards;
  -webkit-animation: creat 1s ease 2.3s forwards;
  -moz-animation:  creat 1s ease 2.3s forwards;
  -o-animation:  creat 1s ease 2.3s forwards;
}
.grid1,.grid2,.grid3{
  line-height: 250%;
  margin-top: (20vh/1334*100);
  font-size: 0.6em;
  text-shadow:1px 1px 10px rgb(255,183,24);
  color: white;
  height: (50vh/1334*100);
  width: (620vw/750*100);
  background-color: rgba(255,183,24,0.3);
  border-radius: 5px;
}
form{
  opacity: 0;
  animation: creat 1s ease 3.3s forwards;
  -webkit-animation:  creat 1s ease 3.3s forwards;
  -o-animation:  creat 1s ease 3.3s forwards;
  -moz-animation:  creat 1s ease 3.3s forwards;
  @keyframes creat {
    100%{
      opacity: 1;
    }
  }
    position: absolute;
    top: (708vh/1334*100);
    left: (125vw/750*100);
    text-align: center;
    font-family: Arial;
}
textarea{
    resize: none;
    border-style: none;
    text-align:left;
    line-height: (1.26vh/47.06*100);
    height: (355vh/1337*100);
    // padding-top:  (1.16vh/47.06*100);
    background:transparent;
    opacity: 1;
    color: #FAFAFA;
    transition: 1s cubic-bezier(.3,0,.3,1.6);
    font-size: 1em;
    font-weight: bold;
}

.question_right_ring{
  opacity: 0;
  animation: creat 1s ease 9s forwards;
  -webkit-animation:  creat 1s ease 9s forwards;
   -moz-animation:  creat 1s ease 9s forwards;
   -o-animation:  creat 1s ease 9s forwards;
  @include father(71vw,75vh , 932vh,628vw )
}
.question_right_ring_inner{
  @include sprite($question-right-ring,$question-right-ring-height);
}
.question_button{
  background: radial-gradient(rgba(253,175,39,0.2),rgba(253,175,39,0)); 
  opacity: 0;
  animation: creat 1s ease 11s forwards;
  -webkit-animation: creat 1s ease 11s forwards;
  -moz-animation:  creat 1s ease 11s forwards;
  -o-animation:  creat 1s ease 11s forwards;
  display: inline-block;
  position: absolute;
  top: (1092vh/1334*100);
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5pt;
  border-width: 1px;
  border-style: solid;
  border-width: thin;
  border-color:#CC9900;
  height: (81h/1334*100);
  padding: (7vh/1334*100) 0;
  
}

a:link{
  text-decoration: none;
}
.question_button_word{
  
  text-shadow:0px 0px 3px rgb(255,183,24);
  padding:(0.32vh/47.06*100) (0.88vw/26.46*100);
  font-size:(42vw/750*100);
  display: inline-block;  
  border-radius: 5pt;
  color:rgb(191,135,14);
  font-weight: bolder;
  border-style: solid;
  border-width: thin;
  border-color:#CC9900;
  //  (40vh/1334*100);
}

</style>

