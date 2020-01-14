<template>
	<view>
		<view class="container-center" style="margin-top: 50rpx;">
			<text>宝贝我错了，你写下意见，我一定改！</text>
		</view>
		<view class="container-center" style="margin-top: 50rpx;">
			<view class="uni-common-mt">
				<view class="uni-form-item uni-column">
					<view class="title"></view>
					<textarea v-model="content" class="diy-input" focus placeholder="输入内容" />
					</view>
			</view>
		</view>
				<view class="container-center" style="margin-top: 50rpx;">
		<button style="margin-top: 50rpx;" @click="submit" size="default">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content:''
			}
		},
		methods: {
			submit(){
				console.log(this.content)
			}
		}
	}
</script>

<style>
	@import url("../my.css");
</style>
