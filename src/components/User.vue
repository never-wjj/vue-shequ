<template>
  <div v-if="user" class="user">
    <div class="user-inner">
      <div class="user-hea">
        <router-link to="/">
          <h3>主页/</h3>
        </router-link>

        <img :src="user.avatar_url" alt />

        <span>{{user.loginname}}</span>
        <p>{{user.score}}积分</p>
        <p class="login">注册时间 {{myMoment(user.create_at)}}</p>
      </div>
      <div class="user-top">
        <h3>最近创建的话题</h3>
        <ul v-if="user.recent_topics.length" class="content">
          <li v-for="topic in user.recent_topics" :key="topic.id">
            <router-link :to="`/user/${topic.author.loginname}`">
              <img
                :src="topic.author.avatar_url"
                alt
                :style="{width:'30px',hight:'30px',flexShrink:'0'}"
              />
            </router-link>
            <span class="title">
              <router-link :to="`/topics/${topic.id}`">{{topic.title}}</router-link>
            </span>
            <span class="time"></span>
          </li>
        </ul>
        <p>查看更多>></p>
      </div>
      <div class="user-bot">
        <h3>最近参与的话题</h3>
        <ul v-if="user.recent_replies.length" class="content">
          <li v-for="topic in user.recent_replies" :key="topic.id">
            <router-link :to="`/user/${topic.author.loginname}`">
              <img
                :src="topic.author.avatar_url"
                alt
                :style="{width:'30px',hight:'30px',flexShrink:'0'}"
              />
            </router-link>
            <span class="title">
              <router-link :to="`/topics/${topic.id}`">{{topic.title}}</router-link>
            </span>
            <span class="time">{{myMoment(topic.last_reply_at)}}</span>
          </li>
        </ul>
        <p>查看更多>></p>
      </div>
    </div>
  </div>
  <div v-else>
    <img
      class="user-img"
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562912818339&di=4de1c05db601b9d6d3da37f576ce851b&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01765b5c70bafaa801203d22e4a5f3.gif"
      alt
    />
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "user",
  data() {
    return {
      user: null
    };
  },
  // created() {
  //   const loginname = this.$route.params.loginname;
  //   console.log(this.$route.params);
  //   axios.get(`https://www.vue-js.com/api/v1/user/${loginname}`).then(res => {
  //     this.user = res.data.data;
  //     console.log(this.user);
  //   });
  // },
  watch: {
    "$route.fullPath": {
      immediate: true,
      handler() {
        const loginname = this.$route.params.loginname;
        console.log(this.$route.params);
        axios
          .get(`https://www.vue-js.com/api/v1/user/${loginname}`)
          .then(res => {
            this.user = res.data.data;
            console.log(this.user);
          });
      }
    }
  },
  methods: {
    myMoment(time) {
      moment.locale("zh-cn");
      return moment(time).fromNow();
    }
  }
};
</script>

<style>
.user img {
  width: 30px;
  flex-shrink: 0;
  margin-right: 20px;
  cursor: pointer;
}
.user-bot .user-top {
  margin: 20px;
}
.user-bot div,
.user-top div {
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
}
.time {
  text-align: right;
  flex-grow: 1;
}
.user-inner {
  padding: 10px 15px;
}
.user-img {
  width: 100%;
}
.user h3 {
  background-color: #f6f6f6;
  line-height: 40px;
  color: #1c6132;
  font-size: 14px;
}
.user a {
  color: #08c;
}
.user a:hover {
  color: #005580;
  text-decoration: underline;
}
.user-hea .login {
  color: #ababab;
  font-size: 14;
}

.user-bot .content,
.user-top .content {
  background-color: #fff;
}
.user-bot .content,
.user-top .content {
  margin: 0;
  padding: 0;
}
.user-bot .content li,
.user-top .content li {
  padding: 12px 10px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
}

.bth {
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  color: #fff;
  font-size: 12px;
  background-color: #ccc;
  flex-shrink: 0;
}
.active {
  background: #369219;
}
.span-3 {
  margin: 10px;
}
.user-bot .content li .title,
.user-top .content li .title {
  flex-grow: 0;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.time {
  flex-shrink: 0;
  font-size: 12px;
  color: #777;
  /* 禁止换行 */
  /* 出现三个点... */
}
</style>
