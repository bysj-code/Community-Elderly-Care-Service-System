(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fuwutuiding/add-or-update"],{"04d1":function(e,n,t){"use strict";(function(e){t("5149");u(t("66fd"));var n=u(t("7d8f"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"34d6":function(e,n,t){"use strict";var u=t("b4a1"),r=t.n(u);r.a},"5ab5":function(e,n,t){"use strict";t.r(n);var u=t("d54b"),r=t.n(u);for(var a in u)"default"!==a&&function(e){t.d(n,e,(function(){return u[e]}))}(a);n["default"]=r.a},"7d8f":function(e,n,t){"use strict";t.r(n);var u=t("86db"),r=t("5ab5");for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t("34d6");var i,o=t("f0c5"),c=Object(o["a"])(r["default"],u["b"],u["c"],!1,null,"1946c9fe",null,!1,u["a"],i);n["default"]=c.exports},"86db":function(e,n,t){"use strict";var u;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return u}));var r=function(){var e=this,n=e.$createElement;e._self._c},a=[]},b4a1:function(e,n,t){},d54b:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,u,r,a,i){try{var o=e[a](i),c=o.value}catch(f){return void t(f)}o.done?n(c):Promise.resolve(c).then(u,r)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(u,r){var i=e.apply(n,t);function o(e){a(i,u,r,o,c,"next",e)}function c(e){a(i,u,r,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("4f56"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{zhanghao:"",xingming:"",fuwumingcheng:"",fuwuleixing:"",fuwurenyuan:"",tupian:"",sfsh:"",shhf:"",userid:""},user:{},ro:{zhanghao:!1,xingming:!1,fuwumingcheng:!1,fuwuleixing:!1,fuwurenyuan:!1,tupian:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var t=this;return i(u.default.mark((function r(){var a,i,o,c;return u.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.getStorageSync("nowTable"),r.next=3,t.$api.session(a);case 3:if(i=r.sent,t.user=i.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=13;break}return t.ruleForm.id=n.id,r.next=11,t.$api.info("fuwutuiding",t.ruleForm.id);case 11:i=r.sent,t.ruleForm=i.data;case 13:if(!n.cross){r.next=48;break}o=e.getStorageSync("crossObj"),r.t0=u.default.keys(o);case 16:if((r.t1=r.t0()).done){r.next=48;break}if(c=r.t1.value,"zhanghao"!=c){r.next=22;break}return t.ruleForm.zhanghao=o[c],t.ro.zhanghao=!0,r.abrupt("continue",16);case 22:if("xingming"!=c){r.next=26;break}return t.ruleForm.xingming=o[c],t.ro.xingming=!0,r.abrupt("continue",16);case 26:if("fuwumingcheng"!=c){r.next=30;break}return t.ruleForm.fuwumingcheng=o[c],t.ro.fuwumingcheng=!0,r.abrupt("continue",16);case 30:if("fuwuleixing"!=c){r.next=34;break}return t.ruleForm.fuwuleixing=o[c],t.ro.fuwuleixing=!0,r.abrupt("continue",16);case 34:if("fuwurenyuan"!=c){r.next=38;break}return t.ruleForm.fuwurenyuan=o[c],t.ro.fuwurenyuan=!0,r.abrupt("continue",16);case 38:if("tupian"!=c){r.next=42;break}return t.ruleForm.tupian=o[c],t.ro.tupian=!0,r.abrupt("continue",16);case 42:if("userid"!=c){r.next=46;break}return t.ruleForm.userid=o[c],t.ro.userid=!0,r.abrupt("continue",16);case 46:r.next=16;break;case 48:t.styleChange();case 49:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return i(u.default.mark((function n(){return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.ruleForm.id){n.next=5;break}return n.next=3,e.$api.update("fuwutuiding",e.ruleForm);case 3:n.next=7;break;case 5:return n.next=7,e.$api.add("fuwutuiding",e.ruleForm);case 7:e.$utils.msgBack("提交成功");case 8:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),u=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),u=u>9?u:"0"+u,r=r>9?r:"0"+r,"".concat(t,"-").concat(u,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])}},[["04d1","common/runtime","common/vendor"]]]);