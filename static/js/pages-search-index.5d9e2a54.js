(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-index"],{"0298":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container",style:t.appThemeStyle},[i("v-uni-view",{staticClass:"search-wrapper"},[i("v-uni-view",{staticClass:"search-input"},[i("v-uni-view",{staticClass:"search-input-wrapper"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-text",{staticClass:"search-icon iconfont icon-search"})],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-input",{staticClass:"input",attrs:{focus:"true",placeholder:"请输入您搜索的商品",type:"text"},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1)],1)],1),i("v-uni-view",{staticClass:"search-button"},[i("v-uni-view",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSearch.apply(void 0,arguments)}}},[t._v("搜索")])],1)],1),t.historySearch.length?i("v-uni-view",{staticClass:"history"},[i("v-uni-view",{staticClass:"his-head"},[i("v-uni-text",{staticClass:"title"},[t._v("最近搜索")]),i("v-uni-text",{staticClass:"icon iconfont icon-delete",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearSearch.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"his-list"},t._l(t.historySearch,(function(e,a){return i("v-uni-view",{key:a,staticClass:"his-item"},[i("v-uni-view",{staticClass:"history-button",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleQuick(e)}}},[t._v(t._s(e))])],1)})),1)],1):t._e()],1)},n=[]},"1e8b":function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */\r\n/* 引入自定义主题 */.container[data-v-03cebac4]{padding:%?20?%;min-height:100vh;background:#f7f7f7}.search-wrapper[data-v-03cebac4]{display:flex;height:%?64?%}.search-input[data-v-03cebac4]{width:80%;background:#fff;border-radius:%?10?% 0 0 %?10?%;box-sizing:border-box;overflow:hidden}.search-input .search-input-wrapper[data-v-03cebac4]{display:flex}.search-input .search-input-wrapper .left[data-v-03cebac4]{display:flex;width:%?60?%;justify-content:center;align-items:center}.search-input .search-input-wrapper .left .search-icon[data-v-03cebac4]{display:block;color:#b4b4b4;font-size:%?28?%}.search-input .search-input-wrapper .right[data-v-03cebac4]{flex:1}.search-input .search-input-wrapper .right uni-input[data-v-03cebac4]{font-size:%?28?%;height:%?64?%;display:flex;align-items:center}.search-input .search-input-wrapper .right uni-input .input-placeholder[data-v-03cebac4]{color:#aba9a9}.search-button[data-v-03cebac4]{width:20%;box-sizing:border-box}.search-button .button[data-v-03cebac4]{height:%?64?%;font-size:%?28?%;border-radius:0 5px 5px 0;background:var(--main-bg);color:var(--main-text);display:flex;justify-content:center;align-items:center}.history .his-head[data-v-03cebac4]{font-size:%?28?%;padding:%?50?% 0 0 0;color:#777}.history .his-head .icon[data-v-03cebac4]{float:right}.history .his-list[data-v-03cebac4]{padding:10px 0;overflow:hidden}.history .his-list .his-item[data-v-03cebac4]{width:33.3%;float:left;padding:%?10?%;box-sizing:border-box}.history .his-list .his-item .history-button[data-v-03cebac4]{text-align:center;padding:%?14?%;line-height:%?30?%;border-radius:%?100?%;background:#fff;font-size:%?26?%;border:1px solid #efefef;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=e},"3ffe":function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("5ef2"),i("dd2b"),i("3efd");var a={data:function(){return{historySearch:[],searchValue:""}},onLoad:function(t){this.historySearch=this.getHistorySearch()},methods:{getHistorySearch:function(){return uni.getStorageSync("historySearch")||[]},onSearch:function(){var t=this.searchValue;t&&(this.setHistory(t),this.$navTo("shoppingpage/goods/list",{search:t}))},setHistory:function(t){var e=this.getHistorySearch(),i=e.indexOf(t);i>-1&&e.splice(i,1),e.unshift(t),this.historySearch=e,this.onUpdateStorage()},clearSearch:function(){this.historySearch=[],this.onUpdateStorage()},onUpdateStorage:function(t){uni.setStorageSync("historySearch",this.historySearch)},handleQuick:function(t){this.$navTo("shoppingpage/goods/list",{search:t})}}};e.default=a},"464c":function(t,e,i){"use strict";i.r(e);var a=i("0298"),n=i("c92d");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("4ac1");var s=i("828b"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"03cebac4",null,!1,a["a"],void 0);e["default"]=c.exports},"4ac1":function(t,e,i){"use strict";var a=i("f783"),n=i.n(a);n.a},c92d:function(t,e,i){"use strict";i.r(e);var a=i("3ffe"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},f783:function(t,e,i){var a=i("1e8b");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("f77464b6",a,!0,{sourceMap:!1,shadowMode:!1})}}]);