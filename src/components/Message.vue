<template>
  <div class="mess">
    <div>
      <p>主页/新消息</p>
    </div>
    <div>
      <p>过往消息</p>
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
  }
};
</script>
<style>
</style>
