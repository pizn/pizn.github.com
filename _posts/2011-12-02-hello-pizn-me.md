---
layout:     post
title:      GitHub pages 使用独立域名
description: 我的 github 博客使用新域名了！
keywords: pizn.me, GitHub, site
---
###GitHub Pages 使用独立域名

恩，今天为自己的 GitHub 博客更换了新域名 www.pizn.me 更换的方法很简单：

1, 在你的 github 项目主目录下创建 CNAME 文件，里面输入你的域名地址：
<pre class="js" name="colorcode">
例如: www.pizn.me
</pre>

2, 管理你的域名 ip 地址：

GitHub 提供的地址是：207.97.227.245

###关于 Blog Repo 的相关事宜

由于之前是直接在分支 gh-pages 上直接运行，所以根据 github pages 新建页面的一些路径限制，所以需要在源文件中加入 "/blog"，以解决路径读取不到的问题。主要有以下几个地方：

1, css 和 js 的链接地址 (_layouts/default.html)

2, 主页文章列表和分页 (index.html)

3, 文章列表页 (archives.html)

4, 配置文件 (_config.yml)

因为修改了路径的原因，原先的 pizn.github.com/blog 页面基本是空白的。链接页点不进取。

由于新域名的启用，可能给您带来麻烦，多多包含。

PS: 该 Blog 将换个新的模板主题，如果您很喜欢现在这个主题，请给我留言，我进一步完善她，独立成一个项目(pizn/blog)。
