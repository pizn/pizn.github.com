---
layout: post
title: 搭建 Jekyll 博客的一些小技巧
description: 也许你已经懂得如何使用 Jekyll 搭建一个简单的博客了，是不是很有趣呢？恩，在这里将会分享一些小技巧，能更好地组织你的 Jekyll 博客。
keywords: Jekyll, blog, 博客, YAML, include, layout, aside
---

在搭建 <strong>PIZn.Me</strong> 的时候，我就尝试更好地规划自己的这个 <strong>Jekyll</strong> 博客。回过头来，总结了几点个人觉得有用的小技巧，希望对 <strong>Jekyll</strong> 爱好者有所帮助，也欢迎一起学习讨论。

###一、使用 include 拆分你的页面结构

先为你的博客建立 <code class="v-code">_includes</code> 文件夹。

我们的博客布局，一般是上，中，下布局，在 _layouts 中，我们会使用<code
class="v-code">{\{ content }\}</code> 读取中间这部分的内容。而中间这部分，又可以
分为左右布局，假如我们的侧边栏命名为 aside ，我们可以通过<code class="v-code">{\% include aside.html %\}</code>的方式来读取我们设置在 include 文件夹里面的文件。

在我的博客中，我将侧边栏 aside 用 include 的方式抽取出来，然后在 aside 里面，又抽出了 repost，face, follow 等几个小挂件。

###二、YAML 的广泛使用

<a href="http://yaml.org/" targt="_blank" rel="nofollow" title="YAML">YAML</a>是 Jekyll 的一个重要组成部分。 <strong>YAML</strong> 是一种直观的能够被电脑识别的的数据数据序列化格式，他并且容易被人类阅读，容易和脚本语言交互的。

用我自己的理解，我将它理解为一些可自定义的 "钩子"，在 Jekyll 博客中的文件头部的一个 "区块" 。使用在 _confiy.yml 配置文件中，在每一篇 post 中，在每一个静态页面中。

例如下面的代码片段：
<pre class="html" name="colorcode">
name: PIZn
age: 24
school:
    name: GDUT
    address: GuangZhou
follow me:
    - github
    - twitter
    - weibo
</pre>

###三、为特定的页面配置特定的内容

首先说下为什么要这样做。

由于我的博客有几个页面（指的是区别与文章页面的介绍页面，例如category，plugin，contact等），每个页面都可以参照第一点来 "拆"。页面的头部，底部都是公用的，写在 defalt.html 里面。每个不同的页面有不同的展现方式，在通过<code class="v-code">include</code> "聚" 回来的时候，就会发现一个 defalut.html是不够的，因为侧边栏不同呀，页面展示效果不用呀等多种原因（虽然你可以确保风格一致）。

其次，寻求解决的方法。

恩，你可以很愉快地在 _layouts 里面添加尽可能多的不同的布局。但那样管理和组织起来比较麻烦。

所以你可以使用 YAML 为你的页面添加特定的 "钩子"，然后在 default.html 页面通过判断来输出相对的内容。例如我在 contact.html 页面写上这样的钩子<code class="v-code">isContact: true</code>，然后我在为 contact 页面配置侧边栏的时候，我可以为其配置特定的内容，例如通过下面的代码配置出我的相片：
<pre class="html" name="colorcode">
//为了避免代码被编译，我在这里的 Jekyll 语法中间加上反斜干
{\% if(page.isContact) %\}
    &lt;section class="violet-photo"&gt;
        &lt;img src="xxxx.jpg" alt="xxx" /&gt;
    &lt;/section&gt;
{\% else %\}
    &lt;p&gt;No Photo&lt;p&gt;
{\% endif %\}
</pre>

其实就是这么简单，通过判断为真，来为特定的页面配置特定的内容。

###四、为文章详细页添加最新文章列表，但不包括本文章

假如您不明白这个小标题的意思，请看这个页面的侧边栏。是不是没有这篇文章的链接呢？

输出博客文章列表一般可以使用这个语句<code class="v-code">for post in site.posts limit:6</code>，这里的<code class="v-code">site.posts</code>是重点，它会遍历站点里面的所有文章，然后输出。

但换了个场景，我们在文章详细页面，本来这个页面已经在看了，再次输出该页面的链接，是否就没有意义？所以还可以使用<code class="v-code">site.related_posts</code>来输出。这样会过滤掉当前的文章。

###五、用好你的 config.yml

在博客根目录下的<code class="v-code">config.yml</code>配置文件，其实可以帮我们做很多有意义的事情，主要是最初的配置，还有定义全局的数据。

默认的配置文件里面的内容最好不要改动，在使用插件的时候，假如你将<code class="v-code">safe</code>设置为<code class="v-code">true</code>，那么可能你的插件就无法完成正常的任务。

但有些还是需要自定义的，例如<code class="v-code">permalink</code>，用来自定义url的格式，这对固定链接有重要作用。我们也可以定义全局 title, url, feed, description等。最终都会以<code class="v-code">site.xxx</code>来调用。

###六、灵活地为页面配置 CSS 和 Javascript

我们的 Jekyll 博客，可能有很多不同的页面，展现、交互等形式都可能不同。那么，我们除了可以通过第三点讲过的 ”钩子" 方法来达到目的之外，还有另外的一种方法，为我们的页面配置不同的 CSS 和 Javascript 。

首先，在 default.html 页面的头部和底部写上另一种形式的 “钩子“。如下：
<pre class="html" name="colorcode">
//一般，我们将 CSS 放在头部
{\% for css in page.css %\}
	&lt;link rel="stylesheet" href="{\{ css }\}" type="text/css" /&gt;
{\% endfor %\}

//一般，我们将 Javascript 放在底部
{\% for js in page.javascript %\}
	&lt;script type="text/javascript" src="{\{ js }\}" &gt;&lt;/script&gt;
{\% endfor %\}
</pre>

其次，在我们的特定页面，在文件的头部 YAML 部分添加属于该页面的 CSS 或者 Javascript 链接。
<pre class="html" name="colorcode">
javascript:
	- /javascript/jquery.js
	- /javascript/violet.js
</pre>

###七、其他

假如你有其他更好的小技巧，一起分享哈！
