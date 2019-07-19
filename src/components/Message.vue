<template>
  <div class="mess" v-if="mess">
    <div>
      <p>主页/新消息</p>
      <ul v-if="mess.hasnot_read_messages.length">
        <li v-for="messes in mess.hasnot_read_messages" :key="messes.id">
          <p>
            <router-link :to="$public+`/user/${messes.author.loginname}`">
              <span>{{messes.author.loginname}}</span>
            </router-link>在话题
            <router-link :to="$public+`/topics/${messes.author.loginname}`">
              <span>{{messes.topic.title}}</span>
            </router-link>中@了你
          </p>
        </li>
      </ul>
      <p v-else>无未读消息</p>
    </div>
    <div>
      <p>过往消息</p>
      <ul>
        <li v-for="mes in mess.has_read_messages" :key="mes.id">
          <p>
            <router-link :to="$public+`/user/${mes.author.loginname}`">
              <span>{{mes.author.loginname}}</span>
            </router-link>在话题
            <router-link :to="$public+`/topics/${mes.topic.id}`">
              <span>{{mes.topic.title}}</span>
            </router-link>中@了你
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "mess",
  data() {
    return {
      mess: null
    };
  },
  created() {
    console.log(this.$route.params);
    axios
      .get(
        `https://www.vue-js.com/api/v1/messages?accesstoken=${sessionStorage.getItem(
          "token"
        )}`
      )
      .then(res => {
        this.mess = res.data.data;
        console.log(this.mess);
      });
    axios.post("https://www.vue-js.com/api/v1/message/mark_all", {
      accesstoken: sessionStorage.getItem("token")
    });
  }
};
</script>
<style>
</style>
