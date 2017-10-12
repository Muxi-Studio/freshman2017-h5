<template >
 
      <div class="question-page question_word">
        
        <h1  class="question_word1" >DO YOU HAVE AN IDEA?</h1>
        <p class="question_word2 ">DO YOU HAVE AN IDEA?</p>
        <p class="question_word3">你有什么想法吗?</p>
       
        <div class="question_tags">
          <div class="question_tag1 tag">随时随地查学分</div>
          <div class="question_tag3 tag">查图书借阅</div>
          <div class="question_tag2 tag">查电费</div>
          <!-- <div class="question_tag4 tag">SO EASY</div> -->
        </div>

       
        <div class="question_word">
          <form>
              <textarea id="typearea" rows="7" cols="40" v-model="text" ></textarea>
          </form>
        </div>
        <div class="question_button">
          <a href="">
            <div class="question_button_word">点击进入>>></div>
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

.question-page{
  
    width: 100%;
    min-height: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url('../sprite/sprite.jpg');
     font-family: 'DejaVu Serif', 'Times New Roman', Times, "PingFang SC", "Hiragino Sans GB", "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", serif;
}
.question_word1{
  opacity: 0;
  animation: creat 1s ease forwards;
  @keyframes creat {
    100%{
      opacity: 1;
    }
  }
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px #fff;
  display: block;
  text-shadow:0 2px 5px #222;
  font-size:20pt;
  color: #FAFAFA;
  text-align: center;
  margin: 0;
  margin-bottom: .5em;
  
  font-weight: bold;
  padding-top: 2.4em;
}
.question_word2{
  opacity: 0;
  animation: creat 1s ease 1s forwards;
  @keyframes creat {
    100%{
      opacity: 1;
    }
  }
  color: #CC9900;
  text-align: center;
  font-weight: bold;
  margin: 0;
  font-size:15pt;
  
}
.question_word3{
  opacity: 0;
  animation: creat 1s ease 2s forwards;
  @keyframes creat {
    100%{
      opacity: 1;
    }
  }
  color:#FAFAFA;
  text-align: center;
  font-weight: bold;
  margin: 0;
 
  margin-top: 1.2em;
  font-weight: bold;
  font-size: 20pt;
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
  margin-top: 1.2em;
  margin-bottom: .83em;
  text-align: center;
}
.tag{
  background:#222;
  padding: 2pt 8pt;
  border-radius: 5pt;
  display: inline-block;
  margin:3pt;
  text-decoration: none;
  color: #aaa;
  font-size: 87%;
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
    text-align: center;
    font-family: Arial;
}
textarea{
  text-align: center;
    line-height: 2em;
    min-height: 15em;
    padding: 5pt 10pt;
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
  margin-top: 3em;
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
.question_button_word{
  font-size: 15pt;
  display: inline-block;  
  border-radius: 5pt;
  color:#CC9900;
  padding: 0.43em;
  border-style: solid;
  border-width: thin;
  border-color:#CC9900;
}
</style>

