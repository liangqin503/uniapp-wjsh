(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["farmpage-page-chicken"],{"035b":function(t,e,n){"use strict";n.r(e);var i=n("75d7"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"09ad":function(t,e,n){"use strict";n.r(e);var i=n("f3ec"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"10d2":function(t,e,n){"use strict";n.r(e);var i=n("a27d"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"18f4":function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{title:String,titleColor:String,backgroundColor:String},data:function(){return{customHeight:0,marginTop:20}},onLoad:function(){uni.get},created:function(){this.customHeight=this.customBarH},computed:{getPosition:function(){var t=this.customBarH,e=uni.getSystemInfoSync().windowWidth/750*70;console.log("margin-top:"+(t-e)),console.log(this.title),this.marginTop=t-e-3}}};e.default=i},"1e786":function(t,e,n){"use strict";n.r(e);var i=n("291e"),o=n("10d2");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("80a3");var r=n("828b"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"f207f29a",null,!1,i["a"],void 0);e["default"]=s.exports},"256f":function(t,e,n){"use strict";n.r(e);var i=n("623f"),o=n("035b");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("35ad"),n("429a");var r=n("828b"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"feb8b152",null,!1,i["a"],void 0);e["default"]=s.exports},"26d6":function(t,e,n){"use strict";var i=n("b7c1"),o=n.n(i);o.a},"28f3":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uIcon:n("5ebf").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{},[n("v-uni-view",{staticClass:"u-content",class:[t.elId],style:{height:t.isLongContent&&!t.showMore?t.showHeight+"rpx":"auto",textIndent:t.textIndent}},[t._t("default")],2),t.isLongContent?n("v-uni-view",{staticClass:"u-content__showmore-wrap",class:{"u-content__show-more":t.showMore},style:[t.innerShadowStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleReadMore.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"u-content__showmore-wrap__readmore-btn",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.showMore?t.openText:t.closeText))]),n("v-uni-view",{staticClass:"u-content__showmore-wrap__readmore-btn__icon u-flex"},[n("u-icon",{attrs:{color:t.color,size:t.fontSize,name:t.showMore?"arrow-up":"arrow-down"}})],1)],1):t._e()],1)},a=[]},"291e":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",[this.nodes.length?this._e():this._t("default"),e("v-uni-view",{style:this.showAm+(this.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"_top"}},[e("div",{attrs:{id:"rtf"+this.uid}})])],2)},o=[]},"35ad":function(t,e,n){"use strict";var i=n("7efc"),o=n.n(i);o.a},4242:function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,".nav_main[data-v-d900e530]{position:fixed;top:0;display:flex;width:100%;-webkit-transform:translate(-50%);transform:translate(-50%);background:linear-gradient(90deg,#735ff7,#537afb);left:50%;max-width:750px;transform:translate(-50%);z-index:1024}.nav-box[data-v-d900e530]{width:%?700?%;margin:0 %?25?%;display:flex;justify-content:flex-start;align-items:center\n\t/* border:1rpx solid #00C989; */\n\t/* border:1rpx solid white; */}.nav-title[data-v-d900e530]{font-family:normal;display:flex;flex-direction:row;align-items:center;text-align:center;width:100%;height:%?60?%;line-height:%?60?%;left:0;font-size:%?32?%;color:#333}",""]),t.exports=e},"429a":function(t,e,n){"use strict";var i=n("7bbb"),o=n.n(i);o.a},"446f":function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */\r\n/* 引入自定义主题 */.pause-box[data-v-feb8b152]{position:absolute;width:%?100?%;height:%?100?%;top:50%;left:50%;margin-top:%?-50?%;margin-left:%?-50?%;background:rgba(0,0,0,.2);border:%?1?% solid #fff;border-radius:100%;z-index:100;display:flex;align-items:center;justify-content:center;color:#fff}.main-box[data-v-feb8b152]{position:relative;width:100%;padding:%?0?% %?40?%}.main-box .show-video[data-v-feb8b152]{position:absolute;margin-top:%?-70?%;right:%?70?%;color:#fff;background:rgba(0,0,0,.3);padding:%?7?% %?25?%;border-radius:%?30?%;font-size:%?24?%}.main-box .circle1[data-v-feb8b152]{position:absolute;top:%?-10?%;left:%?-50?%;width:%?180?%;height:%?180?%;border-radius:100%;background:#fac275}.main-box .circle2[data-v-feb8b152]{position:absolute;top:%?-30?%;right:%?-100?%;width:%?180?%;height:%?180?%;border-radius:100%;background:#ff8d13}.main-box .circle3[data-v-feb8b152]{position:fixed;bottom:%?200?%;left:%?-100?%;width:%?300?%;height:%?300?%;border-radius:100%;background:#feb67b}.main-box .main[data-v-feb8b152]{position:relative;margin-top:%?-15?%;z-index:2;width:100%;background-color:#fff;border-radius:%?20?%;padding:%?20?%}.main-box .main .desc[data-v-feb8b152]{color:#747474;font-size:%?28?%;line-height:%?40?%;width:100%;max-height:%?400?%;overflow:hidden}.main-box .main .active[data-v-feb8b152]{height:auto;overflow:visible}.main-box .main .rank[data-v-feb8b152]{margin-top:%?50?%;width:100%;text-align:center;text-decoration:underline;color:#2f82fe}.main-box .main .btn-box[data-v-feb8b152]{width:100%;padding:%?20?%;display:flex;align-items:center;justify-content:center}.main-box .main .btn-box uni-button[data-v-feb8b152]{color:#fff;background:linear-gradient(#ff4a33,#fe7851);height:%?70?%;width:%?500?%;line-height:%?70?%;border-radius:%?40?%;letter-spacing:%?5?%}.tab-box[data-v-feb8b152]{overflow:hidden;border-radius:%?15?%}.tab-box .tab_th[data-v-feb8b152]{width:100%;background-color:#fe9f5d;color:#fff;display:flex;align-items:center;justify-content:center;padding:%?20?% auto;height:%?90?%;font-size:%?30?%}.tab-box .tab_th .th_item[data-v-feb8b152]{width:33%;text-align:center}.tab-box .color-t[data-v-feb8b152]{background-color:#eee;color:#333;font-size:%?26?%}.num-box[data-v-feb8b152]{width:%?500?%;height:%?500?%;border-radius:%?20?%;display:flex;align-items:center;flex-direction:column}.num-box .title[data-v-feb8b152]{width:100%;margin:%?30?% auto;text-align:center}.num-box .num[data-v-feb8b152]{display:flex;align-items:center;justify-content:space-around;margin:%?30?% auto;width:%?350?%}.num-box .num .input-box[data-v-feb8b152]{width:%?150?%;border:%?1?% solid #ddd;height:%?60?%;line-height:%?60?%;text-align:center}.num-box .num .action-btn[data-v-feb8b152]{border:%?1?% solid #fea14e;font-size:%?40?%;font-weight:700;color:#fea14e;width:%?60?%;height:%?60?%;text-align:center}.num-box .num .action-before[data-v-feb8b152]{border:%?1?% solid #ddd;color:#ddd}.num-box .confirm-btn[data-v-feb8b152]{width:%?350?%;margin:%?40?% auto;color:#fff;background:linear-gradient(#ff4a33,#fe7851);height:%?70?%;line-height:%?70?%;letter-spacing:%?5?%;border-radius:%?50?%}.movable-area[data-v-feb8b152]{height:100vh;width:%?750?%;top:0;z-index:9999;position:fixed;pointer-events:none}.movable-area .movable-view[data-v-feb8b152]{width:%?180?%;height:%?177?%;pointer-events:auto}.movable-area .movable-view uni-image[data-v-feb8b152]{width:%?180?%;height:%?177?%}',""]),t.exports=e},"47c0":function(t,e,n){"use strict";n.r(e);var i=n("18f4"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"623f":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={navbar:n("645c").default,uIcon:n("5ebf").default,uReadMore:n("b520").default,uParse:n("1e786").default,uPopup:n("834a").default,keyboard:n("8a7d").default,uToast:n("ee02").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("navbar",{attrs:{titleColor:"#fff",backgroundColor:"none"}},[i("u-icon",{staticStyle:{"margin-right":"20rpx","text-shadow":"5rpx 5rpx 5rpx #a67b25"},attrs:{slot:"icon",name:"arrow-left",color:"#fff",size:"40"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toBack.apply(void 0,arguments)}},slot:"icon"})],1),i("v-uni-view",{staticStyle:{position:"relative"}},[i("v-uni-image",{staticStyle:{width:"100%",position:"relative"},attrs:{src:t.bgimg,mode:"widthFix"}}),i("v-uni-view",{staticClass:"pause-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showVideo.apply(void 0,arguments)}}},[i("u-icon",{attrs:{name:"play-right-fill",size:"40"}})],1)],1),i("v-uni-view",{staticClass:"main-box"},[i("v-uni-view",{staticClass:"show-video",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showVideo.apply(void 0,arguments)}}},[t._v("查看实时视频")]),i("v-uni-view",{staticClass:"circle1"}),i("v-uni-view",{staticClass:"circle2"}),i("v-uni-view",{staticClass:"circle3"}),i("v-uni-view",{staticClass:"main"},[i("v-uni-view",{staticStyle:{"font-weight":"bold",margin:"20rpx 0","line-height":"50rpx"}},[i("u-icon",{attrs:{name:"heart-fill",color:"red","margin-right":"15"}}),t._v(t._s(t.farmInfo.title))],1),i("u-read-more",{ref:"uReadMore",attrs:{toggle:!0}},[i("u-parse",{attrs:{html:t.farmInfo.desc},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.parseLoaded.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"tab-box"},[i("v-uni-view",{staticClass:"tab_th"},[i("v-uni-view",{staticClass:"th_item"},[t._v("养殖周期")]),i("v-uni-view",{staticClass:"th_item"},[t._v("3个月")]),i("v-uni-view",{staticClass:"th_item"},[t._v("4个月")]),i("v-uni-view",{staticClass:"th_item"},[t._v("6个月")])],1),i("v-uni-view",{staticClass:"tab_th color-t"},[i("v-uni-view",{staticClass:"th_item"},[t._v("平均重量")]),i("v-uni-view",{staticClass:"th_item"},[t._v("约3斤")]),i("v-uni-view",{staticClass:"th_item"},[t._v("约4斤")]),i("v-uni-view",{staticClass:"th_item"},[t._v("约5斤")])],1),i("v-uni-view",{staticClass:"tab_th color-t"},[i("v-uni-view",{staticClass:"th_item"},[t._v("市场零售价(黔汇通)")]),i("v-uni-view",{staticClass:"th_item"},[t._v("30/斤")]),i("v-uni-view",{staticClass:"th_item"},[t._v("35/斤")]),i("v-uni-view",{staticClass:"th_item"},[t._v("40/斤")])],1)],1),i("v-uni-view",{staticClass:"rank",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toRank.apply(void 0,arguments)}}},[t._v("上架排行榜")]),i("v-uni-view",{staticClass:"btn-box"},[i("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toAdopt.apply(void 0,arguments)}}},[t._v("去认养")])],1)],1)],1),i("u-popup",{attrs:{mode:"center","border-radius":"15","mask-close-able":!1,closeable:!0},model:{value:t.showAdopt,callback:function(e){t.showAdopt=e},expression:"showAdopt"}},[i("v-uni-view",{staticClass:"num-box"},[i("v-uni-view",{staticClass:"title"},[t._v("认养数量")]),i("v-uni-view",{staticClass:"num"},[i("v-uni-view",{staticClass:"action-btn",class:{"action-before":t.buynum<=10},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sbuNum.apply(void 0,arguments)}}},[t._v("-")]),i("v-uni-input",{staticClass:"input-box",attrs:{disabled:!0},model:{value:t.buynum,callback:function(e){t.buynum=e},expression:"buynum"}}),i("v-uni-view",{staticClass:"action-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addNum.apply(void 0,arguments)}}},[t._v("+")])],1),i("v-uni-view",{staticStyle:{width:"350rpx",margin:"20rpx auto 0",color:"#FF4A33"}},[t._v("黔汇通："+t._s(t.farmInfo.price)+"/只")]),i("v-uni-view",{staticStyle:{width:"350rpx",margin:"20rpx auto 0",color:"#666","font-size":"24rpx"}},[t._v("门票："+t._s(t.farmInfo.xingzhi)+"/只")]),i("v-uni-button",{staticClass:"confirm-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toBuy.apply(void 0,arguments)}}},[t._v("确定")])],1)],1),i("keyboard",{ref:"keyb",on:{getPwd:function(e){arguments[0]=e=t.$handleEvent(e),t.getPwd.apply(void 0,arguments)}}}),i("u-toast",{ref:"uToast",staticStyle:{width:"700rpx"},attrs:{width:"700"}}),i("v-uni-movable-area",{staticClass:"movable-area"},[i("v-uni-movable-view",{staticClass:"movable-view",attrs:{x:t.x,y:t.y,direction:"all"}},[i("v-uni-image",{attrs:{src:n("8a3e")},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toOrder()}}})],1)],1)],1)},a=[]},"645c":function(t,e,n){"use strict";n.r(e);var i=n("f27d"),o=n("47c0");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("88c7");var r=n("828b"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"d900e530",null,!1,i["a"],void 0);e["default"]=s.exports},7429:function(t,e,n){"use strict";var i=n("8a59"),o=n.n(i);o.a},"75d7":function(t,e,n){"use strict";n("6a54");var i=n("3639").default,o=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("645c")),r=i(n("960d")),s=o(n("8a7d")),c={data:function(){return{bgimg:"../static/bg.jpg",show:!0,buynum:10,customHeight:120,showAdopt:!1,thStyle:{backgroundColor:"#FD9F5A"},x:320,y:530,farmInfo:{price:200,xingzhi:100,title:"认养",desc:"<p>无际农业发展有限公司首次推出可视化山地养鸡计划，通过山地放养方式，小鸡不易生病，抵抗力强，喝山泉、食虫子，肉质鲜美。</p>\n\t\t\t\t\t<p>小鸡成长周期3—6个月，用户无需操心即可在线认养小鸡，每天都可以通过视频看到小鸡生长环境，健康状况。\n\t\t\t\t\t当小鸡长大后，可选择上架让公司托管销售，从而获得销售利润与本金，也可以自提回家做出美味佳肴；</p><p>小鸡成长周期3—6个月，用户无需操心即可在线认养小鸡，每天都可以通过视频看到小鸡生长环境，健康状况。\n\t\t\t\t\t当小鸡长大后，可选择上架让公司托管销售，从而获得销售利润与本金，也可以自提回家做出美味佳肴；</p>"},showPwd:!1}},components:{navbar:a.default,keyboard:s.default},onLoad:function(){this.customHeight=this.customBarH,this.x=uni.getSystemInfoSync().windowWidth-uni.getSystemInfoSync().windowWidth/750*180,this.y=uni.getSystemInfoSync().windowHeight-uni.getSystemInfoSync().windowWidth/750*400},methods:{parseLoaded:function(){this.$refs.uReadMore.init()},showVideo:function(){uni.showToast({title:"暂未开放，敬请期待",icon:"none"})},toBuy:function(){this.$refs.keyb.show()},getPwd:function(t){console.log("密码",t);var e=this;e.farmInfo.id,e.buynum;e.$refs.uToast.show({title:"认养成功",type:"success"}),e.showAdopt=!1},getFarmInfo:function(){var t=this;r.getFarmInfo().then((function(e){console.log(e),t.farmInfo=e.data.res})).catch((function(t){}))},toRank:function(){uni.navigateTo({url:"./chickenrank?id="+this.farmInfo.id})},sbuNum:function(){var t=this.buynum;t<=10||(t-=10,this.buynum=t)},addNum:function(){this.buynum=this.buynum+10},toBack:function(){uni.navigateBack({delta:1,fail:function(){uni.reLaunch({url:"/pages/index/index"})}})},toOrder:function(){uni.navigateTo({url:"./chickenorder?id="+this.farmInfo.id})},toAdopt:function(){this.showAdopt=!0}}};e.default=c},"7bbb":function(t,e,n){var i=n("446f");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("967d").default;o("458c1dac",i,!0,{sourceMap:!1,shadowMode:!1})},"7efc":function(t,e,n){var i=n("b692");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("967d").default;o("52f712e8",i,!0,{sourceMap:!1,shadowMode:!1})},"80a3":function(t,e,n){"use strict";var i=n("d2c2"),o=n.n(i);o.a},"88c7":function(t,e,n){"use strict";var i=n("9de2"),o=n.n(i);o.a},"8a3e":function(t,e,n){t.exports=n.p+"farmpage/static/mine.png"},"8a59":function(t,e,n){var i=n("c9c8");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("967d").default;o("6a2a0ad1",i,!0,{sourceMap:!1,shadowMode:!1})},"8a7d":function(t,e,n){"use strict";n.r(e);var i=n("e2e2"),o=n("09ad");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var r=n("828b"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"5e4dbc19",null,!1,i["a"],void 0);e["default"]=s.exports},"93ca":function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,"@-webkit-keyframes _show-data-v-f207f29a{0%{opacity:0}100%{opacity:1}}@keyframes _show-data-v-f207f29a{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},"960d":function(t,e,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.toBuy=e.selfLfting=e.putGoods=e.getRanking=e.getFarmInfo=e.adoptLog=void 0;var o=i(n("d57d")),a={getFarm_url:"zfarm/info",buy_url:"zfarm/buy_chicken",adopt_log:"zfarm/chicken_log",put_url:"zfarm/chicken_put",selflifting_url:"zfarm/chicken_self",getranking_url:"zfarm/chicken_ranking"};e.getRanking=function(t){return o.default.post(a.getranking_url,t)};e.selfLfting=function(t){return o.default.post(a.selflifting_url,t)};e.putGoods=function(t){return o.default.post(a.put_url,t)};e.adoptLog=function(t){return o.default.post(a.adopt_log,t)};e.toBuy=function(t){return o.default.post(a.buy_url,t)};e.getFarmInfo=function(t){return o.default.post(a.getFarm_url,t)}},"9d5b":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uIcon:n("5ebf").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.tmpConfig.type,"u-position-"+t.tmpConfig.position],style:{zIndex:t.uZIndex}},[n("v-uni-view",{staticClass:"u-icon-wrap"},[t.tmpConfig.icon?n("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.tmpConfig.type}}):t._e()],1),n("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.tmpConfig.title))])],1)},a=[]},"9de2":function(t,e,n){var i=n("4242");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("967d").default;o("5ab0b46f",i,!0,{sourceMap:!1,shadowMode:!1})},a27d:function(t,e,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("3471"));n("5ef2"),n("4626"),n("5ac7"),n("5c47"),n("2c10"),n("af8f"),n("a1c1"),n("e966"),n("aa9c"),n("c223"),n("e838");var a=uni.getSystemInfoSync(),r=a.windowWidth,s=(a.platform,n("de54")),c={name:"parser",data:function(){return{uid:this._uid,showAm:"",nodes:[]}},props:{html:String,autopause:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},created:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,n=this.length;e<n;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var n,i=e.split("://")[0],o=i.length;n=e[o];o++){if("/"==n&&"/"!=e[o-1]&&"/"!=e[o+1])break;i+=Math.random()>.5?n.toUpperCase():n}return i+=e.substr(o),this[t]=i}if(this[t]=e,e.includes("data:image")){var a=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!a)return}}}},mounted:function(){this.document=document.getElementById("rtf"+this._uid),this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{setContent:function(t,e){var n=this;if(t){var i=document.createElement("div");e?this.rtf?this.rtf.appendChild(i):this.rtf=i:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=i),i.innerHTML=this._handleHtml(t,e);for(var a,c=this.rtf.getElementsByTagName("style"),u=0;a=c[u++];)a.innerHTML=a.innerHTML.replace(/body/g,"#rtf"+this._uid),a.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,i=0;e=t[i++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),n._observer.unobserve(e.target))}),{rootMargin:"500px 0px 500px 0px"}));var l=this,d=this.rtf.getElementsByTagName("title");d.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:d[0].innerText});var f=function(t){var e=t.getAttribute("src");n.domain&&e&&("/"==e[0]?"/"==e[1]?t.src=(n.domain.includes("://")?n.domain.split("://")[0]:"")+":"+e:t.src=n.domain+e:e.includes("://")||0==e.indexOf("data:")||(t.src=n.domain+"/"+e))};this.imgList.length=0;for(var h,p=this.rtf.getElementsByTagName("img"),v=0,m=0;h=p[v];v++)parseInt(h.style.width||h.getAttribute("width"))>r&&(h.style.height="auto"),f(h),h.hasAttribute("ignore")||"A"==h.parentElement.nodeName||(h.i=m++,l.imgList.push(h.getAttribute("original-src")||h.src||h.getAttribute("data-src")),h.onclick=function(t){t.stopPropagation();var e=!0;this.ignore=function(){return e=!1},l.$emit("imgtap",this),e&&uni.previewImage({current:this.i,urls:l.imgList})}),h.onerror=function(){s.errorImg&&(l.imgList[this.i]=this.src=s.errorImg),l.$emit("error",{source:"img",target:this})},l.lazyLoad&&this._observer&&h.src&&0!=h.i&&(h.setAttribute("data-src",h.src),h.removeAttribute("src"),this._observer.observe(h));var g,b=this.rtf.getElementsByTagName("a"),w=(0,o.default)(b);try{for(w.s();!(g=w.n()).done;){var x=g.value;x.onclick=function(t){t.stopPropagation();var e=!0,n=this.getAttribute("href");if(l.$emit("linkpress",{href:n,ignore:function(){return e=!1}}),e&&n)if("#"==n[0])l.useAnchor&&l.navigateTo({id:n.substr(1)});else{if(0==n.indexOf("http")||0==n.indexOf("//"))return!0;uni.navigateTo({url:n})}return!1}}}catch(B){w.e(B)}finally{w.f()}var y=this.rtf.getElementsByTagName("video");l.videoContexts=y;for(var _,C=0;_=y[C++];)f(_),_.style.maxWidth="100%",_.onerror=function(){l.$emit("error",{source:"video",target:this})},_.onplay=function(){if(l.autopause)for(var t,e=0;t=l.videoContexts[e++];)t!=this&&t.pause()};var k,S,T=this.rtf.getElementsByTagName("audio"),I=(0,o.default)(T);try{for(I.s();!(k=I.n()).done;){var M=k.value;f(M),M.onerror=function(){l.$emit("error",{source:"audio",target:this})}}}catch(B){I.e(B)}finally{I.f()}if(this.autoscroll){var $,A=this.rtf.getElementsByTagName("table"),z=(0,o.default)(A);try{for(z.s();!($=z.n()).done;){var O=$.value,E=document.createElement("div");E.style.overflow="scroll",O.parentNode.replaceChild(E,O),E.appendChild(O)}}catch(B){z.e(B)}finally{z.f()}}e||this.document.appendChild(this.rtf),this.$nextTick((function(){n.nodes=[1],n.$emit("load")})),setTimeout((function(){return n.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){n.rect=n.rtf.getBoundingClientRect(),n.rect.height==S&&(n.$emit("ready",n.rect),clearInterval(n._timer)),S=n.rect.height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:_show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;var t="";return t=this.rtf.innerText,t},in:function(t){t.page&&t.selector&&t.scrollTop&&(this._in=t)},navigateTo:function(t){var e=this;if(!this.useAnchor)return t.fail&&t.fail("Anchor is disabled");var n=uni.createSelectorQuery().in(this._in?this._in.page:this).select((this._in?this._in.selector:"#_top")+(t.id?"".concat(" ","#").concat(t.id,",").concat(this._in?this._in.selector:"#_top").concat(" ",".").concat(t.id):"")).boundingClientRect();this._in?n.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():n.selectViewport().scrollOffset(),n.exec((function(n){if(!n[0])return t.fail&&t.fail("Label not found");var i=n[1].scrollTop+n[0].top-(n[2]?n[2].top:0)+(t.offset||0);e._in?e._in.page[e._in.scrollTop]=i:uni.pageScrollTo({scrollTop:i,duration:300}),t.success&&t.success()}))},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},_handleHtml:function(t,e){if(!e){var n="<style scoped>@keyframes _show{0%{opacity:0}100%{opacity:1}}img{max-width:100%}";for(var i in s.userAgentStyles)n+="".concat(i,"{").concat(s.userAgentStyles[i],"}");for(i in this.tagStyle)n+="".concat(i,"{").concat(this.tagStyle[i],"}");n+="</style>",t=n+t}return t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*r/750+"px"}))),t}}};e.default=c},a31e:function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */\r\n/* 引入自定义主题 */.u-content[data-v-0ee0c5c2]{font-size:%?30?%;color:#606266;line-height:1.8;text-align:left;overflow:hidden}.u-content__show-more[data-v-0ee0c5c2]{padding-top:0;background:none;margin-top:%?20?%}.u-content__showmore-wrap[data-v-0ee0c5c2]{position:relative;width:100%;padding-bottom:%?26?%;display:flex;flex-direction:row;align-items:center;justify-content:center}.u-content__showmore-wrap__readmore-btn[data-v-0ee0c5c2]{display:flex;flex-direction:row;align-items:center;justify-content:center;line-height:1}.u-content__showmore-wrap__readmore-btn__icon[data-v-0ee0c5c2]{margin-left:%?14?%}',""]),t.exports=e},a5f7:function(t,e,n){"use strict";n.r(e);var i=n("ae3e"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},ae3e:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("64aa"),n("c223");var i={name:"u-read-more",props:{showHeight:{type:[Number,String],default:400},toggle:{type:Boolean,default:!1},closeText:{type:String,default:"展开阅读全文"},openText:{type:String,default:"收起"},color:{type:String,default:"#2979ff"},fontSize:{type:[String,Number],default:28},shadowStyle:{type:Object,default:function(){return{backgroundImage:"linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 80%)",paddingTop:"300rpx",marginTop:"-300rpx"}}},textIndent:{type:String,default:"2em"},index:{type:[Number,String],default:""}},watch:{paramsChange:function(t){this.init()}},computed:{paramsChange:function(){return"".concat(this.toggle,"-").concat(this.showHeight)},innerShadowStyle:function(){return this.showMore?{}:this.shadowStyle}},data:function(){return{isLongContent:!1,showMore:!1,elId:this.$u.guid()}},mounted:function(){var t=this;this.$nextTick((function(){t.init()}))},methods:{init:function(){var t=this;this.$uGetRect("."+this.elId).then((function(e){e.height>uni.upx2px(t.showHeight)&&(t.isLongContent=!0,t.showMore=!1)}))},toggleReadMore:function(){this.showMore=!this.showMore,0==this.toggle&&(this.isLongContent=!1),this.$emit(this.showMore?"open":"close",this.index)}}};e.default=i},b520:function(t,e,n){"use strict";n.r(e);var i=n("28f3"),o=n("a5f7");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("26d6");var r=n("828b"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"0ee0c5c2",null,!1,i["a"],void 0);e["default"]=s.exports},b692:function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,"uni-page-body[data-v-feb8b152]{background-color:#fea14e;padding-bottom:%?50?%}body.?%PAGE?%[data-v-feb8b152]{background-color:#fea14e}",""]),t.exports=e},b7c1:function(t,e,n){var i=n("a31e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("967d").default;o("4bd4f286",i,!0,{sourceMap:!1,shadowMode:!1})},c9c8:function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */\r\n/* 引入自定义主题 */.u-toast[data-v-36307caf]{position:fixed;z-index:-1;transition:opacity .3s;text-align:center;color:#fff;border-radius:%?8?%;background:#585858;display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:%?28?%;opacity:0;pointer-events:none;padding:%?18?% %?40?%}.u-toast.u-show[data-v-36307caf]{opacity:1}.u-icon[data-v-36307caf]{margin-right:%?10?%;display:flex;flex-direction:row;align-items:center;line-height:normal}.u-position-center[data-v-36307caf]{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);max-width:70%}.u-position-top[data-v-36307caf]{left:50%;top:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-position-bottom[data-v-36307caf]{left:50%;bottom:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-type-primary[data-v-36307caf]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-36307caf]{color:#19be6b;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-36307caf]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-36307caf]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-36307caf]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-36307caf]{color:#fff;background-color:#585858}',""]),t.exports=e},d291:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("64aa"),n("5ef2"),n("dc8a"),n("5c47"),n("0506");var i={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null,back:!1},tmpConfig:{}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.tmpConfig.type)>=0&&this.tmpConfig.icon){var t=this.$u.type2icon(this.tmpConfig.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var e=this;this.tmpConfig=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){e.isShow=!1,clearTimeout(e.timer),e.timer=null,"function"===typeof e.tmpConfig.callback&&e.tmpConfig.callback(),e.timeEnd()}),this.tmpConfig.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.tmpConfig.url){if("/"!=this.tmpConfig.url[0]&&(this.tmpConfig.url="/"+this.tmpConfig.url),Object.keys(this.tmpConfig.params).length){var t="";/.*\/.*\?.*=.*/.test(this.tmpConfig.url)?(t=this.$u.queryParams(this.tmpConfig.params,!1),this.tmpConfig.url=this.tmpConfig.url+"&"+t):(t=this.$u.queryParams(this.tmpConfig.params),this.tmpConfig.url+=t)}this.tmpConfig.isTab?uni.switchTab({url:this.tmpConfig.url}):uni.navigateTo({url:this.tmpConfig.url})}else this.tmpConfig.back&&this.$u.route({type:"back"})}}};e.default=i},d2c2:function(t,e,n){var i=n("93ca");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("967d").default;o("335dec5a",i,!0,{sourceMap:!1,shadowMode:!1})},d497:function(t,e,n){"use strict";n.r(e);var i=n("d291"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},de54:function(t,e){var n={errorImg:null,filter:null,highlight:null,onText:null,entities:{quot:'"',apos:"'",semi:";",nbsp:" ",ensp:" ",emsp:" ",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},blankChar:i(" , ,\t,\r,\n,\f"),boolAttrs:i("allowfullscreen,autoplay,autostart,controls,ignore,loop,muted"),blockTags:i("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:i("area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr"),richOnlyTags:i("a,colgroup,fieldset,legend"),selfClosingTags:i("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustTags:i("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}};function i(t){for(var e=Object.create(null),n=t.split(","),i=n.length;i--;)e[n[i]]=!0;return e}t.exports=n},e2e2:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uKeyboard:n("2862").default,uIcon:n("5ebf").default,uMessageInput:n("0e57").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("u-keyboard",{ref:"uKeyboard",attrs:{"safe-area-inset-bottom":!0,random:!0,mode:"number","dot-enabled":!1,default:"",tooltip:!1,"mask-close-able":!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChange.apply(void 0,arguments)},close:function(e){arguments[0]=e=t.$handleEvent(e),t.initPwd.apply(void 0,arguments)},backspace:function(e){arguments[0]=e=t.$handleEvent(e),t.onBackspace.apply(void 0,arguments)}},model:{value:t.showpwd,callback:function(e){t.showpwd=e},expression:"showpwd"}},[n("v-uni-view",{staticStyle:{"text-align":"center",margin:"30rpx auto",display:"flex","justify-content":"flex-start",width:"680rpx"}},[n("v-uni-view",{staticStyle:{}},[n("u-icon",{attrs:{name:"close"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.initPwd()}}})],1),n("v-uni-view",{staticStyle:{width:"580rpx","text-align":"center"}},[t._v("请输入密码")])],1),n("v-uni-view",{staticStyle:{margin:"30rpx auto"}},[n("u-message-input",{attrs:{mode:"bottomLine","font-size":"26",maxlength:t.pwd_num,"dot-fill":!0,"disabled-keyboard":!0,value:""},model:{value:t.default_pwd,callback:function(e){t.default_pwd=e},expression:"default_pwd"}})],1)],1)},a=[]},ee02:function(t,e,n){"use strict";n.r(e);var i=n("9d5b"),o=n("d497");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("7429");var r=n("828b"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"36307caf",null,!1,i["a"],void 0);e["default"]=s.exports},f27d:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"nav_main",style:{height:t.customHeight+10+"px",background:t.backgroundColor?"none"!=t.backgroundColor?"linear-gradient(to right, "+t.backgroundColor+")":"none":"linear-gradient(to right,  #735ff7, #537afb)"}},[n("v-uni-view",{staticClass:"nav-box",style:{height:t.customHeight+10+"px"}},[n("v-uni-view",{staticClass:"nav-title",style:{marginTop:t.marginTop+"px",color:t.titleColor}},[t._t("icon"),n("v-uni-view",[t._v(t._s(t.title?t.title:""))])],2)],1),t._t("bottom")],2)},o=[]},f3ec:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"keyboard",data:function(){return{showpwd:!1,default_pwd:"",pwd_num:6}},methods:{show:function(t){this.showpwd=!0},onChange:function(t){this.default_pwd.length<6&&(this.default_pwd+=t),this.default_pwd.length>=6&&this.getPwd()},onBackspace:function(t){this.default_pwd.length>0&&(this.default_pwd=this.default_pwd.substring(0,this.default_pwd.length-1))},initPwd:function(){console.log("空"),this.showpwd=!1,this.default_pwd=""},getPwd:function(){this.showpwd=!1,this.$emit("getPwd",this.default_pwd),this.default_pwd=""}}};e.default=i}}]);