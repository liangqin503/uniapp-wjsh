(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["liveservicepage-crowdfunding-shopping"],{"0fa8":function(t,e,o){var i=o("4d28");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=o("967d").default;n("319c1434",i,!0,{sourceMap:!1,shadowMode:!1})},"16ef":function(t,e,o){"use strict";o("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"Goods",props:{itemIndex:String,itemStyle:Object,params:Object,dataList:Array,sctype:0},methods:{onTargetGoods:function(t){console.log(t),this.$navTo("shoppingpage/goods/detail",{goodsId:t})},toCategory:function(){this.$navTo("pages/category/inde")}}};e.default=i},2429:function(t,e,o){"use strict";o("6a54");var i=o("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.toTest=e.toSign=e.toPreorder=e.toPayfor=e.toExchangeGoods=e.toBuyGoods=e.payHydropowerFee=e.getzhituiTeam=e.getzfBanner=e.getwaterList=e.getrgGoods=e.getpaymentItems=e.gethdqGoods=e.getgradelist=e.getZcOrder=e.getTicketDenomination=e.getTeamDetail=e.getTeamAcH=e.getStockRight=e.getShopList=e.getRanking=e.getPaylog=e.getPay=e.getOrderList=e.getMoneyList=e.getGradeTip=e.getGoodsList=e.getGoodsByShopId=e.getGoodsBanner=e.getDetail=e.getDeductList=e.getCategory=e.getBuyGoods=e.getAmount=e.getAccount_list=e.buyTicket=e.buyStockRight=e.buyExchangeGoodsDetail=void 0;var n=i(o("d57d")),a={getpay:"life.PhoneBill/rechargePay",getwaterCoa_url:"life.ShareBills/waterCoalList",payhydropower_url:"life.ShareBills/payElectricity",getnumber_url:"zuser/zclockAmount",tosign_url:"zuser/zclock",test_url:"zuser/test",getCotegory_url:"Zfinan/zfinanType",getGoods_url:"Zfinan/zfinanGoods",getgoodsDetail_url:"Zfinan/zfinanGoodsDescribe",buyGoods_url:"zfinan/zfinanGoodsBuy",getranking_url:"zfinan/zfinanRanking",getGoodsList_url:"zfinan/zfinanSwap",toBuyGoods_url:"zfinan/zfinanSwapBuy",getorder_url:"zfinan/zfinanSwapOrder",getshop_url:"Zhaodian/uHaodian",getgoods_by_shop_id:"Zhaodian/uGoods",getpaymentItems_url:"lifeservice/list",payfor_url:"lifeservice/account_save",getpayLog_url:"lifeservice/account_log",getaccount_list_url:"lifeservice/account_list",getmoney_url:"lifeservice/service_price",getdeduct_list:"mergepay/deduction",getzc_order_url:"zfinan/zfinanOrderList",getrg_goods_url:"goods/zfinan_goods",getzfbanner_url:"zfinan/zfinanBalance",getbannerfor_goods:"zfinan/zfinanBalanceGoods",getteamac_url:"zfinan/team_price",getticket_me_url:"zfinan/hdqTransaYuyueMz",buyTicket_url:"zfinan/hdqTransaYuyue",getexchange_goods_url:"zfinan/zfinanSwapDetail",getteadetail_url:"zfinan/zhitui_team_price",getHdqGoods_url:"goods/hdq_shop",getGradeTip_url:"zfinan/get_zc_grade_tip",getzhituiTeam_url:"zfinan/zhitui_price",getgradelist_url:"zfinan/zhitui_grade_list",getstock_right_url:"zuser/stock_right",buy_stock_right_url:"zuser/buy_stock_right",preorder_url:"zfinan/hdqTransaYugou"};e.toPreorder=function(t){return n.default.post(a.preorder_url,t)};e.buyStockRight=function(t){return n.default.post(a.buy_stock_right_url,t)};e.getStockRight=function(t){return n.default.post(a.getstock_right_url,t)};e.getGradeTip=function(t){return n.default.post(a.getGradeTip_url,t)};e.gethdqGoods=function(t){return n.default.post(a.getHdqGoods_url,t)};e.buyExchangeGoodsDetail=function(t){return n.default.post(a.getexchange_goods_url,t)};e.buyTicket=function(t){return n.default.post(a.buyTicket_url,t)};e.getTicketDenomination=function(t){return n.default.post(a.getticket_me_url,t)};e.getTeamAcH=function(t){return n.default.post(a.getteamac_url,t)};e.getTeamDetail=function(t){return n.default.post(a.getteadetail_url,t)};e.getGoodsBanner=function(t){return n.default.post(a.getbannerfor_goods,t)};e.getzfBanner=function(t){return n.default.post(a.getzfbanner_url,t)};e.getrgGoods=function(t){return n.default.post(a.getrg_goods_url,t)};e.getZcOrder=function(t){return n.default.post(a.getzc_order_url,t)};e.getDeductList=function(t){return n.default.post(a.getdeduct_list,t)};e.getMoneyList=function(t){return n.default.post(a.getmoney_url,t)};e.getAccount_list=function(t){return n.default.post(a.getaccount_list_url,t)};e.getPaylog=function(t){return n.default.post(a.getpayLog_url,t)};e.toPayfor=function(t){return n.default.post(a.payfor_url,t)};e.getpaymentItems=function(t){return n.default.get(a.getpaymentItems_url,t)};e.getGoodsByShopId=function(t){return n.default.get(a.getgoods_by_shop_id,t)};e.getShopList=function(t){return n.default.get(a.getshop_url,t)};e.getOrderList=function(t){return n.default.get(a.getorder_url,t)};e.toExchangeGoods=function(t){return n.default.post(a.toBuyGoods_url,t)};e.getBuyGoods=function(){return n.default.get(a.getGoodsList_url)};e.getRanking=function(t){return n.default.get(a.getranking_url,t)};e.toBuyGoods=function(t){return n.default.post(a.buyGoods_url,t)};e.getDetail=function(t){return n.default.get(a.getgoodsDetail_url,t)};e.getGoodsList=function(t){return n.default.get(a.getGoods_url,t)};e.getCategory=function(t){return n.default.get(a.getCotegory_url,t)};e.toTest=function(t){return n.default.post(a.test_url,t)};e.toSign=function(t){return n.default.post(a.tosign_url,t)};e.getAmount=function(t){return n.default.post(a.getnumber_url,t)};e.payHydropowerFee=function(t){return n.default.get(a.payhydropower_url,t)};e.getwaterList=function(t){return n.default.get(a.getwaterCoa_url,t)};e.getPay=function(t){return n.default.get(a.getpay,t)};e.getzhituiTeam=function(t){return n.default.get(a.getzhituiTeam_url,t)};e.getgradelist=function(t){return n.default.get(a.getgradelist_url,t)}},"2afb":function(t,e,o){"use strict";o.r(e);var i=o("a8de"),n=o("3e74");for(var a in n)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(a);o("3565");var r=o("828b"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"78ae7d22",null,!1,i["a"],void 0);e["default"]=s.exports},"30f7":function(t,e,o){"use strict";o("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},o("7a76"),o("c9b5")},3565:function(t,e,o){"use strict";var i=o("5fe9"),n=o.n(i);n.a},"3e74":function(t,e,o){"use strict";o.r(e);var i=o("b372"),n=o.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(a);e["default"]=n.a},"459d":function(t,e,o){var i=o("ac40");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=o("967d").default;n("6807485e",i,!0,{sourceMap:!1,shadowMode:!1})},"45ad":function(t,e,o){"use strict";o.r(e);var i=o("16ef"),n=o.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(a);e["default"]=n.a},4733:function(t,e,o){"use strict";o("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(Array.isArray(t))return(0,i.default)(t)};var i=function(t){return t&&t.__esModule?t:{default:t}}(o("8d0b"))},"47cc":function(t,e,o){"use strict";var i=o("459d"),n=o.n(i);n.a},"4d28":function(t,e,o){var i=o("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */\r\n/* 引入自定义主题 */.align[data-v-2c7edb56]{display:flex;justify-content:flex-start;align-items:center}.diy-goods .get_more[data-v-2c7edb56]{width:%?150?%;text-align:center;float:right;color:#4d84f9;line-height:%?60?%;font-size:%?32?%}.diy-goods .goods-list[data-v-2c7edb56]{padding:%?4?%;box-sizing:border-box}.diy-goods .goods-list .goods-item[data-v-2c7edb56]{box-sizing:border-box;padding:%?6?%}.diy-goods .goods-list .goods-item .goods-image[data-v-2c7edb56]{position:relative;width:100%;height:0;padding-bottom:100%;overflow:hidden;background:#fff}.diy-goods .goods-list .goods-item .goods-image[data-v-2c7edb56]:after{content:"";display:block;margin-top:100%}.diy-goods .goods-list .goods-item .goods-image .image[data-v-2c7edb56]{position:absolute;width:100%;height:100%;top:0;left:0;-o-object-fit:cover;object-fit:cover}.diy-goods .goods-list .goods-item .detail[data-v-2c7edb56]{padding:%?8?%;background:#fff}.diy-goods .goods-list .goods-item .detail .goods-name[data-v-2c7edb56]{min-height:%?68?%;line-height:1.3;white-space:normal;color:#484848;font-size:%?26?%;margin-bottom:%?4?%}.diy-goods .goods-list .goods-item .detail .detail-price .goods-price[data-v-2c7edb56]{margin-right:%?8?%;color:#fa230a!important}.diy-goods .goods-list .goods-item .detail .detail-price .line-price[data-v-2c7edb56]{text-decoration:line-through}.diy-goods .goods-list.display__slide[data-v-2c7edb56]{white-space:nowrap;font-size:0}.diy-goods .goods-list.display__slide .goods-item[data-v-2c7edb56]{display:inline-block}.diy-goods .goods-list.display__list .goods-item[data-v-2c7edb56]{float:left}.diy-goods .goods-list.column__2 .goods-item[data-v-2c7edb56]{width:50%}.diy-goods .goods-list.column__3 .goods-item[data-v-2c7edb56]{width:33.33333%}.diy-goods .goods-list.column__1 .goods-item[data-v-2c7edb56]{width:100%;height:%?280?%;margin-bottom:%?12?%;padding:%?20?%;box-sizing:border-box;background:#fff;line-height:1.6}.diy-goods .goods-list.column__1 .goods-item[data-v-2c7edb56]:last-child{margin-bottom:0}.diy-goods .goods-list.column__1 .goods-item_left[data-v-2c7edb56]{display:flex;width:40%;background:#fff;align-items:center}.diy-goods .goods-list.column__1 .goods-item_left .image[data-v-2c7edb56]{display:block;width:%?240?%;height:%?240?%}.diy-goods .goods-list.column__1 .goods-item_right[data-v-2c7edb56]{position:relative;width:60%}.diy-goods .goods-list.column__1 .goods-item_right .goods-name[data-v-2c7edb56]{margin-top:%?20?%;min-height:%?68?%;line-height:1.3;white-space:normal;color:#484848;font-size:%?26?%}.diy-goods .goods-list.column__1 .goods-item_desc[data-v-2c7edb56]{margin-top:%?8?%}.diy-goods .goods-list.column__1 .desc-selling_point[data-v-2c7edb56]{width:%?400?%;font-size:%?24?%;color:#e49a3d}.diy-goods .goods-list.column__1 .desc-goods_sales[data-v-2c7edb56]{color:#999;font-size:%?24?%}.diy-goods .goods-list.column__1 .desc_footer[data-v-2c7edb56]{font-size:%?24?%}.diy-goods .goods-list.column__1 .desc_footer .price_x[data-v-2c7edb56]{margin-right:%?16?%;color:var(--main-bg);font-size:%?30?%}.diy-goods .goods-list.column__1 .desc_footer .price_y[data-v-2c7edb56]{text-decoration:line-through}',""]),t.exports=e},"4f58":function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"diy-goods",style:{background:t.itemStyle.background}},[i("v-uni-view",{staticClass:"goods-list",class:["display__"+t.itemStyle.display,"column__"+t.itemStyle.column]},[i("v-uni-scroll-view",{attrs:{"scroll-x":"slide"===t.itemStyle.display}},t._l(t.dataList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"goods-item",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.onTargetGoods(e.goods_id)}}},[1===t.itemStyle.column?[i("v-uni-view",{staticClass:"dis-flex"},[i("v-uni-view",{staticClass:"goods-item_left"},[i("v-uni-image",{staticClass:"image",attrs:{src:e.goods_image}})],1),i("v-uni-view",{staticClass:"goods-item_right"},[t.itemStyle.show.includes("goodsName")?i("v-uni-view",{staticClass:"goods-name"},[i("v-uni-text",{staticClass:"twoline-hide"},[t._v(t._s(e.goods_name))])],1):t._e(),i("v-uni-view",{staticClass:"goods-item_desc"},[e.points?i("v-uni-view",{staticClass:"desc-selling_point dis-flex"},[t._v("赠送积分："+t._s(e.points))]):t._e(),t.itemStyle.show.includes("sellingPoint")?i("v-uni-view",{staticClass:"desc-selling_point dis-flex"},[i("v-uni-text",{staticClass:"oneline-hide"},[t._v(t._s(e.selling_point))])],1):t._e(),t.itemStyle.show.includes("goodsSales")?i("v-uni-view",{staticClass:"desc-goods_sales dis-flex"},[i("v-uni-text",[t._v("已售"+t._s(e.goods_sales)+"件")])],1):t._e(),i("v-uni-view",{staticClass:"desc_footer"},[t.itemStyle.show.includes("goodsPrice")?i("v-uni-text",{staticClass:"price_x"},[t._v("¥"+t._s(e.goods_price_min))]):t._e(),t.itemStyle.show.includes("linePrice")&&e.line_price_min>0?i("v-uni-text",{staticClass:"price_y col-9"},[t._v("¥"+t._s(e.line_price_min))]):t._e()],1)],1)],1)],1)]:[i("v-uni-view",{staticClass:"goods-image"},[i("v-uni-image",{staticClass:"image",attrs:{mode:"aspectFill",src:e.goods_image}})],1),i("v-uni-view",{staticClass:"detail"},[t.itemStyle.show.includes("goodsName")?i("v-uni-view",{staticClass:"goods-name twoline-hide"},[i("v-uni-text",{staticClass:"twoline-hide"},[t._v(t._s(e.goods_name))])],1):t._e(),i("v-uni-view",{staticClass:"detail-price oneline-hide align"},[t.itemStyle.show.includes("goodsPrice")?i("v-uni-text",{staticClass:"goods-price f-30 col-m "},[t._v("￥"+t._s(e.goods_price_min))]):t._e(),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","align-items":"center","margin-left":"10rpx",color:"#1EBE11"}},[i("v-uni-image",{staticStyle:{width:"28rpx",height:"28rpx",margin:"0 10rpx"},attrs:{src:o("d6eb")}}),t._v(t._s(e.give_hdq))],1)],1)],1)]],2)})),1)],1)],1)},n=[]},5039:function(t,e,o){"use strict";o.r(e);var i=o("dc79"),n=o("a6ae");for(var a in n)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(a);o("47cc");var r=o("828b"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"01098130",null,!1,i["a"],void 0);e["default"]=s.exports},"5fe9":function(t,e,o){var i=o("faa6");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=o("967d").default;n("346f9e50",i,!0,{sourceMap:!1,shadowMode:!1})},a6ae:function(t,e,o){"use strict";o.r(e);var i=o("ce06"),n=o.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(a);e["default"]=n.a},a8de:function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return i}));var i={uIcon:o("5ebf").default},n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.show?o("v-uni-view",{staticClass:"u-empty",style:{marginTop:t.marginTop+"rpx"}},[o("u-icon",{attrs:{name:t.src?t.src:"empty-"+t.mode,"custom-style":t.iconStyle,label:t.text?t.text:t.icons[t.mode],"label-pos":"bottom","label-color":t.color,"label-size":t.fontSize,size:t.iconSize,color:t.iconColor,"margin-top":"14"}}),o("v-uni-view",{staticClass:"u-slot-wrap"},[t._t("bottom")],2)],1):t._e()},a=[]},ac40:function(t,e,o){var i=o("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */\r\n/* 引入自定义主题 */.container[data-v-01098130]{padding:%?20?% %?25?%}.banner[data-v-01098130]{width:100%;height:%?373?%;border-radius:%?15?%;overflow:hidden;margin-bottom:%?50?%}.banner .swiper-box[data-v-01098130]{width:100%;height:100%}',""]),t.exports=e},b372:function(t,e,o){"use strict";o("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("64aa");var i={name:"u-empty",props:{src:{type:String,default:""},text:{type:String,default:""},color:{type:String,default:"#c0c4cc"},iconColor:{type:String,default:"#c0c4cc"},iconSize:{type:[String,Number],default:120},fontSize:{type:[String,Number],default:26},mode:{type:String,default:"data"},imgWidth:{type:[String,Number],default:120},imgHeight:{type:[String,Number],default:"auto"},show:{type:Boolean,default:!0},marginTop:{type:[String,Number],default:0},iconStyle:{type:Object,default:function(){return{}}}},data:function(){return{icons:{car:"购物车为空",page:"页面不存在",search:"没有搜索结果",address:"没有收货地址",wifi:"没有WiFi",order:"订单为空",coupon:"没有优惠券",favor:"暂无收藏",permission:"无权限",history:"无历史记录",news:"无新闻列表",message:"消息列表为空",list:"列表为空",data:"数据为空"}}}};e.default=i},b7c7:function(t,e,o){"use strict";o("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return(0,i.default)(t)||(0,n.default)(t)||(0,a.default)(t)||(0,r.default)()};var i=s(o("4733")),n=s(o("d14d")),a=s(o("5d6b")),r=s(o("30f7"));function s(t){return t&&t.__esModule?t:{default:t}}},c856:function(t,e,o){"use strict";var i=o("0fa8"),n=o.n(i);n.a},ce06:function(t,e,o){"use strict";o("6a54");var i=o("3639").default,n=o("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(o("b7c7"));o("bf0f"),o("c223");var r=n(o("d4a2")),s=i(o("2429")),d=i(o("370b")),u={components:{Goods:r.default},data:function(){return{video_url:"",showVideo:!1,Mparams:{auto:{category:0,goodsSort:"all",showNum:500},source:"auto"},Mstyle:{background:"#fff",column:2,display:"list",show:["goodsName","goodsPrice","linePrice","sellingPoint","goodsSales"]},goodsList:[],page:1,bannerList:[],userInfo:{}}},onLoad:function(){this.getUserInfo(),this.getGoods()},onShow:function(){},methods:{getUserInfo:function(){var t=this;d.info().then((function(e){t.userInfo=e.data.userInfo})).catch((function(t){}))},closeBuyPannel:function(){this.showVideo=!1},toshowVideo:function(t){this.showVideo=!0,this.video_url=t},getGoods:function(t){var e=this;s.gethdqGoods({page:this.page}).then((function(t){console.log(t);var o=e.goodsList;e.bannerList=t.data.banlan,console.log(e.bannerList);var i=t.data.detail.data;i&&(o=[].concat((0,a.default)(o),(0,a.default)(i))),e.goodsList=o})).catch((function(t){})).finally((function(){t&&t()}))}},onPullDownRefresh:function(){this.page=1,this.goodsList=new Array,this.getGoods((function(){console.log("刷新"),uni.stopPullDownRefresh()}))},onReachBottom:function(){this.page=this.page+1,console.log("触底",this.page),this.getGoods()}};e.default=u},d14d:function(t,e,o){"use strict";o("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},o("01a2"),o("e39c"),o("bf0f"),o("844d"),o("18f7"),o("de6c"),o("08eb")},d4a2:function(t,e,o){"use strict";o.r(e);var i=o("4f58"),n=o("45ad");for(var a in n)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(a);o("c856");var r=o("828b"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"2c7edb56",null,!1,i["a"],void 0);e["default"]=s.exports},d6eb:function(t,e,o){t.exports=o.p+"liveservicepage/static/item-icon.png"},dc79:function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return i}));var i={uPopup:o("834a").default,uEmpty:o("2afb").default},n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"container"},[o("v-uni-view",{staticClass:"banner"},[o("v-uni-swiper",{staticClass:"swiper-box",attrs:{"indicator-dots":"true",autoplay:"true","indicator-color":"#fff","indicator-active-color":"#3943ff",circular:"true"}},[t._l(t.bannerList,(function(e){return[o("v-uni-swiper-item",[o("v-uni-view",{staticStyle:{width:"100%",height:"100%","border-radius":"15rpx",overflow:"hidden"}},["image"==e.type?o("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.image}}):t._e(),"video"==e.type?o("v-uni-video",{staticStyle:{width:"100%",height:"100%"},attrs:{muted:!0,src:e.image},on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.toshowVideo(e.image)}}}):t._e()],1)],1)]}))],2)],1),o("u-popup",{attrs:{mode:"center","border-radius":"14",height:"900",width:"660"},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.closeBuyPannel.apply(void 0,arguments)}},model:{value:t.showVideo,callback:function(e){t.showVideo=e},expression:"showVideo"}},[o("v-uni-view",{staticStyle:{width:"100%",height:"100%"}},[o("v-uni-video",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.video_url}})],1)],1),t.goodsList.length<=0?o("u-empty",{attrs:{text:"暂无数据",show:!0,"margin-top":"100"}}):t._e(),o("Goods",{attrs:{itemStyle:t.Mstyle,params:t.Mparams,dataList:t.goodsList}})],1)},a=[]},faa6:function(t,e,o){var i=o("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */\r\n/* 引入自定义主题 */.u-empty[data-v-78ae7d22]{display:flex;flex-direction:row;flex-direction:column;justify-content:center;align-items:center;height:100%}.u-image[data-v-78ae7d22]{margin-bottom:%?20?%}.u-slot-wrap[data-v-78ae7d22]{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:%?20?%}',""]),t.exports=e}}]);