<template>
  <footer>
    <div class="foot-inner">
      <div class="links">
        <a href="#">RSS</a>
        <span>|</span>
        <a href="#">源码地址</a>
      </div>
      <div class="col_fade">
        <p>
          服务器搭建在
          <img src="https://www.vue-js.com/public/images/ucloud.png" alt />,储存赞助商为
          <img src="https://www.vue-js.com/public/images/qiniu.png" alt />
        </p>
        <p>声明：内容均来自于网络，如有侵权行为请发送邮件至vueclub@126.com,我们将在第一时间删除</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "foot"
};
</script>

<style>
footer {
  background-color: #fff;
  margin-top: 20px;
  /* position: fixed;
  width: 100vw;
  bottom: 0;
  left: 0; */
}
.foot-inner {
  padding-top: 15px;
  margin: 0 auto;
  width: 80%;
  color: #e2e2e2;
  padding: 20px 0;
  font-size: 13px;
  line-height: 2em;
}
.links a {
  color: #666;
}
.col_fade {
  color: #ababab;
}
.col_fade p {
  line-height: 20px;
  vertical-align: bottom;
  margin: 0 0 10px;
  display: flex;
  align-items: center;
}
</style>
