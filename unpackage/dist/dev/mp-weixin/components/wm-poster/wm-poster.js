(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/wm-poster/wm-poster"],{

/***/ 1110:
/*!************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/uni/components/wm-poster/wm-poster.vue ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wm_poster_vue_vue_type_template_id_0b564ad7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wm-poster.vue?vue&type=template&id=0b564ad7& */ 1111);
/* harmony import */ var _wm_poster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wm-poster.vue?vue&type=script&lang=js& */ 1113);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wm_poster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wm_poster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs




/* normalize component */

var component = Object(_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _wm_poster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _wm_poster_vue_vue_type_template_id_0b564ad7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _wm_poster_vue_vue_type_template_id_0b564ad7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _wm_poster_vue_vue_type_template_id_0b564ad7___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/Administrator/Documents/HBuilderProjects/uni/components/wm-poster/wm-poster.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1111:
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/uni/components/wm-poster/wm-poster.vue?vue&type=template&id=0b564ad7& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wm_poster_vue_vue_type_template_id_0b564ad7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./wm-poster.vue?vue&type=template&id=0b564ad7& */ 1112);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wm_poster_vue_vue_type_template_id_0b564ad7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wm_poster_vue_vue_type_template_id_0b564ad7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wm_poster_vue_vue_type_template_id_0b564ad7___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wm_poster_vue_vue_type_template_id_0b564ad7___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 1112:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Documents/HBuilderProjects/uni/components/wm-poster/wm-poster.vue?vue&type=template&id=0b564ad7& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 1113:
/*!*************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/uni/components/wm-poster/wm-poster.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wm_poster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./wm-poster.vue?vue&type=script&lang=js& */ 1114);
/* harmony import */ var _D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wm_poster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wm_poster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wm_poster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wm_poster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_4_2_20191115_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wm_poster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1114:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Documents/HBuilderProjects/uni/components/wm-poster/wm-poster.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
//
//
//
//
//

