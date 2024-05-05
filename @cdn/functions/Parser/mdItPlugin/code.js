import { getTheme } from "@App/config/change";
import hljs from "@cdn-hljs";
const copyButtonStyle = `position: relative;
top: 31px;
left: 88%;`;
// function copyText(text: string) {
//   navigator.clipboard
//     .writeText(text)
//     .then(() => {
//       console.log("已复制到剪贴板")
//     })
//     .catch(() => {
//       const e = document.createElement("textarea")
//       document.body.appendChild(e)
//       e.innerHTML = text
//       e.select()
//       if (document.execCommand("copy")) {
//         document.execCommand("copy")
//       }
//       document.body.removeChild(e)
//       console.log("复制成功")
//     })
// }
let codePlugin = function (md) {
    const oldRender = md.renderer.rules.code_block;
    md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        // console.log(tokens.length,idx)
        let line;
        if (tokens[idx].map && tokens[idx].level === 0) {
            line = tokens[idx].map[0];
            tokens[idx].attrSet("data-line", String(line));
        }
        let language = tokens[idx].info;
        let content = tokens[idx].content;
        if (language === "mermaid") {
            if (env.mermaidParsedArr) {
                return `<div data-line="${line}" class="language-mermaid language-plaintext">
        ${env.mermaidParsedArr[env.mermaidSeq++]}
        </div>`;
            }
        }
        else if (hljs.getLanguage(language)) {
            return `<pre data-line="${line}"><code class="language-${language} ${getTheme() === "light" ? "" : "hljs-dark"}">${content}</code></pre>`;
        }
        else {
            return `<div class="code-container" data-line="${line}">
      <pre><code class="language-plaintext">${content}</code></pre>
    </div>`;
        }
        // 使用老的渲染函数来渲染图片
        return oldRender(tokens, idx, options, env, self);
    };
};
export { codePlugin };
// <div id="markdown-it-code-button">${ButtonComponent}</div>