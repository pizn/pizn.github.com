---
layout: post
title: 为 Jekyll 博客添加 category 分类
description: Jelyll 搭建起来的博客系统，本身就具备了 category 的功能，为了更好地将 category 页面展示出来，我们能做到的方法有很多，例如使用插件。本文为您分享如何为你的博客添加分类。
keywords: Jekyll, category, blog, 分类, plugins
category: Jekyll
---

为了深化 <strong>Jekyll</strong> 博客里面的内联关系，我们通常会对一篇文章进行分类，贴标签等，这样能做到文章的更好的区分和快速查找到相关文章。

假如您也想在你的博客上实现这样的效果（如右图）, 请看下文。

<img src="/resources/category-list.jpg" alt="categroy list" class="img-right">

在某些地方，例如文章页面，你可能希望在侧边栏添加这样的功能。有一个分类目录，还能显示出分类文章的篇数。

###一、为文章添加分类

在编辑一篇文章的时候，我们会在文章的头部写上一些 key 值, 同样的道理，我们可以为
这篇文章添加上 category 来分类。
<pre class="html" name="colorcode">
---
layout: post
title: 为 Jekyll 博客添加 category 分类
category: Jekyll
---
</pre>

###二、添加分类功能到你希望它出现的地方

在这里，你只需要把下面的代码拷贝到你的博客中，就能看到你添加的文章出现的分类了。
<pre class="html" name="colorcode">
&lt;h4&gt;Category&lt;/h4&gt;
&lt;ul&gt;
    //这里使用了 Jekyll 语法，会被编译，所以加多个"\"
    {\% for category in site.categories %\}
    &lt;li&gt;&lt;a href="/categories/{\{ category | first }\}/" title="view all
posts"&gt;{\{ category | first }\} {\{ category | last | size }\}&lt;/a&gt;
    &lt;/li&gt;
    {\% endfor %\}
</pre>

###三、为博客添加 category 插件

添加 category 插件很简单，只要在根目录下建立一个 "_plugins" 文件夹，然后拷贝
category_plugin.rb (该文件在我的文件中的 _plugins 目录下) 文件到里面就好了。

这个插件的作用有两点：

* 建立 categories 文件夹, 遍历所有文章的分类，再根据分类建立分类的文件夹。
* 为每个分类建立一个 index.html 文件, 该文件的模板来自 _layouts 里面的 category_index.html，因此您需要在 _layouts 里面添加符合自己博客主题的文件。

###四、添加 category_index.html 模板

这个模板是为了将我们的分类主页显示出来，显示的内容是一个分类的所有文章。也就是分
类列表的链接地址。具体使用到的代码如下：

