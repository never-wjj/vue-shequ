(function(t){function e(e){for(var a,i,c=e[0],r=e[1],l=e[2],p=0,d=[];p<c.length;p++)i=c[p],n[i]&&d.push(n[i][0]),n[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,c=1;c<s.length;c++){var r=s[c];0!==n[r]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},n={app:0},o=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-shequ/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),n=s.n(a);n.a},"2d06":function(t,e,s){},3607:function(t,e,s){"use strict";var a=s("979f"),n=s.n(a);n.a},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=o(t);return s(e)}function o(t){var e=a[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}n.keys=function(){return Object.keys(a)},n.resolve=o,t.exports=n,n.id="4678"},"4b52":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("1951"),s("450d");var a=s("eedf"),n=s.n(a),o=(s("672e"),s("101e")),i=s.n(o),c=(s("cadf"),s("551c"),s("f751"),s("097d"),s("2b0e")),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Header"),s("div",{staticClass:"inner"},[s("router-view")],1),s("Foot")],1)},l=[],u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hea"},[s("div",{staticClass:"hea-inner"},[s("router-link",{staticClass:"df-vue",attrs:{to:"/"}},[s("img",{attrs:{src:"https://www.vue-js.com/public/images/vue.png",alt:""}}),s("span",[t._v("Vue.js")])]),s("p",{staticClass:"creat"},[t._v("首页")]),t.userInfo?s("router-link",{attrs:{to:"/topics/creat"}},[s("div",{staticClass:"age"},[t._v("发布评论")])]):t._e(),s("p",{staticClass:"creat"},[t._v("微信公众号")]),t.userInfo?s("router-link",{attrs:{to:"/my/messages"}},[s("div",{staticClass:"age"},[t._v("未读消息")])]):t._e(),s("p",{staticClass:"creat"},[t._v("VUE2.0")]),s("p",{staticClass:"creat"},[t._v("API")]),s("p",{staticClass:"creat"},[t._v("关于")]),s("p",{staticClass:"creat"},[t._v("设置")]),t.userInfo?s("div",{staticClass:"df-vue"},[s("img",{attrs:{src:t.userInfo.avatar_url,alt:""}}),s("el-button",{attrs:{type:"warning",round:""},on:{click:t.logRome}},[t._v("退出")])],1):s("div",{staticClass:"login"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),s("el-button",{attrs:{type:"warning",round:""},on:{click:t.login}},[t._v("登录")])],1)],1)])},p=[],d=s("bc3a"),f=s.n(d),v={name:"hea",data:function(){return{text:"125c72b1-2803-41cb-8c79-a5372aff04f3",userInfo:null}},created:function(){var t=this;sessionStorage.getItem("token")&&f.a.post("https://www.vue-js.com/api/v1/accesstoken",{accesstoken:sessionStorage.getItem("token")}).then(function(e){t.userInfo=e.data,sessionStorage.setItem("token",t.text)})},methods:{login:function(){var t=this;f.a.post("https://www.vue-js.com/api/v1/accesstoken",{accesstoken:this.text}).then(function(e){t.userInfo=e.data,sessionStorage.setItem("token",t.text),sessionStorage.setItem("user_id",e.data.id)})},logRome:function(){this.userInfo=null,sessionStorage.clear()}}},m=v,h=(s("8baf"),s("2877")),b=Object(h["a"])(m,u,p,!1,null,null,null),g=b.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("div",{staticClass:"foot-inner"},[s("div",{staticClass:"links"},[s("a",{attrs:{href:"#"}},[t._v("RSS")]),s("span",[t._v("|")]),s("a",{attrs:{href:"#"}},[t._v("源码地址")])]),s("div",{staticClass:"col_fade"},[s("p",[t._v("\n        服务器搭建在\n        "),s("img",{attrs:{src:"https://www.vue-js.com/public/images/ucloud.png",alt:""}}),t._v(",储存赞助商为\n        "),s("img",{attrs:{src:"https://www.vue-js.com/public/images/qiniu.png",alt:""}})]),s("p",[t._v("声明：内容均来自于网络，如有侵权行为请发送邮件至vueclub@126.com,我们将在第一时间删除")])])])])}],k={name:"foot"},y=k,w=(s("5fb6"),Object(h["a"])(y,_,j,!1,null,null,null)),x=w.exports,C={name:"app",components:{Header:g,Foot:x}},z=C,S=(s("034f"),Object(h["a"])(z,r,l,!1,null,null,null)),$=S.exports,O=(s("8a7b"),s("8c4f")),P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("ul",{staticClass:"nav"},[s("li",[s("router-link",{class:"/"===t.$route.fullPath||"/?tab=all"===t.$route.fullPath?"active":"",attrs:{to:"/?tab=all"},nativeOn:{click:function(e){t.total=856}}},[t._v("全部")])],1),s("li",[s("router-link",{class:"/?tab=good"===t.$route.fullPath?"active":"",attrs:{to:"/?tab=good"},nativeOn:{click:function(e){t.total=15}}},[t._v("精华")])],1),s("li",[s("router-link",{class:"/?tab=weex"===t.$route.fullPath?"active":"",attrs:{to:"/?tab=weex"},nativeOn:{click:function(e){t.total=3}}},[t._v("weex")])],1),s("li",[s("router-link",{class:"/?tab=share"===t.$route.fullPath?"active":"",attrs:{to:"/?tab=share"},nativeOn:{click:function(e){t.total=247}}},[t._v("分享")])],1),s("li",[s("router-link",{class:"/?tab=ask"===t.$route.fullPath?"active":"",attrs:{to:"/?tab=ask"},nativeOn:{click:function(e){t.total=577}}},[t._v("问答")])],1),s("li",[s("router-link",{class:"/?tab=job"===t.$route.fullPath?"active":"",attrs:{to:"/?tab=job"},nativeOn:{click:function(e){t.total=30}}},[t._v("招聘")])],1)]),s("div",[t.topics.length?s("ul",{staticClass:"content"},t._l(t.topics,function(e){return s("li",{key:e.id},[s("router-link",{attrs:{to:"/user/"+e.author.loginname}},[s("img",{style:{width:"30px",hight:"30px",flexShrink:"0"},attrs:{src:e.author.avatar_url,alt:""}})]),s("div",{staticClass:"span-3"},[s("span",[t._v(t._s(e.reply_count))]),s("span",[t._v("/")]),s("span",[t._v(t._s(e.visit_count))])]),"/"===t.$route.fullPath||"/?tab=all"===t.$route.fullPath||e.top||e.good?s("span",{staticClass:"bth",class:{tab:!0,active:e.top||e.good}},[t._v(t._s(e.top?"置顶":e.good?"精华":"share"===e.tab?"分享":"ask"===e.tab?"问答":"job"===e.tab?"招聘":"weex"))]):t._e(),s("span",{staticClass:"title"},[s("router-link",{attrs:{to:"/topics/"+e.id}},[t._v(t._s(e.title))])],1),s("span",{staticClass:"time"},[t._v(t._s(t.myMoment(e.last_reply_at)))])],1)}),0):s("img",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562737616408&di=2f7ebfd789f57d1e7eddc0996450f5e1&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e1e156e6217132f875520f201451.gif",alt:""}}),s("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":20,total:t.total},on:{"current-change":t.changePage}})],1)])},I=[],E=s("c1df"),M=s.n(E),q={name:"home",data:function(){return{topics:[],total:856}},watch:{"$route.fullPath":{immediate:!0,handler:function(){var t=this,e=this.$route.query.tab||"all",s=this.$route.query.page||"1";this.topics=[],f.a.get("https://www.vue-js.com/api/v1/topics/?tab=".concat(e,"&page=").concat(s)).then(function(e){t.topics=e.data.data,console.log(t.topics[0]),console.log(e.data)})}}},methods:{myMoment:function(t){return M.a.locale("zh-cn"),M()(t).fromNow()},changePage:function(t){var e=this.$route.query.tab||"all";this.$router.push("/?tab=".concat(e,"&page=").concat(t))}}},F=q,N=(s("8b71"),Object(h["a"])(F,P,I,!1,null,null,null)),R=N.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.topic?s("div",{staticClass:"topic"},[s("article",[s("div",{staticClass:"article-head"},[s("div",{style:{margin:"10px 0"}},[t.topic.top||t.topic.good?s("span",{staticClass:"put_top"},[t._v(t._s(t.topic.top?"置顶":"精华"))]):t._e(),s("span",{style:{fontSize:"30px",margin:"20px"}},[t._v(t._s(t.topic.title))]),t.isLogin?s("span",{staticClass:"collect",on:{click:t.changeCollect}},[t._v(t._s(t.is_collect?"取消收藏":"加入收藏"))]):t._e()]),s("p",{staticStyle:{"font-size":"13px"}},[s("span",[s("b",[t._v("●")]),t._v("\n          发布于"+t._s(t.myMoment(t.topic.create_at))+"\n        ")]),s("span",[s("b",[t._v("●")]),t._v("\n          作者"+t._s(t.topic.author.loginname)+"\n        ")]),s("span",[s("b",[t._v("●")]),t._v("\n          "+t._s(t.topic.visit_count)+"浏览\n        ")]),s("span",[s("b",[t._v("●")]),t._v("\n          最后一次编辑是 "+t._s(t.myMoment(t.topic.create_at))+"\n        ")]),s("span",[s("b",[t._v("●")]),t._v("\n          来自 "+t._s("share"===t.topic.tab?"分享":"ask"===t.topic.tab?"问答":"job"===t.topic.tab?"招聘":"weex")+"\n        ")])])]),s("div",{staticClass:"content topic_content h4",domProps:{innerHTML:t._s(t.topic.content)}})]),s("div",{staticClass:"comment"},[s("p",[t._v(t._s(t.topic.replies.length)+"回复")]),s("ul",{staticClass:"topic-ul"},t._l(t.topic.replies,function(e){return s("li",{key:e.id},[s("span",{domProps:{innerHTML:t._s(e.content)}}),s("div",{staticClass:"zan"},[s("span",{staticStyle:{"margin-right":"20px"}},[s("span",{on:{click:function(s){return t.up(e.id)}}},[t._v(t._s(t.isUped(e.id)?"👍":"赞"))]),t._v("\n            "+t._s(e.ups.length?e.ups.length:"")+"\n          ")]),s("span",{on:{click:function(s){return t.addReply(e.author.loginname)}}},[t._v("◀")])])])}),0),s("div",{staticClass:"comment-from"},[s("span",[t._v("添加评论")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{cols:"30",rows:"10"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),s("button",{on:{click:t.addComment}},[t._v("回复")])])])]):t._e()},L=[],U=(s("7514"),{name:"topic",data:function(){return{topic:null,is_collect:!1,text:""}},computed:{isLogin:function(){return Boolean(sessionStorage.getItem("token"))}},created:function(){var t=this,e=this.$route.params.id;f.a.get("https://www.vue-js.com/api/v1/topic/".concat(e)).then(function(e){console.log(e.data.data),t.topic=e.data.data})},methods:{myMoment:function(t){return M.a.locale("zh-cn"),M()(t).fromNow()},changeCollect:function(){var t=this,e={topic_id:this.$route.params.id,accesstoken:sessionStorage.getItem("token")};this.is_collect?f.a.post("https://www.vue-js.com/api/v1/topic/de_collect",e).then(function(e){e.data.success&&(t.is_collect=!1)}):f.a.post("https://www.vue-js.com/api/v1/topic/collect",e).then(function(e){e.data.success&&(t.is_collect=!0)})},addComment:function(){var t=this;f.a.post("https://www.vue-js.com/api/v1/topic/".concat(this.topic.id,"/replies"),{accesstoken:sessionStorage.getItem("token"),content:this.text}).then(function(e){f.a.get("https://www.vue-js.com/api/v1/topic/".concat(t.topic.id)).then(function(e){t.topic=e.data.data})})},up:function(t){var e=this;sessionStorage.getItem("token")?f.a.post("https://www.vue-js.com/api/v1/reply/".concat(t,"/ups"),{accesstoken:sessionStorage.getItem("token")}).then(function(s){"up"===s.data.action?e.topic.replies.find(function(e){return e.id===t}).ups.push(sessionStorage.getItem("user_id")):e.topic.replies.find(function(e){return e.id===t}).ups=e.topic.replies.find(function(e){return e.id===t}).ups.filter(function(t){return t!=sessionStorage.getItem("user_id")})}):alert("请登录")},isUped:function(t){return-1!==this.topic.replies.find(function(e){return e.id===t}).ups.indexOf(sessionStorage.getItem("user_id"))},addReply:function(t){this.text="@".concat(t),document.querySelector("textarea").focus()}}}),A=U,H=(s("e720"),Object(h["a"])(A,T,L,!1,null,null,null)),B=H.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.user?s("div",{staticClass:"user"},[s("div",{staticClass:"user-inner"},[s("div",{staticClass:"user-hea"},[s("router-link",{attrs:{to:"/"}},[s("h3",[t._v("主页/")])]),s("img",{attrs:{src:t.user.avatar_url,alt:""}}),s("span",[t._v(t._s(t.user.loginname))]),s("p",[t._v(t._s(t.user.score)+"积分")]),s("p",{staticClass:"login"},[t._v("注册时间 "+t._s(t.myMoment(t.user.create_at)))])],1),s("div",{staticClass:"user-top"},[s("h3",[t._v("最近创建的话题")]),t.user.recent_topics.length?s("ul",{staticClass:"content"},t._l(t.user.recent_topics,function(e){return s("li",{key:e.id},[s("router-link",{attrs:{to:"/user/"+e.author.loginname}},[s("img",{style:{width:"30px",hight:"30px",flexShrink:"0"},attrs:{src:e.author.avatar_url,alt:""}})]),s("span",{staticClass:"title"},[s("router-link",{attrs:{to:"/topics/"+e.id}},[t._v(t._s(e.title))])],1),s("span",{staticClass:"time"})],1)}),0):t._e(),s("p",[t._v("查看更多>>")])]),s("div",{staticClass:"user-bot"},[s("h3",[t._v("最近参与的话题")]),t.user.recent_replies.length?s("ul",{staticClass:"content"},t._l(t.user.recent_replies,function(e){return s("li",{key:e.id},[s("router-link",{attrs:{to:"/user/"+e.author.loginname}},[s("img",{style:{width:"30px",hight:"30px",flexShrink:"0"},attrs:{src:e.author.avatar_url,alt:""}})]),s("span",{staticClass:"title"},[s("router-link",{attrs:{to:"/topics/"+e.id}},[t._v(t._s(e.title))])],1),s("span",{staticClass:"time"},[t._v(t._s(t.myMoment(e.last_reply_at)))])],1)}),0):t._e(),s("p",[t._v("查看更多>>")])])])]):s("div",[s("img",{staticClass:"user-img",attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562912818339&di=4de1c05db601b9d6d3da37f576ce851b&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01765b5c70bafaa801203d22e4a5f3.gif",alt:""}})])},G=[],J={name:"user",data:function(){return{user:null}},watch:{"$route.fullPath":{immediate:!0,handler:function(){var t=this,e=this.$route.params.loginname;console.log(this.$route.params),f.a.get("https://www.vue-js.com/api/v1/user/".concat(e)).then(function(e){t.user=e.data.data,console.log(t.user)})}}},methods:{myMoment:function(t){return M.a.locale("zh-cn"),M()(t).fromNow()}}},V=J,Q=(s("3607"),Object(h["a"])(V,D,G,!1,null,null,null)),K=Q.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cat"},[s("router-link",{attrs:{to:"/"}},[s("p",{staticClass:"cat-p"},[t._v("\n      主页/\n      "),s("span",[t._v("发布话题")])])]),s("span",[t._v("选择模块：")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.tab,expression:"tab"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.tab=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:""}},[t._v("请选择")]),s("option",{attrs:{value:"share"}},[t._v("分享")]),s("option",{attrs:{value:"ask"}},[t._v("问答")]),s("option",{attrs:{value:"job"}},[t._v("招聘")])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"title",attrs:{placeholder:"标题字数10字以上",type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),s("quill-editor",{ref:"myQuillEditor",attrs:{options:t.editorOption},on:{blur:function(e){return t.onEditorBlur(e)},focus:function(e){return t.onEditorFocus(e)},ready:function(e){return t.onEditorReady(e)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),s("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")])],1)},X=[],Y=(s("a753"),s("8096"),s("14e1"),s("953d")),Z={name:"app",data:function(){return{tab:"",title:"",content:"",editorOption:{}}},components:{quillEditor:Y["quillEditor"]},methods:{submit:function(){var t=this;f.a.post("https://www.vue-js.com/api/v1/topics",{tab:this.tab,title:this.title,content:this.content,accesstoken:sessionStorage.getItem("token")}).then(function(e){t.tab="",t.title="",t.content="",t.$router.push("/topic/".concat(e.data.topic_id))})},onEditorBlur:function(t){console.log("editor blur!",t)},onEditorFocus:function(t){console.log("editor focus!",t)},onEditorReady:function(t){console.log("editor ready!",t)},onEditorChange:function(t){var e=t.quill,s=t.html,a=t.text;console.log("editor change!",e,s,a),this.content=s}}},tt=Z,et=(s("bc25"),Object(h["a"])(tt,W,X,!1,null,null,null)),st=et.exports,at=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},nt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mess"},[s("div",[s("p",[t._v("主页/新消息")])]),s("div",[s("p",[t._v("过往消息")])])])}],ot={name:"mess",data:function(){return{mess:null}},created:function(){var t=this;console.log(this.$route.params),f.a.get("https://www.vue-js.com/api/v1/messages?accesstoken=".concat(sessionStorage.getItem("token"))).then(function(e){t.mess=e.data.data,console.log(t.mess)})}},it=ot,ct=Object(h["a"])(it,at,nt,!1,null,null,null),rt=ct.exports;c["default"].use(O["a"]);var lt=[{component:R,path:"/"},{component:st,path:"/topics/creat"},{component:B,path:"/topics/:id"},{component:K,path:"/user/:loginname"},{component:x,path:"/foot"},{component:rt,path:"/my/messages"}],ut=new O["a"]({routes:lt,mode:"history"}),pt=ut;c["default"].config.productionTip=!1,c["default"].use(i.a),c["default"].use(n.a),new c["default"]({render:function(t){return t($)},router:pt}).$mount("#app")},"5f72":function(t,e,s){},"5fb6":function(t,e,s){"use strict";var a=s("4b52"),n=s.n(a);n.a},"64a9":function(t,e,s){},"782e":function(t,e,s){},"8a7b":function(t,e,s){},"8b71":function(t,e,s){"use strict";var a=s("e3a2"),n=s.n(a);n.a},"8baf":function(t,e,s){"use strict";var a=s("782e"),n=s.n(a);n.a},"979f":function(t,e,s){},bc25:function(t,e,s){"use strict";var a=s("5f72"),n=s.n(a);n.a},e3a2:function(t,e,s){},e720:function(t,e,s){"use strict";var a=s("2d06"),n=s.n(a);n.a}});
//# sourceMappingURL=app.9a9b8cd2.js.map