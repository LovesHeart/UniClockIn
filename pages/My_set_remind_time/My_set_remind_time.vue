<template>
	<view style="
  background-image:url('../../static/_2.jpg'); 
  background-color:#cccccc;
  background-size:cover;
  background-repeat:no-repeat;
  height:100%;
  ">
		<view class="container-center" style="">
		<text>本高冷的小程序</text>
		</view>
		<view class="container-center" style="margin-top: 22rpx;">
			<text>將在</text>
		</view>
		<view class="container-center" style="margin-top: 75rpx;background-color: grey; height:300upx;">
			<text style="font-size:xx-large;">{{time}}</text>
		</view>
		<view class="container-center" style="margin-top: 49rpx;">
			<text>提醒你應該去睡覺了</text>
		</view>
		<view class="container-center" style="margin-top: 200rpx;">
			<text>小貼士：爲了避免猝死，防止脫</text>
		</view>
		<view class="container-center" >
			<text>\n發，推薦22點睡覺</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				time:"22 : 00"
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	@import url("../my.css");
</style>
