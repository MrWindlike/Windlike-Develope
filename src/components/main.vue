<template>
	<div class="main">
		<template v-for="(item,i) of msg">
			<h2 class="angleBox" ref="maintitle">{{item.maintitle}}</h2>
			<template v-for="(content,j) of item.contents">
				<h3 ref="subtitle">{{content.subtitle}}</h3>
				<div class="content">
					<p class="text" v-html="content.content"></p>
					<template v-if="i===1&&j===0">
						<h4>EatPeasLoading</h4>
						<div class="EatPeasLoading example">
							<div class="halfCircle"></div>
							<div class="halfCircle"></div>
							<span class="ball"></span>
							<span class="ball"></span>
							<span class="ball"></span>
							<span class="ball"></span>
						</div>
						<pre class="code">
							<div class="codeType">HTML</div>
&lt;div class="EatPeasLoading"&gt;
	&lt;div class="halfCircle"&gt;&lt;/div&gt;
	&lt;div class="halfCircle"&gt;&lt;/div&gt;
	&lt;span class="ball"&gt;&lt;/span&gt;
	&lt;span class="ball"&gt;&lt;/span&gt;
	&lt;span class="ball"&gt;&lt;/span&gt;
	&lt;span class="ball"&gt;&lt;/span&gt;
&lt;/div&gt;
						</pre>
						<pre class="code">
							<div class="codeType">SCSS</div>
