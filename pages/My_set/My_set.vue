<template>
	<view>
		<button @click="setRemindTime">设置提醒时间</button>
		<button @click="feedback">意见反馈</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			feedback(){
				uni.navigateTo({
					url:"../My_feedback/My_feedback"
				})
			},
			setRemindTime(){
				uni.navigateTo({
					url:"../My_set_remind_time/My_set_remind_time"
				})
			}
		}
	}
</script>

<style>

</style>
