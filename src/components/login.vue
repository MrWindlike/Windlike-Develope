<template>
	<div class="loggin">
		UserName<input type="text" class="input" placeholder="UserName">
		PassWord<input type="password" class="input" placeholder="PassWord">
		ComfirmPassWord<input type="password" class="input" placeholder="ComfirmPassWord">
		<label style="cursor:pointer;">
			<input type="checkbox" class="checkbox">Remember Me
		</label>
		<div class="buttonWrap">
			<button class="submitButton">Submit</button>
			<button class="cancelButton">Cancel</button>
		</div>
	</div>
</template>

<script>

export default {

  name: 'login',
  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
@import "~../style/Windlike";
.loggin{
	background:rgb(243,244,245);
	border-radius:.5em;
	padding:1em;
	width:100%;

	.input{
		@include input;
		margin:.2em auto 1em auto;
	}

	.checkbox{
		margin:0 .5em;
	}

	.buttonWrap{
		text-align: center;

		.submitButton{
			@include button($type:primary);
			margin: .5em 10%;
		}

		.cancelButton{
			@include button($type:danger);
			margin: .5em 10%;
		}
	}
}
</style>