var _this;var _default =
{
  name: 'wm-poster',
  props: {
    CanvasID: { //CanvasID 等同于 canvas-id
      Type: String,
      default: 'PosterCanvas' },

    imgSrc: { //展示图
      Type: String,
      default: '' },

    QrSrc: { //二维码
      Type: String,
      default: '' },

    Title: { //文本内容
      Type: String,
      default: '' },

    TitleColor: { //标题颜色
      Type: String,
      default: '#333333' },

    LineType: { //标题显示行数		（注超出2行显示会导致画布布局絮乱）
      Type: [String, Boolean],
      default: true },

    PriceTxt: { //价格值
      Type: String,
      default: '99.99' },

    PriceColor: { //价格颜色
      Type: String,
      default: '#e31d1a' },

    OriginalTxt: { //原价值
      Type: String,
      default: '199.99' },

    OriginalColor: { //默认颜色（如原价与扫描二维码颜色）
      Type: String,
      default: '#b8b8b8' },

    Width: { //画布宽度  (高度根据图片比例计算 单位upx)
      Type: String,
      default: 750 },

    CanvasBg: { //canvas画布背景色
      Type: String,
      default: '#ffffff' },

    Referrer: { //推荐人信息
      Type: String,
      default: 'quitter推荐给你' },

    ViewDetails: { //描述提示文字
      Type: String,
      default: '长按或扫描识别二维码' } },


  data: function data() {
    return {
      canvasW: 0,
      canvasH: 0,
      canvasImgSrc: '',
      ctx: null,
      thisImgSrc: '' };

  },
  methods: {
    OnCanvas: function () {var _OnCanvas = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var C_W, C_P, C_Q, _strlineW, _imgInfo, _QrCode, r, q, imgW, _strLastIndex, _strHeight, _num, IHeight;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                _this.ctx = uni.createCanvasContext(_this.CanvasID, this); //把this.ctx赋值为
                C_W = uni.upx2px(_this.Width),
                C_P = uni.upx2px(30),
                C_Q = uni.upx2px(150); //二维码或太阳码宽高
                _strlineW = 0; //文本宽度
                _context.next = 5;return _this.getImageInfo({ imgSrc: _this.imgSrc });case 5:_imgInfo = _context.sent;_context.next = 8;return (
                  _this.getImageInfo({ imgSrc: _this.QrSrc }));case 8:_QrCode = _context.sent; //二维码或太阳码
                r = [_imgInfo.width, _imgInfo.height]; //r[]对应imginfo
                q = [_QrCode.width, _QrCode.height]; //q[]对应qrCodeInfo
                imgW = C_W - C_P * 2; //imgW=canvas宽度减去间距*2
                if (r[0] != imgW) {
                  r[1] = Math.floor(imgW / r[0] * r[1]); //这是做的一个等比缩放 两边同时乘以imgW/r[0]则r[0]就成了imgW
                  r[0] = imgW; //插件主做了对图片宽高的严格限制
                } //首先确保了主图的宽高
                if (q[0] != C_Q) {
                  q[1] = Math.floor(C_Q / q[0] * q[1]);
                  q[0] = C_Q;
                } //对于副图也做了同样的严格限制
                _this.canvasW = C_W;
                _this.canvasH = r[1] + q[1] + 110; //定义canvasHeight
                _this.ctx.setFillStyle(_this.CanvasBg); //canvas背景颜色
                _this.ctx.fillRect(0, 0, C_W, _this.canvasH); //canvas画布大小
                //添加图片展示
                _this.ctx.drawImage(_imgInfo.path, C_P, C_P, r[0], r[1]); /*
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
                _strLastIndex = 0; //每次开始截取的字符串的索引
                _strHeight = r[1] + C_P * 2 + 10; //绘制字体距离canvas顶部的初始高度
                _num = 1;
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
                _this.ctx.drawImage(_QrCode.path, C_P, _strHeight, q[0], q[1]);
                IHeight = _strHeight;
                //设置文本 end
                //设置价格
                _strlineW = C_P;
                _strHeight += uni.upx2px(60);
                if (_num == 1) {
                  _strHeight += 20; //单行标题时占位符 即前面的文本标题只有一行
                }

                if (_this.PriceTxt != '') {//判断是否有销售价格
                  _this.ctx.setFillStyle(_this.PriceColor); //设置price文本颜色
                  _this.ctx.setFontSize(uni.upx2px(38));
                  _this.ctx.fillText(_this.PriceTxt, _strlineW + C_Q + C_P, _strHeight - 20); //商品价格
                  _strlineW += _this.ctx.measureText(_this.PriceTxt).width + uni.upx2px(10);
                }
                if (_this.PriceTxt != '' && _this.OriginalTxt != '') {//判断是否有销售价格且原价
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
                _this.ctx.drawImage(_QrCode.path, C_P, IHeight + C_P + C_Q, q[0] / 2, q[1] / 2); //nmd 小写写成大写你可真行
                _this.ctx.setFillStyle(_this.TitleColor);
                _this.ctx.setFontSize(uni.upx2px(30));
                _this.ctx.fillText(_this.Referrer, r[0] - C_P, IHeight + C_P + C_Q + 20); //二维码的height/2
                _this.ctx.setFillStyle(_this.OriginalColor);
                _this.ctx.setFontSize(uni.upx2px(24));
                _this.ctx.fillText(_this.ViewDetails, r[0] - C_P * 3, IHeight + C_P + C_Q + 20 + 20); //在上面的下一行来写
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
                setTimeout(function () {
                  _this.ctx.draw(true, function (ret) {
                    _this.getNewImage();
                  });
                }, 600);

                uni.canvasToTempFilePath({
                  canvasId: _this.CanvasID,
                  success: function success(res) {
                    // 在H5平台下，tempFilePath 为 base64
                    _this.thisImgSrc = res.tempFilePath;
                    getApp().globalData.generateImgSrc = res.tempFilePath;
                    // console.log(res.tempFilePath)
                    console.log(1);
                    console.log(getApp().globalData.generateImgSrc);
                    console.log(1);
                  } });case 38:case "end":return _context.stop();}}}, _callee, this);}));function OnCanvas() {return _OnCanvas.apply(this, arguments);}return OnCanvas;}(),


    getImageInfo: function () {var _getImageInfo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(_ref) {var imgSrc;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:imgSrc = _ref.imgSrc;return _context2.abrupt("return",
                new Promise(function (resolve, errs) {
                  uni.getImageInfo({
                    src: imgSrc,
                    success: function success(image) {
                      resolve(image);
                    },
                    fail: function fail(err) {
                      errs(err);
                    } });

                }));case 2:case "end":return _context2.stop();}}}, _callee2, this);}));function getImageInfo(_x) {return _getImageInfo.apply(this, arguments);}return getImageInfo;}(),

    getNewImage: function getNewImage() {//于204行被调用
      uni.canvasToTempFilePath({
        canvasId: _this.CanvasID,
        quality: 1,
        complete: function complete(res) {
          getApp().globalData.generateImgSrc = res.tempFilePath;
          console.log(getApp().globalData.generateImgSrc);
          /*
                                                                果然上面的log并没有输出  输出的是这里的log
                                                           */
          _this.$emit('success', res);
        } },
      this);
    } },


  mounted: function mounted() {//挂载到实例上去之后调用。详见 注意：此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用$nextTickVue官方文档
    _this = this; //对_this赋值为this
    _this.OnCanvas(); //进入
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/wm-poster/wm-poster.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wm-poster/wm-poster-create-component',
    {
        'components/wm-poster/wm-poster-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(1110))
        })
    },
    [['components/wm-poster/wm-poster-create-component']]
]);
