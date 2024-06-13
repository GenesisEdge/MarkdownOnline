import MagicString from "magic-string"

function transformImportPlugin() {
  return {
    name: "vite-plugin-transform-import",
    async transform(code, id) {
      if (id.endsWith("App.tsx")) {
        const ast = this.parse(code, {
          sourceType: "module",
          plugins: ["typescript", "jsx"],
        })

        const magicString = new MagicString(code)

        let hasImportModule = false
        let lastImportEnd = 0

        // 检查是否已经导入了 importModule
        for (const node of ast.body) {
          if (node.type === "ImportDeclaration") {
            lastImportEnd = node.end
            console.log(node.source.value)
            if (node.source.value === "@App/import/importModule") {
              hasImportModule = true
              console.log(true);
              break
            }
          }
        }

        // 添加 importModule 导入语句（如果不存在）
        if (!hasImportModule) {
          const importModuleCode = `import importModule from "@App/import/importModule";`
          magicString.prepend(importModuleCode)
        }

        // 处理其他导入语句
        for (const node of ast.body) {
          if (
            node.type === "ImportDeclaration" &&
            node.source.value === "bigonion-kit"
          ) {
            const specifiers = node.specifiers
            for (const specifier of specifiers) {
              if (specifier.type === "ImportDefaultSpecifier") {
                const importStart = node.start
                const importEnd = node.end
                const importName = specifier.local.name

                const newCode = `
const ${importName} = await importModule([
  "https://cdn.jsdmirror.com/npm/bigonion-kit@0.12.3/esm/kit.min.js", 
  "https://cdn.jsdmirror.com/npm/bigonion-kit@0.12.3/esm/kit.min.js"
]);`

                magicString.overwrite(importStart, importEnd, newCode)
              }
            }
          }
        }

        return {
          code: magicString.toString(),
          map: magicString.generateMap({ hires: true }), // 生成 source map
        }
      }
      return code
    },
  }
}

export default transformImportPlugin
