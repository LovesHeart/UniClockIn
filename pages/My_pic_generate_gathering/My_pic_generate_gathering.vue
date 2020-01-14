<template>
	<view>
		<view class="container-center" style="margin-top: 50rpx;">
			<button size="mini" @click="lastDay">{{char_lt}}</button>
			<text style="width:auto; font-size:medium;">{{dateString}}</text>
			<button size="mini" @click="nextDay">{{char_gt}}</button>
		</view>
		<view class="container-center" style="margin-top: 50rpx;">
			<img style="height:500px;" :src=imgsrc></img>
		</view>
	</view>
</template>

<script>
	import date from "../../components/dateProp.vue"
	import wmPoster from "@/components/wm-poster/wm-poster.vue"

	export default {
		data() {
			return {
				dateString: '',
				month: 0,
				day: 0,
				imgsrc:'../../static/_1.jpg',
				char_lt:'<',
				char_gt:'>',
			}
		},
		components: {wmPoster},
		methods: {
			onLoad() {
				let month = new Date().getMonth() + 1;
				let day = new Date().getDate();
				this.dateString = `${month}月 ${day}日`;
			},
			lastDay(){
				
			},
			nextDay(){
				
			}
		},
		components: {
			date,
		}
	}
</script>

<style>
	@import url("../my.css");
</style>
