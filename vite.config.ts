import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import ElementPlus from 'unplugin-element-plus/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vitePluginImp from 'vite-plugin-imp'
import dts from 'vite-plugin-dts'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

export default defineConfig(({ command }) => {
  const isBuild = command === 'build'
  return {
    base: './',
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': '/src',
        'dialog-service': '/src/index.ts',
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      cssInjectedByJsPlugin(),
      VueSetupExtend(),
      !isBuild &&
        ElementPlus({
          useSource: false,
        }),
      // Components({
      //   dts: 'types/components.d.ts',
      //   resolvers: [ElementPlusResolver()],
      // }),
      vitePluginImp({
        libList: [
          {
            libName: 'lodash',
            libDirectory: '',
            camel2DashComponentName: false,
          },
        ],
        exclude: ['element-plus'],
      }),
      dts({
        outputDir: 'lib/types',
        beforeWriteFile: (filePath, content) => {
          filePath = filePath.replace(/(?<=types\\).*?(?=\\)/, '')
          return {
            filePath,
            content,
          }
        },
      }),
    ],
    build: {
      rollupOptions: {
        external: ['vue', 'element-plus'],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue',
          },
        },
      },
      sourcemap: true,
      // emptyOutDir: false,
      outDir: 'lib',
      // 常规打包
      lib: {
        entry: './src/index.ts',
        name: 'dialog-service',
        fileName: format => `dialog-service.js`,
        formats: ['es'],
      },
    },
    server: {
      port: 8080, // 指定端口号
      strictPort: false, // 设为 false 时，若端口已被占用则会尝试下一个可用端口,而不是直接退出
    },
  }
})