.EatPeasLoading{
	@include eatPeas-loading($background:#333,$length:40px,$time:0.3s);
}
						</pre>
						<h4>SquareLoading</h4>
						<div class="SquareLoading example">
							<template v-for="i of 3">
								<div class="squareLoading" v-for="i of 3"></div>
							</template>
						</div>
						<pre class="code">
							<div class="codeType">HTML</div>
&lt;div class="SquareLoading example"&gt;
	&lt;template v-for="i of 3"&gt;
		&lt;div class="squareLoading" v-for="i of 3"&gt;&lt;/div&gt;
	&lt;/template&gt;
&lt;/div&gt;
						</pre>
						<pre class="code">
							<div class="codeType">SCSS</div>
.SquareLoading{
	@include square-loading($color:#555,$time:1.5s,$length:40px);
}
						</pre>
						<h4>GlassShine</h4>
						<div class="GlassShine example">Button</div>
						<pre class="code">
							<div class="codeType">SCSS</div>
.GlassShine{
	@include glass-shine($time:1s);
	background-color:rgba(0,0,0,.2);
	display:inline-block;
	font-size:1.5em;
	padding:.5em;
	border:1px black solid;
	cursor:pointer;
}					
						</pre>
					</template>
					<template v-else-if="i===1&&j===1">
						<div class="PrimaryButton example">PrimaryButton</div>
						<div class="InfoButton example">InfoButton</div>
						<div class="SuccessButton example">SuccessButton</div>
						<div class="WarningButton example">WarningButton</div>
						<div class="DangerButton example">DangerButton</div>
						<p>$type:primary | info | success | warning | danger;</p>
						<pre class="code">
							<div class="codeType">SCSS</div>
.PrimaryButton{
	@include button($type:primary,$textColor:white,$color:#337ab7);
}
						</pre>
					</template>
					<template v-else-if="i===1&&j===3">
						<div class="TrapezoidNav">TrapezoidNav</div>
						<pre class="code">
							<div class="codeType">SCSS</div>
.TrapezoidNav{
	@include trapezoid-nav($background:#ccc, $color : black, $text-decoration: none);
	font-size:1.5em;
}
						</pre>
					</template>
                    <template v-else-if="i===1&&j===4">
                        <div class="AngleBox example">AngleBox</div>
                        <pre class="code">
                            <div class="codeType">SCSS</div>
.AngleBox{
    @include angle-box($angle:bottom-right,$color:#58D4FF,$textColor:white,$type:primary);
}
                        </pre>
                        <div class="FoldedCorner example">FoldedCorner</div>
                        <pre class="code">
                            <div class="codeType">SCSS</div>
.FoldedCorner{
    @include folded-corner($background:#58a, $line-height:1.5em);
    color:white;
    display: inline-block;
}
                        </pre>
                        <h4>GradientLine</h4>
                        <div class="GradientLine example"></div>
                        <pre class="code">
                            <div class="codeType">SCSS</div>
.GradientLine{
    @include gradient-line($width:100%,$height:2px, $color:black, $bottom:0);
}
                        </pre>
                    </template>
					<template v-else-if="i===2&&j===0">
						<textarea class="code" style="height:200px">
/*
 * Tween.js
 * t: current time（当前时间）
 * b: beginning value（初始值）
 * c: change in value（变化量）
 * d: duration（持续时间）
*/
var Tween = {
    Linear: function(t, b, c, d) { return c*t/d + b; },
    Quad: {
        easeIn: function(t, b, c, d) {
            return c * (t /= d) * t + b;
        },
        easeOut: function(t, b, c, d) {
            return -c *(t /= d)*(t-2) + b;
        },
        easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t-2) - 1) + b;
        }
    },
    Cubic: {
        easeIn: function(t, b, c, d) {
            return c * (t /= d) * t * t + b;
        },
        easeOut: function(t, b, c, d) {
            return c * ((t = t/d - 1) * t * t + 1) + b;
        },
        easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t*t + b;
            return c / 2*((t -= 2) * t * t + 2) + b;
        }
    },
    Quart: {
        easeIn: function(t, b, c, d) {
            return c * (t /= d) * t * t*t + b;
        },
        easeOut: function(t, b, c, d) {
            return -c * ((t = t/d - 1) * t * t*t - 1) + b;
        },
        easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t*t - 2) + b;
        }
    },
    Quint: {
        easeIn: function(t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        },
        easeOut: function(t, b, c, d) {
            return c * ((t = t/d - 1) * t * t * t * t + 1) + b;
        },
        easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2*((t -= 2) * t * t * t * t + 2) + b;
        }
    },
    Sine: {
        easeIn: function(t, b, c, d) {
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOut: function(t, b, c, d) {
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOut: function(t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t/d) - 1) + b;
        }
    },
    Expo: {
        easeIn: function(t, b, c, d) {
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOut: function(t, b, c, d) {
            return (t==d) ? b + c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOut: function(t, b, c, d) {
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    },
    Circ: {
        easeIn: function(t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOut: function(t, b, c, d) {
            return c * Math.sqrt(1 - (t = t/d - 1) * t) + b;
        },
        easeInOut: function(t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        }
    },
    Elastic: {
        easeIn: function(t, b, c, d, a, p) {
            var s;
            if (t==0) return b;
            if ((t /= d) == 1) return b + c;
            if (typeof p == "undefined") p = d * .3;
            if (!a || a < Math.abs(c)) {
                s = p / 4;
                a = c;
            } else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        easeOut: function(t, b, c, d, a, p) {
            var s;
            if (t==0) return b;
            if ((t /= d) == 1) return b + c;
            if (typeof p == "undefined") p = d * .3;
            if (!a || a < Math.abs(c)) {
                a = c; 
                s = p / 4;
            } else {
                s = p/(2*Math.PI) * Math.asin(c/a);
            }
            return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
        },
        easeInOut: function(t, b, c, d, a, p) {
            var s;
            if (t==0) return b;
            if ((t /= d / 2) == 2) return b+c;
            if (typeof p == "undefined") p = d * (.3 * 1.5);
            if (!a || a < Math.abs(c)) {
                a = c; 
                s = p / 4;
            } else {
                s = p / (2  *Math.PI) * Math.asin(c / a);
            }
            if (t < 1) return -.5 * (a * Math.pow(2, 10* (t -=1 )) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p ) * .5 + c + b;
        }
    },
    Back: {
        easeIn: function(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        easeOut: function(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            return c * ((t = t/d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        easeInOut: function(t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158; 
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2*((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        }
    },
    Bounce: {
        easeIn: function(t, b, c, d) {
            return c - Tween.Bounce.easeOut(d-t, 0, c, d) + b;
        },
        easeOut: function(t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        },
        easeInOut: function(t, b, c, d) {
            if (t < d / 2) {
                return Tween.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
            } else {
                return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
            }
        }
    }
}
						</textarea>
						<p>This is a example use Tween to change scrollTop to 0.</p>
						<pre class="code">
							<div class="codeType">JavaScript</div>
var start = new Date();
var _run  = function(){
        var end = new Date();
	var top = Tween.Expo.easeInOut(end - start, document.body.scrollTop, -document.body.scrollTop,600);
        document.body.scrollTop = top;
        if (end - start < 600) 
            requestAnimationFrame(_run);
    }
_run();
						</pre>
					</template>
				</div>
			</template>
		</template>
	</div>
</template>

<script>
export default {

  name: 'main',
  props : {
  	content : {
  		type : Object
  	},
  	msg : {
  		default : null
  	},
    index : Number,
    

  },
  data () {
    return {
    	height : [],
    	init : false,
        scroll : true
    };
  },
  watch : {
    index : function(){
        var _this = this;
        var start = new Date();
        var _run  = function(){
            var end = new Date();
            var to = _this.height[_this.index - 1] ? _this.height[_this.index - 1] : 0;
            var top = Tween.Expo.easeInOut(end - start, document.body.scrollTop, to-document.body.scrollTop,600);
            document.body.scrollTop = top;
            if (end - start < 600){
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
            for(var j = 0;j < this.msg[i].contents.length; j++){  
                height += this.$refs.subtitle[index].offsetHeight + contents[index].offsetHeight;
                if(j === this.msg[i].contents.length - 1)
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

<style lang="scss" scoped>
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
		padding:.5em 3em .5em 1em;
		margin:1em 0 0 0;
		background:#f7f7f9;

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
		width:75%;
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
</style>