<template>
  <div class="home">
    <ul class="nav">
      <li>
        <router-link
          @click.native="total = 856"
          :class=" $route.fullPath === $public+'/' || $route.fullPath===$public+'/?tab=all' ? 'active' : ''"
          :to="$public+'/?tab=all'"
        >全部</router-link>
      </li>
      <li>
        <router-link
          @click.native="total = 15"
          :class="$route.fullPath===$public+'/?tab=good' ? 'active' : ''"
          :to="$public+'/?tab=good'"
        >精华</router-link>
      </li>
      <li>
        <router-link
          @click.native="total = 3"
          :class="$route.fullPath===$public+'/?tab=weex' ? 'active' : ''"
          :to="$public+'/?tab=weex'"
        >weex</router-link>
      </li>
      <li>
        <router-link
          @click.native="total = 247"
          :class="$route.fullPath===$public+'/?tab=share' ? 'active' : ''"
          :to="$public+'/?tab=share'"
        >分享</router-link>
      </li>
      <li>
        <router-link
          @click.native="total = 577"
          :class="$route.fullPath===$public+'/?tab=ask' ? 'active' : ''"
          :to="$public+'/?tab=ask'"
        >问答</router-link>
      </li>
      <li>
        <router-link
          @click.native="total = 30"
          :class="$route.fullPath===$public+'/?tab=job' ? 'active' : ''"
          :to="$public+'/?tab=job'"
        >招聘</router-link>
      </li>
    </ul>
    <div>
      <ul v-if="topics.length" class="content">
        <li v-for="topic in topics" :key="topic.id">
          <router-link :to="$public+`/user/${topic.author.loginname}`">
            <img
              :src="topic.author.avatar_url"
              alt
              :style="{width:'30px',hight:'30px',flexShrink:'0'}"
            />
          </router-link>
          <div class="span-3">
            <span>{{topic.reply_count}}</span>
            <span>/</span>
            <span>{{topic.visit_count}}</span>
          </div>
          <span
            v-if="$route.fullPath === $public+'/' || $route.fullPath===$public+'/?tab=all'||topic.top||topic.good"
            class="bth"
            :class="{tab:true,active:topic.top||topic.good}"
          >{{topic.top?'置顶':topic.good?'精华':topic.tab==='share'?'分享':topic.tab==='ask'?'问答':topic.tab==='job'?'招聘':'weex'}}</span>
          <span class="title">
            <router-link :to="$public+`/topics/${topic.id}`">{{topic.title}}</router-link>
          </span>
          <span class="time">{{myMoment(topic.last_reply_at)}}</span>
        </li>
      </ul>
      <img
        v-else
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562737616408&di=2f7ebfd789f57d1e7eddc0996450f5e1&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e1e156e6217132f875520f201451.gif"
        alt
      />
      <el-pagination
        @current-change="changePage"
        background
        layout="prev, pager, next"
        :page-size="20"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      topics: [],
      total: 856
    };
  },
  watch: {
    "$route.fullPath": {
      immediate: true,
      handler() {
        console.log(this.$public);
        
        const tab = this.$route.query.tab || "all";
        const num = this.$route.query.page || "1";
        this.topics = [];
        axios
          .get(`https://www.vue-js.com/api/v1/topics/?tab=${tab}&page=${num}`)
          .then(res => {
            this.topics = res.data.data;
            console.log(this.topics[0]);
            console.log(res.data);
          });
      }
    }
  },
  methods: {
    myMoment(time) {
      moment.locale("zh-cn");
      return moment(time).fromNow();
    },
    changePage(num) {
      // 页面改变触发的函数
      // 更改页面的地址 从而触发 watch 的 handler 从而实现页面数据的变化
      const tab = this.$route.query.tab || "all";
      this.$router.push(`/?tab=${tab}&page=${num}`);
    }
  }
};
</script>

<style>
.home {
  padding: 10px;
}
.home img {
  width: 100%;
}
.home .nav {
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  background-color: #f6f6f6;
}
.home .nav li {
  margin-right: 25px;
}
.home .nav li > a {
  color: #369219;
}
/* .conten {
  
} */
.home .nav li a {
  color: #369219;
  padding: 3px 4px;
  border-radius: 3px;
}
.home .nav li a.active {
  color: #fff;
  background-color: #369219;
}
.home .content {
  background-color: #fff;
}
.home .content {
  margin: 0;
  padding: 0;
}
.home .content li {
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
.home .content li .title {
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