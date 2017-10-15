<template >
 
      <div class="question-page question_word">
         <div class="question_word1">
           <div class="quesiont_word1_inner_word"></div>
        </div>
        <div class="question_word2 ">
        <div class="quesiont_word2_inner_word">  </div>
        </div>
        <div class="question_word3">你有什么想法吗?</div>
        <div class="question_tags">
          <div class="question_tag1 tag">随时随地查学分</div>
          <div class="question_tag3 tag">查图书借阅</div>
          <div class="question_tag2 tag">查电费</div>
          <div class="question_tag4 tag">SO EASY</div>
        </div>

       
        <div class="question_word">
          <form>
              <textarea id="typearea" rows="7" cols="40" v-model="text" ></textarea>
          </form>
        </div>
        <div class="question_button">
          <a href="">
            <div class="question_button_word">点击进入
              <span class="triangle">>>></span></div>
          </a>
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
          baseText:',你好先锋军,在这里直接输入你的脑电波,如何成为一个帅气的产品经理,如何称为大佬,如何一起来实现APP',
          text:''  
      }
    },
    methods:{
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
 $width:26.46*100;
 $height:47.06*100;
*{
  padding: 0;
  margin: 0;
}
.question-page{
    width: 100%;
    min-height: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url('../assets/asserts_common/question-background.png');
    font-family: 'DejaVu Serif', 'Times New Roman', Times, "PingFang SC", "Hiragino Sans GB", "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", serif;
}
.question_word1{
  //@include sprite($loading-head1,$loading-head1-height);
  opacity: 0;
  animation: creat 1s ease forwards;
  @keyframes creat {
    100%{
      opacity: 1;
    }
  }
  padding-left: (2.82vw/26.46*100);
  padding-top: (6.28vh/47.06*100);
  width: (22.93vw/26.46*100);
  height: (5.12vh/47.06*100);
}
.quesiont_word1_inner_word{
  @include sprite($loading-head1,$loading-head1-height);
  background-repeat: no-repeat;
}
.question_word2{
  opacity: 0;
  animation: creat 1s ease 1s forwards;
  @keyframes creat {
    100%{
      opacity: 1;
    }
  }
  padding-left: (2.82vw/26.46*100);
  padding-top: (1.18vh/47.06*100);
  width: (22.93vw/26.46*100);
  height: (1.55vh/47.06*100);
  
}
.quesiont_word2_inner_word{
  @include sprite($question-head2,$question-head2-height);
  background-repeat: no-repeat;
}
.question_word3{
  opacity: 0;
  animation: creat 1s ease 2s forwards;
  @keyframes creat {
    100%{
      opacity: 1;
    }
  }
  padding-left: (7.3vw/26.46*100);
  padding-top: (1.66vh/47.06*100);
  width: (13.58vw/26.46*100);
  height: (1.55vh/47.06*100);
  color:rgb(230,230,230);
  font-size: (1.52vw/26.46*100);
}
p{
  display: block;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
}
.question_tags{
  opacity: 0;
  animation: creat 1s ease 3s forwards;
  @keyframes creat {
    100%{
      opacity: 1;
    }
  }
  margin-top: (0.55vh/47.06*100);
  margin-left:(5.79vw/26.46*100);
  margin-right:(5.79vw/26.46*100);
  text-align: center;
}
.tag{
  background:rgb(0,0,0);
  border:solid;
  border-color: rgb(106,106,106);
  border-width: (0.07vh/47.06*100);
  border-radius: 5pt;
  display: inline-block;
  margin-top:(0.25vh/47.06*100);
  text-decoration: none;
  color: rgb(179,179,179);
  padding: (0.39vh/47.06*100);
  font-size: (0.71vw/26.46*100);
  line-height: 1.4em;
  transition: .3s ease;
}
form{
  opacity: 0;
  animation: creat 1s ease 3.3s forwards;
  @keyframes creat {
    100%{
      opacity: 1;
    }
  }
    margin-top: (1.09vh/47.06*100);
    text-align: center;
    font-family: Arial;
}
textarea{
    text-align:center;
    line-height: (1.26vh/47.06*100);
    height: (11.47vh/47.06*100);
    padding-top:  (1.16vh/47.06*100);
    background:transparent;
    opacity: 1;
    color: #FAFAFA;
    transition: 1s cubic-bezier(.3,0,.3,1.6);
    font-size: 10pt;
    font-weight: bold;
}
.question_button{
  display: inline-block;
  position: relative;
  left: 50%;
  transform:translate(-50%);
  margin-top: (6.4vh/47.06*100);
  border-radius: 5pt;
  border-style: solid;
  border-width: thin;
  border-color:#CC9900;
  height: (2.75vh/47.06*100);
  padding: (0.25vh/47.06*100) 0;
}

a:link{
  text-decoration: none;
}
.question_button_word{
  padding:(0.32vh/47.06*100) (0.88vw/26.46*100);
  font-size:(1.48vw/26.46*100);
  display: inline-block;  
  border-radius: 5pt;
  color:rgb(191,135,14);
  font-weight: bolder;
  border-style: solid;
  border-width: thin;
  border-color:#CC9900;
}
</style>

