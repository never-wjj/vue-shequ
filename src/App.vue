<template>
  <div>
    <Header />
    <div class="inner">
      <router-view></router-view>
    </div>
    <Foot />
  </div>
</template>

<script>
import Header from "./components/Header";
import Foot from "./components/Foot";
export default {
  name: "app",
  components: {
    Header,
    Foot
  }
};
</script>

<style>
.warp {
  background-color: #ccc;
  height: 100vh;
}
.inner {
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
}
</style>
