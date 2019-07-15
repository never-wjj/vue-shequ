module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-shequ/" : "/",
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: []
      }
    }
  },
  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: false
    }
  }
};
