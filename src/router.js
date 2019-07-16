//放项目的路由相关配置
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Topics from "./components/Topics.vue";
import User from "./components/User.vue";
import Creat from "./components/Creat.vue";
import Foot from "./components/Foot.vue";
import Message from "./components/Message.vue";
import { Public } from "./proto";

//给vue项目安装路由
Vue.use(VueRouter);

//创建路由
const routes = [
  {
    component: Home,
    path: Public + "/"
    //子路由下的pash开头不能加斜杠/ 默认开始就是父路由的Pash
  },
  // 文章展示路由  有很多页 有一个组件就够了  只是里边的内容不一样
  //:加上：就是动态页面
  {
    component: Creat,
    path: Public + "/topics/creat"
  },
  {
    component: Topics,
    path: Public + "/topics/:id"
  },
  {
    component: User,
    path: Public + "/user/:loginname"
  },
  {
    component: Foot,
    path: Public + "/foot"
  },
  {
    component: Message,
    path: Public + "/my/messages"
  }
];
//new:新创建  一个路由
const router = new VueRouter({
  routes,
  //路由的模式 默认是hash模式（通过锚点切换组件）
  //可以更改history模式 完全高仿浏览器
  //去掉网址中的#号
  mode: "history"
});

export default router;
