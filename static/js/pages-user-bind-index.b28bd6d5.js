(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-bind-index"],{"0537":function(t,a,e){"use strict";e("6a54");var i=e("f5bd").default;Object.defineProperty(a,"__esModule",{value:!0}),a.image=function(){return n.default.get(s.image,{},{load:!1})},a.sendSmsCaptcha=function(t){return n.default.post(s.sendSmsCaptcha,t,{load:!1})};var n=i(e("d57d")),s={image:"captcha/image",sendSmsCaptcha:"captcha/sendSmsCaptcha"}},"2a0a":function(t,a,e){"use strict";e.r(a);var i=e("9b1a"),n=e("41bd");for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("c9a2");var c=e("828b"),o=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"958c49f4",null,!1,i["a"],void 0);a["default"]=o.exports},"41bd":function(t,a,e){"use strict";e.r(a);var i=e("848a"),n=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},"558a":function(t,a,e){var i=e("c86c");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */\r\n/* 引入自定义主题 */.container[data-v-958c49f4]{padding:%?100?% %?60?%;min-height:100vh;background-color:#fff}.header[data-v-958c49f4]{margin-bottom:%?50?%}.header .title[data-v-958c49f4]{color:#191919;font-size:%?50?%}.header .sub-title[data-v-958c49f4]{margin-top:%?20?%;color:#b3b3b3;font-size:%?25?%}.form-item[data-v-958c49f4]{display:flex;padding:%?18?%;border-bottom:%?1?% solid #f3f1f2;margin-bottom:%?25?%;height:%?96?%}.form-item--input[data-v-958c49f4]{font-size:%?26?%;letter-spacing:%?1?%;flex:1;height:100%}.form-item--parts[data-v-958c49f4]{min-width:%?100?%;height:100%}.form-item .captcha[data-v-958c49f4]{height:100%}.form-item .captcha .image[data-v-958c49f4]{display:block;width:%?192?%;height:100%}.form-item .captcha-sms[data-v-958c49f4]{font-size:%?22?%;line-height:%?50?%;padding-right:%?20?%}.form-item .captcha-sms .activate[data-v-958c49f4]{color:#cea26a}.form-item .captcha-sms .un-activate[data-v-958c49f4]{color:#9e9e9e}.submit-button[data-v-958c49f4]{width:100%;height:%?86?%;margin-top:%?70?%;background:linear-gradient(90deg,var(--main-bg),var(--main-bg2));color:var(--main-text);border-radius:%?80?%;box-shadow:0 10px 20px 0 rgba(0,0,0,.1);letter-spacing:%?5?%;display:flex;justify-content:center;align-items:center}',""]),t.exports=a},"724b":function(t,a,e){"use strict";e("6a54"),Object.defineProperty(a,"__esModule",{value:!0}),a.isPositiveInteger=a.isPhone=a.isNumber=a.isMobile=a.isInteger=a.isEmpty=a.isEmail=a.isDouble=void 0,e("0c26"),e("5c47"),e("0506"),e("2c10");a.isEmpty=function(t){return""==t.trim()};a.isPhone=function(t){return/^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/.test(t)};a.isMobile=function(t){return/^(1[3456789]\d{9})$/.test(t)};a.isEmail=function(t){if(null==t||""==t)return!1;var a=t.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);return null!=a};a.isNumber=function(t){return!(!n(t)&&!i(t))};a.isPositiveInteger=function(t){return/(^[0-9]\d*$)/.test(t)};var i=function(t){if(null==t||""==t)return!1;var a=t.match(/^[-\+]?\d+$/);return null!=a};a.isInteger=i;var n=function(t){if(null==t||""==t)return!1;var a=t.match(/^[-\+]?\d+(\.\d+)?$/);return null!=a};a.isDouble=n},"848a":function(t,a,e){"use strict";e("6a54");var i=e("3639").default,n=e("f5bd").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("bf0f"),e("64aa");n(e("f9d4"));var s=i(e("370b")),c=i(e("0537")),o=i(e("724b")),r={data:function(){return{isLoading:!1,captcha:{},smsState:!1,times:60,mobile:"",captchaCode:"",smsCode:""}},created:function(){this.getCaptcha()},methods:{getCaptcha:function(){var t=this;c.image().then((function(a){return t.captcha=a.data}))},handelSmsCaptcha:function(){this.isLoading||this.smsState||!this.formValidation(10)||(this.sendSmsCaptcha(),this.getCaptcha())},formValidation:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,a=this;return!!(10!==t||a.validteMobile(a.mobile)&&a.validteCaptchaCode(a.captchaCode))&&!!(20!==t||a.validteMobile(a.mobile)&&a.validteSmsCode(a.smsCode))},validteMobile:function(t){return o.isEmpty(t)?(this.$toast("请先输入手机号"),!1):!!o.isMobile(t)||(this.$toast("请输入正确格式的手机号"),!1)},validteCaptchaCode:function(t){return!o.isEmpty(t)||(this.$toast("请先输入图形验证码"),!1)},validteSmsCode:function(t){return!o.isEmpty(t)||(this.$toast("请先输入短信验证码"),!1)},sendSmsCaptcha:function(){var t=this;t.isLoading=!0,c.sendSmsCaptcha({form:{captchaKey:t.captcha.key,captchaCode:t.captchaCode,mobile:t.mobile}}).then((function(a){t.$toast(a.message),t.timer()})).finally((function(){return t.isLoading=!1}))},timer:function(){var t=this;t.smsState=!0;var a=setInterval((function(){t.times=t.times-1,t.times<=0&&(t.smsState=!1,t.times=60,clearInterval(a))}),1e3)},handleSubmit:function(){!this.isLoading&&this.formValidation(20)&&this.onSubmitEvent()},onSubmitEvent:function(){var t=this;t.isLoading=!0,s.bindMobile({form:{smsCode:t.smsCode,mobile:t.mobile}}).then((function(a){t.$toast(a.message),setTimeout((function(){t.onNavigateBack(1)}),2e3)})).finally((function(){return t.isLoading=!1}))},onNavigateBack:function(t){uni.navigateBack({delta:Number(t||1)})}}};a.default=r},9150:function(t,a,e){var i=e("558a");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("967d").default;n("459dff52",i,!0,{sourceMap:!1,shadowMode:!1})},"9b1a":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"header"},[e("v-uni-view",{staticClass:"title"},[e("v-uni-text",[t._v("绑定您的手机号")])],1),e("v-uni-view",{staticClass:"sub-title"},[e("v-uni-text",[t._v("为了更好的服务您，请绑定手机号")])],1)],1),e("v-uni-view",{staticClass:"submit-form"},[e("v-uni-view",{staticClass:"form-item"},[e("v-uni-input",{staticClass:"form-item--input",attrs:{type:"number",maxlength:"11",placeholder:"请输入手机号码"},model:{value:t.mobile,callback:function(a){t.mobile=a},expression:"mobile"}})],1),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-input",{staticClass:"form-item--input",attrs:{type:"text",maxlength:"5",placeholder:"请输入图形验证码"},model:{value:t.captchaCode,callback:function(a){t.captchaCode=a},expression:"captchaCode"}}),e("v-uni-view",{staticClass:"form-item--parts"},[e("v-uni-view",{staticClass:"captcha",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.getCaptcha()}}},[e("v-uni-image",{staticClass:"image",attrs:{src:t.captcha.base64}})],1)],1)],1),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-input",{staticClass:"form-item--input",attrs:{type:"number",maxlength:"6",placeholder:"请输入短信验证码"},model:{value:t.smsCode,callback:function(a){t.smsCode=a},expression:"smsCode"}}),e("v-uni-view",{staticClass:"form-item--parts"},[e("v-uni-view",{staticClass:"captcha-sms",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handelSmsCaptcha()}}},[t.smsState?e("v-uni-text",{staticClass:"un-activate"},[t._v("重新发送("+t._s(t.times)+")秒")]):e("v-uni-text",{staticClass:"activate"},[t._v("获取验证码")])],1)],1)],1),e("v-uni-view",{staticClass:"submit-button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleSubmit()}}},[e("v-uni-text",[t._v("确认绑定")])],1)],1)],1)},n=[]},c9a2:function(t,a,e){"use strict";var i=e("9150"),n=e.n(i);n.a}}]);