<template>
	<view>
		<view class="container-center" >
			<text style="width:auto; font-size:medium;">{{dateString}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
		},
		data() {
			return {
				dateString:String,
				month:0,
				day:0,
			};
		},
		created(){
			let month = new Date().getMonth() + 1;
			let day = new Date().getDate();
			this.dateString = `${month}月 ${day}日`;
		},
		methods: {

		}
	}
</script>
<style>
	.container-center {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: auto;
	}
</style>
