(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shoppingpage-order-express-index"],{"16dd":function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return s}));var s={uTabs:i("ff6c").default},r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return!e.isLoading&&e.express.length?i("v-uni-view",{staticClass:"container"},[i("u-tabs",{directives:[{name:"show",rawName:"v-show",value:e.tabs.length>1,expression:"tabs.length > 1"}],staticClass:"my-tabs",attrs:{list:e.tabs,isScroll:!0,current:e.curTab,"active-color":e.appTheme.mainBg,duration:.2,"bar-width":"60"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onChangeTab.apply(void 0,arguments)}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.tabs.length>1,expression:"tabs.length > 1"}],staticClass:"deliver-goods-list i-card clearfix"},e._l(e.express[e.curTab].goods,(function(t,s){return i("v-uni-view",{key:s,staticClass:"goods-item"},[i("v-uni-image",{staticClass:"goods-img",attrs:{src:t.goods.goods_image,alt:"商品图片"}}),i("v-uni-view",{staticClass:"title"},[e._v("共"+e._s(t.delivery_num)+"件")])],1)})),1),i("v-uni-view",{staticClass:"express i-card"},[i("v-uni-view",{staticClass:"info-item"},[i("v-uni-view",{staticClass:"item-lable"},[e._v("物流公司：")]),i("v-uni-view",{staticClass:"item-content"},[20==e.express[e.curTab].delivery_method?i("v-uni-text",[e._v("无需物流")]):i("v-uni-text",[e._v(e._s(e.express[e.curTab].express?e.express[e.curTab].express.express_name:"--"))])],1)],1),i("v-uni-view",{staticClass:"info-item"},[i("v-uni-view",{staticClass:"item-lable"},[e._v("物流单号：")]),i("v-uni-view",{staticClass:"item-content"},[i("v-uni-text",[e._v(e._s(e.express[e.curTab].express_no?e.express[e.curTab].express_no:"--"))]),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.express[e.curTab].express_no,expression:"express[curTab].express_no"}],staticClass:"act-copy",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.handleCopy(e.express[e.curTab].express_no)}}},[i("v-uni-text",[e._v("复制")])],1)],1)],1)],1),e.express[e.curTab].traces&&e.express[e.curTab].traces.length?i("v-uni-view",{staticClass:"logis-detail"},e._l(e.express[e.curTab].traces,(function(t,s){return i("v-uni-view",{key:s,staticClass:"logis-item",class:{first:0===s}},[i("v-uni-view",{staticClass:"logis-item-content"},[i("v-uni-view",{staticClass:"logis-item-content__describe"},[i("v-uni-text",{staticClass:"f-26"},[e._v(e._s(t.context))])],1),i("v-uni-view",{staticClass:"logis-item-content__time"},[i("v-uni-text",{staticClass:"f-22"},[e._v(e._s(t.time))])],1)],1)],1)})),1):e._e()],1):e._e()},a=[]},"689e":function(e,t,i){var s=i("c86c");t=s(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */\r\n/* 引入自定义主题 */.my-tabs[data-v-34507593]{margin-bottom:%?20?%}.i-card[data-v-34507593]{background:#fff;padding:%?24?% %?24?%}.express[data-v-34507593]{margin-bottom:%?20?%}.express .info-item[data-v-34507593]{display:flex;margin-bottom:%?24?%}.express .info-item[data-v-34507593]:last-child{margin-bottom:0}.express .info-item .item-lable[data-v-34507593]{display:flex;align-items:center;font-size:%?24?%;color:#999;margin-right:%?6?%}.express .info-item .item-content[data-v-34507593]{flex:1;display:flex;align-items:center;font-size:%?26?%;color:#333}.express .info-item .item-content .act-copy[data-v-34507593]{margin-left:%?20?%;padding:%?2?% %?20?%;font-size:%?22?%;color:#666;border:%?1?% solid #c1c1c1;border-radius:%?16?%}.deliver-goods-list[data-v-34507593]{margin-bottom:%?-30?%}.deliver-goods-list .goods-item[data-v-34507593]{position:relative;border-radius:%?8?%;overflow:hidden;width:%?130?%;height:%?130?%;float:left;margin-right:%?30?%;margin-bottom:%?30?%}.deliver-goods-list .goods-img[data-v-34507593]{display:block;width:100%;height:100%}.deliver-goods-list .title[data-v-34507593]{position:absolute;bottom:0;width:100%;text-align:center;background:rgba(0,0,0,.6);color:#fff;padding:%?4?% 0;font-size:%?24?%}.logis-detail[data-v-34507593]{padding:%?30?%;background-color:#fff}.logis-detail .logis-item[data-v-34507593]{position:relative;padding:10px 0 10px 25px;box-sizing:border-box;border-left:2px solid #ccc}.logis-detail .logis-item.first[data-v-34507593]{border-left:2px solid #f40}.logis-detail .logis-item.first[data-v-34507593]:after{background:#f40}.logis-detail .logis-item.first .logis-item-content[data-v-34507593]{background:#ff6e39;color:#fff}.logis-detail .logis-item.first .logis-item-content[data-v-34507593]:after{border-bottom-color:#ff6e39}.logis-detail .logis-item[data-v-34507593]:after{content:" ";display:inline-block;position:absolute;left:-6px;top:30px;width:6px;height:6px;border-radius:10px;background:#bdbdbd;border:2px solid #fff}.logis-detail .logis-item .logis-item-content[data-v-34507593]{position:relative;background:#f9f9f9;padding:%?10?% %?20?%;box-sizing:border-box;color:#666}.logis-detail .logis-item .logis-item-content[data-v-34507593]:after{content:"";display:inline-block;position:absolute;left:-10px;top:18px;border-left:10px solid #fff;border-bottom:10px solid #f3f3f3}',""]),e.exports=t},7088:function(e,t,i){"use strict";var s=i("aed6"),r=i.n(s);r.a},7320:function(e,t,i){"use strict";i.r(t);var s=i("16dd"),r=i("bd12");for(var a in r)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("7088");var o=i("828b"),n=Object(o["a"])(r["default"],s["b"],s["c"],!1,null,"34507593",null,!1,s["a"],void 0);t["default"]=n.exports},"7cf1":function(e,t,i){"use strict";i("6a54");var s=i("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.cancel=function(e,t){return a.default.post(o.cancel,(0,r.default)({orderId:e},t))},t.detail=function(e,t){return a.default.get(o.detail,(0,r.default)({orderId:e},t))},t.express=function(e,t){return a.default.get(o.express,(0,r.default)({orderId:e},t))},t.extractQrcode=function(e,t){return a.default.get(o.extractQrcode,(0,r.default)({orderId:e},t))},t.list=function(e,t){return a.default.get(o.list,e,t)},t.receipt=function(e,t){return a.default.post(o.receipt,(0,r.default)({orderId:e},t))},t.todoCounts=function(e,t){return a.default.get(o.todoCounts,e,t)};var r=s(i("9b1b")),a=s(i("d57d")),o={todoCounts:"order/todoCounts",list:"order/list",detail:"order/detail",express:"order/express",cancel:"order/cancel",extractQrcode:"order/extractQrcode",receipt:"order/receipt",pay:"order/pay"}},aed6:function(e,t,i){var s=i("689e");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var r=i("967d").default;r("a72e1f92",s,!0,{sourceMap:!1,shadowMode:!1})},bd12:function(e,t,i){"use strict";i.r(t);var s=i("e7e1"),r=i.n(s);for(var a in s)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return s[e]}))}(a);t["default"]=r.a},e7e1:function(e,t,i){"use strict";i("6a54");var s=i("3639").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("fd3c");var r=s(i("7cf1")),a={data:function(){return{isLoading:!0,curTab:0,orderId:null,express:{}}},computed:{tabs:function(){return this.express&&this.express.length?this.express.map((function(e,t){return{name:"包裹".concat(t+1)}})):[]}},onLoad:function(e){var t=e.orderId;this.orderId=t,this.getExpress()},methods:{getExpress:function(){var e=this;e.isLoading=!0,r.express(e.orderId).then((function(t){e.express=t.data.express,e.isLoading=!1}))},handleCopy:function(e){var t=this;uni.setClipboardData({data:e,success:function(){t.$toast("复制成功")}})},onChangeTab:function(e){this.curTab=e}}};t.default=a}}]);