<template>
	<view>
		<canvas :canvas-id="CanvasID" :style="{ width: canvasW + 'px', height: canvasH + 'px' }"></canvas>
	</view>
</template>

<script>
	var _this;
export default {
	name: 'wm-poster',
	props: {
		CanvasID:{		//CanvasID 等同于 canvas-id
			Type:String,
			default:'PosterCanvas'
		},
		imgSrc:{		//展示图
			Type:String,
			default:''
		},
		QrSrc:{			//二维码
			Type:String,
			default:''
		},
		Title:{			//文本内容
			Type:String,
			default:''
		},
		TitleColor:{	//标题颜色
			Type:String,
			default:'#333333'
		},
		LineType:{		//标题显示行数		（注超出2行显示会导致画布布局絮乱）
			Type:[String,Boolean],
			default:true
		},
		PriceTxt:{		//价格值
			Type:String,
			default:'99.99'
		},
		PriceColor:{	//价格颜色
			Type:String,
			default:'#e31d1a'
		},
		OriginalTxt:{	//原价值
			Type:String,
			default:'199.99'
		},
		OriginalColor:{	//默认颜色（如原价与扫描二维码颜色）
			Type:String,
			default:'#b8b8b8'
		},
		Width:{			//画布宽度  (高度根据图片比例计算 单位upx)
			Type:String,
			default:750
		},
		CanvasBg:{		//canvas画布背景色
			Type:String,		
			default:'#ffffff'
		},
		Referrer:{		//推荐人信息
			Type:String,
			default:'quitter推荐给你'
		},
		ViewDetails:{	//描述提示文字
			Type:String,
			default:'长按或扫描识别二维码'
		}
	},
	data() {
		return {
			canvasW:0,
			canvasH: 0,
			canvasImgSrc:'',
			ctx:null,
			thisImgSrc:''
		};
	},
	methods: {
		async OnCanvas() {
			_this.ctx = uni.createCanvasContext(_this.CanvasID,this);//把this.ctx赋值为
			const C_W = uni.upx2px(_this.Width), //canvas宽度
				C_P = uni.upx2px(30), //canvas Paddng 间距
				C_Q = uni.upx2px(150); //二维码或太阳码宽高
			let _strlineW = 0; //文本宽度
			let _imgInfo = await _this.getImageInfo({ imgSrc: _this.imgSrc }); //广告图
			let _QrCode = await _this.getImageInfo({ imgSrc: _this.QrSrc }); //二维码或太阳码
			let r = [_imgInfo.width, _imgInfo.height];//r[]对应imginfo
			let q = [_QrCode.width, _QrCode.height];//q[]对应qrCodeInfo
			let imgW = C_W - C_P * 2;//imgW=canvas宽度减去间距*2
			if (r[0] != imgW) {
				r[1] = Math.floor((imgW / r[0]) * r[1]);//这是做的一个等比缩放 两边同时乘以imgW/r[0]则r[0]就成了imgW
				r[0] = imgW;//插件主做了对图片宽高的严格限制
			}//首先确保了主图的宽高
			if (q[0] != C_Q) {
				q[1] = Math.floor((C_Q / q[0]) * q[1]);
				q[0] = C_Q;
			}//对于副图也做了同样的严格限制
			_this.canvasW = C_W;
			_this.canvasH = r[1] + q[1] + 110;//定义canvasHeight
			_this.ctx.setFillStyle(_this.CanvasBg); //canvas背景颜色
			_this.ctx.fillRect(0, 0, C_W, _this.canvasH); //canvas画布大小
			//添加图片展示
			_this.ctx.drawImage(_imgInfo.path, C_P, C_P, r[0], r[1]);/*
			在间距间距处以合适尺寸绘制图像
			在画布上定位图像，并规定图像的宽度和高度：
			context.drawImage(img,x,y,width,height);
			x	在画布上放置图像的 x 坐标位置。
			y	在画布上放置图像的 y 坐标位置。
			width	可选。要使用的图像的宽度。（伸展或缩小图像）
			height	可选。要使用的图像的高度。（伸展或缩小图像）
			*/
			//添加图片展示 end
			//设置文本
			// _this.ctx.setFontSize(uni.upx2px(28)); //设置标题字体大小
			// _this.ctx.setFillStyle(_this.TitleColor); //设置标题文本颜色
			let _strLastIndex = 0; //每次开始截取的字符串的索引
			let _strHeight = r[1] + C_P * 2 + 10; //绘制字体距离canvas顶部的初始高度
			let _num=1;
			// for (let i = 0; i < _this.Title.length; i++) {
			// 	_strlineW += _this.ctx.measureText(_this.Title[i]).width;//测量文本尺寸信息，目前仅返回文本宽度 
			// 	if (_strlineW > r[0]) {//let _strlineW就是为了进行换行的判断和处理 该换行之类的才会进入这个if
			// 		if(_num == 2&&_this.LineType){
			// 			//文字换行数量大于二进行省略号处理
			// 			//否则进行普通的换行 height+=20
			// 			_this.ctx.fillText(_this.Title.substring(_strLastIndex, i-8)+'...', C_P, _strHeight);
			// 			//要用fillText后 文本才会填入canvas的ctx中
			// 			_strlineW = 0;
			// 			_strLastIndex = i;
			// 			_num++;
			// 			break;
			// 		}else{
			// 			_this.ctx.fillText(_this.Title.substring(_strLastIndex, i), C_P, _strHeight);
			// 			_strlineW = 0;
			// 			_strHeight += 20;
			// 			_strLastIndex = i;
			// 			_num++;
			// 		}
			// 	}else if (i == _this.Title.length - 1) {
			// 		_this.ctx.fillText(_this.Title.substring(_strLastIndex, i + 1), C_P, _strHeight);
			// 		_strlineW = 0;
			// 	}
			// }
			_this.ctx.drawImage(_QrCode.path,C_P,_strHeight, q[0], q[1]);
			let IHeight=_strHeight
			//设置文本 end
			//设置价格
			_strlineW = C_P;
			_strHeight += uni.upx2px(60);
			if(_num==1){
				_strHeight += 20;	//单行标题时占位符 即前面的文本标题只有一行
			}
			
			if(_this.PriceTxt !=''){	//判断是否有销售价格
				_this.ctx.setFillStyle(_this.PriceColor);//设置price文本颜色
				_this.ctx.setFontSize(uni.upx2px(38));
				_this.ctx.fillText(_this.PriceTxt, _strlineW+C_Q+C_P, _strHeight-20); //商品价格
				_strlineW += _this.ctx.measureText(_this.PriceTxt).width + uni.upx2px(10);
			}
			if(_this.PriceTxt !='' && _this.OriginalTxt !=''){	//判断是否有销售价格且原价
				_this.ctx.setFillStyle(_this.OriginalColor);
				_this.ctx.setFontSize(uni.upx2px(24));
				_this.ctx.fillText(_this.OriginalTxt, _strlineW, _strHeight); //商品原价
			}
			// _this.ctx.strokeStyle = _this.OriginalColor;
			// _this.ctx.moveTo(_strlineW, _strHeight - uni.upx2px(10)); //起点 //这里使用-10则刚好线从中中间起画
			// _this.ctx.lineTo(_strlineW + _this.ctx.measureText(_this.OriginalTxt).width, _strHeight - uni.upx2px(10)); //终点
			// _this.ctx.stroke();
			/*
			stroke() 方法会实际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色。
			*/
			//设置价格 end
// console.log(Iheight)
			//添加二维码
			// _strHeight += uni.upx2px(20);
			_this.ctx.drawImage(_QrCode.path,C_P, IHeight+C_P+C_Q, q[0]/2, q[1]/2);//nmd 小写写成大写你可真行
			_this.ctx.setFillStyle(_this.TitleColor);
			_this.ctx.setFontSize(uni.upx2px(30));
			_this.ctx.fillText(_this.Referrer, r[0]-C_P, IHeight+C_P+C_Q+20);//二维码的height/2
			_this.ctx.setFillStyle(_this.OriginalColor);
			_this.ctx.setFontSize(uni.upx2px(24));
			_this.ctx.fillText(_this.ViewDetails, r[0]-C_P*3, IHeight+C_P+C_Q+20+20);//在上面的下一行来写
			//r[0]-q[0]+C_P  即img.width - qrCode.width(may150) + 30间隔
			/*
			在间距间距处以合适尺寸绘制图像
			
			在画布上定位图像，并规定图像的宽度和高度：
			context.drawImage(img,x,y,width,height);
			
			x	在画布上放置图像的 x 坐标位置。
			y	在画布上放置图像的 y 坐标位置。
			width	可选。要使用的图像的宽度。（伸展或缩小图像）
			height	可选。要使用的图像的高度。（伸展或缩小图像）
			*/
			//添加二维码 end

			//添加推荐人与描述
			// _this.ctx.setFillStyle(_this.TitleColor);
			// _this.ctx.setFontSize(uni.upx2px(30));
			// _this.ctx.fillText(_this.Referrer, C_P, _strHeight + q[1] / 2);//二维码的height/2
			// _this.ctx.setFillStyle(_this.OriginalColor);
			// _this.ctx.setFontSize(uni.upx2px(24));
			// _this.ctx.fillText(_this.ViewDetails, C_P, _strHeight + q[1] / 2 + 20);//在上面的下一行来写
			//添加推荐人与描述 end
			
			//延迟后渲染至canvas上
			setTimeout(function() {
				_this.ctx.draw(true,(ret)=>{
					_this.getNewImage();
				});
			}, 600);
			
			uni.canvasToTempFilePath({
			  canvasId: _this.CanvasID,
			  success: function(res) {
			    // 在H5平台下，tempFilePath 为 base64
				_this.thisImgSrc=res.tempFilePath
				getApp().globalData.generateImgSrc=res.tempFilePath
			    // console.log(res.tempFilePath)
				console.log(1)
				console.log(getApp().globalData.generateImgSrc)
				console.log(1)
			  } 
			})
		},
		async getImageInfo({ imgSrc }) {
			return new Promise((resolve, errs) => {
				uni.getImageInfo({
					src: imgSrc,
					success: function(image) {
						resolve(image);
					},
					fail(err) {
						errs(err);
					}
				});
			});
		},
		getNewImage(){//于204行被调用
			uni.canvasToTempFilePath({
				canvasId: _this.CanvasID,
				quality: 1,
				complete: (res) => {
					getApp().globalData.generateImgSrc=res.tempFilePath
					console.log(getApp().globalData.generateImgSrc);
					/*
					     果然上面的log并没有输出  输出的是这里的log
					*/
					_this.$emit('success',res);
				}
			},this);
		}
		
	},
	mounted() {//挂载到实例上去之后调用。详见 注意：此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用$nextTickVue官方文档
		_this = this;//对_this赋值为this
		_this.OnCanvas();//进入
	}
};
</script>

<style></style>
