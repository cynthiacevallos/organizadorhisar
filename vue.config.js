const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  runtimeCompiler: true,
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
