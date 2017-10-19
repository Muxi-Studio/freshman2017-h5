<template>
    <div class="product-page-all">

        <a class="turn-back" src="#">
            <div class="turn-back-triangle">
                <div class="turn-back-triangle-inner">

                </div>
            </div>
            <div class="turn-back-word">返回星球</div>
        </a>
        <div class="title">
            <div class="title-inner"></div>
        </div>
            <div class="border">
                <div class="border-left"></div>
                <div class="border-bottom"></div>
                <div class="border-top"></div>
                <div class="border-right"></div>
            </div>
            <div class="join-word">来加入</div>

            <div class="center-words">
                <div class="center-words-inner"></div>
            </div>
            <div class="center_sprite">
                <div class="center_sprite_inner"></div>
            </div>
            <div class="blue_line1"></div>
            <div class="blue_line2"></div>
            <div class="blue_line3"></div>
            <div class="yellow_triangle">
                <div class="yellow_triangle_inner"></div>
            </div>
            <div class="left_white_triangle">
                <div class="left_white_triangle_inner"></div>
            </div>
            <div class="center_white_triangle">
                <div class="center_white_triangle_inner"></div>
            </div>
            <div class="right_white_triangle">
                <div class="right_white_triangle_inner"></div>
            </div>
            
        </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        addgreen: function() {
            this.$emit('toblue');
        }
    }

}
</script>

<style lang="scss">
@import '../sprite/firstPage.scss';
@mixin father($width, $height, $top, $left) {
    width: ($width/750*100);
    height: ($height/1334*100);
    position: absolute;
    top: ($top/1334*100);
    left: ($left/750*100);
}

@mixin pos($top, $left) {
    position: absolute;
    top: ($top/1334*100);
    left: ($left/750*100);
}

.product-page-all {
    width: 100%;
    min-height: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url('../assets/asserts_common/detail-background.png');
    font-family: 'DejaVu Serif', 'Times New Roman', Times, "PingFang SC", "Hiragino Sans GB", "Source Han Sans CN", "Source Han Sans SC", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", serif;
}

.turn-back {
    @include father(187vw,
    30vh,
    52vh,
    41vw);
    color: rgb(230, 230, 230);
}
.turn-back-triangle{
   float: left;
   width: (45vw/750*100);
   height: (31vh/1334*100);
}
.turn-back-triangle-inner{
    @include sprite($product-triangle,$product-triangle-height);
}
.turn-back-word{
    font-weight: bolder;
    font-size: (26vw/750*100);
    @include pos(0vh,63vw);
    line-height:125%;
    letter-spacing: (3vw/750*100);
}
.title{
    @include father(454vw,140.6vh,158vh,176vw);
 
}
.title-inner{
    @include sprite($product-title,$product-title-height);
    background-repeat: no-repeat;
}

.join-word{
    @include pos(308vh,297vw);
    color: rgb(255,255,255);
    font-size:(42vw/750*100);
    line-height: 100%;
    letter-spacing: (7vw/750*100);
}
.border-top:before {
    content: '';
    @include father(0vw, 3vw, 292vh,249vw );
    background-color:rgb(176,105,22);
    @keyframes appendtop {
        to{
            width: (229vw/750*100);
        }
    }
    animation: appendtop 2s ease 1s forwards;
}
.border-left:before {
    content: '';
    @include father(3vw,0vh ,292vh,247vw );
    background-color:rgb(176,105,22);
        @keyframes appendleft {
        to{
            height: (74vh/1334*100);
        }
    }
    animation: appendleft 1s ease  forwards;
}
.border-right:after {
    content: '';
    @include father(3vw, 0vh,292vh,477vw );
    background-color:rgb(176,105,22);
        @keyframes appendright {
        to{
             height: (74vh/1334*100);
        }
    }
    animation: appendright 1s ease 3s forwards;
}

.border-bottom:after {
    content: '';
    @include father(0vw, 3vw,364vh,247vw );
    background-color:rgb(176,105,22);
        @keyframes appendbottom {
        to{
              width: (229vw/750*100);
        }
    }
    animation: appendbottom 2s ease 1s forwards;
}
.center-words{
    @include father(379vw,187vh ,405vh , 178vw);
}
.center-words-inner{
    @include sprite($product-center-word,$product-center-word-height);
}
.center_sprite{
    @include father(701vw,379vh,862vh ,11vw )
}
.center_sprite_inner{
    @include sprite($product-center-sprite,$product-center-sprite-height);
}
.blue_line1::before {
content: "";
height: (5vh/1334*100) ;
width: 0;
border-radius: 0.6em;
display: block;
animation: appendbefore1 2s ease-in  forwards ;
@keyframes appendbefore1 {
    60%{
        border-top: (10vh/1334*100) solid rgb(33,9,84);
        width: (21vw/750*100) ;
    }
    80%{
        width: (21vw/750*100) ;
        border-left: (10vh/1334*100) solid rgb(33,9,84);
        border-top: (10vh/1334*100) solid rgb(33,9,84);
      
    }
    
     100%{
        width: (21vw/750*100) ;
        border-bottom: (10vh/1334*100) solid rgb(33,9,84);
        border-left: (10vh/1334*100) solid rgb(33,9,84);
        border-top: (10vh/1334*100) solid rgb(33,9,84);
      
    }  
}
}

