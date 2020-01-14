<template>
	<view class="a" id="view" :style="backgroundStyleNight">
		<view class="_container-center" style="">
		<button style="margin-left: 180rpx;" size="mini" @click="last">{{char_lt}}</button>
		<text style=" font-size:medium;">{{dateString}}</text>
		<lSet style="margin-right: 180rpx;"></lSet>
		</view>
		
		<lTime></lTime>
		
		<text class="container-center" style="margin-top: 80rpx;opacity: 0.75;">{{text}}</text>
	
	    <slider v-if="true" value="50" @change="sliderChange" activeColor="#FFCC33"
		backgroundColor="#000000" block-color="#8A6DE9"
		block-size="20" ref="sli" style="margin-top: 80upx ;" ></slider>
		<text v-if="boolText" class="container-center"
	    style="margin-top: 99upx;">打卡時間為20:00~24:00</text>
		
        <view class="container-center" style="margin-top: 150upx;">
            <text> </text>
            <img style="height:400rpx" :src="imgSrc" />
            <text> </text>
        </view>
	</view>
</template>

<script>
	import html2canvas from "../../common/html2canvas.min.js"
	import lSet from "../../myComponents/setButton/setButton.vue"
	import lDate from "../../components/dateProp.vue"
	import lTime from "../../myComponents/time.vue"
	
	export default {
		data() {
			return {
				dateString: "default",
				imgSrc: "https://cn.vuejs.org/images/logo.png",
				month: 1,
				day: 1,
				a2: 1,
				a1: 2,
				a4: 3,
				a3: 4,
				text: '別人早戀我早睡',
				backgroundStyleSun: "background-image: url(../../static/_1.jpg);background-color:#cccccc;background-size:cover;background-repeat:no-repeat; height:100%;",
				backgroundStyleNight: "background-image: url(../../static/_2.jpg);background-color:#cccccc;background-size:cover;background-repeat:no-repeat; height:100%;",
				boolSlider: true,
				boolText:false,
				char_lt:'<',
			};
		},

		components: {
			lSet,
			lDate,
			lTime,
		},

		methods: {
			last() {
				uni.navigateTo({
					url: "../My_pic_generate_gathering/My_pic_generate_gathering"
				})
			},
			onLoad() {
				//if()
				console.log('this.$data.imgSrc')
				console.log(this.$data.imgSrc)
				this.month = new Date().getMonth() + 1;
				this.day = new Date().getDate();
				this.dateString = `${this.month}月 ${this.day}日`;
				console.log(this.$data.text);
				this.a2 = new Date().getUTCHours() + 8;
				if (this.a2 >= 24) this.a2 -= 24;
				this.a1 = parseInt((this.a2 / 10).toString(), 10);
				this.a2 = this.a2 % 10;

				this.a4 = new Date().getUTCMinutes();
				this.a3 = parseInt((this.a4 / 10).toString(), 10);
				this.a4 = this.a4 % 10;
				console.log(this.a1);
				console.log(this.a2);
				console.log(this.a3);
				console.log(this.a4);

				//判斷時間變更text文本
				if (this.a1 === 2 && this.a2 >= 2 && this.a2 < 4) this.text = "有研究表明\n熬夜不能修仙"
				else if (this.a1 === 0 && this.a2 >= 0 && this.a2 < 4) this.text = "別熬夜了\n對手機不好"
				else if ((this.a1 >= 0 && this.a2 >= 4) || this.a1 === 1) {
					this.text = '白天你怎麽好意思\n睡大覺？'
					this.backgroundStyleNight=this.backgroundStyleSun
					this.boolSlider = false
					this.boolText=true
				}

				  console.log('test');
				  console.log(document.querySelector(".a"))
					html2canvas(document.getElementById('view'), {
						onrendered: function(canvas) {
							document.body.appendChild(canvas);
						},
					  // width: 300,
					  // height: 300
					});
			},
			sliderChange(e) {
				console.log(e);
				if (e.detail.value >= "90")
					uni.showModal({
						title: "提示",
						content: "打卡成功",
						success: function(res) {
							if (res.confirm) {
								console.log("用户点击确定");
								uni.navigateTo({
									url: "../My_pic_generate/My_pic_generate"
								})
							} else if (res.cancel) {
								console.log("用户点击取消");
							}
						}
					});
			}
		}
	};
</script>

<style>
	@import url("../my.css");
	._container-center {
		flex:0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
