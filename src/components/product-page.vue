<template>
    <div class="product-page-all">

        <a class="turn-back" src="#">
            <div class="turn-back-triangle">

            </div>
            返回星球
        </a>
        <div class="title">
            <div class="title-left">产品组</div>
            <div class="title-right">
                <div class="title-right-top"> 秋招</div>
                <div class="title-right-bottom">介绍</div>
            </div>
        </div>
            <div class="border">
                <div class="border-left"></div>
                <div class="border-bottom"></div>
                <div class="border-top"></div>
                <div class="border-right"></div>
            </div>

            <div class="join-word">来加入</div>

            <div>
                <div class="line1">团队里的参谋长</div>
                <div class="line2">研究产品
                    <i class="space"></i>分析需求</div>
                <div class="line3">产品开发
                    <i class="space"></i>产品迭代</div>
                <div class="line4">做出互联网产品</div>
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
    @include father(189vw,
    26vh,
    50vh,
    40vw);
    color: rgb(230, 230, 230);
}




.border-top:before {
    content: '';
    @include father(0vw, 3vw, 292vh,249vw );
    background-color:rgb(176,105,22);
    @keyframes appendtop {
        to{
            width: (227vw/750*100);
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
</style>

