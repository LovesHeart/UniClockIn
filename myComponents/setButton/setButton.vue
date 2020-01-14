<template>
			<button class="_right-container" @click="set" size="mini">设置</button>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			set(){
				uni.navigateTo({
					url:"../../pages/My_set/My_set"
				})
			},
		}
	}
</script>

<style>
	@import url("../../pages/my.css");
	
	._right-container {
		width: 122rpx;
		/* position: absolute; */
	}
</style>
