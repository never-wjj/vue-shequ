import Vue from "vue";
//导入 整个 App组件
import App from "./App.vue";
import "./assets/glocal.css";
import router from "./router";
import { Public } from "./proto";

import { Pagination, Button } from "element-ui";
Vue.prototype.$public = Public;

// Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(Pagination);
Vue.use(Button);

//框架写得是 虚拟 dom
//将App 组件内的虚拟dom结构
//获取后台数据 通过原声或者js操作真实dom去页面并写上交互效果。直接操作dom节点可能会引起浏览器得重绘（重渲）
new Vue({
  render: h => h(App),
  router
}).$mount("#app");
