(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["thirdparty-panicbuying-sellorder_detail"],{"063a":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-countdown"},[t.showDays&&(t.hideZeroDay||!t.hideZeroDay&&"00"!=t.d)?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:[t.letterStyle]},[t._v(t._s(t.d))])],1):t._e(),t.showDays&&(t.hideZeroDay||!t.hideZeroDay&&"00"!=t.d)?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v(t._s("colon"==t.separator?":":"天"))]):t._e(),t.showHours?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.h))])],1):t._e(),t.showHours?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v(t._s("colon"==t.separator?":":"时"))]):t._e(),t.showMinutes?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.i))])],1):t._e(),t.showMinutes?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v(t._s("colon"==t.separator?":":"分"))]):t._e(),t.showSeconds?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.s))])],1):t._e(),t.showSeconds&&"zh"==t.separator?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v("秒")]):t._e()],1)},n=[]},"09ad":function(t,e,i){"use strict";i.r(e);var a=i("f3ec"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"0b5c":function(t,e,i){"use strict";i("6a54");var a=i("3639").default,n=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e966");var o=n(i("9b1b")),s=a(i("4eaa")),r=n(i("8a7d")),l=n(i("645c")),c=n(i("f23a")),d=n(i("a533")),u=i("d3fe"),f=a(i("dfec")),v={components:{keyborder:r.default,navbar:l.default,myMessage:c.default},data:function(){return{orderId:"",order:{},showratio:!1,ratio:5,showbuypanel:!1,customHeight:30,showLuck:!1,lucklist:[],showpay:!1,paymethods:[],payment:{name:"",value:""},timer:null}},onLoad:function(t){this.customHeight=this.customBarH,t.id&&(this.orderId=t.id,this.getsellOrderDetail(t.id)),t.otype&&(this.otype=t.otype),this.getPayMethod()},onReady:function(){},methods:{failToast:function(t){var e=this;400==t.statusCode&&(e.$refs.mymsg.showFa(t.errMsg),e.timer=setInterval((function(){e.$refs.mymsg.hideShow(),clearInterval(e.timer)}),3e3))},getPayMethod:function(){var t=this;s.getPaymethod().then((function(e){console.log("支付方式",e),t.paymethods=e.data.data})).catch((function(e){t.failToast(e)}))},preImage:function(t){uni.previewImage({urls:[t]})},toBack:function(){var t=this;uni.navigateBack({delta:1,success:function(){console.log(t.otype)},fail:function(){uni.reLaunch({url:"./index"})}})},toOpen:function(){var t=this,e={order_id:t.order.order_id};s.openXingyunbao(e).then((function(e){console.log("打开幸运包",e),t.showLuck=!0,t.lucklist=e.data.data,t.getsellOrderDetail(t.order.order_id)})).catch((function(e){t.failToast(e)}))},hideLuckB:function(){this.showLuck=!1,setTimeout((function(){app.toBack()}),1e3)},shPay:function(){var t=this,e={order_id:t.order.order_id};uni.showModal({title:"温馨提示",content:"请确认您已收到对方转账，一旦确认不可撤回",success:function(i){i.confirm&&s.shPay(e).then((function(e){t.$refs.uToast.show({title:"已确认",type:"success"}),t.getsellOrderDetail(t.order.order_id),setTimeout((function(){t.toBack()}),1e3)})).catch((function(e){t.failToast(e)}))}})},toBuy:function(){this.showbuypanel=!0},confirmBuy:function(){this.showbuypanel=!1,this.$refs.keyb.show()},getPwd:function(t){var e=this,i={order_id:e.orderId,pay_pwd:t};s.buyTongzheng(i).then((function(t){console.log("购买成功",t),e.$refs.uToast.show({title:"购买成功",type:"success"}),setTimeout((function(){e.getsellOrderDetail(e.orderId)}),1e3)})).catch((function(t){e.failToast(t)}))},toPay:function(){var t=this,e={order_id:t.order.order_id};uni.showModal({title:"温馨提示",content:"请确认您已支付",success:function(i){i.confirm&&s.submitApply(e).then((function(e){console.log(e),t.$refs.uToast.show({title:e.data.status,type:"success"}),t.getsellOrderDetail(t.order.order_id)})).catch((function(e){t.failToast(e)}))}})},confirmPut:function(){this.showpay=!0,this.showratio=!1},selectPay:function(t){var e=this,i=this;this.payment=t,this.showpay=!1;var a={order_id:this.order.order_id,ratio:this.ratio,client:d.default,method:t.value};s.toPaysericeFee(a).then((function(i){console.log(i),e.payMethod(t.value,i.data.payment.payment)})).catch((function(t){i.failToast(t)}))},payMethod:function(t,e){var i=this;"alipay"===t&&(console.log("paymentData",e),f.paymentAsApp(e).then((function(t){i.onPaySuccess()})).catch((function(t){i.onPayFail(t)}))),"wechat"===t&&(console.log("paymentData",e),"MP-WEIXIN"==d.default?(0,u.paymentAsWxMp)((0,o.default)({},e)).then((function(t){console.log("支付完",t),i.onPaySuccess(t)})).catch((function(t){i.onPayFail(t)})):(0,u.paymentAsApp)((0,o.default)({},e)).then((function(t){console.log("支付完app",t),i.onPaySuccess()})).catch((function(t){i.onPayFail(t)})))},onPaySuccess:function(){this.$refs.uToast.show({title:"订单支付成功",type:"success"}),this.getsellOrderDetail(this.order.order_id)},onPayFail:function(t){uni.showToast({title:t.message||"订单未支付",icon:"none"})},toPut:function(){this.showratio=!0},subNum:function(){var t=this.ratio;console.log("减"),t>-5&&(console.log("大于"),this.ratio=t-1)},addNum:function(){console.log("加");var t=parseInt(this.ratio);t<5&&(this.ratio=t+1)},finallPay:function(){var t=this,e=this,i={order_id:e.order.order_id};s.putGoods(i).then((function(i){e.$refs.uToast.show({title:"上架成功",type:"success"}),e.getsellOrderDetail(e.order.order_id),t.showratio=!1})).catch((function(t){e.failToast(t)}))},copyData:function(t){console.log("复制",t),uni.setClipboardData({data:t,success:function(){console.log("success")}})},getsellOrderDetail:function(t){var e=this,i={order_id:t};s.getsellOrderDetail(i).then((function(t){console.log(t),e.order=t.data.order})).catch((function(t){e.failToast(t)}))}},onUnload:function(){var t=getCurrentPages(),e=t[t.length-2];e.$vm.getSellOrder(this.otype)}};e.default=v},"0e5e":function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */\r\n/* 引入自定义主题 */.u-countdown[data-v-ee56cd42]{display:inline-flex;align-items:center}.u-countdown-item[data-v-ee56cd42]{display:flex;flex-direction:row;align-items:center;justify-content:center;padding:%?2?%;border-radius:%?6?%;white-space:nowrap;-webkit-transform:translateZ(0);transform:translateZ(0)}.u-countdown-time[data-v-ee56cd42]{margin:0;padding:0;line-height:1}.u-countdown-colon[data-v-ee56cd42]{display:flex;flex-direction:row;justify-content:center;padding:0 %?5?%;line-height:1;align-items:center;padding-bottom:%?4?%}.u-countdown-scale[data-v-ee56cd42]{-webkit-transform:scale(.9);transform:scale(.9);-webkit-transform-origin:center center;transform-origin:center center}',""]),t.exports=e},"1d12":function(t,e,i){"use strict";i.r(e);var a=i("0b5c"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"212c":function(t,e,i){"use strict";var a=i("cbb7"),n=i.n(a);n.a},"4ac0":function(t,e,i){"use strict";i.r(e);var a=i("063a"),n=i("781f");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("5f3e");var s=i("828b"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"ee56cd42",null,!1,a["a"],void 0);e["default"]=r.exports},"5f3e":function(t,e,i){"use strict";var a=i("9879"),n=i.n(a);n.a},"66f5":function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */\r\n/* 引入自定义主题 */.copy-btn[data-v-4961495f]{background-color:#00d491;color:#fff;padding:0 %?10?%;border-radius:%?8?%;font-size:%?24?%;margin-right:%?10?%}.goods[data-v-4961495f]{width:100%;padding:%?20?% %?30?%;background-color:#fff}.goods .goods-detail[data-v-4961495f]{width:100%;margin:%?20?% auto;padding-top:%?30?%;display:flex;align-items:flex-start;justify-content:flex-start}.goods .goods-detail .g-img[data-v-4961495f]{width:%?180?%;height:%?180?%;margin-right:%?20?%}.goods .goods-detail .g-data .goods_name[data-v-4961495f]{font-size:%?34?%;margin-bottom:%?15?%}.goods .goods-detail .goods_price[data-v-4961495f]{color:#e13c26;font-size:%?34?%}.goods .order_no[data-v-4961495f]{width:100%;display:flex;align-items:center;justify-content:space-between;font-size:%?28?%;color:#666}.buss-info[data-v-4961495f]{width:100%;padding:%?20?% %?25?%;margin-top:%?30?%;background-color:#fff}.buss-info .title[data-v-4961495f]{width:100%;display:flex;align-items:center;justify-content:flex-start}.buss-info .title .redcol[data-v-4961495f]{height:%?30?%;width:%?5?%;background-color:red;margin:0 %?5?%;margin-right:%?10?%}.buss-info .shouyi[data-v-4961495f]{width:100%;margin:%?20?% %?0?%;line-height:%?35?%}.buss-info .data-item[data-v-4961495f]{width:100%;display:flex;align-items:center;justify-content:space-between;margin:%?25?% 0}.buss-info .data-item .code-img uni-image[data-v-4961495f]{width:%?200?%;height:%?200?%}.luck-box[data-v-4961495f]{width:100%}.luck-box .luck-title[data-v-4961495f]{width:100%;height:%?80?%;line-height:%?70?%;text-align:center;font-size:%?36?%;color:#fff;background:linear-gradient(#00e7a1,#08b0d1)}.luck-box .lucklist[data-v-4961495f]{width:100%;padding:%?20?% %?40?%;padding-bottom:%?40?%}.luck-box .lucklist .list-item[data-v-4961495f]{margin:%?15?% auto;width:100%;display:flex;align-items:center;justify-content:space-between}.luck-box .luck-btn[data-v-4961495f]{width:%?450?%;line-height:%?70?%;border-radius:%?50?%;color:#fff;margin:0 auto;text-align:center;margin-bottom:%?30?%;background:linear-gradient(90deg,#00e7a1,#08b0d1)}.pay-box[data-v-4961495f]{width:100%;padding:%?30?%}.pay-box .pay-item[data-v-4961495f]{width:100%;padding:%?30?% 0;border-bottom:%?1?% solid #ddd;display:flex;align-items:center;justify-content:space-between}.pay-box .pay-item .pay_name[data-v-4961495f]{display:flex;align-items:center;justify-content:flex-start}.pay-box .pay-item[data-v-4961495f]:last-child{border:0}.tips[data-v-4961495f]{width:100%;padding:%?20?%;margin-top:%?50?%;display:flex;align-items:center;flex-direction:column;justify-content:space-around;color:#fff}.tips .buy-btn[data-v-4961495f]{padding:%?5?% %?15?%;width:80%;border-radius:%?50?%;height:%?70?%;margin:%?10?% auto;background:linear-gradient(90deg,#00e7a1,#08b0d1);color:#fff;font-size:%?30?%}.box[data-v-4961495f]{width:100%;height:%?500?%;padding:%?20?%;text-align:center}.box .main[data-v-4961495f]{width:100%;margin:%?100?% auto;display:flex;align-items:center;justify-content:center}.box .main .action-btn[data-v-4961495f]{border:%?1?% solid #fec56f;background-color:#fdf6ec;color:#fec56f;padding:%?15?%;width:%?80?%;line-height:%?40?%;text-align:center;font-size:%?50?%;marign:0 %?10?%;border-radius:%?10?%}.box .main uni-input[data-v-4961495f]{width:%?150?%;margin:0 %?15?%;text-align:center;border:%?1?% solid #ddd;height:%?70?%;padding:0}.box .com-btn[data-v-4961495f]{margin:%?30?% auto;margin-top:%?100?%;width:%?400?%;padding:%?0?% %?15?%;background-color:#fec56f;color:#fff;font-size:%?30?%;height:%?70?%;line-height:%?70?%;border-radius:%?40?%}.buy-btn[data-v-4961495f]{width:60%;padding:0;height:%?70?%;line-height:%?70?%;border-radius:%?50?%;background-color:#fec56f;color:#fff}',""]),t.exports=e},"781f":function(t,e,i){"use strict";i.r(e);var a=i("fb61"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"803c":function(t,e,i){"use strict";i.r(e);var a=i("da2c"),n=i("1d12");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("212c"),i("dd09");var s=i("828b"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"4961495f",null,!1,a["a"],void 0);e["default"]=r.exports},"8a7d":function(t,e,i){"use strict";i.r(e);var a=i("e2e2"),n=i("09ad");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);var s=i("828b"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"5e4dbc19",null,!1,a["a"],void 0);e["default"]=r.exports},9879:function(t,e,i){var a=i("0e5e");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("998c22ee",a,!0,{sourceMap:!1,shadowMode:!1})},c0b8:function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,"uni-page-body[data-v-4961495f]{background-color:#f3f3f3}body.?%PAGE?%[data-v-4961495f]{background-color:#f3f3f3}",""]),t.exports=e},cbb7:function(t,e,i){var a=i("c0b8");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("2c1f7a67",a,!0,{sourceMap:!1,shadowMode:!1})},da2c:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={navbar:i("645c").default,uIcon:i("5ebf").default,uCountDown:i("4ac0").default,uPopup:i("834a").default,uToast:i("ee02").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("navbar",{attrs:{titleColor:"#fff",title:"寄售订单",backgroundColor:"#00e7a1,#08b0d1"}},[i("u-icon",{staticStyle:{"margin-right":"20rpx","text-shadow":"5rpx 5rpx 5rpx #6f6f6f"},attrs:{slot:"icon",name:"arrow-left",color:"#fff",size:"40"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toBack.apply(void 0,arguments)}},slot:"icon"})],1),i("v-uni-view",{staticClass:"goods",style:{paddingTop:t.customHeight+10+"px"}},[i("v-uni-view",{staticStyle:{color:"#999"}},[t._v("商品信息")]),i("v-uni-view",{staticClass:"goods-detail"},[i("v-uni-view",{staticClass:"g-img"},[i("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.order.img}})],1),i("v-uni-view",{staticClass:"g-data"},[i("v-uni-view",{staticClass:"goods_name"},[t._v(t._s(t.order.name?t.order.name:""))]),i("v-uni-view",{staticClass:"goods_price"},[t._v("价格：￥"+t._s(t.order.real_money?t.order.real_money:0))])],1)],1),i("v-uni-view",{staticClass:"order_no"},[i("v-uni-view",[t._v("单号："+t._s(t.order.order_no))]),i("v-uni-view",{staticStyle:{color:"red"}},[t._v("积分："+t._s(t.order.price_total))])],1),""!=t.order.show&&null!=t.order.show?i("v-uni-view",{staticClass:"order_no",staticStyle:{"margin-top":"20rpx"}},[i("v-uni-view",{staticStyle:{width:"100%"}},[t._v(t._s(t.order.show.name)),i("u-count-down",{ref:"uCountDown",attrs:{"separator-color":"#ffaa7f","bg-color":"#fff","font-size":"28",color:"#ffaa7f",separator:"zh",timestamp:t.order.show.value}})],1)],1):t._e()],1),t.order.shouyi&&t.order.shouyi.length>0?i("v-uni-view",{staticClass:"buss-info"},t._l(t.order.shouyi,(function(e){return i("v-uni-view",{key:e.name,staticClass:"shouyi"},[i("v-uni-text",[t._v(t._s(e.name)+":")]),i("v-uni-text",{staticStyle:{color:"red","margin-left":"15rpx"}},[t._v("￥"+t._s(e.value))])],1)})),1):t._e(),i("v-uni-view",{staticClass:"buss-info"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-view",{staticClass:"redcol"}),t._v("卖家信息")],1),i("v-uni-view",{staticClass:"data-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyData(t.order.sell_message.name)}}},[i("v-uni-view",[t._v("姓名：")]),i("v-uni-text",[t._v(t._s(null!=t.order.sell_message?t.order.sell_message.name:""))])],1),i("v-uni-view",{staticClass:"data-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyData(t.order.sell_message.username)}}},[i("v-uni-view",[t._v("电话：")]),t.order.sell_message&&t.order.sell_message.username?i("v-uni-view",[i("v-uni-text",{staticClass:"copy-btn"},[t._v("点击复制")]),t._v(t._s(null!=t.order.sell_message?t.order.sell_message.username:""))],1):t._e()],1),t.order.sell_message&&t.order.sell_message.bank_code?i("v-uni-view",{staticClass:"data-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyData(t.order.sell_message.bank_code)}}},[i("v-uni-view",[t._v("银行卡：")]),i("v-uni-view",[i("v-uni-text",{staticClass:"copy-btn"},[t._v("点击复制")]),t._v(t._s(null!=t.order.sell_message?t.order.sell_message.bank_code:""))],1)],1):t._e(),t.order.sell_message&&t.order.sell_message.bank_name?i("v-uni-view",{staticClass:"data-item"},[i("v-uni-view",[t._v("银行名：")]),i("v-uni-view",[i("v-uni-text",{staticClass:"copy-btn"},[t._v("点击复制")]),t._v(t._s(null!=t.order.sell_message?t.order.sell_message.bank_name:""))],1)],1):t._e(),t.order.sell_message&&t.order.sell_message.bank_user?i("v-uni-view",{staticClass:"data-item"},[i("v-uni-view",[t._v("银行姓名：")]),i("v-uni-view",[i("v-uni-text",{staticClass:"copy-btn"},[t._v("点击复制")]),t._v(t._s(null!=t.order.sell_message?t.order.sell_message.bank_user:""))],1)],1):t._e(),t.order.sell_message&&t.order.sell_message.wx_account?i("v-uni-view",{staticClass:"data-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyData(t.order.sell_message.wx_account)}}},[i("v-uni-view",[t._v("微信号：")]),i("v-uni-view",[i("v-uni-text",{staticClass:"copy-btn"},[t._v("点击复制")]),t._v(t._s(null!=t.order.sell_message?t.order.sell_message.wx_account:""))],1)],1):t._e(),t.order.sell_message&&t.order.sell_message.ali_account?i("v-uni-view",{staticClass:"data-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyData(t.order.sell_message.ali_account)}}},[i("v-uni-view",[t._v("支付宝：")]),i("v-uni-view",[i("v-uni-text",{staticClass:"copy-btn"},[t._v("点击复制")]),t._v(t._s(null!=t.order.sell_message?t.order.sell_message.ali_account:""))],1)],1):t._e()],1),i("v-uni-view",{staticClass:"buss-info"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-view",{staticClass:"redcol"}),t._v("买家信息")],1),i("v-uni-view",{staticClass:"data-item"},[i("v-uni-view",[t._v("姓名：")]),i("v-uni-view",[t._v(t._s(null!=t.order.buy_message?t.order.buy_message.name:""))])],1),i("v-uni-view",{staticClass:"data-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyData(t.order.buy_message.username)}}},[i("v-uni-view",[t._v("电话：")]),i("v-uni-view",[t.order.buy_message&&t.order.buy_message.username?i("v-uni-text",{staticClass:"copy-btn"},[t._v("点击复制")]):t._e(),t._v(t._s(t.order.buy_message?t.order.buy_message.username:""))],1)],1),t.order.buy_message&&t.order.buy_message.pay_remark?i("v-uni-view",{staticClass:"data-item",staticStyle:{color:"red"}},[t._v("买家说明："+t._s(t.order.buy_message.pay_remark))]):t._e(),t.order.transfer_img?i("v-uni-view",{staticClass:"data-item"},[i("v-uni-view",[t._v("付款凭证：")]),i("v-uni-view",{staticClass:"code-img"},[i("v-uni-image",{attrs:{src:t.order.transfer_img,mode:"aspectFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.preImage(t.order.transfer_img)}}})],1)],1):t._e()],1),""!=t.order.show&&null!=t.order.show?i("v-uni-view",{staticClass:"tips"},["shoukuan"==t.order.action?i("v-uni-button",{staticClass:"buy-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shPay()}}},[t._v("确认收款")]):t._e()],1):t._e(),i("u-popup",{attrs:{mode:"center",width:"600"},model:{value:t.showratio,callback:function(e){t.showratio=e},expression:"showratio"}},[i("v-uni-view",{staticClass:"box"},[i("v-uni-view",{staticStyle:{"margin-top":"40rpx"}},[t._v("请填写溢价比例-5~5之间")]),i("v-uni-view",{staticClass:"main"},[i("v-uni-view",{staticClass:"action-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.subNum.apply(void 0,arguments)}}},[t._v("-")]),i("v-uni-input",{attrs:{disabled:"true"},model:{value:t.ratio,callback:function(e){t.ratio=e},expression:"ratio"}}),i("v-uni-view",{staticClass:"action-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addNum.apply(void 0,arguments)}}},[t._v("+")])],1),i("v-uni-button",{staticClass:"com-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirmPut.apply(void 0,arguments)}}},[t._v("确认上架")])],1)],1),i("u-popup",{attrs:{mode:"center",width:"600"},model:{value:t.showbuypanel,callback:function(e){t.showbuypanel=e},expression:"showbuypanel"}},[t.order.tz&&t.order.tz.price?i("v-uni-view",{staticClass:"box"},[i("v-uni-view",{staticStyle:{"margin-top":"40rpx"}},[t._v("今日通证价格为"),i("v-uni-text",{staticStyle:{color:"red"}},[t._v(t._s(t.order.tz.price)+"元/个")])],1),i("v-uni-view",{staticStyle:{width:"100%",display:"flex","align-items":"center","flex-direction":"column",margin:"50rpx auto"}},[i("v-uni-text",[t._v("购买后您将获得")]),i("v-uni-text",{staticStyle:{"font-size":"32rpx",color:"red",margin:"20rpx auto"}},[t._v(t._s(t.order.tz.number)+"通证")])],1),i("v-uni-button",{staticClass:"com-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirmBuy.apply(void 0,arguments)}}},[t._v("确认购买")])],1):t._e()],1),i("u-popup",{attrs:{mode:"center",width:"600"},model:{value:t.showLuck,callback:function(e){t.showLuck=e},expression:"showLuck"}},[i("v-uni-view",{staticClass:"luck-box"},[i("v-uni-view",{staticClass:"luck-title"},[t._v("恭喜获得")]),i("v-uni-view",{staticClass:"lucklist"},t._l(t.lucklist,(function(e){return i("v-uni-view",{key:e.value,staticClass:"list-item"},[i("v-uni-view",[t._v(t._s(e.name))]),i("v-uni-view",[t._v(t._s(e.value))])],1)})),1),i("v-uni-view",{staticClass:"luck-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideLuckB.apply(void 0,arguments)}}},[t._v("确定")])],1)],1),i("u-popup",{attrs:{mode:"bottom"},model:{value:t.showpay,callback:function(e){t.showpay=e},expression:"showpay"}},[i("v-uni-view",{staticClass:"pay-box"},t._l(t.paymethods,(function(e){return i("v-uni-view",{key:e.value,staticClass:"pay-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.selectPay(e)}}},[i("v-uni-view",{staticClass:"pay_name"},[i("u-icon",{attrs:{name:e.icon,size:"35",color:"wechat"==e.value?"#00c500":"alipay"==e.value?"#2a86ff":"#ff5500","margin-right":"15"}}),i("v-uni-text",{staticStyle:{"margin-right":"20rpx"}},[t._v(t._s(e.name))])],1),i("v-uni-view",[t.payment.value==e.value?i("u-icon",{attrs:{name:"checkmark",color:"#00c500"}}):t._e()],1)],1)})),1)],1),i("keyborder",{ref:"keyb",on:{getPwd:function(e){arguments[0]=e=t.$handleEvent(e),t.getPwd.apply(void 0,arguments)}}}),i("u-toast",{ref:"uToast"}),i("myMessage",{ref:"mymsg"})],1)},o=[]},dd09:function(t,e,i){"use strict";var a=i("f2b9"),n=i.n(a);n.a},e2e2:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uKeyboard:i("2862").default,uIcon:i("5ebf").default,uMessageInput:i("0e57").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("u-keyboard",{ref:"uKeyboard",attrs:{"safe-area-inset-bottom":!0,random:!0,mode:"number","dot-enabled":!1,default:"",tooltip:!1,"mask-close-able":!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChange.apply(void 0,arguments)},close:function(e){arguments[0]=e=t.$handleEvent(e),t.initPwd.apply(void 0,arguments)},backspace:function(e){arguments[0]=e=t.$handleEvent(e),t.onBackspace.apply(void 0,arguments)}},model:{value:t.showpwd,callback:function(e){t.showpwd=e},expression:"showpwd"}},[i("v-uni-view",{staticStyle:{"text-align":"center",margin:"30rpx auto",display:"flex","justify-content":"flex-start",width:"680rpx"}},[i("v-uni-view",{staticStyle:{}},[i("u-icon",{attrs:{name:"close"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.initPwd()}}})],1),i("v-uni-view",{staticStyle:{width:"580rpx","text-align":"center"}},[t._v("请输入密码")])],1),i("v-uni-view",{staticStyle:{margin:"30rpx auto"}},[i("u-message-input",{attrs:{mode:"bottomLine","font-size":"26",maxlength:t.pwd_num,"dot-fill":!0,"disabled-keyboard":!0,value:""},model:{value:t.default_pwd,callback:function(e){t.default_pwd=e},expression:"default_pwd"}})],1)],1)},o=[]},f2b9:function(t,e,i){var a=i("66f5");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("2d59bbb9",a,!0,{sourceMap:!1,shadowMode:!1})},f3ec:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"keyboard",data:function(){return{showpwd:!1,default_pwd:"",pwd_num:6}},methods:{show:function(t){this.showpwd=!0},onChange:function(t){this.default_pwd.length<6&&(this.default_pwd+=t),this.default_pwd.length>=6&&this.getPwd()},onBackspace:function(t){this.default_pwd.length>0&&(this.default_pwd=this.default_pwd.substring(0,this.default_pwd.length-1))},initPwd:function(){console.log("空"),this.showpwd=!1,this.default_pwd=""},getPwd:function(){this.showpwd=!1,this.$emit("getPwd",this.default_pwd),this.default_pwd=""}}};e.default=a},fb61:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("64aa");var a={name:"u-count-down",props:{timestamp:{type:[Number,String],default:0},autoplay:{type:Boolean,default:!0},separator:{type:String,default:"colon"},separatorSize:{type:[Number,String],default:30},separatorColor:{type:String,default:"#303133"},color:{type:String,default:"#303133"},fontSize:{type:[Number,String],default:30},bgColor:{type:String,default:"#fff"},height:{type:[Number,String],default:"auto"},showBorder:{type:Boolean,default:!1},borderColor:{type:String,default:"#303133"},showSeconds:{type:Boolean,default:!0},showMinutes:{type:Boolean,default:!0},showHours:{type:Boolean,default:!0},showDays:{type:Boolean,default:!0},hideZeroDay:{type:Boolean,default:!1}},watch:{timestamp:function(t,e){this.clearTimer(),this.start()}},data:function(){return{d:"00",h:"00",i:"00",s:"00",timer:null,seconds:0}},computed:{itemStyle:function(){var t={};return this.height&&(t.height=this.height+"rpx",t.width=this.height+"rpx"),this.showBorder&&(t.borderStyle="solid",t.borderColor=this.borderColor,t.borderWidth="1px"),this.bgColor&&(t.backgroundColor=this.bgColor),t},letterStyle:function(){var t={};return this.fontSize&&(t.fontSize=this.fontSize+"rpx"),this.color&&(t.color=this.color),t}},mounted:function(){this.autoplay&&this.timestamp&&this.start()},methods:{start:function(){var t=this;this.clearTimer(),this.timestamp<=0||(this.seconds=Number(this.timestamp),this.formatTime(this.seconds),this.timer=setInterval((function(){if(t.seconds--,t.$emit("change",t.seconds),t.seconds<0)return t.end();t.formatTime(t.seconds)}),1e3))},formatTime:function(t){t<=0&&this.end();var e,i=0,a=0,n=0;i=Math.floor(t/86400),e=Math.floor(t/3600)-24*i;var o=null;o=this.showDays?e:Math.floor(t/3600),a=Math.floor(t/60)-60*e-24*i*60,n=Math.floor(t)-24*i*60*60-60*e*60-60*a,o=o<10?"0"+o:o,a=a<10?"0"+a:a,n=n<10?"0"+n:n,i=i<10?"0"+i:i,this.d=i,this.h=o,this.i=a,this.s=n},end:function(){this.clearTimer(),this.$emit("end",{})},clearTimer:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}},beforeDestroy:function(){clearInterval(this.timer),this.timer=null}};e.default=a}}]);