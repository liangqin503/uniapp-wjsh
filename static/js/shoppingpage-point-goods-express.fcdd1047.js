(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shoppingpage-point-goods-express"],{"24ed":function(t,n,e){var i=e("ae45");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("967d").default;o("461acca6",i,!0,{sourceMap:!1,shadowMode:!1})},"451d":function(t,n,e){"use strict";e.r(n);var i=e("8285"),o=e("5d79");for(var r in o)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(r);e("8b96");var a=e("828b"),s=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"3d220897",null,!1,i["a"],void 0);n["default"]=s.exports},"5d79":function(t,n,e){"use strict";e.r(n);var i=e("7407"),o=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=o.a},7407:function(t,n,e){"use strict";e("6a54");var i=e("3639").default,o=e("f5bd").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(e("9e09")),a=(i(e("2429")),{components:{express:r.default},data:function(){return{item:{}}},onLoad:function(t){t.item&&(console.log(t.item),this.item=JSON.parse(t.item))},methods:{copyOrderNo:function(){console.log(this.item),uni.setClipboardData({data:this.item.odd_no,success:function(t){console.log("成功？"),uni.showToast({title:"复制成功",icon:"none"})},fail:function(t){console.log(t)}})}}});n.default=a},8285:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var i={uTag:e("dac9").default},o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"container"},["APP"==t.platform?[e("v-uni-web-view",{attrs:{src:t.item.odd_record+"?mailNo="+t.item.odd_no}})]:[e("v-uni-view",[e("v-uni-view",{staticClass:"goods-box"},[e("v-uni-image",{staticStyle:{width:"150rpx",height:"150rpx"},attrs:{src:t.item.file_path}}),e("v-uni-view",{staticClass:"goods-info"},[e("v-uni-text",[t._v(t._s(t.item.name))]),e("v-uni-view",{staticStyle:{width:"100%",display:"flex","align-items":"center","justify-content":"space-between","margin-top":"20rpx"}},[e("v-uni-text",{staticStyle:{color:"red"}},[t._v(t._s(t.item.price))]),e("v-uni-text",{staticStyle:{color:"#666"}},[t._v("x"+t._s(t.item.amount))])],1)],1)],1),e("v-uni-view",[t._v("物流公司："+t._s(t.item.odd_name))]),e("v-uni-view",[e("v-uni-text",{staticStyle:{"margin-right":"10rpx"}},[t._v("物流单号："+t._s(t.item.odd_no))]),e("u-tag",{attrs:{type:"info",text:"复制"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.copyOrderNo.apply(void 0,arguments)}}})],1)],1)]],2)},r=[]},"8b96":function(t,n,e){"use strict";var i=e("24ed"),o=e.n(i);o.a},ae45:function(t,n,e){var i=e("c86c");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */\r\n/* 引入自定义主题 */.container[data-v-3d220897]{padding:%?25?%}.goods-box[data-v-3d220897]{width:100%;margin-bottom:%?25?%;display:flex;justify-content:flex-start;align-items:center}.goods-box .goods-info[data-v-3d220897]{margin-left:%?20?%;display:flex;flex-direction:column}',""]),t.exports=n}}]);