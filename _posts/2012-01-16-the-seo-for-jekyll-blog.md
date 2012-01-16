---
layout: post
title: Jekyll SEO 技巧
description: 在使用 Jekyll 搭建个人博客的时候，将 SEO 优化的细节融入到博客主题中，有利于搜索引擎的对站点内容的抓取，为您的网站带来有价值的流量。本文将为你分享一些 Jekyll SEO 技巧。
keywords: Jekyll, SEO, title, blog, site, google, violet, GitHub, 搜索引擎, 标题, 关键字, 描述, description
---
很多时候，我们搭建了一个博客，但很少有人来访问。一方面可能是因为我们没有做好推广，另外一方面可能是我们没做好 <strong>SEO</strong> 。在使用<strong>Jekyll<strong> 搭建这个博客的时候，我将 <strong>SEO</strong> 的一些优化点融入到<strong>Violet</strong> 主题中来。经过一段时间的测试和观察，期望的效果已经达到。

虽然我不是 SEO 高手，但喜欢折腾。通过对 SEO 的学习和实践，我希望能将好的文章让更多人知道，并通过 Jekyll 实现。本文将为你分享一些 Jekyll SEO 技巧。

###优化博客标题及副标题

<strong博客标题</strong>，即站点的名称。它能够使访问者在第一时间知道所在的是什么网站，是站点的重要标识。副标题，它与博客主题并不一样，它能为博客标题做一些描述，一些优化性。通常，我都会为站点的主标题设置 <code>h1</code> 标签，为副主题设置 <code>h2</code> 标签。

###优化页面标题

在之前一直使用这样的标题方式 "xxx | PIZn", 本来还觉得挺好的，既有博客名称，又有页面标题。但后来查看搜索引擎的显示结果，基本上每个链接的标题里面，也就有了多余的 "| PIZn" 了。

有人说这样好，也有人说这样不好。这次我决定砍掉后面的博客名称，让标题来的简洁些，让标题与内容的权重比更高一些。

具体的实现方法如下：

<pre class="html" name="colorcode">
    &lt;title&gt;
        {% if page.title %}
            {{ page.title }} //显示页面标题
        {% else %}
            {{ site.title }} //显示博客标题
        {% endif %}
    &lt;/title&gt;
</pre>
