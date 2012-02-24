---
layout:     post
title:      Wordpress Custom Fileds
description:    在写文章的时候，底部有一个 Custom Fields 的功能。name 对应 post_meta 的 key ，value 就是 post_meta 的 value 了。
keywords: Wordpress, Custom Fileds, function, php
---
###简单应用

每一篇文章允许多个 key 和 value，要在 loop 循环里面输出。最简单的输出例子：
<pre class="html" name="colorcode">
    //需要在主循环里面
    &lt;?php the_meta(); ?&gt;
</pre>
随后输出的源代码为：
<pre class="html" name="colorcode">
    &lt;ul class="post-meta"&gt;
        &lt;li&gt;&lt;span class="post-meta-key"&gt;meta_key:&lt;/span&gt;meta_value&lt;/li&gt;
        &lt;li&gt;&lt;span class="post-meta-key"&gt;meta_key:&lt;/span&gt;meta_value&lt;/li&gt;
    &lt;/ul&gt;
</pre>
###深入理解

the_meta 方法提供的时输出到文章页面，那么我们要将传进来的 meta 值进行一些处理，
应该怎么办？很好，有一个 get_post_meta($post_id, $key, $single) 方法。

*   $post_id 是指这片文章的 ID ，用此可以标志 meta 的唯一性;
*   $key 是指你想要的 meta 值;
*   $single 提供的是布尔值 true 或者 false 。表示的是你的函数是否在文章 single 页面输出。

一般的使用方法：
<pre class="html" name="colorcode">
&lt;?php $key_1_values = get_post_meta(76, 'key_1'); ?&gt;
</pre>
或者：
<pre class="html" name="colorcode">
&lt;?php $key_1_values = get_post_meta(76, 'key_1', true); ?&gt;
</pre>
简单的循环应用：
<pre class="html" name="colorcode">
&lt;?php if ( get_post_meta($post-&gt;ID, 'thumb', true ) ) : ?&gt;
    &lt;?php echo get_post_meta($post-&gt;ID, 'thumb', ture); ?&gt;
&lt;?php endif; ?&gt;
</pre>

###其他函数
在正确的页面获取 key/value 值: 
<pre name="colorcode" class="html"> 
get_post_custom();
</pre>
获取所有的 key 名称：
<pre name="colorcode" class="html"> 
get_post_custom_keys();
</pre>
