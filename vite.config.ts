import { defineConfig } from "vite"
import viteCompression from "vite-plugin-compression"
import react from "@vitejs/plugin-react"
import cdn from "vite-plugin-cdn-import"
import { viteExternalsPlugin } from "vite-plugin-externals"
import { resolve } from "path"
export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      // 配置rollup的一些构建策略
      external: [
        "react",
        "react-dom",
        "markdown-it-incremental-dom",
        "IncrementalDOM",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "markdown-it-incremental-dom": "markdownitIncrementalDOM",
          "incremental-dom": "IncrementalDOM",
        },
        // 控制输出
        // 在rollup里面, hash代表将你的文件名和文件内容进行组合计算得来的结果
        assetFileNames: "[hash].[name].[ext]",
        manualChunks(id) {
          if (id.includes("style.css")) {
            // 需要单独分割那些资源 就写判断逻辑就行
            return "src/style.css"
          }
          // // 最小化拆分包
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString()
          }
        },
      },
    },
    assetsInlineLimit: 4096000, // 4000kb  超过会以base64字符串显示
    outDir: "docs", // 输出名称
    assetsDir: "static", // 静态资源目录
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  resolve: {
    alias: {
      "react-photo-view":
        "https://cdn.jsdmirror.com/gh/LiWeny16/MarkdownOnline@V2.1.3/@cdn/lib/react-photo-view/react-photo-view.module.js",
      "@arco-design/web-react":
        "https://cdn.jsdmirror.com/npm/@arco-design/web-react@2.62.0/+esm",
      "@cdn-emoji-data":
        "https://cdn.jsdmirror.com/npm/@emoji-mart/data@1.2.1/+esm",
      "@cdn-Readme":
        "https://cdn.jsdmirror.com/gh/LiWeny16/MarkdownOnline@V2.1.1/README.md",
      "@cdn-indexedDb-lib":
        "https://cdn.jsdmirror.com/gh/LiWeny16/MarkdownOnline@V2.1.1/@cdn/functions/App/db.min.js",
      "@cdn-latex-map":
        "https://cdn.jsdmirror.com/gh/LiWeny16/MarkdownOnline@main/@cdn/functions/Monaco/snippets/latexRules.min.js",
      "markdown-it": "https://cdn.jsdmirror.com/npm/markdown-it@8.4.2/+esm",
      "markdown-it-emoji":
        "https://cdn.jsdmirror.com/npm/markdown-it-emoji@3.0.0/+esm",
      "markdown-it-footnote":
        "https://cdn.jsdmirror.com/npm/markdown-it-footnote@4.0.0/+esm",
      "markdown-it-multimd-table":
        "https://cdn.jsdmirror.com/npm/markdown-it-multimd-table@4.2.3/+esm",
      "markdown-it-task-lists":
        "https://cdn.jsdmirror.com/npm/@hackmd/markdown-it-task-lists@2.1.4/+esm",
      "markdown-it-github-toc":
        "https://cdn.jsdmirror.com/npm/markdown-it-github-toc@3.2.4/src/index.js/+esm",
      "@emoji-mart/data":
        "https://cdn.jsdmirror.com/npm/@emoji-mart/data@1.1.2/+esm",
      "emoji-mart": "https://cdn.jsdmirror.com/npm/emoji-mart@5.6.0/+esm",
      gsap: "https://cdn.jsdmirror.com/npm/gsap@3.12.5/+esm",
      "@cdn-emojilib": "https://cdn.jsdmirror.com/npm/emojilib@3.0.11/+esm",
      "@cdn-prettier": "https://cdn.jsdmirror.com/npm/prettier@3.2.4/+esm",
      "@cdn-prettier-plugins-markdown":
        "https://cdn.jsdmirror.com/npm/prettier@3.2.4/plugins/markdown.js/+esm",
      vconsole: "https://cdn.jsdmirror.com/npm/vconsole@3.15.1/+esm",
      "string-replace-async":
        "https://cdn.jsdmirror.com/npm/string-replace-async@3.0.2/index.min.js",
      html2canvas: "https://cdn.jsdmirror.com/npm/html2canvas@1.4.1/+esm",
      mobx: "https://cdn.jsdmirror.com/npm/mobx@6.12.0/+esm",
      // "mobx-react-lite":"https://cdn.jsdelivr.net/npm/mobx-react-lite@4.0.7/dist/mobxreactlite.esm.js",
      // "mobx-react":"https://cdn.jsdmirror.com/npm/mobx-react@9.1.1/dist/mobxreact.esm.js",
      axios: "https://cdn.jsdmirror.com/npm/axios@1.6.5/+esm",
      "@cdn-node-emoji": "https://cdn.jsdmirror.com/npm/node-emoji@2.1.3/+esm",
      "@cdn-marked": "https://npm.elemecdn.com/marked/lib/marked.esm.js",
      mermaid:
        "https://cdn.jsdmirror.com/npm/mermaid@10/dist/mermaid.esm.min.mjs",
      "@cdn-mermaid":
        "https://cdn.jsdmirror.com/npm/mermaid@10/dist/mermaid.esm.min.mjs",
      "bigonion-kit":
        "https://cdn.jsdmirror.com/npm/bigonion-kit@0.12.3/esm/kit.min.js",
      "@cdn-kit":
        "https://cdn.jsdmirror.com/npm/bigonion-kit@0.12.3/esm/kit.min.js",
      "@cdn-hljs":
        "https://npm.elemecdn.com/@highlightjs/cdn-assets@11.6.0/es/highlight.min.js",
      "@cdn-katex": "https://npm.elemecdn.com/katex@0.16.7/dist/katex.min.js",
      "@Asset": resolve(__dirname, "./src/assets"),
      "@App": resolve(__dirname, "./src/js/functions/App/"),
      "@Func": resolve(__dirname, "./src/js/functions"),
      "@Root": resolve(__dirname, "./src/"),
      "@Com": resolve(__dirname, "./src/js/React/Components"),
      "@Mobx": resolve(__dirname, "./src/js/React/Mobx"),
      "@Css": resolve(__dirname, "./src/css"),
      "@Plugins": resolve(__dirname, "./src/js/functions/Plugins"),
      // "@arco-design/web-react":"https://cdn.jsdmirror.com/npm/@arco-design/web-react@2.59.0/dist/arco.min.js"
      // "mobx":"https://cdn.jsdmirror.com/npm/mobx-react@9.1.0/dist/mobxreact.esm.js"
    },
  },
  server: {
    host: "0.0.0.0",
  },

  plugins: [
    viteCompression({
      threshold: 16000, // 对大于 32kb 的文件进行压缩
    }),
    viteExternalsPlugin({
      react: "React",
      "react-dom": "ReactDOM",
      "markdown-it-incremental-dom": "markdownitIncrementalDOM",
      "incremental-dom": "IncrementalDOM",
      // "@mui/material": "MaterialUI",
    }),
    [react({ jsxRuntime: "classic" })],
  ],
})
