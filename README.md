# self-prep-exam-web

# 应试智能 英文名YingshiAI

该网站用于展示markdown的笔记。
网站包含一个邮箱登录页面，一个笔记展示页面。用户必须先进行邮箱登录，才能看到里面的笔记。该邮箱登录功能使用superbase免费版实现
技术栈：**React + Vite**；公式用 `react-markdown` + `remark-math` + `rehype-katex`（KaTeX 引擎）。

## 新增笔记的方法

1. 在 `public/notes/` 里新建一个文件夹（文件夹名 = 侧边栏标题）。
2. 把 `.md` 和它用到的图片**放进同一个文件夹**。图片在 `.md` 里直接写文件名即可，
3. 使用GitHub desktop同步至你的部署服务器
4. 重新部署，界面上就有新的笔记了
