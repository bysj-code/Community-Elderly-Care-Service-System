(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"1e82":function(e,t,n){"use strict";(function(e){n("5048"),n("921b");i(n("66fd"));var t=i(n("993e"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"259f":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,i,r,u,a){try{var s=e[u](a),o=s.value}catch(h){return void n(h)}s.done?t(o):Promise.resolve(o).then(i,r)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var a=e.apply(t,n);function s(e){u(a,i,r,s,o,"next",e)}function o(e){u(a,i,r,s,o,"throw",e)}s(void 0)}))}}var s={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,fuwurenyuanxingbieOptions:[],fuwurenyuanxingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var t=a(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:[],n=e.getStorageSync("loginTable"),this.tableName=n,"yonghu"==this.tableName&&(this.yonghuxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.yonghuxingbieOptions[0]),"fuwurenyuan"==this.tableName&&(this.fuwurenyuanxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.fuwurenyuanxingbieOptions[0]),this.styleChange();case 6:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},fuwurenyuanxingbieChange:function(e){this.fuwurenyuanxingbieIndex=e.target.value,this.ruleForm.xingbie=this.fuwurenyuanxingbieOptions[this.fuwurenyuanxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=a(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.zhanghao||"yonghu"!=this.tableName){e.next=3;break}return this.$utils.msg("账号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima||"yonghu"!=this.tableName){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if(this.ruleForm.xingming||"yonghu"!=this.tableName){e.next=9;break}return this.$utils.msg("姓名不能为空"),e.abrupt("return");case 9:if("yonghu"!=this.tableName||!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){e.next=12;break}return this.$utils.msg("年龄应输入整数"),e.abrupt("return");case 12:if("yonghu"!=this.tableName||!this.ruleForm.shenfenzheng||this.$validate.checkIdCard(this.ruleForm.shenfenzheng)){e.next=15;break}return this.$utils.msg("身份证应输入身份证格式"),e.abrupt("return");case 15:if("yonghu"!=this.tableName||!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){e.next=18;break}return this.$utils.msg("手机应输入手机格式"),e.abrupt("return");case 18:if("yonghu"!=this.tableName||!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){e.next=21;break}return this.$utils.msg("邮箱应输入邮件格式"),e.abrupt("return");case 21:if(this.ruleForm.zhanghao||"fuwurenyuan"!=this.tableName){e.next=24;break}return this.$utils.msg("账号不能为空"),e.abrupt("return");case 24:if(this.ruleForm.mima||"fuwurenyuan"!=this.tableName){e.next=27;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 27:if(this.ruleForm.xingming||"fuwurenyuan"!=this.tableName){e.next=30;break}return this.$utils.msg("姓名不能为空"),e.abrupt("return");case 30:if("fuwurenyuan"!=this.tableName||!this.ruleForm.shenfenzheng||this.$validate.checkIdCard(this.ruleForm.shenfenzheng)){e.next=33;break}return this.$utils.msg("身份证应输入身份证格式"),e.abrupt("return");case 33:if("fuwurenyuan"!=this.tableName||!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){e.next=36;break}return this.$utils.msg("手机应输入手机格式"),e.abrupt("return");case 36:if("fuwurenyuan"!=this.tableName||!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){e.next=39;break}return this.$utils.msg("邮箱应输入邮件格式"),e.abrupt("return");case 39:return e.next=41,this.$api.register("".concat(this.tableName),this.ruleForm);case 41:this.$utils.msgBack("注册成功");case 43:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}};t.default=s}).call(this,n("543d")["default"])},"2c9d":function(e,t,n){"use strict";n.r(t);var i=n("259f"),r=n.n(i);for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=r.a},"993e":function(e,t,n){"use strict";n.r(t);var i=n("9a82"),r=n("2c9d");for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("fc6b");var a,s=n("f0c5"),o=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"20f9130e",null,!1,i["a"],a);t["default"]=o.exports},"9a82":function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return i}))},a61e:function(e,t,n){},fc6b:function(e,t,n){"use strict";var i=n("a61e"),r=n.n(i);r.a}},[["1e82","common/runtime","common/vendor"]]]);