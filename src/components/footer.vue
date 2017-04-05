<template>
	<div class="footer">
		<div class="flexBox">
			<div class="left">
				<div class="code"></div>If you want to learn more about build websites like HTML , CSS and JS,you can scan this QR code or just click <a href="http://www.wind1ike.info">here</a>.
			</div>
			<div class="center">
				<div class="logo"></div>
				<div class="title">Windlike</div>
				<div class="content">For art,Windlike was built in 2017.</div>
			</div>
			<div class="right">
				<a class="relative" href="https://vuejs.org/">
					<div class="relativeLogo"></div><div class="name">Vue</div>
				</a>
				<a class="relative" href="https://webpack.js.org/">
					<div class="relativeLogo"></div><div class="name">Webpack</div>
				</a>
				<a class="relative" href="https://github.com/">
					<div class="relativeLogo"></div><div class="name">Github</div>
				</a>
			</div>
		</div>
		<div class="message">
			<a href="" class="link">Document</a> / <a href="" class="link">About us</a> / <a href="" class="link">WebApp</a>
			<div class="description">Copyright © 2017 Windlike. All Rights Reserved.</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'footer',

  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
@import "~../../style/gradient-line";
.footer{
	background:#333;
	width:100%;
	text-align:center;

	.flexBox{
		width: 75%;
		margin:2em auto;
		color:rgb(240,240,240);
		font-size: 1.2em;

		.left{
			padding:3em 0;
			font-style: italic;
			text-align: left;
			flex:1;
			line-height: 1.5em;
			
			a{
				text-decoration: underline;
			}

			.code{
				width: 100px;
				height: 100px;
				background:url(../../resource/img/QRCode.png);
				background-size:100% 100%;
			}
		}
		.center{
			flex:1;
			
			.logo{
				margin:0 auto;
				height: 0;
				width: 15%;
				padding-bottom: 15%;
				margin-bottom: 1em;
				background:url(../../resource/img/V.png);
				background-size:100% 100%;

				&:before{
					content: "";
					display: block;
					width: 100%;
					padding-bottom: 100%;
					border:1px white solid;
					transform: rotate(45deg);
				}
			}

			.title{
				font-size: 2em;
				font-family: BrushScriptStd;
			}

			.content{
				font-size: 1.3em;
				font-family: BrushScriptStd;
			}
		}
		.right{
			flex:1;
			padding:3em 0;

			.relative{
				margin-bottom: .5em;
				color: rgb(220,220,220);;
				
				&:hover{
					color: white;
				}

				&:nth-child(1) .relativeLogo{
					background-image: url(../assets/logo.png);
					background-color:white;
					background-position:0 5px;
					background-size:100% 100%;
				}

				&:nth-child(2) .relativeLogo{
					background:white url(../../resource/img/webpack.jpg) no-repeat;
					background-size:80% 80%;
					background-position:5px;
				}

				&:nth-child(3) .relativeLogo{
					background:white url(../../resource/img/github.jpg) no-repeat;
					background-size:100% 100%;
				}

				.relativeLogo{
					width: 50px;
					height: 50px;
					border-radius:50%;
					background-color:white;
				}

				.name{
					vertical-align: top;
				}
			}
		}
	}

	.message{
		color:#999;
		padding:2em 0;
		background:#292929;

		.link{
			font-size: 1.2em;
			color: lighten(#999, 20);

			&:hover{
				color: white;
			}
		}

		.description{
			margin-top: .5em;		
		}
	}

	@media all and (min-width:1201px){
		.flexBox{
			display: flex;
		}

		.left{
			margin-right: 10em;

			.code{
				float:left;
				margin-right: 1em;
				margin-bottom: .2em;
			}
		}
		
		.center{
			padding:3em;
			border-right: 1px rgb(240,240,240) solid;
			border-left: 1px rgb(240,240,240) solid;
		}

		.right{
			margin-left: 10em;

			.relative{
				text-align: left;
				display: block;

				.relativeLogo{
					display: inline-block;
				}

				.name{
					margin-top: calc(7.5% - 0.5em);
					margin-left: 1em;
					display: inline-block;
				}
			}
		}
	}

	@media all and (max-width:1200px) and (min-width:769px){
		.flexBox{
			display: flex;
		}

		.left{
			margin-right: 5%;

			.code{
				float:left;
				margin-right: 1em;
			}
		}
		
		.center{
			padding:1%;
			border-right: 1px rgb(240,240,240) solid;
			border-left: 1px rgb(240,240,240) solid;
		}

		.right{
			margin-left: 5%;

			.relative{
				text-align: left;
				display: block;

				.relativeLogo{
					display: inline-block;
				}

				.name{
					margin-top: calc(7.5% - 0.5em);
					margin-left: 1em;
					display: inline-block;
				}
			}
		}
	}

	@media all and (max-width:768px){
		.left,.center,.right{
			margin:0 auto;
			max-width: 75%;
			
		}

		.left{
			@include gradient-line($color:white, $bottom:1.5em);
		}

		.center{
			@include gradient-line($color:white, $bottom:-1.5em);
		}

		.code{
			margin: 0 auto;
			margin-bottom: 1em;
		}
		.right{
			display: flex;
		}
		.relative{
			text-align: center;
			position:relative;
			margin:0 auto;
			display: inline-block;

			.relativeLogo{
				margin:0 auto;
			}
		}
	}
}
</style>