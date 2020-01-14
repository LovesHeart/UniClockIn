<template>
	<view style="
  background-image:url('../../static/_2.jpg'); 
  background-color:#cccccc;
  background-size:cover;
  background-repeat:no-repeat;
  height:100%;
  ">
		<!--<text class="container">111</text> 养成测试的好习惯呢-->
		<view class="right-container">
			<button @click="quit" size="mini">退出</button>
			<image style="
			width:80%;
			height:20px;
			"></image>
		</view>
		
		
		
       <wm-poster ref='z' imgSrc="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png"
       QrSrc="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" 
       Title="标题文本" PriceTxt='今日的睡觉时间是' :OriginalTxt=time
	   :Referrer=dateWeek
	   :ViewDetails=date
	   ></wm-poster>

		
		

		<view style="
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			width: auto; margin-top: 20rpx;">
			<view></view>
			<view><button size="mini" @tap='save'>保存图片</button></view>
			<view><button size="mini">分享</button></view>
		</view>
	</view>
</template>

<script>
	import wmPoster from "@/components/wm-poster/wm-poster.vue"
	
	export default {
		data() {
			return {
				imgSrc: "https://cn.vuejs.org/images/logo.png",
				time: '',
				dateWeek: '',
				date: '',
				months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
					'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
				],
			}
		},
		components: {wmPoster},
		methods: {
			onLoad() {
				let hours = new Date().getHours()
				let minutes = new Date().getMinutes()
				if (hours < 10) hours = '0' + hours
				if (minutes < 10) minutes = '0' + minutes
				this.time = hours + '：' + minutes

				let ind = new Date().getDay()
				switch (ind) {
					case 1:
						this.dateWeek = "周一";
						break;
					case 2:
						this.dateWeek = "周二";
						break;
					case 3:
						this.dateWeek = "周三";
						break;
					case 4:
						this.dateWeek = "周四";
						break;
					case 5:
						this.dateWeek = "周五";
						break;
					case 6:
						this.dateWeek = "周六";
						break;
					case 0:
						this.dateWeek = "周日";
						break;
				}

				let year = new Date().getFullYear()
				let month = new Date().getMonth()
				let day = new Date().getDate()
				let monthString = this.months[month]
				console.log(monthString)
				this.date = monthString + ' ' + day + ", " + year
				console.log(this.date)
			},
			save(){
				console.log('generateImgSrc')
				console.log(getApp().globalData.generateImgSrc)
				uni.saveImageToPhotosAlbum({
					filePath:getApp().globalData.generateImgSrc
				})
			},
			quit() {
				uni.navigateTo({
					url: "../My_pic_final/My_pic_final"
				})
			}
		}
	}
</script>

<style>
	@import url("../my.css");
</style>
