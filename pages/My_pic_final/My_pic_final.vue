<template>
	<view style="
  background-image:url('../../static/_2.jpg'); 
  background-color:#cccccc;
  background-size:cover;
  background-repeat:no-repeat;
  ">
		<date :dateString="dateString"></date>
<!-- 		<view class="right-container">
			<button @click="set" size="mini">设置</button>
			<image style="
			width:80%;
			height:20px;
			"></image>
		</view> -->
		<set style="width: 122rpx; margin-left:620rpx;"/>
		<lTime :a1="a1" :a2="a2" :a3="a3" :a4="a4"></lTime>
		<view class="container" style="margin-top:15px;">
			<text></text>
			<text>{{str}}</text>
			<text></text>
		</view>
		<view class="container">
			<text></text>
			<img height="100px" :src="imgSrc"></image>
			<text></text>
		</view>
		<view class="container" style="margin-top:15px;">
			<text></text>
			<button @click="ck" size="mini">查看今日卡片</button>
			<text></text>
		</view>
		<view class="container">
			<text></text>
			<img height="200px" :src="imgSrc"></image>
			<text></text>
		</view>
	</view>
</template>

<script>
	import date from "../../components/dateProp.vue"
	import lTime from "../../myComponents/time.vue"
	import set from "../../myComponents/setButton/setButton.vue"
	// import dates from '../../components/date.vue'

	export default {
		data() {
			return {
				dateString: " ",
				a2: 1,
				a1: 2,
				a4: 3,
				a3: 4,
				str: "被子一盖，眼睛一合\n凡尘俗界，与我无关",
				imgSrc: "https://cn.vuejs.org/images/logo.png",
			};
		},
		methods: {
			onLoad() {
				{
					//组件数据的初始化



				}
			},
			ck() {
				uni.navigateTo({
					url: "../My_pic_generate/My_pic_generate"
				})
			},
		},
		components: {
			date,
			lTime,
			set
		}
	};
</script>

<style>
	@import url("../my.css");
	
	._right-container {
		width: auto;
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
	}
</style>
