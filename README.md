# BUI+Express+ejs模板的示例工程



## 工程说明

当前工程为 Express + ejs + BUI 实现 UI组件化的开发方式。

src: 静态文件及组件都应该放这里，`npm run build` 或者 `npm run dev` 会把里面的文件，编译到 public 目录（原本express的静态文件目录）。

其它目录遵循 express 目录规范就行。

app.json 文件会自动生成 distServer 和 devServer 的port， 这个端口如果有，以有为准，没有则随机生成一次，避免多个工程端口错乱问题。

```bash
# 安装依赖
npm i
# 编译一遍
npm run build
# 运行服务，实时编译src/ 里的组件。
npm run dev
```
