<template>
	<div class="contentBox">
		<div class="wrap">
			<div class="title">Features</div>
			<div class="types">
				<transition name="fade" v-for="item of types">
					<div class="type" v-show="show">
						<div class="typeLogo"></div>
						<div class="typeTitle">{{item.name}}</div>
						<div class="content">{{item.content}}</div>
					</div>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'contentBox',
  props : {
  	types : {
  		type : Array
  	}
  },
  data () {
    return {
    	show : false
    };
  },
  mounted : function(){
  	var _this = this;
  	var y = this.$el.getBoundingClientRect().top - this.$el.offsetHeight/1.9;
  	document.addEventListener('scroll', function(event){
  		if(document.body.scrollTop > y)
  			_this.show = true;
  	});
  }
};
</script>

<style lang="scss" scoped>
@import "~../style/Windlike";
.fade-enter,.fade-leave-active{
	opacity:0;
	transform:translate(0,50%);
}

.contentBox{
	position: relative;
	background-color:rgb(240,240,240);
	width:100%;
	min-height:632px;
	padding:4em 0;

	.wrap{
		margin:0 auto;
		width: 100%;
		max-width: 1200px;

		.title{
			font-family: BrushScriptStd;
			text-align: center;
			margin-bottom:1em;
		}

		.types{
			
			.type{
				@include folded-corner($background:rgb(245,245,245));
				box-shadow: 0px 0px 0px 2px rgba(#333,0.2);
				transition: opacity .3s ease, transform .25s ease;

				&:nth-of-type(1){
					transition-delay:.25s;

					.typeLogo:before{
						content: "\e900";
					}
				}
				&:nth-of-type(2){
					transition-delay:.5s;
					 .typeLogo:before{
						content: "\e901";
					}
				}
				&:nth-of-type(3){
					transition-delay:.75s;
					
					 .typeLogo:before{
						content: "\e902";
					}
				}
				&:nth-of-type(4){
					transition-delay:1s;
					
					 .typeLogo:before{
						content: "\e005";
					}
				}

				&:hover .typeLogo:before{
					color:white;
					background:#333;
				}

				.typeLogo{

					&:before{
						font-family: icomoon;
						padding:.5em;
						border-radius: 50%;
						border:#333 1px solid;
						transition: background .3s ease;
					}
				}
				.typeTitle{
					color: #333;
					margin-bottom: 1em;
					
				}

				.content{
					padding:0 1em;
					font-style: italic;
					color: lighten(#333, 20);
				}
			}
		}
	}

	@media all and (min-width:1201px){
		.title{
			font-size: 2.5em;
		}

		.types{
			display: flex;
			text-align: center;
		}

		.typeLogo{
			height: 3em;
			margin: 1em 0;
			&:before{
				font-size: 2em;
			}
		}

		.typeTitle{
			@include gradient-line($color:rgb(7,17,27),$bottom:-.7em);
			font-size: 2em;
		}

		.type{
			flex: 1;
			margin:1em 1em;
		}

		.content{
			font-size:1.3em;
		}
	}

	@media all and (max-width:1200px) and (min-width:769px){
		.title{
			font-size: 2em;
		}

		.types{
			margin:0 auto;
			width: 95%;
			max-width: 1080px;
			text-align: center;
		}
		
		.typeLogo{
			height: 2em;
			margin: 1em 0;
			&:before{
				font-size: 1.5em;
			}
		}

		.typeTitle{
			@include gradient-line($color:rgb(7,17,27),$bottom:-.7em);
			font-size: 1.5em;
		}

		.type{
			margin:1em 1em;
			vertical-align: top;
			display: inline-block;
			width: calc(50% - 2em);
			margin-bottom: 2em;
			height: 300px;
		}

		.content{
			font-size:1.2em;
		}
	}

	@media all and (max-width:768px){
		.title{
			font-size: 2em;
		}

		.types{
			margin:0 auto;
			width: 90%;
		}

		.typeLogo{
			display: inline-block;
			height: 2em;
		}

		.typeTitle{
			display: inline-block;
			font-size: 1.2em;
		}

		.type{
			margin-bottom: 1em;
			width: 100%;
		}
	}
}
</style>