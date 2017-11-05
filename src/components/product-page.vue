<template>
    <div class="product-page-all">
       <turn-back></turn-back>
        <div class="title">
          产品组
        </div>
            <center-words></center-words>
            <div class="diamond">
                <div class="diamond_inner"></div>
            </div>
            <div class="center-introduce">
                产品的引领者 团队的粘合剂<br>
                <i></i>不断迸发的产品灵感<br>
                <i></i>技术与人文紧密接轨<br>
                <i></i>以需求分析精品分析<br>
                <i></i>到项目开发流程把控<br>
                最终实现产品运营 步步迭代<br>
            </div>
           <!-- continue -->
            <div class="center-introduce-right-insert">
              

                来<br>
                感<br>
                受<br>
            </div>
            <div class="center_sprite">
                <div class="center_sprite_inner"></div>
            </div>
            <div class="bottom-word">
            <div class="bottom-word1">发挥你的灵感<br>发挥你的灵感<br>发挥你的灵感</div>
            <div class="bottom-word2">发挥你的灵感<br>发挥你的灵感<br></div>
            <div class="bottom-word3">发挥你的灵感</div>
            <div class="bottom-word4">发挥你的灵感</div>
            <div class="bottom-word5">发挥你的灵感</div>
            <div class="bottom-word6">发挥你的灵感<br>发挥你的灵感<br>发挥你的灵感</div>
            <div class="bottom-word7">发挥你的灵感</div>
            <div class="bottom-word8">发挥你的灵感</div>
            <div class="bottom-word9">发挥你的灵感</div>
            </div>
        </div>
</template>
<script>
import turn_back from "./turn-back.vue";
import center_words from "./center-words";
export default {
    data() {
        return {

        }
    },
    methods: {
        addgreen: function() {
            this.$emit('toblue');
        }
    },
     components: {
    "turn-back": turn_back,
    "center-words":center_words,
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


.title {
  padding-top: (136vh/1334*100);
  text-align: center;
  font-size: (90vw/750*100);
  color: rgb(255, 255, 255);
}
.center-word{
    margin-top: (40vh/1334*100);
}
.center-introduce{
    margin-top: (50vh/1334*100);
    text-align: center;
    color: rgb(255, 255, 255);
    font-size: (28vw/750*100);
    line-height: (50vh/1334*100);
}
i{
    margin-left: -3.2em;
}
.center-introduce-right-insert{
@include father(85vw,168vh ,528vh ,470vw );
text-align: center;
background: radial-gradient(rgba(253, 175, 39,0.5),rgba(253,175,39,0.2),rgba(253,175,39,0)); /* 标准的语法 */
color: rgb(253, 175, 39);
text-shadow:0 0 10px rgb(253, 175, 39);
font-size: (32vw/750*100);
border-style: solid;
border-width: (2vw/750*100);
border-color: rgb(255, 255, 255);
padding-top: 0.6em ;
}
.center_sprite{
    @include father(662vw,505vh,720vh,86vw )
}
.center_sprite_inner{
    @include sprite($product-center-sprite,$product-center-sprite-height);
}
.bottom-word{
    color:rgb(253, 175, 39);
    writing-mode: vertical-rl;
}










</style>

