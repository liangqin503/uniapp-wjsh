(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-index"],{"18f4":function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{title:String,titleColor:String,backgroundColor:String},data:function(){return{customHeight:0,marginTop:20}},onLoad:function(){uni.get},created:function(){this.customHeight=this.customBarH},computed:{getPosition:function(){var t=this.customBarH,e=uni.getSystemInfoSync().windowWidth/750*70;console.log("margin-top:"+(t-e)),console.log(this.title),this.marginTop=t-e-3}}};e.default=a},"2f7d":function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */\r\n/* 引入自定义主题 */.container[data-v-681bdac3]{padding-bottom:%?60?%}.grade-box[data-v-681bdac3]{background:linear-gradient(90deg,#ffebc0,#ffc479);display:flex;justify-content:center;align-items:center;border-radius:%?10?%;padding:%?5?% %?12?%}.shownickname[data-v-681bdac3]{margin-right:%?30?%;font-size:%?30?%;max-width:%?180?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;color:#333}.main-header[data-v-681bdac3]{background-color:#fff;position:relative;width:100%;height:%?200?%;background-size:100% 100%;overflow:hidden;display:flex;align-items:center;justify-content:space-between;padding:0 %?30?%;background:linear-gradient(90deg,#6e88fc,#e0a6fa)}.main-header .bg-image[data-v-681bdac3]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0}.main-header .user-avatar[data-v-681bdac3]{position:relative}.main-header .vip_tag[data-v-681bdac3]{width:%?45?%;height:%?45?%;position:absolute;top:%?-20?%;right:%?0?%;color:#ee944a;font-size:%?36?%;display:flex;justify-content:center;align-items:center;-webkit-transform:rotate(20deg);transform:rotate(20deg)}.main-header .user-info[data-v-681bdac3]{display:flex;align-items:center;height:%?120?%;z-index:1}.main-header .user-info .user-content[data-v-681bdac3]{display:flex;flex-direction:column;justify-content:center;margin-left:%?30?%;color:#c59a46;height:100%}.main-header .user-info .user-content .nick-name[data-v-681bdac3]{font-size:%?34?%;font-weight:700;max-width:%?270?%}.main-header .user-info .user-content .mobile[data-v-681bdac3]{margin-top:%?5?%;font-size:%?28?%;color:#666;padding:%?1?% %?12?%;display:flex;justify-content:flex-start;align-items:center}.main-header .user-info .user-content .user-grade[data-v-681bdac3]{align-self:baseline;display:flex;align-items:flex-start;margin-top:%?2?%;border-radius:%?10?%;padding:%?1?% %?12?%}.main-header .user-info .user-content .user-grade .user-grade_icon .image[data-v-681bdac3]{display:block;width:%?32?%;height:%?32?%}.main-header .user-info .user-content .user-grade .user-grade_name[data-v-681bdac3]{margin-left:%?5?%;font-size:%?26?%;color:#6c2a09}.main-header .user-info .user-content .login-tips[data-v-681bdac3]{margin-top:%?12?%;font-size:%?30?%}.item-badge[data-v-681bdac3]{position:absolute;top:0;right:%?55?%;background:#fa2209;color:#fff;border-radius:100%;min-width:%?38?%;height:%?38?%;display:flex;justify-content:center;align-items:center;padding:%?1?%;font-size:%?24?%}.white-color[data-v-681bdac3]{color:#fff}.asset-box[data-v-681bdac3]{width:%?700?%;margin:0 auto;display:flex;justify-content:space-around;align-items:center;height:100%;z-index:99}.my-asset[data-v-681bdac3]{position:relative;margin:%?0?% auto;margin-top:%?-60?%;border-radius:%?20?%;overflow:hidden;display:flex;background:linear-gradient(90deg,#735ff7,#537afb);padding:%?40?% 0;width:100%}.my-asset .asset-right[data-v-681bdac3]{width:%?200?%;border-left:%?1?% solid #eee}.my-asset .asset-right-item[data-v-681bdac3]{text-align:center;color:#545454}.my-asset .asset-right-item .item-icon[data-v-681bdac3]{font-size:%?40?%}.my-asset .asset-right-item .item-name[data-v-681bdac3]{margin-top:%?10?%;font-size:%?32?%}.my-asset .asset-right-item .item-name uni-text[data-v-681bdac3]{font-size:%?25?%}.my-asset .asset-left[data-v-681bdac3]{width:%?700?%;display:flex;justify-content:space-around;align-items:center}.my-asset .asset-left .my-left-item[data-v-681bdac3]{width:50%;text-align:center;display:flex;flex-direction:column;align-items:center}.my-asset .asset-left .item-value[data-v-681bdac3]{margin-top:%?10?%;font-size:%?32?%;color:#fff}.my-asset .asset-left .item-name[data-v-681bdac3]{margin-top:%?1?%}.my-asset .asset-left .item-name[data-v-681bdac3]{font-size:%?25?%}.my-asset .asset-left-item[data-v-681bdac3]{text-align:center;color:#666;padding:0 %?42?%}.my-asset .asset-left-item .item-value[data-v-681bdac3]{font-size:%?32?%;color:red}.my-asset .asset-left-item .item-name[data-v-681bdac3]{margin-top:%?6?%;font-size:%?32?%}.my-asset .asset-left-item .item-name[data-v-681bdac3]{font-size:%?25?%}.host[data-v-681bdac3]{width:100%;padding:%?0?% %?25?%;display:flex;align-items:center;justify-content:space-between}.host .host-item[data-v-681bdac3]{width:33%}.host .host-item uni-image[data-v-681bdac3]{width:100%;height:100%}.my-service[data-v-681bdac3]{margin:%?22?% auto %?22?% auto;padding:%?22?% %?25?%;width:100%;box-shadow:0 %?1?% %?5?% 0 rgba(0,0,0,.05);border-radius:%?5?%;background:#fff}.my-service .my-item[data-v-681bdac3]{width:100%;display:flex;align-items:center;justify-content:space-between;padding:%?25?% 0}.my-service .my-item .item-left[data-v-681bdac3]{display:flex;align-items:center;font-size:%?30?%}.my-service .my-item .item-left uni-image[data-v-681bdac3]{width:%?50?%;height:%?50?%;margin-right:%?15?%}.my-logout[data-v-681bdac3]{display:flex;justify-content:center;margin-top:%?50?%}.my-logout .logout-btn[data-v-681bdac3]{width:60%;margin:0 auto;font-size:%?28?%;color:#616161;border-radius:%?20?%;border:1px solid #dcdcdc;padding:%?16?% 0;text-align:center}.my-mobile[data-v-681bdac3]{display:flex;justify-content:space-between;align-items:center;padding:%?16?% %?40?%;background:#fcebd1}.my-mobile .info[data-v-681bdac3]{color:#cd8c0c;font-size:%?28?%}.my-mobile .btn-bind[data-v-681bdac3]{padding:%?8?% %?24?%;background-color:#eab766;color:#fff;border-radius:%?30?%;font-size:%?26?%;text-align:center}.my-mobile2[data-v-681bdac3]{display:flex;justify-content:space-between;align-items:center;margin:%?20?% auto %?20?% auto;padding:%?12?% %?40?%;width:94%;box-shadow:0 %?1?% %?5?% 0 rgba(0,0,0,.05);font-size:%?30?%;border-radius:%?5?%;background:#fff}.my-mobile2 .info[data-v-681bdac3]{font-size:%?26?%}.my-mobile2 .btn-bind[data-v-681bdac3]{padding:%?8?% %?24?%;background-color:#eab766;color:#fff;border-radius:%?30?%;font-size:%?26?%;text-align:center}.VIP_class[data-v-681bdac3]{width:100%;margin:%?20?% auto;padding:%?15?% %?15?%;display:flex;align-items:center;justify-content:flex-end;background:linear-gradient(90deg,#f3eade,#e5bc86);border-radius:%?30?%}.VIP_class uni-image[data-v-681bdac3]{width:%?39?%;height:%?36?%;margin:0 %?15?%}.vip-btn[data-v-681bdac3]{padding:0;height:%?65?%;line-height:%?65?%;border-radius:%?50?%;width:%?200?%;background:linear-gradient(90deg,#825917,#4e2b01);color:#f5e2b8;font-size:%?28?%}.vip-tips[data-v-681bdac3]{color:#825917;width:%?380?%}',""]),t.exports=e},4242:function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,".nav_main[data-v-d900e530]{position:fixed;top:0;display:flex;width:100%;-webkit-transform:translate(-50%);transform:translate(-50%);background:linear-gradient(90deg,#735ff7,#537afb);left:50%;max-width:750px;transform:translate(-50%);z-index:1024}.nav-box[data-v-d900e530]{width:%?700?%;margin:0 %?25?%;display:flex;justify-content:flex-start;align-items:center\n\t/* border:1rpx solid #00C989; */\n\t/* border:1rpx solid white; */}.nav-title[data-v-d900e530]{font-family:normal;display:flex;flex-direction:row;align-items:center;text-align:center;width:100%;height:%?60?%;line-height:%?60?%;left:0;font-size:%?32?%;color:#333}",""]),t.exports=e},"42a1":function(t,e,n){var a=n("2f7d");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("967d").default;i("664a2848",a,!0,{sourceMap:!1,shadowMode:!1})},"47c0":function(t,e,n){"use strict";n.r(e);var a=n("18f4"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"645c":function(t,e,n){"use strict";n.r(e);var a=n("f27d"),i=n("47c0");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("88c7");var o=n("828b"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"d900e530",null,!1,a["a"],void 0);e["default"]=u.exports},"69c1":function(t,e,n){"use strict";n.r(e);var a=n("c294"),i=n("97aa");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("9fa8");var o=n("828b"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"3a8ce72e",null,!1,a["a"],void 0);e["default"]=u.exports},"6e08":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAdCAYAAAA6lTUKAAAFGUlEQVRYhZ1Y3WtcRRT/nbubBROTBpM+mLaJEAVpDARbKZo/QMEXhaYYH/2qgj60YrUvPokoVSh+PIlPPlgo2gqJtT6JSLC1Gqna1hAf1GZXbWi6iW1w171H7sy98z27iwPJnDnnzPnac87MHdo81gcQAaAKQE+DaBagu4joZiApaGImtdZ4oiSnJ3qt9iQZRtGKvWTQtWwyeOhvEF0GaBGgE0T0CUANQRdDzoXx2wCaA2hKG0WWQqXAM9Z0JnHWjgOuw0H55NAEfhlELwL4WNHkLq6AeQ7gKYCh//IhQNYoZmdW/8TMMNc2DWqrSXf5g+N2gD8C8DqAUsGfMLAfwJS7I6SADdhT6joVcyBqcB64oGMKdwjAq8Ui+/0ejQeB2ygsYtwuymwE3HQgAIf0srFT0TlzYG9uPN9tp4trsBlV07Buoxzey17asau13TgKoJJFvmJ7po2wU8dU4ETPNSzmQFvYkBv0wgrqNoD3lYPesSpolG6bRTI2K9GrC/j34huamDMmky8j2TIhMK2lt8CrZ1Ga/kDxpRdek3w7X5LbiAxlObyxBPz1JbC2GCxgzpupMR4qm2RPYIZt1JFsnZZw3yggjGfLgdLoDNAzIJffH5IShvZoceV+2QqH7gnGSoxbdgFjs+DqPPDjK8FAalgAuxOrGtjcIf9aK/NAsy4N6t0BumlHvkUy08CEMpzrF8A3LnfT+qKDRh4EjT/RhkPJvjVxe0GIOb3ylVolW++zaMnI/Xr1x+eBVudL5/VLSM88jvTMk+CzT4EXn5dpU4yxfbkc+88paVGwHRwE0uopBZMwXhcPDd+r+Wqng8ZKlIFrboCvngNf/UbOf34BvvimpmdpFvPdyI7ExoZbpkidfIj8LwSU+5HkxmfpkqVN1ykTPW2731zOJYiCEmXAVr3Kn6txDXztB9DgpMz7wQlhaMlIobT2mS6o4ClpCO3pBw3tVncYqgyAxvdr+mYtb5kEt8WYssqe4IjO1q/HUB6cFHAyPI1W/SfQsDaeV78WOek1NCVHO0QDd4L2vB/WmbFX542Nti1CQw4Hcj580npFy0Ay8oBENNdl5F2F/2Pwyhx4+b2upOg+L1LH9sw0Jl07D77+G6hvVBhPvdtFCgna6oKOrvipO3ScrGDXL0m4OLA2q8DKPHjtOzsToqmjjO8uddLqPEp3PAP0bEFp5wuKJa2eVozh1MmdKlaiVT7W5gMl4rTCSA3xVhm4oKVXFhRcGntE42unjD1hhb74dpc9tlBBP1jeKjdsons5Cp+2lkONetiQqCumk8UhGbmkxUcji3zNFdrtaYuiRYbC0sH8MH/IYDZOW41jcC0z/nxcga/HPG3l+lMvXcKS2F95V+4C1Cnl7dJ7zmUFexLgvXbBxhwhkTrUOyq5muvg67/LYssPumJOfz6q9iA7fTPc0ttynXUWfaKpjpKdtkTk2BBpJMBJuvFhpQLgF4C2K0b91W49fagT0XrKMF8IzJcA+wUh9HTS+TXCfBaxcCsAjWc7GgAOto+4S/Jz0IW9b1v2ZzvJXBnxazqYDwD8T9EqjwM4ErbYP209o70uEzMoMDtO+d+2nuYjub3WrfIwgHckyDp2gYjHP57DBml0xIGOsBLwLoDDBcU8pFoAnpPFi2WEhudIaB3q3RGnunYgs4dnAH4W4FahIytYg0e9BVZANAPQwwTalT8H9lhPcB2fA0PPf6F3Sv89k5A086L8FkQngOQ4iBpWAwHhP6nwqSpj3hACAAAAAElFTkSuQmCC"},"7cf1":function(t,e,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.cancel=function(t,e){return r.default.post(o.cancel,(0,i.default)({orderId:t},e))},e.detail=function(t,e){return r.default.get(o.detail,(0,i.default)({orderId:t},e))},e.express=function(t,e){return r.default.get(o.express,(0,i.default)({orderId:t},e))},e.extractQrcode=function(t,e){return r.default.get(o.extractQrcode,(0,i.default)({orderId:t},e))},e.list=function(t,e){return r.default.get(o.list,t,e)},e.receipt=function(t,e){return r.default.post(o.receipt,(0,i.default)({orderId:t},e))},e.todoCounts=function(t,e){return r.default.get(o.todoCounts,t,e)};var i=a(n("9b1b")),r=a(n("d57d")),o={todoCounts:"order/todoCounts",list:"order/list",detail:"order/detail",express:"order/express",cancel:"order/cancel",extractQrcode:"order/extractQrcode",receipt:"order/receipt",pay:"order/pay"}},"88c7":function(t,e,n){"use strict";var a=n("9de2"),i=n.n(a);i.a},"8bda":function(t,e,n){"use strict";var a=n("b3b5"),i=n.n(a);i.a},"8d84":function(t,e,n){"use strict";n.r(e);var a=n("b122"),i=n("9a0e");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("8bda"),n("c5dd");var o=n("828b"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"681bdac3",null,!1,a["a"],void 0);e["default"]=u.exports},"97aa":function(t,e,n){"use strict";n.r(e);var a=n("e325"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"9a0e":function(t,e,n){"use strict";n.r(e);var a=n("b17a"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"9de2":function(t,e,n){var a=n("4242");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("967d").default;i("5ab0b46f",a,!0,{sourceMap:!1,shadowMode:!1})},"9fa8":function(t,e,n){"use strict";var a=n("cd15"),i=n.n(a);i.a},b122:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={navbar:n("645c").default,uIcon:n("5ebf").default,uniIcons:n("d6c3").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("navbar",{attrs:{titleColor:"#fff",title:"我的",backgroundColor:"#6e88fc,#e0a6fa"}}),a("v-uni-view",{style:{paddingTop:t.customHeight+10+"px"}},[a("v-uni-view",{staticClass:"main-header"},[t.isLogin?a("v-uni-view",{staticClass:"user-info",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.updateInfo.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"user-avatar"},[a("avatar-image",{attrs:{url:t.userInfo.avatar_url,width:100}})],1),a("v-uni-view",{staticClass:"user-content"},[a("v-uni-view",{staticClass:"user-grade"},[a("v-uni-view",{staticClass:"shownickname"},[t._v("哈哈")])],1),a("v-uni-view",{staticClass:"mobile"},[a("v-uni-image",{staticStyle:{"margin-right":"10rpx",width:"47rpx",height:"30rpx"},attrs:{src:n("6e08")}}),t._v("13176548722")],1)],1)],1):t._e(),t.isLogin?a("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleService({url:"userpage/sharepage"})}}},[a("v-uni-image",{staticStyle:{width:"55rpx",height:"55rpx"},attrs:{src:"/static/background/code.png"}})],1):a("v-uni-view",{staticClass:"user-info",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleLogin.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"user-avatar"},[a("avatar-image",{attrs:{width:100}})],1),a("v-uni-view",{staticClass:"user-content"},[a("v-uni-view",{staticClass:"nick-name"},[t._v("未登录")]),a("v-uni-view",{staticClass:"login-tips"},[t._v("点击登录账号")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"my-service"},[t._l(t.service,(function(e){return[a("v-uni-view",{key:e.id+"_0",staticClass:"my-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleService(e)}}},[a("v-uni-view",{staticClass:"item-left"},["uview"==e.type?a("u-icon",{attrs:{name:e.icon,color:e.color,size:"28px"}}):t._e(),"uni"==e.type?a("uni-icons",{attrs:{type:e.icon,color:e.color,size:"30px"}}):t._e(),a("v-uni-text",{staticStyle:{"margin-left":"10rpx"}},[t._v(t._s(e.name))])],1),a("v-uni-view",[a("u-icon",{attrs:{name:"arrow-right",size:"30"}})],1)],1)]}))],2),t.isLogin?a("v-uni-view",{staticClass:"my-logout"},[a("v-uni-view",{staticClass:"logout-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleLogout()}}},[a("v-uni-text",[t._v("退出登录")])],1)],1):t._e()],1)},r=[]},b17a:function(t,e,n){"use strict";n("6a54");var a=n("3639").default,i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("bf0f"),n("18f7"),n("de6c"),n("aa9c"),n("dc8a");var r=i(n("f9d4")),o=i(n("69c1")),u=(n("a379"),i(n("764b"))),d=i(n("cc95")),s=a(n("370b")),l=a(n("7cf1")),c=a(n("e6fe")),f=i(n("436e")),g=(f.default.get("apiUrl"),[{id:"all",name:"全部订单",icon:"qpdingdan"},{id:"payment",name:"待支付",icon:"daifukuan",count:0},{id:"delivery",name:"待发货",icon:"daifahuo",count:0},{id:"received",name:"待收货",icon:"daishouhuo",count:0}]),h=[{id:"farm",name:"我的农场",icon:"home",type:"uview",color:"#6fff7b",url:"farmpage/page/chicken"},{id:"zc",name:"认购活动",icon:"tags",type:"uview",color:"#ff6d49",url:"liveservicepage/crowdfunding/index"},{id:"team",name:"我的团队",icon:"account",type:"uview",color:"#acffa6",url:"liveservicepage/crowdfunding/myteam"},{id:"cart",name:"购物车",icon:"cart-filled",type:"uni",color:"#ff5741",url:"shoppingpage/cart/index"},{id:"address",name:"收货地址",icon:"map-fill",type:"uview",color:"#9bbbff",url:"shoppingpage/address/index"},{id:"help",name:"我的帮助",icon:"question-circle",type:"uview",color:"#ffaa00",url:"userpage/help/custom"},{id:"update",name:"关于",icon:"question-circle",type:"uview",color:"#72a8ff",url:"userpage/app/brand"}],p=[],m={components:{AvatarImage:o.default},data:function(){return{thp_num:"",dsj_num:"",dfk_num:"",ysj_num:"",rent:p,SettingKeyEnum:u.default,isLoading:!0,isFirstload:!0,isLogin:!1,setting:{},userInfo:{},tzPriceInfo:{},assets:{balance:"--",points:"--",coupon:"--",is_message:0},service:h,orderNavbar:g,hot_list:[],customHeight:30,todoCounts:{payment:0,deliver:0,received:0}}},onLoad:function(t){this.customHeight=this.customBarH},onShow:function(t){this.onRefreshPage()},methods:{getTest:function(){s.testApi({app_id:"33",sign:"65eb9b9b8e28508adac153a8de337764"}).then((function(t){console.log("测试"),console.log(t)})).catch((function(t){}))},toBuyVIP:function(){uni.navigateTo({url:"/shoppingpage/goods/detail?goodsId=10001"})},experUpdate:function(){var t=this;c.experUpdate().then((function(e){console.log(e),t.onRefreshPage()})).catch((function(t){}))},getBonus:function(){c.getBonus().then((function(t){console.log("达人奖励")})).catch((function(t){}))},toRentpage:function(t){this.$navTo(t,{stype:"page"})},toPoints:function(){uni.navigateTo({url:"/userpage/qpoints",complete:function(t){console.log(t)}})},toIntegral:function(){uni.navigateTo({url:"/userpage/userintegral"})},toLog:function(t,e){uni.navigateTo({url:"/userpage/qxnbLog?user_id="+this.userInfo.user_id+"&db_name="+t+"&title="+e})},updateInfo:function(){uni.navigateTo({url:"../../userpage/updateInfo"})},onRefreshPage:function(){console.log("登录"),this.isLogin=!0},getPageData:function(t){var e=this;e.isLoading=!0,Promise.all([e.getSetting(),e.getUserInfo(),e.getUserAssets(),e.getTodoCounts()]).then((function(n){e.isFirstload=!1,e.initOrderTabbar(),t&&t()})).catch((function(t){return console.log("catch",t)})).finally((function(){e.isLoading=!1}))},getMenu:function(){var t=this;s.getSelfmenu().then((function(e){new Array;t.service=e.data.list})).catch((function(t){}))},initService:function(){var t=this,e=[];h.forEach((function(n){n.enabled=!0,"points"===n.id&&(n.name="我的"+t.setting[u.default.POINTS.value].points_name),"dealer"!==n.id||t.setting._other.isEnabledDealer||(n.enabled=!1),void 0!=n.count&&(n.count=t.todoCounts[n.id]),e.push(n)})),t.service=e},initOrderTabbar:function(){var t=this,e=[];g.forEach((function(n){void 0!=n.count&&(n.count=t.todoCounts[n.id]),e.push(n)})),t.orderNavbar=e},getSetting:function(){var t=this;return new Promise((function(e,n){d.default.data().then((function(n){t.setting=n,e(n)})).catch(n)}))},getUserInfo:function(){var t=this;return new Promise((function(e,n){t.isLogin?s.info({},{load:t.isFirstload}).then((function(n){t.userInfo=n.data.userInfo;var a=t.userInfo.mobile.substring(0,3)+"****"+t.userInfo.mobile.substring(7);t.userInfo.mobile=a,e(t.userInfo)})).catch((function(a){a.result&&401==a.result.status?(t.isLogin=!1,e(null)):n(a)})):e(null)}))},gethdOrder:function(t){var e=this,n={user_id:t},a=this;c.getorder(n,{load:!1}).then((function(t){var n=Object.keys(t.data.list.dsj);e.dsj_num=a.isLogin?n.length:0;var i=Object.keys(t.data.list.dfk);e.dfk_num=a.isLogin?i.length:0;var r=Object.keys(t.data.list.ysj);e.ysj_num=a.isLogin?r.length:0;var o=Object.keys(t.data.list.thp);e.thp_num=a.isLogin?o.length:0})).catch((function(t){}))},getUserAssets:function(){var t=this;return new Promise((function(e,n){t.isLogin?s.assets({},{load:t.isFirstload}).then((function(n){t.assets=n.data.assets,e(t.assets)})).catch((function(a){a.result&&401==a.result.status?(t.isLogin=!1,e(null)):n(a)})):e(null)}))},getTodoCounts:function(){var t=this;return new Promise((function(e,n){t.isLogin?l.todoCounts({},{load:t.isFirstload}).then((function(n){t.todoCounts=n.data.counts,e(t.todoCounts)})).catch((function(a){a.result&&401==a.result.status?(t.isLogin=!1,e(null)):n(a)})):e(null)}))},handleLogin:function(){!this.isLogin&&this.$navTo("pages/login/index")},handleBindMobile:function(){this.$navTo("pages/user/bind/index")},handleLogout:function(){var t=this;uni.showModal({title:"友情提示",content:"您确定要退出登录吗?",success:function(e){e.confirm&&r.default.dispatch("Logout",{}).then((function(e){return t.onRefreshPage()}))}})},onTargetWallet:function(){this.$navTo("pages/wallet/index")},onTargetPoints:function(){this.$navTo("userpage/pointsLog")},onTargetMyCoupon:function(){this.$navTo("shoppingpage/my-coupon/index")},handleService:function(t){this.$navTo(t.url,{menu_id:t.id})}},onPullDownRefresh:function(){this.getPageData((function(){uni.stopPullDownRefresh()}))}};e.default=m},b3b5:function(t,e,n){var a=n("e6ec");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("967d").default;i("98d52f84",a,!0,{sourceMap:!1,shadowMode:!1})},c294:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"avatar-image"},[e("v-uni-image",{staticClass:"image",style:{width:this.width+"rpx",height:this.width+"rpx",borderWidth:this.borderWidth+"rpx",borderColor:this.borderColor},attrs:{src:this.url?this.url:"/static/head.jpeg"}})],1)},i=[]},c5dd:function(t,e,n){"use strict";var a=n("42a1"),i=n.n(a);i.a},cd15:function(t,e,n){var a=n("e036");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("967d").default;i("01bdea66",a,!0,{sourceMap:!1,shadowMode:!1})},e036:function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */\r\n/* 引入自定义主题 */.avatar-image .image[data-v-3a8ce72e]{display:block;width:%?60?%;height:%?60?%;border-radius:50%;border-style:solid}',""]),t.exports=e},e325:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("64aa");var a={props:{url:{type:String,default:""},width:{type:Number,default:90},borderWidth:{type:Number,default:0},borderColor:{type:String,default:"#000000"}},data:function(){return{}},methods:{}};e.default=a},e6ec:function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,"uni-page-body[data-v-681bdac3]{background-color:#f8f8ff}body.?%PAGE?%[data-v-681bdac3]{background-color:#f8f8ff}",""]),t.exports=e},e6fe:function(t,e,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.zzThq=e.zldYuyuepiao=e.zldToHdq=e.xnb_log=e.xnbLog=e.xinzhiTrans=e.uploadImg=e.updatePayPwd=e.updateName=e.updateLoginPwd=e.transRatio=e.tqhdmp=e.toyyhd=e.tosjhp=e.topay=e.togetpurchaseOrder=e.toSubscribe=e.toShareall=e.toRent=e.toPurchase=e.toCarry=e.tjfx=e.site=e.setWallet=e.recordErr=e.qhtToticket=e.qhtToPoints=e.pointTolLfxqht=e.pointSubGift=e.jiedongXingzhi=e.jftx=e.jf_tx=e.jf_hdq=e.insertPid=e.hdyy=e.hdqtoZld=e.hdq_jf=e.hdq_hdmp=e.hdqTolfxHdq=e.hdqToTz=e.hdmp_fh=e.goodsQg=e.goodsMy=e.goodsBuy=e.goods=e.giveQht=e.givePoints=e.gettzAppId=e.getsubscribeOrder=e.getsubscribeDetail=e.getsharecode=e.getrentOrder=e.getprofit=e.getorder=e.getYj=e.getUserIntegral=e.getUserInfo=e.getTzPrice=e.getTeamInfo=e.getTeam=e.getShareImg=e.getShareCount=e.getRentList=e.getQhtMx=e.getQProfit=e.getProportion=e.getProductList=e.getPointRatio=e.getPhoneName=e.getHdq=e.getBonusList=e.getBonus=e.getActionList=e.frozenXingzhi=e.experUpdate=e.exchangeQht=e.dhjf=e.dhhdq=e.dhhdmp=e.bankEdit=e.Xingzhitopoints=void 0;var i=a(n("d57d")),r={site:"auction/site",goods:"auction/goods",goodsQg:"auction/goodsQg",goodsMy:"auction/goodsMy",goodsBuy:"auction/goodsBuy",dhhdq:"auction/dhhdq",dhjf:"auction/dhjf",dhhdmp:"auction/dhhdmp",tqhdmp:"auction/tqhdmp",jftx:"auction/jftx",xnbLog:"auction/xnbLog",bankEdit:"auction/bankEdit",hdyy:"auction/hdyy",getTeam:"auction/getTeam",insertPid:"zuser/insertPid",tjfx:"zuser/tjfx",pointchangeUrl:"auction/jf_hdq",jf_tx_url:"auction/jf_tx",tx_list_url:"auction/xnb_log",hdmp_fh:"auction/hdmp_fh",hdq_jf:"auction/hdq_jf",hdq_hdmp:"auction/hdq_hdmp",jphd_url:"auction/jphd",yyhd:"auction/yyhd",getorder_url:"auction/order",payhdq:"auction/pay_hdq",sj_url:"auction/pay_hdmp",carry_url:"auction/carry",team_yj:"auction/team_jl",get_hdq:"auction/team_jl_hdq",getSharecode:"auction/tjfx1",profit_url:"auction/profit",givepointsurl:"auction/givePoints",getrent_url:"Zlease/goods",toRent_url:"zlease/goodsBuy",getrentorder_url:"zlease/zleaseOrder",getshare_url:"zlease/zleaseTask",taskall_url:"zlease/zleaseTaskAll",getteam_url:"zlease/zleaseTeam",pointsqht_url:"zuser/pointsHdq",getproportion_url:"Zuser/zappSetup",getphone_url:"zuser/getUser",giveQht_url:"zuser/hdqTransa",getprofit_url:"zlease/zleaseProfit",getQhtmx_url:"zuser/pointsLog",getBonus_url:"zlease/zleaseReward",getshareimg_url:"zlease/appfx",adverr_url:"zlease/advError",getUserIntegral_url:"UserIntegral/getIntegralList",updatezl_url:"zlease/experUpdate",updateAvatar_url:"zlease/upload",updateNickName:"zuser/nickName",updateLoginPwd_url:"zuser/passwordEdit",updatePayPwd_url:"Zuser/pwdPay",getuser_url:"zlease/getUser",getproduct_url:"zoffer/zofferGoods",subscribe_url:"zoffer/zofferGoodsBuy",getsubscribe_detail:"zoffer/zofferGoodsDescribe",getsubscribe_order_url:"zoffer/zofferOrder",purchase_url:"zoffer/zofferAdopt",getpurchaseOrder_url:"zoffer/zofferAdoptOrder",HdqtoZld_url:"zuser/hdqZld",ZldtoHdq_url:"zuser/zldHdq",xinzhitrans_url:"zfinan/xingzhiTransa",qhtToticket_url:"zfinan/hdqTransaXingzhi",getFeeratio_url:"mergepay/platform_ratio",gettzAppid_url:"zuser/tzSignAppIdHttp",setwallet_url:"zuser/walletAddr",hdqtoTz_url:"zuser/hdqTz",getTzPrice_url:"zuser/tzPrice",xingzhi_dongjie_url:"zfinan/xingzhi_dongjie",jiedong_url:"zfinan/xingzhi_jiedong",zzThq_url:"zfinan/thqTransa",zldYuyuepiao_url:"zuser/zldYuyuepiao",qhtToPoints_url:"zuser/hdqTolfxqht",Xingzhitopoints_url:"zuser/xingzhiTolfxqht",pointSubGift_url:"zuser/pointTopoint",pointTolLfxqht_url:"zuser/pointTolLfxpoint",hdq_to_lfx_hdq_url:"zuser/hdqTolLfxtz",getPoint_ratio:"zuser/zappSetupPoint",getBonus_list:"zuser/zshop_bonus_list"};e.getBonusList=function(t){return i.default.post(r.getBonus_list,t)};e.getPointRatio=function(t){return i.default.post(r.getPoint_ratio,t)};e.hdqTolfxHdq=function(t){return i.default.post(r.hdq_to_lfx_hdq_url,t)};e.pointTolLfxqht=function(t){return i.default.post(r.pointTolLfxqht_url,t)};e.pointSubGift=function(t){return i.default.post(r.pointSubGift_url,t)};e.Xingzhitopoints=function(t){return i.default.post(r.Xingzhitopoints_url,t)};e.qhtToPoints=function(t){return i.default.post(r.qhtToPoints_url,t)};e.zldYuyuepiao=function(t){return i.default.post(r.zldYuyuepiao_url,t)};e.zzThq=function(t){return i.default.post(r.zzThq_url,t)};e.jiedongXingzhi=function(t){return i.default.post(r.jiedong_url,t)};e.frozenXingzhi=function(t){return i.default.post(r.xingzhi_dongjie_url,t)};e.getTzPrice=function(t){return i.default.post(r.getTzPrice_url,t)};e.hdqToTz=function(t){return i.default.post(r.hdqtoTz_url,t)};e.setWallet=function(t){return i.default.post(r.setwallet_url,t)};e.gettzAppId=function(t){return i.default.post(r.gettzAppid_url,t)};e.transRatio=function(t){return i.default.post(r.getFeeratio_url,t)};e.qhtToticket=function(t){return i.default.post(r.qhtToticket_url,t)};e.xinzhiTrans=function(t){return i.default.post(r.xinzhitrans_url,t)};e.zldToHdq=function(t){return i.default.post(r.ZldtoHdq_url,t)};e.hdqtoZld=function(t){return i.default.post(r.HdqtoZld_url,t)};e.togetpurchaseOrder=function(t){return i.default.post(r.getpurchaseOrder_url,t)};e.toPurchase=function(t){return i.default.post(r.purchase_url,t)};e.getsubscribeDetail=function(t){return i.default.post(r.getsubscribe_detail,t)};e.getsubscribeOrder=function(t){return i.default.post(r.getsubscribe_order_url,t)};e.toSubscribe=function(t){return i.default.post(r.subscribe_url,t)};e.getProductList=function(t){return i.default.get(r.getproduct_url,t)};e.getUserInfo=function(t){return i.default.post(r.getuser_url,t)};e.updatePayPwd=function(t){return i.default.post(r.updatePayPwd_url,t)};e.updateLoginPwd=function(t){return i.default.post(r.updateLoginPwd_url,t)};e.updateName=function(t){return i.default.post(r.updateNickName,t)};e.uploadImg=function(){return i.default.get(r.updateAvatar_url)};e.experUpdate=function(t){return i.default.get(r.updatezl_url)};e.getUserIntegral=function(t){return i.default.get(r.getUserIntegral_url,t)};e.recordErr=function(t){return i.default.get(r.adverr_url,t)};e.getShareImg=function(){return i.default.get(r.getshareimg_url)};e.getBonus=function(){return i.default.get(r.getBonus_url)};e.getQhtMx=function(t){return i.default.get(r.getQhtmx_url,t)};e.getQProfit=function(t){return i.default.get(r.getprofit_url,t)};e.giveQht=function(t){return i.default.post(r.giveQht_url,t)};e.getPhoneName=function(t){return i.default.get(r.getphone_url,t)};e.getProportion=function(){return i.default.get(r.getproportion_url)};e.exchangeQht=function(t){return i.default.get(r.pointsqht_url,t)};e.getTeamInfo=function(t){return i.default.get(r.getteam_url,t)};e.toShareall=function(t){return i.default.get(r.taskall_url,t)};e.getShareCount=function(t){return i.default.get(r.getshare_url,t)};e.getrentOrder=function(t){return i.default.get(r.getrentorder_url,t)};e.toRent=function(t){return console.log("传参",t),i.default.post(r.toRent_url,t)};e.getRentList=function(t){return i.default.get(r.getrent_url,t)};e.givePoints=function(t){return i.default.get(r.givepointsurl,t)};e.getprofit=function(t){return i.default.get(r.profit_url,t)};e.getsharecode=function(t){return i.default.get(r.getSharecode,t)};e.getHdq=function(t){return i.default.get(r.get_hdq,t)};e.getYj=function(t){return i.default.get(r.team_yj,t)};e.toCarry=function(t){return i.default.get(r.carry_url,t)};e.tosjhp=function(t){return i.default.get(r.sj_url,t)};e.topay=function(t){return i.default.get(r.payhdq,t)};e.getorder=function(t){return i.default.get(r.getorder_url,t)};e.toyyhd=function(t){return i.default.get(r.yyhd,t)};e.getActionList=function(t){return i.default.get(r.jphd_url,t)};e.hdq_hdmp=function(t){return i.default.get(r.hdq_hdmp,t)};e.hdq_jf=function(t){return i.default.get(r.hdq_jf,t)};e.jf_hdq=function(t){return i.default.get(r.pointchangeUrl,t)};e.jf_tx=function(t){return i.default.get(r.jf_tx_url,t)};e.xnb_log=function(t){return i.default.get(r.tx_list_url,t)};e.hdmp_fh=function(){return i.default.get(r.hdmp_fh)};e.site=function(){return i.default.get(r.site)};e.hdyy=function(t){return i.default.get(r.hdyy,t)};e.goods=function(t){return i.default.get(r.goods,t)};e.goodsQg=function(t){return i.default.get(r.goodsQg,t)};e.goodsMy=function(t){return i.default.get(r.goodsMy,t)};e.goodsBuy=function(t){return i.default.get(r.goodsBuy,t)};e.dhhdq=function(t){return i.default.get(r.dhhdq,t)};e.dhjf=function(t){return i.default.get(r.dhjf,t)};e.dhhdmp=function(t){return i.default.get(r.dhhdmp,t)};e.tqhdmp=function(t){return i.default.get(r.tqhdmp,t)};e.jftx=function(t){return i.default.get(r.jftx,t)};e.xnbLog=function(t){return i.default.get(r.xnbLog,t)};e.bankEdit=function(t){return i.default.get(r.bankEdit,t)};e.getTeam=function(t){return i.default.get(r.getTeam,t)};e.tjfx=function(t){return i.default.get(r.tjfx,t)};e.insertPid=function(t){return i.default.get(r.insertPid,t)}},f27d:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"nav_main",style:{height:t.customHeight+10+"px",background:t.backgroundColor?"none"!=t.backgroundColor?"linear-gradient(to right, "+t.backgroundColor+")":"none":"linear-gradient(to right,  #735ff7, #537afb)"}},[n("v-uni-view",{staticClass:"nav-box",style:{height:t.customHeight+10+"px"}},[n("v-uni-view",{staticClass:"nav-title",style:{marginTop:t.marginTop+"px",color:t.titleColor}},[t._t("icon"),n("v-uni-view",[t._v(t._s(t.title?t.title:""))])],2)],1),t._t("bottom")],2)},i=[]}}]);