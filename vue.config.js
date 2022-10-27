const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            blue: '#fb7299',
            'nav-bar-background-color': '#fb7299',
            'nav-bar-title-text-color': '#fff',
            'nav-bar-text-color': '#fff'
          }
        }
      }
    }
  }
})
