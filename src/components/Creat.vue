<template>
  <div class="cat">
    <router-link to="/">
      <p class="cat-p">
        主页/
        <span>发布话题</span>
      </p>
    </router-link>
    <span>选择模块：</span>
    <select v-model="tab">
      <option value>请选择</option>
      <option value="share">分享</option>
      <option value="ask">问答</option>
      <option value="job">招聘</option>
    </select>
    <input class="title" placeholder="标题字数10字以上" type="text" v-model="title" />
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    ></quill-editor>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>

<script>
import axios from "axios";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";
export default {
  name: "app",
  data() {
    return {
      tab: "",
      title: "",
      content: "",
      editorOption: {}
      // 富文本编辑器的配置 添加删除某些功能
    };
  },
  components: {
    quillEditor
  },
  methods: {
    submit() {
      axios
        .post("https://www.vue-js.com/api/v1/topics", {
          tab: this.tab,
          title: this.title,
          content: this.content,
          accesstoken: sessionStorage.getItem("token")
        })
        .then(res => {
          this.tab = "";
          this.title = "";
          this.content = "";
          this.$router.push(`/topic/${res.data.topic_id}`);
        });
    },
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      // 当文本编辑器输入了内容的话同步修改  你自己的data  content
      console.log("editor change!", quill, html, text);
      this.content = html;
    }
  }
};
</script>

<style>
/* 文本编辑器 */
/* npm install vue-quill-editor quill */
select {
  width: 220px;
  background-color: #fff;
  border: 1px solid #ccc;
  height: 30px;
  border-radius: 4px;
  line-height: 30px;
  margin: 10px 0;
}
.el-button {
  padding: 6px 10px;
}
.title {
  width: 98%;
  padding: 4px 6px;
  resize: none;
  height: 20px;
  float: none;
  margin-left: 0;
  height: 30px;
  border-radius: 4px;
}
.ql-toolbar.ql-snow + .ql-container.ql-snow {
  height: 300px;
}
.cat {
  padding: 10px;
}
.cat-p {
  background-color: #f6f6f6;
  padding: 8px 4px;
}
</style>
