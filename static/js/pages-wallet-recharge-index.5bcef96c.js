(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-wallet-recharge-index"],{"0833":function(e,t,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("3967")),r=new i.default([{key:"WECHAT",name:"微信支付",value:"wechat"},{key:"ALIPAY",name:"支付宝支付",value:"alipay"},{key:"BALANCE",name:"消费券支付",value:"balance"}]);t.default=r},"0be4":function(e,t,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.performance=t.payment=t.extraAsUnify=void 0,a("bf0f");var i=n(a("39d8")),r=n(a("9b1b")),o=n(a("a533")),u=n(a("1779")),d=n(a("2be0")),c=a("d78e"),l=function(e){var t=(0,r.default)({timeStamp:"",nonceStr:"",package:"",signType:"",paySign:""},e);return new Promise((function(e,a){uni.requestPayment({provider:"wxpay",timeStamp:t.timeStamp,nonceStr:t.nonceStr,package:t.package,signType:t.signType,paySign:t.paySign,success:function(a){var n={isRequireQuery:!0,outTradeNo:t.out_trade_no,method:"wechat"};e({res:a,option:n})},fail:function(e){return a(e)}})}))},s=function(e){var t=(0,r.default)({orderKey:null,mweb_url:""},e);return u.default.set("tempUnifyData_"+t.orderKey,{method:c.PayMethodEnum.WECHAT.value,outTradeNo:t.out_trade_no},3600),new Promise((function(e,a){t.mweb_url&&(window.location.href=t.mweb_url)}))},f=function(e){var t=(0,r.default)({appId:"",timeStamp:"",nonceStr:"",package:"",signType:"",paySign:""},e);return p(t)},m=function(e){return new Promise((function(t,a){uni.requestPayment({provider:"wxpay",orderInfo:{partnerid:e.partnerid,appid:e.appid,package:"Sign=WXPay",noncestr:e.noncestr,sign:e.sign,prepayid:e.prepayid,timestamp:e.timestamp},success:function(a){t({res:a,option:{isRequireQuery:!0,outTradeNo:e.out_trade_no,method:"wechat"}})},fail:function(e){return a(e)}})}))},p=function(e){return new Promise((function(t,a){WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:e.appId,timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:e.package,signType:e.signType,paySign:e.paySign},(function(n){if("get_brand_wcpay_request:ok"==n.err_msg){var i={isRequireQuery:!0,outTradeNo:e.out_trade_no,method:"wechat"};t({res:n,option:i})}else a(n)}))}))};t.payment=function(e){var t,a=(t={},(0,i.default)(t,d.default.H5.value,s),(0,i.default)(t,d.default.MP_WEIXIN.value,l),(0,i.default)(t,d.default.H5_WEIXIN.value,f),(0,i.default)(t,d.default.APP.value,m),t);return a[o.default](e)};t.extraAsUnify=function(){return{}};t.performance=function(e){if(window.performance&&2==window.performance.navigation.type){var t=u.default.get("tempUnifyData_"+e);if(t)return u.default.remove("tempUnifyData_"+e),t}return null}},"1c34":function(e,t,a){"use strict";var n=a("5214"),i=a.n(n);i.a},"2be0":function(e,t,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("3967")),r=new i.default([{key:"APP",name:"APP端",value:"APP"},{key:"H5",name:"H5端",value:"H5"},{key:"H5_WEIXIN",name:"微信公众号端",value:"H5-WEIXIN"},{key:"MP_WEIXIN",name:"微信小程序端",value:"MP-WEIXIN"}]);t.default=r},5214:function(e,t,a){var n=a("b603");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("967d").default;i("f7996d0c",n,!0,{sourceMap:!1,shadowMode:!1})},"6e0b":function(e,t,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.submit=t.center=void 0,t.tradeQuery=function(e){return i.default.get(r.tradeQuery,e)};var i=n(a("d57d")),r={center:"recharge/center",submit:"recharge/submit",tradeQuery:"recharge/tradeQuery"};t.center=function(e){return i.default.get(r.center,e)};t.submit=function(e){return i.default.post(r.submit,{form:e})}},"78fd":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var n={uModal:a("bd6f").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.personal.user_id?a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"account-panel dis-flex flex-y-center"},[a("v-uni-view",{staticClass:"panel-lable"},[a("v-uni-text",[e._v("账户余额")])],1),a("v-uni-view",{staticClass:"panel-balance flex-box"},[a("v-uni-text",[e._v("￥"+e._s(e.personal.balance))])],1)],1),a("v-uni-view",{staticClass:"recharge-panel"},[a("v-uni-view",{staticClass:"recharge-label"},[a("v-uni-text",[e._v("充值金额")])],1),a("v-uni-view",{staticClass:"recharge-plan clearfix"},[e._l(e.planList,(function(t,n){return[a("v-uni-view",{key:n+"_0",staticClass:"recharge-plan_item",class:{active:e.selectedPlanId==t.plan_id},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.onSelectPlan(t.plan_id)}}},[a("v-uni-view",{staticClass:"plan_money"},[a("v-uni-text",[e._v(e._s(t.money))])],1),t.gift_money>0?a("v-uni-view",{staticClass:"plan_gift"},[a("v-uni-text",[e._v("送"+e._s(t.gift_money))])],1):e._e()],1)]}))],2),1==e.setting.is_custom?a("v-uni-view",{staticClass:"recharge-input"},[a("v-uni-input",{staticClass:"input",attrs:{type:"digit",placeholder:"可输入自定义充值金额"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.onChangeMoney.apply(void 0,arguments)}},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}})],1):e._e(),a("v-uni-view",{staticClass:"recharge-label m-top60"},[a("v-uni-text",[e._v("支付方式")])],1),a("v-uni-view",{staticClass:"payment-method"},e._l(e.methods,(function(t,n){return a("v-uni-view",{key:n,staticClass:"pay-item dis-flex flex-x-between",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleSelectPayType(n)}}},[a("v-uni-view",{staticClass:"item-left dis-flex flex-y-center"},[a("v-uni-view",{staticClass:"item-left_icon",class:[t.method]},[a("v-uni-text",{staticClass:"iconfont",class:[e.PayMethodIconEnum[t.method]]})],1),a("v-uni-view",{staticClass:"item-left_text"},[a("v-uni-text",[e._v(e._s(e.PayMethodEnum[t.method].name))])],1)],1),e.curPaymentItem&&e.curPaymentItem.method==t.method?a("v-uni-view",{staticClass:"item-right col-m"},[a("v-uni-text",{staticClass:"iconfont icon-check"})],1):e._e()],1)})),1),a("v-uni-view",{staticClass:"recharge-submit btn-submit"},[a("v-uni-form",{on:{submit:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmit.apply(void 0,arguments)}}},[a("v-uni-button",{staticClass:"button",attrs:{formType:"submit",disabled:e.disabled}},[e._v("立即充值")])],1)],1)],1),a("v-uni-view",{staticClass:"describe-panel"},[a("v-uni-view",{staticClass:"recharge-label"},[a("v-uni-text",[e._v("充值说明")])],1),a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{attrs:{space:"ensp"}},[e._v(e._s(e.setting.describe))])],1)],1),e.tempUnifyData?a("u-modal",{attrs:{title:"支付确认","show-cancel-button":!0,"confirm-text":"已完成支付","confirm-color":e.appTheme.mainBg,"negative-top":"100",asyncClose:!0},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.onTradeQuery(e.tempUnifyData.outTradeNo,e.tempUnifyData.method)}},model:{value:e.showConfirmModal,callback:function(t){e.showConfirmModal=t},expression:"showConfirmModal"}},[a("v-uni-view",{staticClass:"modal-content"},[a("v-uni-text",[e._v("请在"+e._s(e.PayMethodClientNameEnum[e.tempUnifyData.method])+"内完成支付，如果您已经支付成功，请点击“已完成支付”按钮")])],1)],1):e._e()],1):e._e()},r=[]},"7ec2":function(e,t,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.performance=t.payment=t.extraAsUnify=void 0,a("bf0f");var i=n(a("39d8")),r=n(a("9b1b")),o=n(a("a533")),u=n(a("2be0")),d=a("d78e"),c=function(e){var t=(0,r.default)({formHtml:""},e);return new Promise((function(e,a){if(t.formHtml){var n=document.createElement("div");n.innerHTML=t.formHtml,document.body.appendChild(n),document.forms[0].submit()}}))},l=function(e){return new Promise((function(t,a){uni.requestPayment({provider:"alipay",orderInfo:e.orderInfo,success:function(a){var n={isRequireQuery:!0,outTradeNo:e.out_trade_no,method:"alipay"};t({res:a,option:n})},fail:function(e){return a(e)}})}))};t.payment=function(e){var t,a=(t={},(0,i.default)(t,u.default.H5.value,c),(0,i.default)(t,u.default.APP.value,l),t);return a[o.default](e)};t.extraAsUnify=function(){var e={};return e.returnUrl=function(){return window.location.href}(),e};t.performance=function(){var e=s();return e.method&&"alipay.trade.wap.pay.return"===e.method?{method:d.PayMethodEnum.ALIPAY.value,outTradeNo:e.out_trade_no}:null};var s=function(){var e=getCurrentPages();return e[e.length-1].$route.query}},"8b41":function(e,t,a){"use strict";a("6a54");var n=a("f5bd").default,i=a("3639").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("bf0f");var r,o,u=n(a("9b1b")),d=n(a("39d8")),c=i(a("6e0b")),l=a("d78e"),s=a("6739"),f=a("ed03"),m=(r={},(0,d.default)(r,l.PayMethodEnum.WECHAT.value,"icon-wechat-pay"),(0,d.default)(r,l.PayMethodEnum.ALIPAY.value,"icon-alipay"),r),p=(o={},(0,d.default)(o,l.PayMethodEnum.WECHAT.value,"微信"),(0,d.default)(o,l.PayMethodEnum.ALIPAY.value,"支付宝"),o),v={data:function(){return{isLoading:!0,disabled:!1,PayMethodEnum:l.PayMethodEnum,PayMethodIconEnum:m,PayMethodClientNameEnum:p,personal:{balance:"0.00"},setting:{},planList:[],methods:[],selectedPlanId:0,inputValue:"",curPaymentItem:null,showConfirmModal:!1,tempUnifyData:{outTradeNo:"",method:""}}},onLoad:function(e){this.getPageData()},methods:{onSelectPlan:function(e){this.selectedPlanId=e,this.inputValue=""},onChangeMoney:function(e){this.inputValue=e.target.value,this.selectedPlanId=0},handleSelectPayType:function(e){this.curPaymentItem=this.methods[e]},getPageData:function(){var e=this,t=this;return t.isLoading=!0,new Promise((function(a,n){c.center({client:t.platform}).then((function(a){t.setting=a.data.setting,t.personal=a.data.personal,t.planList=a.data.planList,t.methods=a.data.paymentMethods,t.isLoading=!1,e.performance()}))}))},performance:function(){this.alipayPerformance(),this.wechatPerformance()},alipayPerformance:function(){this.tempUnifyData=f.Alipay.performance(),this.tempUnifyData&&this.onTradeQuery(this.tempUnifyData.outTradeNo,this.tempUnifyData.method)},wechatPerformance:function(){this.tempUnifyData=f.Wechat.performance("recharge"),console.log("wechatPerformance",this.tempUnifyData),this.tempUnifyData&&(this.showConfirmModal=!0)},onSubmit:function(e){var t=this;t.curPaymentItem?t.disabled||(t.disabled=!0,c.submit({planId:t.selectedPlanId,customMoney:t.inputValue,method:t.curPaymentItem.method,client:t.platform,extra:t.getExtraAsUnify(t.curPaymentItem.method)}).then((function(e){return t.onSubmitCallback(e)})).finally((function(e){setTimeout((function(){return t.disabled=!1}),10)}))):t.$toast("您还没有选择支付方式")},getExtraAsUnify:function(e){return e===l.PayMethodEnum.ALIPAY.value?f.Alipay.extraAsUnify():e===l.PayMethodEnum.WECHAT.value?f.Wechat.extraAsUnify():{}},onSubmitCallback:function(e){var t=this,a=t.curPaymentItem.method,n=e.data.payment;a===l.PayMethodEnum.BALANCE.value&&t.onShowSuccess(e),a===l.PayMethodEnum.ALIPAY.value&&(console.log("paymentData",n),f.Alipay.payment(n).then((function(e){return t.onPaySuccess(e)})).catch((function(e){return t.onPayFail(e)}))),a===l.PayMethodEnum.WECHAT.value&&(console.log("paymentData",n),f.Wechat.payment((0,u.default)({orderKey:"recharge"},n)).then((function(e){return t.onPaySuccess(e)})).catch((function(e){return t.onPayFail(e)})))},onPaySuccess:function(e){var t=e.res,a=e.option,n=a.isRequireQuery,i=a.outTradeNo,r=a.method;if(n)return this.onTradeQuery(i,r),!0;this.onShowSuccess(t)},onShowSuccess:function(e){var t=e.message;this.$toast(t||"订单支付成功"),this.onSuccessNav()},onPayFail:function(e){console.log("onPayFail",e);var t=e.message||"订单未支付";this.$error(t)},onTradeQuery:function(e,t){var a=this;c.tradeQuery({outTradeNo:e,method:t,client:a.platform}).then((function(e){return e.data.isPay?a.onShowSuccess(e):a.onPayFail(e)})).finally((function(){return a.showConfirmModal=!1}))},onSuccessNav:function(){var e=this,t=getCurrentPages(),a=t.length<2?null:t[t.length-2];a&&(0,s.inArray)(a.route,["pages/wallet/index"])?setTimeout((function(){return uni.navigateBack()}),1e3):setTimeout((function(){e.$navTo("pages/wallet/index",{},"redirectTo")}),1200)}}};t.default=v},"948b":function(e,t,a){"use strict";a.r(t);var n=a("78fd"),i=a("fe11");for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a("1c34");var o=a("828b"),u=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"7d957db2",null,!1,n["a"],void 0);t["default"]=u.exports},b603:function(e,t,a){var n=a("c86c");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */\r\n/* 引入自定义主题 */uni-page-body[data-v-7d957db2],\r\n.container[data-v-7d957db2]{background:#fff}body.?%PAGE?%[data-v-7d957db2]{background:#fff}.container[data-v-7d957db2]{padding-bottom:%?70?%}.m-top60[data-v-7d957db2]{margin-top:%?60?%}.account-panel[data-v-7d957db2]{width:%?650?%;height:%?180?%;margin:%?50?% auto;padding:0 %?60?%;box-sizing:border-box;border-radius:%?12?%;color:#fff;background:linear-gradient(-125deg,#a46bff,#786cff);box-shadow:0 5px 22px 0 rgba(0,0,0,.26)}.panel-lable[data-v-7d957db2]{font-size:%?32?%}.recharge-label[data-v-7d957db2]{color:#333;font-size:%?30?%;margin-bottom:%?25?%}.panel-balance[data-v-7d957db2]{text-align:right;font-size:%?46?%}.recharge-panel[data-v-7d957db2]{margin-top:%?60?%;padding:0 %?60?%}.recharge-plan[data-v-7d957db2]{margin-bottom:%?-20?%}.recharge-plan .recharge-plan_item[data-v-7d957db2]{width:%?192?%;padding:%?15?% 0;float:left;text-align:center;color:#888;border:%?1?% solid #e4e4e4;border-radius:%?10?%;margin:0 %?20?% %?20?% 0}.recharge-plan .recharge-plan_item[data-v-7d957db2]:nth-child(3n + 0){margin-right:0}.recharge-plan .recharge-plan_item.active[data-v-7d957db2]{color:#786cff;border:%?1?% solid #786cff}.recharge-plan .recharge-plan_item.active .plan_money[data-v-7d957db2]{color:#786cff}.plan_money[data-v-7d957db2]{font-size:%?32?%;color:#525252}.plan_gift[data-v-7d957db2]{font-size:%?25?%}.recharge-input[data-v-7d957db2]{margin-top:%?40?%}.recharge-input .input[data-v-7d957db2]{border:%?1?% solid #e4e4e4;border-radius:%?10?%;padding:%?20?% %?26?%;font-size:%?28?%}.recharge-submit[data-v-7d957db2]{margin-top:%?70?%}.btn-submit .button[data-v-7d957db2]{font-size:%?30?%;background:#786cff;border:none;color:#fff;border-radius:%?50?%;padding:0 %?120?%;line-height:3}.btn-submit .button[disabled][data-v-7d957db2]{background:#a098ff;border-color:#a098ff;color:#fff}.describe-panel[data-v-7d957db2]{margin-top:%?50?%;padding:0 %?60?%}.describe-panel .content[data-v-7d957db2]{font-size:%?26?%;line-height:1.6;color:#888}.payment-method .pay-item[data-v-7d957db2]{padding:%?14?% 0;font-size:%?26?%}.payment-method .pay-item .item-left_icon[data-v-7d957db2]{margin-right:%?20?%;font-size:%?44?%}.payment-method .pay-item .item-left_icon.wechat[data-v-7d957db2]{color:#00c800}.payment-method .pay-item .item-left_icon.alipay[data-v-7d957db2]{color:#009fe8}.payment-method .pay-item .item-left_text[data-v-7d957db2]{font-size:%?30?%}.payment-method .pay-item .item-right[data-v-7d957db2]{font-size:%?30?%}.payment-method .pay-item .user-balance[data-v-7d957db2]{margin-left:%?20?%;font-size:%?26?%}.modal-content[data-v-7d957db2]{padding:%?40?% %?48?%;font-size:%?30?%;line-height:%?50?%;text-align:left;color:#606266;box-sizing:border-box}',""]),e.exports=t},d78e:function(e,t,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PayMethodEnum",{enumerable:!0,get:function(){return i.default}});var i=n(a("0833"))},ed03:function(e,t,a){"use strict";a("6a54");var n=a("3639").default;Object.defineProperty(t,"__esModule",{value:!0}),t.Wechat=t.Alipay=void 0;var i=n(a("7ec2"));t.Alipay=i;var r=n(a("0be4"));t.Wechat=r},fe11:function(e,t,a){"use strict";a.r(t);var n=a("8b41"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a}}]);