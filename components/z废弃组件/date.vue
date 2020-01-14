<template>
	<view>
		<view class="在一个空container中居中" style="margin-top: 50rpx;">
			<text style="width:auto; font-size:medium;">{{dateString}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dateString: "default",
				month:0,
				day:0,
			};
		},
		methods: {
			created(){
				console.log('created')
			},
			onReady(){
				console.log('onReady')
			},
			onLoad() {
				this.month = new Date().getMonth() + 1;
				this.day = new Date().getDate();
				this.dateString = `${this.month}月 ${this.day}日`;
				console.log(this.dateString)
			},
			onLaunch(){
				this.month = new Date().getMonth() + 1;
				this.day = new Date().getDate();
				this.dateString = `${this.month}月 ${this.day}日`;
				console.log(this.dateString)
			}
		}
	}
</script>
<style>
	.在一个空container中居中 {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: auto;
	}
</style>
