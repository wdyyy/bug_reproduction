import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {
  AntDesignVueResolver,
} from 'unplugin-vue-components/resolvers'
// 将以下代码取消注释 - 1
import {
  themePreprocessorPlugin,
  themePreprocessorHmrPlugin
} from "@zougt/vite-plugin-theme-preprocessor";
import path from 'path'

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    },
  },
  plugins: [vue(),
  Components({
    resolvers: [
      AntDesignVueResolver({ importStyle: "less" })
    ],
  }),
  // 将以下代码取消注释 - 2
  themePreprocessorPlugin({
    less: {
      // Enable Dynamic theme mode.
      arbitraryMode: false,
      // Only one item of multipleScopeVars
      multipleScopeVars: [
        {
          scopeName: "theme-default",
          path: path.resolve("src/themes/theme-default.less"),
        },
        {
          scopeName: "theme-dark",
          path: path.resolve("src/themes/theme-dark.less")
        }
      ],
      defaultScopeName: "",
      extract: true,
      themeLinkTagId: "theme-link-tag",
      themeLinkTagInjectTo: "head",
      removeCssScopeName: false,
      includeStyleWithColors: [
        {
          color: "#ffffff",
        },
      ],
      customThemeCssFileName: (scopeName) => scopeName
    },
  }),
  themePreprocessorHmrPlugin(),
  ],
})
