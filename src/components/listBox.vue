<template>
	<div class="listBox">
		<div class="typeWrap">
			<slot></slot>
			<template v-for="(item,index) of types" >
				<transition name="left-slideIn" v-if="(way===0&&index<types.length/2)||(way===1&&index%2===0)">
					<div class="type"v-show="show">
						<div class="typeTitle">{{types[index].name}}</div>
						<i class="content" v-for="(content,index) of types[index].content">{{index+1}}.{{content}}</i>
					</div>
				</transition>
				<transition name="right-slideIn" v-else>
					<div class="type"v-show="show">
						<div class="typeTitle">{{types[index].name}}</div>
						<i class="content" v-for="(content,index) of types[index].content">{{index+1}}.{{content}}</i>
					</div>
				</transition>
			</template>
		</div>
	</div>
</template>

<script>
export default {

  name: 'listBox',
  props : {
  	types : {
  		type : Array
  	}
  },
  data () {
    return {
    	show : false,
    	way : 0
    };
  },
  mounted : function(){
  	var _this = this;
  	var y = this.$el.getBoundingClientRect().top - this.$el.offsetHeight/1.9;
  	if(document.body.scrollWidth > 1180)
  		_this.way = 0;
  	else
  		_this.way = 1;
  	window.addEventListener('resize', function(){
  		if(document.body.scrollWidth > 1180)
  			_this.way = 0;
  		else
  			_this.way = 1;
  	});

  	document.addEventListener('scroll', function(event){
  		if(document.body.scrollTop > y)
  			_this.show = true;
  	});
  }
};
</script>

<style lang="scss" scoped>
@import "~../../style/gradient-line";
.left-slideIn-enter, .left-slideIn-leave-active{
	transform:translate(-100%,0);
	opacity:0;	
}

.right-slideIn-enter, .right-slideIn-leave-active{
	transform:translate(100%,0);
	opacity:0;	
}

.listBox{
	position:relative;
	display:flex;
	width:100%;
	height:80vmin;
	min-height:550px;
	

	&:before{
		content: "";
		position:absolute;
		top:0; left:0;
		width: 100%;
		height: 100%;
		background:radial-gradient(at 50% 50%,rgba(#333,.3) 0, rgba(#333,.6) 70%);

	}

	.typeWrap{
		margin:auto;
		overflow: hidden;

		.title{
			font-family: BrushScriptStd;
			position:relative;
			margin-bottom: .5em;
			color:white;
			text-align: center;

		}

		.type{
			vertical-align: top;
			display: inline-block;
			position:relative;
			transition: .3s ease;
			transition-property: transform, opacity;

			.typeTitle{
				margin-top: .5em;
				margin-bottom: .5em;
				text-align: center;
				font-weight: 400;
				position:relative;
				z-index: 3;
				color: rgb(245,245,245);
				@include gradient-line($color:rgb(240,240,240),$bottom:-0.2em);
			}

			.content{
				display: block;
				margin-left: 1em;
				margin-bottom: .5em;
				position:relative;
				z-index: 3;
				color: rgb(230,230,230);
			}

			&:nth-of-type(2){
				background-color:rgba(#02B478,.6);
			}
			&:nth-of-type(3){
				background-color:rgba(#00649E,.6);
			}
			&:nth-of-type(4){
				background-color:rgba(#F1A642,.6);
			}
			&:nth-of-type(5){
				background-color:rgba(#00B99C,.6);
			}

		}
	}

	@media all and (min-width:1201px){
		&{
			background: url(../../resource/img/black-and-white-iphone-smartphone-desk@1600x1068.jpg) 0 / cover no-repeat;
		}
		
		.title{
			font-size: 2.5em;
		}

		.typeWrap{
			height:90%;
			width:90%;
			max-width: 1200px;
		}

		.typeTitle{
			font-size: 2.2em;
		}

		.type{
			width: 25%;
			height: calc(100% - 3em);
		}

		.content{
			font-size: 1.3em;
		}
	}

	@media all and (max-width:1200px) and (min-width:769px){
		&{
			background: url(../../resource/img/black-and-white-iphone-smartphone-desk@1600x1068.jpg) 0 / cover no-repeat;
		}

		.title{
			font-size: 2em;
		}

		.typeWrap{
			height:95%;
			width:90%;
			max-width: 768px;
		}

		.typeTitle{
			font-size: 1.3em;
		}

		.type{
			width: 50%;
			height: calc(50% - 2.5em);
		}

		.content{
			font-size: 1.1em;
		}
	}

	@media all and (max-width:768px){
		&{
			background: url(../../resource/img/black-and-white-iphone-smartphone-desk@800x534.jpg) 0 / cover no-repeat;
		}
		
		.title{
			font-size: 2em;
		}

		.typeWrap{
			height:90%;
			width:100%;
			max-width: 500px;
		}

		.typeTitle{
			font-size: 1.3em;
		}

		.type{
			width: 50%;
			height: calc(50% - 2em);
		}
	}

}
</style>