.blue_line1 {
@include pos(1060vh,400vw);
}
.blue_line1::after {
position: relative;
left: (21vw/750*100);
display: block;
content: "";
height: (5vh/1334*100);
width: 0;
border-radius:  0.6em ;
margin-top: (-10vh/1334*100);
animation: appendafter1 2s  ease 1s forwards ;
@keyframes appendafter1 {
    100%{
        width: (65vw/750*100) ;
        border-bottom: (10vh/1334*100) solid rgb(33,9,84);
        border-right: (10vh/1334*100) solid rgb(33,9,84);
        border-top: (10vh/1334*100) solid rgb(33,9,84);
      
    }   
}
}
.blue_line2::before {
content: "";
height: (6vh/1334*100) ;
width: 0;
border-radius: 0.6em;
display: block;
margin-top: 0.35em;
animation: appendbefore2 2s ease-in 2s forwards ;
@keyframes appendbefore2 {
    60%{
        border-top: (10vh/1334*100) solid rgb(33,9,84);
        width: (34vw/750*100) ;
    }
    80%{
        width: (34vw/750*100) ;
        border-left: (10vh/1334*100) solid rgb(33,9,84);
        border-top: (10vh/1334*100) solid rgb(33,9,84);
      
    }
    
     100%{
        width: (34vw/750*100) ;
        border-bottom: (10vh/1334*100) solid rgb(33,9,84);
        border-left: (10vh/1334*100) solid rgb(33,9,84);
        border-top: (10vh/1334*100) solid rgb(33,9,84);
      
    }  
}
}

.blue_line2 {
@include pos(1120vh,117vw);
}
.blue_line2::after {
position: relative;
left: (21vw/750*100);
display: block;
content: "";
height: (6vh/1334*100) ;
width: 0;
border-radius: 0.6em;
margin-top: -(10vh/1334*100);
animation: appendafter2 2s  ease 2s forwards ;
@keyframes appendafter2 {
    100%{
        width: (98vw/750*100) ;
        border-bottom: (10vh/1334*100) solid rgb(33,9,84);
        border-right: (10vh/1334*100) solid rgb(33,9,84);
        border-top: (10vh/1334*100) solid rgb(33,9,84);
      
    }   
}
}
.blue_line3::before {
content: "";
height: (10vh/1334*100) ;
width: 0;
border-radius: 0.6em;
display: block;
margin-top: 0.35em;
animation: appendbefore3 2s ease-in 3s forwards ;
@keyframes appendbefore3 {
    60%{
        border-top: (10vh/1334*100) solid rgb(33,9,84);
        width: (87vw/750*100) ;
    }
    80%{
        width: (87vw/750*100) ;
        border-left: (10vh/1334*100) solid rgb(33,9,84);
        border-top: (10vh/1334*100) solid rgb(33,9,84);
      
    }
    
     100%{
        width: (87vw/750*100) ;
        border-bottom: (10vh/1334*100) solid rgb(33,9,84);
        border-left: (10vh/1334*100) solid rgb(33,9,84);
        border-top: (10vh/1334*100) solid rgb(33,9,84);
      
    }  
}
}

.blue_line3 {
@include pos(1225vh,307vw);
}
.blue_line3::after {
position: relative;
left: (87vw/750*100);
display: block;
content: "";
height: (10vh/1334*100) ;
width: 0;
border-radius: 0.6em;
margin-top: -(10vh/1334*100);
animation: appendafter3 2s  ease 3s forwards ;
@keyframes appendafter3 {
    100%{
        width: (271vw/750*100) ;
        border-bottom: (10vh/1334*100) solid rgb(33,9,84);
        border-right: (10vh/1334*100) solid rgb(33,9,84);
        border-top: (10vh/1334*100) solid rgb(33,9,84);
      
    }   
}
}
.left_white_triangle{
   @include father(35vw,58vh,1006vh ,508vw );
   animation: left_white_move 2s ease infinite;
   @keyframes left_white_move {
       50%{
           @include pos(1006vh ,520vw);
       }
       100%{
           @include pos(1006vh ,507vw);
       }
   }
}
.left_white_triangle_inner{
    @include sprite($product-left-white-triangle,$product-left-white-triangle-height);
    background-repeat: no-repeat;
}
.center_white_triangle{
   @include father(68vw,57vh,1006vh ,552vw );

}
.center_white_triangle_inner{
    @include sprite($product-center-white-triangle,$product-center-white-triangle-height);
    background-repeat: no-repeat;
}
.right_white_triangle{
   @include father(36vw,58vh,1006vh,626vw );
     animation: right_white_move 2s ease 0.08s infinite;
   @keyframes right_white_move {
       50%{
           @include pos(1006vh ,613vw);
       }
       100%{
           @include pos(1006vh ,626vw);
       }
   }

}
.right_white_triangle_inner{
    @include sprite($product-right-white-triangle,$product-right-white-triangle-height);
    background-repeat: no-repeat;
}
.yellow_triangle{
   @include father(71vw,78vh,913vh ,546vw );
   opacity: 0.5;
    animation: yellowchange 2s ease infinite;
    @keyframes yellowchange {
        50%{
            width: (82.5vw/750*100);
            height: (93.6vh/1330*100);
        }
        100%{
            width: (71vw/750*100);
            height: (78vh/1330*100);
        }
    }
}
.yellow_triangle_inner{
    @include sprite($product-yellow-triangle,$product-yellow-triangle-height);
    background-repeat: no-repeat;
}
</style>

