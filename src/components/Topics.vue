<template>
  <div v-if="topic" class="topic">
    <article>
      <div class="article-head">
        <div :style="{margin:'10px 0'}">
          <span class="put_top" v-if="topic.top||topic.good">{{topic.top?'置顶':'精华'}}</span>
          <span :style="{fontSize:'30px',margin:'20px'}">{{topic.title}}</span>
          <span
            v-if="isLogin"
            @click="changeCollect"
            class="collect"
          >{{is_collect ? '取消收藏' : '加入收藏'}}</span>
        </div>
        <p style="font-size: 13px;">
          <span>
            <b>●</b>
            发布于{{myMoment(topic.create_at)}}
          </span>
          <span>
            <b>●</b>
            作者{{topic.author.loginname}}
          </span>
          <span>
            <b>●</b>
            {{topic.visit_count}}浏览
          </span>
          <span>
            <b>●</b>
            最后一次编辑是 {{myMoment(topic.create_at)}}
          </span>
          <span>
            <b>●</b>
            来自 {{topic.tab === 'share' ? '分享' : topic.tab ==='ask' ? '问答' : topic.tab ==='job' ? '招聘' : 'weex'}}
          </span>
        </p>
      </div>
      <div class="content topic_content h4" v-html="topic.content"></div>
    </article>
    <div class="comment">
      <p>{{topic.replies.length}}回复</p>
      <ul class="topic-ul">
        <li v-for=" comment in topic.replies" :key="comment.id">
          <span v-html="comment.content"></span>
          <div class="zan">
            <span style="margin-right: 20px;">
              <span @click="up(comment.id)">{{ isUped(comment.id) ?'👍' : '赞'}}</span>
              {{comment.ups.length ? comment.ups.length : ''}}
            </span>
            <span @click="addReply(comment.author.loginname)">◀</span>
          </div>
        </li>
      </ul>
      <div class="comment-from">
        <span>添加评论</span>
        <textarea cols="30" rows="10" v-model="text"></textarea>
        <button @click="addComment">回复</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "topic",

  data() {
    return {
      topic: null,
      is_collect: false,
      text: ""
    };
  },
  computed: {
    isLogin() {
      return Boolean(sessionStorage.getItem("token"));
    }
  },
  created() {
    // 获取路由的动态参数     $route
    const { id } = this.$route.params;
    axios.get(`https://www.vue-js.com/api/v1/topic/${id}`).then(res => {
      console.log(res.data.data);
      this.topic = res.data.data;
    });
  },
  //
  methods: {
    myMoment(time) {
      moment.locale("zh-cn");
      return moment(time).fromNow();
    },
    changeCollect() {
      const obj = {
        topic_id: this.$route.params.id,
        accesstoken: sessionStorage.getItem("token")
      };
      if (this.is_collect) {
        axios
          .post(`https://www.vue-js.com/api/v1/topic/de_collect`, obj)
          .then(res => {
            if (res.data.success) {
              this.is_collect = false;
            }
          });
      } else {
        axios
          .post(`https://www.vue-js.com/api/v1/topic/collect`, obj)
          .then(res => {
            if (res.data.success) {
              this.is_collect = true;
            }
          });
      }
    },
    addComment() {
      //
      axios
        .post(`https://www.vue-js.com/api/v1/topic/${this.topic.id}/replies`, {
          accesstoken: sessionStorage.getItem("token"),
          content: this.text
        })
        .then(res => {
          axios
            .get(`https://www.vue-js.com/api/v1/topic/${this.topic.id}`)
            .then(res => {
              this.topic = res.data.data;
            });
        });
    },
    up(id) {
      if (sessionStorage.getItem("token")) {
        axios
          .post(`https://www.vue-js.com/api/v1/reply/${id}/ups`, {
            accesstoken: sessionStorage.getItem("token")
          })
          .then(res => {
            if (res.data.action === "up") {
              //此时是你没点过 点了之后变up
              this.topic.replies
                .find(item => item.id === id)
                .ups.push(sessionStorage.getItem("user_id"));
            } else {
              this.topic.replies.find(
                item => item.id === id
              ).ups = this.topic.replies
                .find(item => item.id === id)
                .ups.filter(item => item != sessionStorage.getItem("user_id"));
            }
          });
      } else {
        alert("请登录");
      }
    },
    isUped(id) {
      // 刚进页面的时候看评论是否被用户点赞了
      return (
        this.topic.replies
          .find(item => item.id === id)
          .ups.indexOf(sessionStorage.getItem("user_id")) !== -1
      );
    },
    addReply(loginname) {
      this.text = `@${loginname}`;
      document.querySelector("textarea").focus();
    }
  }
};
</script>

<style>
.topic {
  background-color: #fff;
}
article {
  padding: 20px;
}
.preview h1,
.preview h2,
.preview h3,
.preview h4,
.preview h5,
.preview h6,
.reply_area h1,
.reply_area h2,
.reply_area h3,
.reply_area h4,
.reply_area h5,
.reply_area h6,
.topic_content h1,
.topic_content h2,
.topic_content h3,
.topic_content h4,
.topic_content h5,
.topic_content h6 {
  margin: 30px 0 15px;
  border-bottom: 1px solid #eee;
}
.topic_content h4 {
  font-family: inherit;
  font-weight: 700;
  line-height: 20px;
  color: inherit;
  text-rendering: optimizelegibility;
  font-size: 18px;
}
.topic img {
  width: auto\9;
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  border: 0;
  -ms-interpolation-mode: bicubic;
}
.put_top {
  background: #369219;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  color: #fff;
  font-size: 12px;
}

.topic-ul > li {
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
}
.zan {
  text-align: right;
  flex-grow: 1;
}
</style>
