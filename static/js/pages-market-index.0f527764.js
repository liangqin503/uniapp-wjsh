(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-market-index"],{"00d7":function(t,e,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("5ef2");n(i("6739"));var a={data:function(){return{}},methods:{onLink:function(t){return!!t&&(console.log(t),"自定义页"==t.title&&t.param.query.pageId.indexOf("page")>-1?this.$navTo(t.param.query.pageId):"PAGE"===t.type&&this.$navTo(t.param.path,t.param.query),!0)}}};e.default=a},"0b10":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={navbar:i("645c").default,uPopup:i("834a").default,uToast:i("ee02").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("navbar",{attrs:{titleColor:"#fff",title:"乐购",backgroundColor:"#6e88fc,#e0a6fa"}}),n("v-uni-view",{staticClass:"top-head",style:{paddingTop:t.customHeight+10+"px"}},[n("v-uni-view",{staticStyle:{margin:"20rpx 0 40rpx",height:"373rpx"}},[n("v-uni-swiper",{staticClass:"swiper-box",attrs:{"indicator-dots":"true",autoplay:"true","indicator-color":"#fff","indicator-active-color":"#3943ff",circular:"true"}},[t._l(t.bannerList.data,(function(e){return[n("v-uni-swiper-item",[n("v-uni-view",{staticStyle:{width:"100%",height:"373rpx","border-radius":"15rpx"}},[n("v-uni-image",{staticStyle:{width:"100%",height:"100%","border-radius":"15rpx"},attrs:{src:e.image,mode:"widthFix"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(e)}}})],1)],1)]}))],2)],1)],1),n("v-uni-view",{staticClass:"data-box"},[n("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toMine.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:i("fa27")}}),t._v("我的")],1),n("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toOrder.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:i("f075")}}),t._v("我的订单")],1)],1),n("v-uni-view",{staticClass:"price-box"},t._l(t.priceType,(function(e,i){return n("v-uni-view",{key:i,staticClass:"price-item",class:{"item-active":t.price==e.price},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.selectPriceType(e)}}},[t._v(t._s(e.price)+"专区")])})),1),n("v-uni-view",{staticClass:"goods-list"},t._l(t.goods,(function(e,i){return n("v-uni-view",{key:i,staticClass:"goods-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onTargetGoods(e.id)}}},[n("v-uni-view",{staticClass:"goods-image"},[n("v-uni-image",{staticClass:"image",attrs:{mode:"widthFix",src:e.photo}})],1),n("v-uni-view",{staticClass:"detail"},[n("v-uni-view",{staticClass:"goods-name"},[n("v-uni-text",{staticClass:"twoline-hide"},[t._v(t._s(e.name))])],1),n("v-uni-view",{staticClass:"detail-price oneline-hide"},[n("v-uni-text",{staticClass:"goods-price",staticStyle:{color:"#ff0000"}},[t._v("￥"+t._s(e.price))]),e.line_price_min?n("v-uni-text",{staticClass:"line-price col-9 f-22"},[t._v("￥"+t._s(e.line_price_min))]):t._e()],1)],1),n("v-uni-view",{staticClass:"mask"})],1)})),1),0==t.is_bind?n("v-uni-movable-area",{staticClass:"movable-area"},[n("v-uni-movable-view",{staticClass:"movable-view",attrs:{x:t.left,y:t.top,direction:"all"}},[n("v-uni-view",{staticClass:"bind-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toBind()}}},[t._v("绑定")])],1)],1):t._e(),n("u-popup",{attrs:{"border-radius":"15",mode:"center"},model:{value:t.showRe,callback:function(e){t.showRe=e},expression:"showRe"}},[n("v-uni-view",{staticClass:"pay-box"},[n("v-uni-view",{staticStyle:{margin:"30rpx auto"}},[t._v("绑定关系")]),n("v-uni-view",{staticStyle:{margin:"50rpx auto"}},[n("v-uni-input",{attrs:{placeholder:"请输入推荐人手机号"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),n("v-uni-view",{staticClass:"btn-class",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirmBind()}}},[t._v("确定")])],1)],1),n("u-toast",{ref:"uToast"})],1)},r=[]},"18f4":function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{title:String,titleColor:String,backgroundColor:String},data:function(){return{customHeight:0,marginTop:20}},onLoad:function(){uni.get},created:function(){this.customHeight=this.customBarH},computed:{getPosition:function(){var t=this.customBarH,e=uni.getSystemInfoSync().windowWidth/750*70;console.log("margin-top:"+(t-e)),console.log(this.title),this.marginTop=t-e-3}}};e.default=n},2083:function(t,e,i){var n=i("578b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("967d").default;a("551e7986",n,!0,{sourceMap:!1,shadowMode:!1})},2137:function(t,e,i){"use strict";i.r(e);var n=i("4999"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},2840:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uIcon:i("5ebf").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"tabbar"},[t._l(t.itemlist.data,(function(e){return[i("v-uni-view",{key:e.name+"_0",staticClass:"item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo(e.url)}}},[i("v-uni-view",{staticClass:"item_box"},[i("u-icon",{attrs:{name:e.icon,size:"40",color:e.check?t.itemlist.active_color:"#666"}}),i("v-uni-view",{staticClass:"text",style:{color:e.check?t.itemlist.active_color:"#666"}},[t._v(t._s(e.name))])],1)],1)]}))],2)],1)},r=[]},"2a80":function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */\r\n/* 引入自定义主题 */.tabbar[data-v-308359d5]{width:100%;height:%?120?%;border-top:#f1f5fa 1px solid;background:#fff;color:#707177;position:fixed;bottom:%?0?%;left:0;z-index:9999;display:flex;justify-content:space-around;align-items:center}.tabbar .item[data-v-308359d5]{margin-top:%?10?%;float:left;text-align:center;position:relative;display:flex;justify-content:center;align-items:center}.tabbar .item .text[data-v-308359d5]{font-size:%?24?%;margin-top:%?10?%}.item_box[data-v-308359d5]{height:100%;width:%?120?%}.active[data-v-308359d5]{color:#5980ff}',""]),t.exports=e},"30f7":function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},i("7a76"),i("c9b5")},"310b":function(t,e,i){"use strict";i.r(e);var n=i("537a"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"37c3":function(t,e,i){var n=i("2a80");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("967d").default;a("025b7621",n,!0,{sourceMap:!1,shadowMode:!1})},"37f7":function(t,e,i){"use strict";var n=i("37c3"),a=i.n(n);a.a},4242:function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,".nav_main[data-v-d900e530]{position:fixed;top:0;display:flex;width:100%;-webkit-transform:translate(-50%);transform:translate(-50%);background:linear-gradient(90deg,#735ff7,#537afb);left:50%;max-width:750px;transform:translate(-50%);z-index:1024}.nav-box[data-v-d900e530]{width:%?700?%;margin:0 %?25?%;display:flex;justify-content:flex-start;align-items:center\n\t/* border:1rpx solid #00C989; */\n\t/* border:1rpx solid white; */}.nav-title[data-v-d900e530]{font-family:normal;display:flex;flex-direction:row;align-items:center;text-align:center;width:100%;height:%?60?%;line-height:%?60?%;left:0;font-size:%?32?%;color:#333}",""]),t.exports=e},4733:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(Array.isArray(t))return(0,n.default)(t)};var n=function(t){return t&&t.__esModule?t:{default:t}}(i("8d0b"))},"47c0":function(t,e,i){"use strict";i.r(e);var n=i("18f4"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"487e":function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */\r\n/* 引入自定义主题 */.diy-banner[data-v-16ed2cdd]{position:relative\r\n  /* 指示点 */}.diy-banner .swiper-box[data-v-16ed2cdd]{width:100%;height:%?364?%;margin:0 auto;border-radius:%?20?%}.diy-banner .swiper-box .slide-image[data-v-16ed2cdd]{width:100%;height:%?352?%;border-radius:%?20?%;margin:0 auto;display:block}.diy-banner .swiper-box .active-v[data-v-16ed2cdd]{margin-top:20px}.diy-banner .indicator-dots[data-v-16ed2cdd]{width:100%;height:%?28?%;padding:0 %?20?%;position:absolute;left:0;right:0;bottom:%?20?%;opacity:.8;display:flex;justify-content:center}.diy-banner .indicator-dots .dots-item[data-v-16ed2cdd]{width:%?16?%;height:%?16?%;margin-right:%?8?%;background-color:#fff}.diy-banner .indicator-dots .dots-item[data-v-16ed2cdd]:last-child{margin-right:0}.diy-banner .indicator-dots .dots-item.active[data-v-16ed2cdd]{background-color:#fff2c9!important}.diy-banner .indicator-dots.round .dots-item[data-v-16ed2cdd]{width:%?16?%;height:%?16?%;border-radius:%?20?%}.diy-banner .indicator-dots.square .dots-item[data-v-16ed2cdd]{width:%?16?%;height:%?16?%}.diy-banner .indicator-dots.rectangle .dots-item[data-v-16ed2cdd]{width:%?22?%;height:%?14?%}.diy-banner .banner-swiper-img[data-v-16ed2cdd]{display:block;margin:auto;width:98%;height:100%;border-radius:20px}',""]),t.exports=e},4999:function(t,e,i){"use strict";i("6a54");var n=i("3639").default,a=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(i("b7c7"));i("bf0f"),i("18f7"),i("de6c"),i("c223");var o=n(i("ebc6")),s=a(i("b233")),c=a(i("fd98")),d={data:[],style:{btnColor:"#fafafa",btnShape:"rectangle",interval:2.5}},u={components:{tabbar:s.default,banner:c.default},data:function(){return{bannerList:{data:[{image:"/static/banner/banner1.png"},{image:"/static/banner/banner2.png"}]},goods:[{id:1,photo:"/static/goods/goods.png",name:"口红 不沾杯",price:76,line_price_min:79},{id:2,photo:"/static/goods/goods2.png",name:"新手美妆套装",price:123,line_price_min:135},{id:3,photo:"/static/goods/goods3.png",name:"腮红 日常低饱和",price:35,line_price_min:59}],priceType:[{price:"10"},{price:"100"}],is_bind:0,top:400,left:320,price:10,page:1,showRe:!1,phone:"",bind_url:"/static/banner/btn.png",customHeight:30}},onLoad:function(){this.customHeight=this.customBarH,uni.setStorageSync("goods",this.goods)},methods:{toOrder:function(){uni.navigateTo({url:"/market/consume-shop/order"})},toMine:function(){uni.navigateTo({url:"/market/consume-shop/mine"})},confirmBind:function(){var t=this,e={mobile:this.phone};o.bindRelation(e).then((function(e){t.$refs.uToast.show({title:"绑定成功",type:"success"}),t.showRe=!1,setTimeout((function(){t.goods=new Array,t.getInitData()}))})).catch((function(t){}))},onTargetGoods:function(t){uni.navigateTo({url:"/market/consume-shop/goods-detail?id="+t,fail:function(t){console.log(t)}})},selectPriceType:function(t){this.price=t.price,this.page=1},toBind:function(){this.showRe=!0},getInitData:function(t){var e=this;Promise.all([e.getPrice(),e.getBanner()]).then((function(t){e.priceType.length>0&&e.getGoodsList(e.priceType[0].price)})).catch((function(t){})).finally((function(){t&&t()}))},getGoodsList:function(t){var e={price:t,page:this.page},i=this;o.getGoodsList(e).then((function(t){var e=i.goods;t.data.list.data.length>0&&(e=[].concat((0,r.default)(e),(0,r.default)(t.data.list.data))),i.goods=e})).catch((function(t){}))},getBanner:function(){var t=this;return new Promise((function(e,i){o.getBanner().then((function(i){d["data"]=i.data.list,t.bannerList=d,e(i)})).catch((function(t){i(t)}))}))},getPrice:function(){var t=this;return new Promise((function(e,i){o.getPrice().then((function(i){t.priceType=i.data.price_list,i.data.price_list.length>0&&(t.price=i.data.price_list[0].price),t.is_bind=i.data.is_bind,t.bind_url=i.data.bind_url,e()})).catch((function(t){i(t)}))}))}},onReachBottom:function(){this.page=this.page+1,this.$refs.uToast.show({title:"下一页"})},onPullDownRefresh:function(){this.page=1,this.goods=new Array,this.getInitData((function(){uni.stopPullDownRefresh()}))}};e.default=u},"537a":function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{count:0}},methods:{navTo:function(t){console.log(t),uni.navigateTo({url:t,fail:function(t){console.log(t)}})}},props:{itemlist:{},parent:{}},watch:{parent:function(t){this.count=t}}};e.default=n},"578b":function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */\r\n/* 引入自定义主题 */.top-head[data-v-c0bc5692]{width:100%;background:linear-gradient(90deg,#6e88fc,#e0a6fa);padding:0 %?25?% %?100?%;border-bottom-right-radius:6%;border-bottom-left-radius:6%}.swiper-box[data-v-c0bc5692]{height:100%}.pay-box[data-v-c0bc5692]{width:%?500?%;padding:%?20?% %?25?% %?30?%}.pay-box uni-input[data-v-c0bc5692]{width:%?420?%;height:%?80?%;padding:%?5?% %?15?%;border:%?1?% solid #ddd}.btn-class[data-v-c0bc5692]{width:%?450?%;height:%?70?%;line-height:%?70?%;border-radius:%?50?%;color:#fff;margin:%?20?% auto;margin-top:%?50?%;text-align:center;background:linear-gradient(270deg,#7467f8,#a8c0f6)}.bind-btn[data-v-c0bc5692]{position:relative;text-align:center;background-image:url(/static/banner/btn.png);background-size:cover;\r\n  /* 背景图片覆盖整个元素 */background-position:50%;\r\n  /* 背景图片居中 */background-repeat:no-repeat;\r\n  /* 背景图片不重复 */height:100%;\r\n  /* 高度设置为100%，确保背景图片覆盖整个屏幕 */line-height:%?180?%;color:#fff;font-size:%?36?%;font-family:微软雅黑}.bind-btn uni-image[data-v-c0bc5692]{width:100%;height:100%;position:absolute;top:0;left:0;z-index:0}.movable-area[data-v-c0bc5692]{height:100vh;width:100%;max-width:750px;top:0;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);z-index:9999;position:fixed;pointer-events:none}.movable-area .movable-view[data-v-c0bc5692]{width:%?180?%;height:%?180?%;pointer-events:auto}.movable-area .movable-view uni-image[data-v-c0bc5692]{width:%?180?%;height:%?180?%}.data-box[data-v-c0bc5692]{position:relative;width:90%;display:flex;margin:0 auto;margin-top:%?-100?%;border-radius:%?100?%;background:#fff;align-items:center;flex-wrap:wrap;min-height:%?150?%;padding:%?10?% 0;box-shadow:%?5?% %?5?% %?5?% #ddd}.data-box .item[data-v-c0bc5692]{width:50%;display:flex;align-items:center;justify-content:center;margin:%?20?% 0}.data-box .item uni-image[data-v-c0bc5692]{width:%?40?%;height:%?40?%;margin-right:%?10?%}.price-box[data-v-c0bc5692]{width:100%;display:flex;margin:%?30?% auto;align-items:center;justify-content:space-around}.price-box .price-item[data-v-c0bc5692]{width:33%;height:%?75?%;line-height:%?75?%;text-align:center}.price-box .item-active[data-v-c0bc5692]{background:#343434;color:#fff}.goods-list[data-v-c0bc5692]{width:100%;padding-bottom:%?120?%;display:flex;white-space:normal;flex-wrap:wrap}.goods-list .goods-item[data-v-c0bc5692]{width:46%;margin:%?20?% 2%;position:relative}.goods-list .goods-item:hover .mask[data-v-c0bc5692]{display:block}.goods-list .goods-item .mask[data-v-c0bc5692]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.1);display:none}.goods-list .goods-item .goods-image[data-v-c0bc5692]{width:100%;height:%?360?%;overflow:hidden;position:relative;border-radius:%?10?%;background-image:url(/static/g_bg.png)}.goods-list .goods-item .goods-image uni-image[data-v-c0bc5692]{width:100%;height:100%;position:absolute;margin:auto;top:-9999rem;bottom:-9999rem}.goods-list .goods-item .line-price[data-v-c0bc5692]{text-decoration:line-through}.goods-list .goods-item .detail[data-v-c0bc5692]{width:100%}.goods-list .goods-item .detail .goods-name[data-v-c0bc5692]{width:100%;font-size:%?32?%}.goods-list .goods-item .detail .detail-price[data-v-c0bc5692]{margin-top:%?10?%;font-weight:700;font-size:%?32?%;color:red;margin-right:%?10?%}',""]),t.exports=e},"5e6c":function(t,e,i){var n=i("487e");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("967d").default;a("149dddea",n,!0,{sourceMap:!1,shadowMode:!1})},"645c":function(t,e,i){"use strict";i.r(e);var n=i("f27d"),a=i("47c0");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("88c7");var o=i("828b"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"d900e530",null,!1,n["a"],void 0);e["default"]=s.exports},7429:function(t,e,i){"use strict";var n=i("8a59"),a=i.n(n);a.a},"78df":function(t,e,i){"use strict";i.r(e);var n=i("0b10"),a=i("2137");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("89b5");var o=i("828b"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"c0bc5692",null,!1,n["a"],void 0);e["default"]=s.exports},"83a69":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"diy-banner",style:{height:t.imgHeights[t.imgCurrent]+"px"}},[i("v-uni-swiper",{staticClass:"swiper-box",attrs:{autoplay:t.autoplay,duration:t.duration,current:t.imgCurrent,circular:!0,interval:1e3*t.itemStyle.interval,"previous-margin":"25rpx","next-margin":"25rpx","indicator-dots":!0,"indicator-color":"#fff2c9","indicator-active-color":t.itemStyle.btnColor},on:{animationfinish:function(e){arguments[0]=e=t.$handleEvent(e),t._bindChange.apply(void 0,arguments)},change:function(e){arguments[0]=e=t.$handleEvent(e),t.dotChange.apply(void 0,arguments)}}},t._l(t.dataList,(function(e,n){return i("v-uni-swiper-item",{key:n},[i("v-uni-image",{staticClass:"slide-image",attrs:{mode:"aspectFill",src:e.imgUrl},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onLink(e.link)},load:function(e){arguments[0]=e=t.$handleEvent(e),t._imagesHeight.apply(void 0,arguments)}}})],1)})),1)],1)},a=[]},"88c7":function(t,e,i){"use strict";var n=i("9de2"),a=i.n(n);a.a},"89b5":function(t,e,i){"use strict";var n=i("2083"),a=i.n(n);a.a},"8a59":function(t,e,i){var n=i("c9c8");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("967d").default;a("6a2a0ad1",n,!0,{sourceMap:!1,shadowMode:!1})},"8bb6":function(t,e,i){"use strict";i.r(e);var n=i("d080"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"9d5b":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uIcon:i("5ebf").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.tmpConfig.type,"u-position-"+t.tmpConfig.position],style:{zIndex:t.uZIndex}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[t.tmpConfig.icon?i("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.tmpConfig.type}}):t._e()],1),i("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.tmpConfig.title))])],1)},r=[]},"9de2":function(t,e,i){var n=i("4242");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("967d").default;a("5ab0b46f",n,!0,{sourceMap:!1,shadowMode:!1})},b233:function(t,e,i){"use strict";i.r(e);var n=i("2840"),a=i("310b");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("37f7");var o=i("828b"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"308359d5",null,!1,n["a"],void 0);e["default"]=s.exports},b7c7:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return(0,n.default)(t)||(0,a.default)(t)||(0,r.default)(t)||(0,o.default)()};var n=s(i("4733")),a=s(i("d14d")),r=s(i("5d6b")),o=s(i("30f7"));function s(t){return t&&t.__esModule?t:{default:t}}},c276:function(t,e,i){"use strict";var n=i("5e6c"),a=i.n(n);a.a},c9c8:function(t,e,i){var n=i("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */\r\n/* 引入自定义主题 */.u-toast[data-v-36307caf]{position:fixed;z-index:-1;transition:opacity .3s;text-align:center;color:#fff;border-radius:%?8?%;background:#585858;display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:%?28?%;opacity:0;pointer-events:none;padding:%?18?% %?40?%}.u-toast.u-show[data-v-36307caf]{opacity:1}.u-icon[data-v-36307caf]{margin-right:%?10?%;display:flex;flex-direction:row;align-items:center;line-height:normal}.u-position-center[data-v-36307caf]{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);max-width:70%}.u-position-top[data-v-36307caf]{left:50%;top:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-position-bottom[data-v-36307caf]{left:50%;bottom:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-type-primary[data-v-36307caf]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-36307caf]{color:#19be6b;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-36307caf]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-36307caf]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-36307caf]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-36307caf]{color:#fff;background-color:#585858}',""]),t.exports=e},d080:function(t,e,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("aa9c");var a=n(i("00d7")),r={name:"Banner",props:{itemIndex:String,itemStyle:Object,params:Object,dataList:Array},mixins:[a.default],data:function(){return{windowWidth:750,indicatorDots:!1,autoplay:!0,duration:800,imgHeights:[],imgCurrent:0,currentDot:0}},created:function(){var t=this;console.log("banner create"),uni.getSystemInfo({success:function(e){var i=e.windowWidth;t.windowWidth=i>750?750:i}})},methods:{_imagesHeight:function(t){var e=t.detail,i=e.width,n=e.height,a=i/n,r=.88*this.windowWidth/a;this.imgHeights.push(r)},_bindChange:function(t){this.imgCurrent=t.detail.current},dotChange:function(t){this.currentDot=t.detail.current}}};e.default=r},d14d:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},i("01a2"),i("e39c"),i("bf0f"),i("844d"),i("18f7"),i("de6c"),i("08eb")},d291:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("64aa"),i("5ef2"),i("dc8a"),i("5c47"),i("0506");var n={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null,back:!1},tmpConfig:{}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.tmpConfig.type)>=0&&this.tmpConfig.icon){var t=this.$u.type2icon(this.tmpConfig.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var e=this;this.tmpConfig=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){e.isShow=!1,clearTimeout(e.timer),e.timer=null,"function"===typeof e.tmpConfig.callback&&e.tmpConfig.callback(),e.timeEnd()}),this.tmpConfig.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.tmpConfig.url){if("/"!=this.tmpConfig.url[0]&&(this.tmpConfig.url="/"+this.tmpConfig.url),Object.keys(this.tmpConfig.params).length){var t="";/.*\/.*\?.*=.*/.test(this.tmpConfig.url)?(t=this.$u.queryParams(this.tmpConfig.params,!1),this.tmpConfig.url=this.tmpConfig.url+"&"+t):(t=this.$u.queryParams(this.tmpConfig.params),this.tmpConfig.url+=t)}this.tmpConfig.isTab?uni.switchTab({url:this.tmpConfig.url}):uni.navigateTo({url:this.tmpConfig.url})}else this.tmpConfig.back&&this.$u.route({type:"back"})}}};e.default=n},d497:function(t,e,i){"use strict";i.r(e);var n=i("d291"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},ebc6:function(t,e,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.orderPay=e.getPrice=e.getOrderList=e.getMyfans=e.getMyconsumer=e.getMySelf=e.getGoodsList=e.getGoodsDetail=e.getBanner=e.getAgentData=e.checkPay=e.buyGoods=e.bindRelation=void 0;var a=n(i("d57d")),r={getgoods_list_url:"zshop/list",getPrice_url:"zshop/price_list",getbanner_url:"zshop/lunbo_list",getDetail_url:"zshop/detail",buygoods_url:"zshop/buy",checkPay_url:"zshop/pay_search",orderlist_url:"zshop/order_list",order_pay:"zshop/pay",bind_relation:"zshop/user_bind",getmyfans_url:"zshop/my_fans",get_consumer:"zshop/my_shop",getMyself_url:"zshop/myself",getAgentData_url:"zshop/i_am_daili"};e.getAgentData=function(t){return a.default.post(r.getAgentData_url,t)};e.getMySelf=function(t){return a.default.post(r.getMyself_url,t)};e.getMyconsumer=function(t){return a.default.post(r.get_consumer,t)};e.getMyfans=function(t){return a.default.post(r.getmyfans_url,t)};e.bindRelation=function(t){return a.default.post(r.bind_relation,t)};e.orderPay=function(t){return a.default.post(r.order_pay,t)};e.getOrderList=function(t){return a.default.post(r.orderlist_url,t)};e.checkPay=function(t){return a.default.post(r.checkPay_url,t)};e.buyGoods=function(t){return a.default.post(r.buygoods_url,t)};e.getGoodsDetail=function(t){return a.default.post(r.getDetail_url,t)};e.getBanner=function(t){return a.default.post(r.getbanner_url,t)};e.getPrice=function(t){return a.default.post(r.getPrice_url,t)};e.getGoodsList=function(t){return a.default.post(r.getgoods_list_url,t)}},ee02:function(t,e,i){"use strict";i.r(e);var n=i("9d5b"),a=i("d497");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("7429");var o=i("828b"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"36307caf",null,!1,n["a"],void 0);e["default"]=s.exports},f075:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAD10lEQVRYhc2ZW2gUZxTHf7M7MTe1iRFDTLy0hkrxUp+MD14RfWi9VgoFpZIq9tGHVlFBKIiCCD6IiKggIj60RMSA7YOtikrrFcGK9drCao1SrMYYE93ZGTnrNyE77sx+MzvG/GEfhvnO9/32zPedc+aM0XVhETFoODAWGApUAWmgA0gBt4D2YpYwI9qVA4uB+cAsoLbA+L+Ak8CPwBnACbNYWE/WAd8BK4EPwhj20j/ANmA/0K1jkNCceACwHrijIKMCij4Edinvzo8LUvbaRWALUFEEnFejgVbgIDCwGEjZb+eBiTHCebUM+B1oiAI5D/ilyEerqwnqQOUF9YNsUiextA8AXY1WTqnx3sgXgiScHNHdf4Y5iOTQ2Rilw3AcK/eeYeJYndjtl7Cf39SZbjxwQB2onjCVLwQdAz7TmVFUOmEnRll9wXGvbmzE7rimO+1qYId74fXkkiBAwxyMUVbXc50YNF4LMLvQiOVYqX09107mBU7XPb/hm4AW4AEeT5oqdjXms0pUTWZA4/dglGhB6ch61IqV2u83ci+wCs/B+dIPUFQyamWsgCKzdkHQ7eUqw+VArgqcMWbArOzArChZ7mt6QcrGmh484csY6ZScgnXGUnpBzgmRx/tSEuTrXLAZ/RDQ1XQX8pP3z+KrT904OSaMlWM9w358GifTDYbPLnFsDLOSZM0MSBZVPDW4kFVhrKwHP5F5dExrrJNux6z/KgqcqyGmOjChXiOSNTMh/QTHtgLHGckyktVTigEUVQicLc4JA5qobCQxZk2xi+uq0wV7qt709GWnZXNKqeNvko2D8jMgWR4V8n8X8nYYyMx/x0mn9mYPh54MzNp52SIjgv52j+aNMLaO1aE8mdH8WTjpJ1EARdddT54CmnWtzLovSFY34WRTZcDjfvOXssWvUT4yCqDslTMu5HF1gLRTo9SRhfBi0FXgoQvVpjoM/U2H8HhuTz8DfKXeyXMgW1RzyUd98HBzJSX7Qy+k7Mm1viaJd/B2m/DNHxK3f+gZ5rl5VLU+3pKTfhw/pH+1v8H1Ij6pcAVwxdtNSN/dTsmIZozyBv/KR58uW0ll2g7nuymO2p0z2qf1Jx2MEzE3qHT0JzDN23T1c4k0qRYCXX0IeFe987/VFQ56br8Cc4HI+SyELisP3s9nUmhznQUmAefeIaDE56kqoeSVzglIqX+5DngeI5x0jT8Hvi3UltY9plIUbwU+AjZLjVcEnLRyvgHGAT/rGET9RFKqNvlC1Q0OKnEkSUih8BsgMeePsIvF9R1nCPCx6m1K/1u+48jW+Fel2uhRAngNKE/4ffZ5GyMAAAAASUVORK5CYII="},f27d:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"nav_main",style:{height:t.customHeight+10+"px",background:t.backgroundColor?"none"!=t.backgroundColor?"linear-gradient(to right, "+t.backgroundColor+")":"none":"linear-gradient(to right,  #735ff7, #537afb)"}},[i("v-uni-view",{staticClass:"nav-box",style:{height:t.customHeight+10+"px"}},[i("v-uni-view",{staticClass:"nav-title",style:{marginTop:t.marginTop+"px",color:t.titleColor}},[t._t("icon"),i("v-uni-view",[t._v(t._s(t.title?t.title:""))])],2)],1),t._t("bottom")],2)},a=[]},fa27:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAEK0lEQVRYhcWZe4hUVRzHP/fOnXHKV49VsVp2WcltXXfzNVZG/qGWikhhb2srkETCQija/6u/sogg+kOKHhZRglBJhblam4FRZFE+liVTpDDbXUdx3Mc8bvzunCvXaR7n3LlbX7gws/f3O+cz5/E75/dba7jrCepQA3Ab0A60AlOAy4ER4BzwG3AY6AX+DNuNE8JHwNYDDwOLAEvT7xDwAfA28IdJh7aB7VXAK8AJ4FUgZQCIGu0XgGPAG0Bj1JBdQB+wRU1nPUoAG9QyeFqHoZbBROA94F01zVFqEvAS8DkwLSzk1UAP8FDEcKW6A9gPNJtCTgX2ATeNM6Cv2cA3QEu5l+V2t/xtJ9Ch1XwigbN6Gfa8DqzpDVjx8gHDzeYY634O93ymUkvXqalPqfBVFfJ5YJkOn93eSnzjI1hXXlHT1kqKQ809IiO6DXjgkn5KjG4GntUCnNNKovspLUBP2Sy4ro7l/eopCymfX9cKS8kkie4n9eDC6WUVWf4FeRcwX6fJ2K0psEziuLGuBTaWg3xGt6XYIq3fUq+EJxaEvAG4RbdRa+Z08/5l5M1G/xrgdgKQdxt3aCrLhlzO1OveIOQKE093YMiY0U2ncYdHTN28UGirm8xiE8/CDz+Zdkbh4C+6ISgoOSpn2OrKZHSzyfceMIbM7dpt7KPUapvc63y5mQzZbdu17XM7PsEdSocilONSjsXJYTzz+w/A6Cjxx7sgOaGiXfadD8n39IYFFE11/FgURvnvD1LoP4azdiV25xzvgiFyB89QONznTbF76nQ9gJ6c0huHqdz0WbLbPyp6TUgUQ82I8S6upoxADkbW3OhYlHC+BgSyX9a2aeZoNzdit83Gam7EmtaANWkiXJYsBvrhEdzMBdzBIdzjJykc7feWRUgdFbAscET3kmt3tOGsXo49t62y0ZTJxTSypQlSxXNeIPO795H/7kcTVAkJJ/zR26sDGd/0GLElKZNOLsq+vsV7YkuXMLb1NV23r2V/+sfip7WsnfXrQgNeAtvRRnzzBl1zj8uHlKTrZMWGW5pwVi2vG9BXbPECYgtvrGU2DOwIQhaAinPgrFsTGeDFNu+7s5bJW354DF56JXUYKGdtd7ZHyefJmjmj2utR4EX/SzDsnAe6gTdLPQqH+rBnNUUKWThddjx8bVU1J0+lpT+JHF8C0S1Ac0mNaKEqH3oqzQxdVVY59T8BXgDuCQJSIX39C1gFnP3v2DyNqTTmSOmLSjn2z4Bs6TPjz+ZJNsqDwBflXlYrBHwLLAV+Hz82T3+rmdtZyaBWteJXYIEqI4+HelRB4qtqbetUetOqRr5SQUeh46rmvkKnfm5SM5dMqlOVYz6Tg98QViKH5BGPqurZ+7qOpv99kI4+Vo8cGTISsm7nArNUdVjalGNWknNZz7JbBW5PMEBrC/gHZ0HxQnBah4gAAAAASUVORK5CYII="},fd98:function(t,e,i){"use strict";i.r(e);var n=i("83a69"),a=i("8bb6");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("c276");var o=i("828b"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"16ed2cdd",null,!1,n["a"],void 0);e["default"]=s.exports}}]);