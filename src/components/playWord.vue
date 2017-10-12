<template id=''>
  <div>
      <div class='playWord'>
          <form>
              <textarea id="typearea" rows="20" cols="100" ></textarea>
          </form>

      </div>
  </div>
</template>

<script>
export default {
    data(){
      return {
          speed:50,
          index:0,
          text_pos:0,
          tl:new Array(
	"I am so sorry, but I can't find the Page you've requested.",
	"It's possible that you entered the address incorrectly.",
	"If you did enter the address correctly, then it must be my fault.",
	"I am really, really sorry, but I've tried everything I know to find it.",
	"Nothing helped.",
	"I am really depressed about this.",
	"You see, I'm just a web server...",
	"...here I am, brain the size of the universe, trying to serve you a simple web page...",
	"And then it doesn't even exist!",
	"Where does that leave me?!",
	"I mean, I don't even know you.",
	"How should I know what you wanted from me?",
	"You honestly think I can 'guess' what someone I don't even 'know' wants to find here?",
	"",
	"Maybe I should introduce myself... my name is Marvin.",
	"But then again, what is the use of intruducing myself?",
	"You can't tell me your name, because you are in some far off place, sitting in front of your computer.",
	"And that makes me feel lonely.",
	"Do you know what that is like?",
	"",
	"...sigh...",
	"",
	"Man, I am so depressed I could just cry.",
	"And then where would we be, I ask you?",
	"It's not pretty when a web server cries.",
	"And where do you get off telling me what to show anyway?",
	"I'm just a web server...",
	"...and possibly a manic depressive one at that...",
	"So why does that give you the right to tell me what to do?",
	"Huh?",
	"",
	"I am so depressed...",
	"I think I'll crawl off into the trash can and decompose.",
	"I mean, I'm gonna be obsolete in what, two weeks anyway?",
	"What kind of a life is that?",
	"Two effing weeks...",
	"...and then I'll be replaced by a .01 release, that thinks it's God's gift to web servers,",
	"just because it doesn't have some tiddly little security hole with its HTTP POST implementation,",
	"or something like that.",
	"",
	"I'm really sorry to burden you with all this,",
	"I mean, it's not your job to listen to my problems,",
	"and I guess it is my job to go and fetch web pages for you.",
	"But I couldn't get this one.",
	"I am so sorry.",
	"Believe me!",
	"",
	"Maybe I could interest you in another page?",
	"There are a lot out there that are pretty neat, they say,",
	"although none of them were put on 'my' server, of course.",
	"Figures, huh?",
	"That makes me depressed too, since I have to serve them, all day and all night long.",
	"Two weeks of information overload, and then *pffftt*, consigned to the trash.",
	"Again I ask you, what kind of a life is that?",
	"",
	"Now, please let me sulk alone.",
	"",
	"",
	"",
	"",
	"I am so depressed.",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"<connection terminated>"
),
      }
    },
    methods:{
        type_text:function(){
            let contents='';
            let str_length=this.tl[this.index].length;
            let row=Math.max(0,this.index-7);
            while(row<this.index){
                
                contents+=this.tl[row++]+'\r\n';
            
            }
            document.getElementById('typearea').value=contents+this.tl[this.index].substring(0,this.text_pos)+'_';
            if(this.text_pos++===str_length){
                this.text_pos=0;
                this.index++;
                if(this.index!==this.tl.length){
                    str_length=this.tl[this.index].length;
                    setTimeout(this.type_text(),1500);
                }
            }else{
                setTimeout(this.type_text(),this.speed);
            }
        }
    },
   mounted: function () {
    this.$nextTick(function () {
    this.type_text();
  })
}
   
  }
</script>

<style lang="scss">
form{
    font-family: Arial;
    font-size: 14px;
}
// .test-animation{
//     background-image: url('../sprite/sprite.png');
// }
// .test-animation{
//     animation: shake steps(2,start) 1s infinite;
//     -webkit-animation: shake steps(2,start) 1s infinite;
// }
// @keyframes shake {
//      100%{
//         background-position:0 -600px;
//     }
// }
// @-webkit-keyframes shake{
//     100%{
//         background-position:0 -600px;
//     }
// }
</style>


