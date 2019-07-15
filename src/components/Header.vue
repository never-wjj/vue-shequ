<template>
  <div class="hea">
    <div class="hea-inner">
      <router-link to="/" class="df-vue">
        <img src="https://www.vue-js.com/public/images/vue.png" alt />
        <span>Vue.js</span>
      </router-link>
      <p class="creat">首页</p>
      <router-link to="/topics/creat" v-if="userInfo">
        <div class="age">发布评论</div>
      </router-link>
      <p class="creat">微信公众号</p>
      <router-link to="/my/messages" v-if="userInfo">
        <div class="age">未读消息</div>
      </router-link>
      <p class="creat">VUE2.0</p>
      <p class="creat">API</p>
      <p class="creat">关于</p>
      <p class="creat">设置</p>
      <div v-if="!userInfo" class="login">
        <input type="text" v-model="text" />

        <el-button type="warning" @click="login" round>登录</el-button>
      </div>
      <div v-else class="df-vue">
        <img :src="userInfo.avatar_url" alt />

        <el-button type="warning" @click="logRome" round>退出</el-button>
      </div>
    </div>
  </div>
</template>

<script>
// 登录存储功能状态     一般使用浏览器本地存储   1、cookie    2、localStorage     3、sessionStorage （常用后两个）
//local和session的区别   local一直存着直到你不想存       session关闭窗口就消失
// 用法 一般存放安全信息
//存储  localStorage.setItem('属性名'，'属性值')
// 获取 localStorage.getItem('属性名')
// 清空 localStorage.removeItem("属性名")   localStorage.clear()全部删除   两个用法一样
// 储存的属性值不能是对象类型  一般事number  string   boolean
// 存储的数据可以到浏览器的  开发者工具（f12）下的App...内查看
import axios from "axios";
export default {
  name: "hea",
  data() {
    return {
      text: "125c72b1-2803-41cb-8c79-a5372aff04f3",
      userInfo: null
    };
  },
  created() {
    if (sessionStorage.getItem("token")) {
      axios
        .post("https://www.vue-js.com/api/v1/accesstoken", {
          accesstoken: sessionStorage.getItem("token")
        })
        .then(res => {
          this.userInfo = res.data;
          sessionStorage.setItem("token", this.text);
        });
    }
  },
  methods: {
    login() {
      axios
        .post("https://www.vue-js.com/api/v1/accesstoken", {
          accesstoken: this.text
        })
        .then(res => {
          this.userInfo = res.data;
          sessionStorage.setItem("token", this.text);
          sessionStorage.setItem("user_id", res.data.id);
        });
    },
    logRome() {
      this.userInfo = null;
      sessionStorage.clear();
    }
  }
};
</script>

<style>
.age {
  color: rgb(30, 89, 199);
  font-size: 14px;
  cursor: pointer;
}
.hea-inner {
  background: rgb(6, 75, 4);
  width: 80%;
  margin: 0 auto;
  color: #fff;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.creat {
  font-size: 14px;
  cursor: pointer;
  color: #fff;
}
.hea {
  background-color: rgb(6, 75, 4);
  margin-bottom: 20px;
}
.hea-inner img {
  width: 50px;
  height: 50px;
}
.hea-inner span {
  color: #fff;
}
.df-vue {
  display: flex;
  align-items: center;
  padding: 6px 0;
}
</style>
