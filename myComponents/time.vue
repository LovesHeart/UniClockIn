<template>
	<view class="container-time-text" style="margin-top:15px;">
		<view class="time-text">{{a1}}</view>
		<view class="time-text">{{a2}}</view>
		<view class="time-text">{{a3}}</view>
		<view class="time-text">{{a4}}</view>
	</view>
</template>

<script>
	export default {
		props:{

		},
		data() {
			return {
				a1:Number,
				a2:Number,
				a3:Number,
				a4:Number
			};
		},
		created(){
			this.a2 = new Date().getUTCHours() + 8;
			if (this.a2 >= 24) this.a2 -= 24;
			this.a1 = parseInt((this.a2 / 10).toString(), 10);
			this.a2 = this.a2 % 10;
			this.a4 = new Date().getUTCMinutes();
			this.a3 = parseInt((this.a4 / 10).toString(), 10);
			this.a4 = this.a4 % 10;
		},
		methods: {
			activated() {
			},
			onLaunch(){
			}
		}
	}
</script>

<style>
	@import url("../pages/my.css");
</style>
