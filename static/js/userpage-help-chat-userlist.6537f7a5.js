(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["userpage-help-chat-userlist"],{"1a25":function(e,t,n){"use strict";n.r(t);var o=n("ce04"),c=n.n(o);for(var u in o)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=c.a},"9ce2":function(e,t,n){"use strict";var o;n("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.connectSocketInit=s,t.removeWebsocket=function(){o.onClose(),console.log("关闭"),o="",c=!1,null,5e3,u=null,null,a=!1},t.sendSock=i;var c=!1,u=null,a=!0;function s(e){e=e,o=uni.connectSocket({url:"wss://wechat.shenghuowuji.com:2345",success:function(){return console.log("正准备建立websocket中..."),o}}),o.onOpen((function(e){console.log("WebSocket连接正常！"),c=!0,o.onMessage((function(e){}))})),o.onMessage((function(t){var n;n=JSON.parse(t.data),e(n)})),o.onClose((function(e){a?(console.log("已经被关闭了"),c=!1,l()):a=!0}))}function i(e){null!==o&&3===o.readyState?(o.close(),l()):1===o.readyState?o.send({data:e}):0===o.readyState&&setTimeout((function(){o.send({data:e})}),3e3)}function l(){clearInterval(u),c||setTimeout((function(){s()}),5e3)}},ac93:function(e,t,n){"use strict";n.r(t);var o=n("d60a"),c=n("1a25");for(var u in c)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return c[e]}))}(u);var a=n("828b"),s=Object(a["a"])(c["default"],o["b"],o["c"],!1,null,"7378de07",null,!1,o["a"],void 0);t["default"]=s.exports},ce04:function(e,t,n){"use strict";n("6a54");var o=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d4b5");var c=n("9ce2"),u=o(n("f9d4")),a=o(n("a533")),s={components:{},data:function(){return{}},onLoad:function(){this.getuserList()},methods:{global_callback:function(){console.log(c.ws),c.ws.socketonmessage({},(function(e){console.log("获取列表？",e)}))},getuserList:function(){this.get_other()},get_other:function(e,t){var n=this,o={type:"friend_list",token:u.default.getters.token?u.default.getters.token:"",user_id:u.default.state.user.userId,platform:a.default},s=JSON.stringify(o);c.ws.sendSock(s,(function(e){console.log("发送？",e),n.global_callback()}))}}};t.default=s},d60a:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){}));var o=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",{staticClass:"container"})},c=[]}}]);