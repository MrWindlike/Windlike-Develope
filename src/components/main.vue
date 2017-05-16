<template>
	<div class="main">
		<template v-for="(item,i) of msg">
			<h2 class="angleBox" ref="maintitle">{{item.maintitle}}</h2>
			<template v-for="(subtitle,j) of item.subtitles">
				<h3 ref="subtitle">{{subtitle}}</h3>
				<div 
                v-if="template[i][j].innerHTML !== ''"
                v-html="template[i][j].innerHTML" 
                class="content">
                </div>
                <div v-else class="content">
                    <v-carousel :num="6" v-if="subtitle==='Carousel'" class="example"></v-carousel>
                    <v-login v-else-if="subtitle==='Login'"></v-login>
                    <template v-else-if="subtitle==='Alert'">
                        <button 
                        @click="alert=true"
                        class="SuccessButton">Alert</button>
                        <v-alert 
                        v-show="alert"
                        @hide="alert=false">
                            <div class="loginWrap">
                                <v-login></v-login>
                            </div>
                        </v-alert>
                    </template>
                    <v-submitButton v-else-if="subtitle==='SubmitButton'"></v-submitButton>
                    <v-waterfall v-else-if="subtitle==='WaterFall'"></v-waterfall>
                </div>
			</template>
		</template>
	</div>
</template>

<script>
import login from './login.vue'
import alert from './alert.vue'
import carousel from './carousel.vue'
import submitButton from './submitButton.vue'
import waterfall from './waterfall.vue'
        
export default {
  name: 'main',
  components : {
    vCarousel : carousel,
    vLogin:login,
    vAlert :　alert,
    vSubmitButton : submitButton,
    vWaterfall : waterfall
  },
  props : {
  	content : {
  		type : Object
  	},
  	msg : {
  		default : null
  	},
    template : null,
    index : Number
  },
  data () {
    return {
    	height : [],
    	init : false,
        scroll : true,
        alert : false
    };
  },
  watch : {
    index : function(){
        var _this = this;
        var start = new Date();
        var _run  = function(){
            var end = new Date();
            var to = _this.height[_this.index - 1] ? _this.height[_this.index - 1] : 0;
            var top = Tween.Expo.easeInOut(end - start, document.body.scrollTop, to-document.body.scrollTop, 500);
            document.body.scrollTop = top;
            if (end - start < 500){
                _this.scroll = false;
                requestAnimationFrame(_run);
            }
            else
                _this.scroll = true;
        }
        _run();
        
    }
  },
  methods : {
    getHeight : function(){
        var contents = this.$el.getElementsByClassName('content');
        var height = 12;
        var index = 0;

        for(var i = 0;i < this.$refs.maintitle.length;i++){
            height += this.$refs.maintitle[i].offsetHeight + 12;
            for(var j = 0;j < this.msg[i].subtitles.length; j++){  
                height += this.$refs.subtitle[index].offsetHeight + contents[index].offsetHeight;
                if(j === this.msg[i].subtitles.length - 1)
                    height += 12;
                this.height[index] = height;
                index++;
            }
        }
        
    }
  },
  updated : function(){
  	if(this.init === false){
	  	var _this = this;
	  	this.getHeight();

	  	document.addEventListener('scroll', function(){
            if(_this.scroll){
    	  		for(let i = 0;i < _this.height.length; i++){
    	  			if(document.body.scrollTop >= _this.height[i] && document.body.scrollTop <= _this.height[i + 1]){
    	  				_this.$emit('next', i+1);
    	  				break;
    	  			}
                    else if(document.body.scrollTop < _this.height[1]){
                        _this.$emit('next', 0);
                        break;
                    }
    	  		}
            }
	  	}, false);

        window.addEventListener('resize', function(){
            _this.getHeight();
        }, false);

	  	this.init = true;
	}
  }
};
</script>

<style lang="scss">
@import "~../style/Windlike";

.main{
	float:left;

	h2{
		@include angle-box($type:primary);
		margin:.5em 0;
	}

	h3{
		padding: .5em;
	}

    h4{
        padding:.5em 0;
    }

	.content{
        overflow: hidden;
		margin:0 1em;

		.text{
			line-height: 1.5em;
			color:#333;
		}
	}

	.code{
		width: 100%;
		position: relative;
		word-wrap:break-word;
		word-break:break-all;
		white-space: pre-wrap;
		border:1px solid #e1e1e8;
		padding:.5em 2em .5em 1em;
		margin:1em 0;
		background:#f7f7f9;
        font-size:.9em;
        color:rgb(51, 51, 51);
        line-height: 1.5em;

		.codeType{
			position:absolute;
			right: 0;
			top: 0;
			background:rgba(0,0,0,.1);
			border-bottom-left-radius: 0.5em;
			padding:.5em;
		}
	}

	.example{
		margin:.5em .5em;
	}

	@media all and (min-width:769px) {
		width:calc(100% - 150px);
	}

	@media all and (max-width:768px) {
        margin-top: 2.5em;
		width:100%;
	}
}

.EatPeasLoading{
	@include eatPeas-loading($background:#333,$length:40px,$time:0.3s);
}
.SquareLoading{
	@include square-loading($color:#555,$time:1.5s,$length:40px);
}
.GlassShine{
	@include glass-shine($time:1s);
	background-color:rgba(0,0,0,.2);
	display:inline-block;
	font-size:1.5em;
	padding:.5em;
	border:1px black solid;
	cursor:pointer;
}
.PrimaryButton{
	@include button($type:primary);
}
.InfoButton{
	@include button($type:info);
}
.SuccessButton{
	@include button($type:success);
}
.WarningButton{
	@include button($type:warning);
}
.DangerButton{
	@include button($type:danger);
}
.input{
    @include input;
}
.TrapezoidNav{
	@include trapezoid-nav($background:#ccc, $color : black, $text-decoration: none);
	font-size:1.5em;
}
.AngleBox{
    @include angle-box($angle:bottom-right,$color:#58D4FF,$textColor:white,$type:primary);
}
.FoldedCorner{
    @include folded-corner($background:#58a, $line-height:1.5em);
    color:white;
    display: inline-block;
}
.GradientLine{
    @include gradient-line($width:100%,$height:2px, $color:black, $bottom:0);
}
.loginWrap{
    margin:auto;
    @media all and (min-width:769px) {
        width: 30%;
    }
    @media all and (max-width:768px) {
        width: 60%;
    }
    
}
</style>