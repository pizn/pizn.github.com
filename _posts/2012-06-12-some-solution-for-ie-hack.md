---
layout: post
title: 几个 IE 样式解决方案
description: CSS 写多了，就发现做兼容性是个大问题。IE 浏览器的兼容总让人头疼，这里简单分享几个工作笔记。
keywords: IE, Hack IE, CSS Solution, Iframe, background, shadow, flash, script
---

这篇文章将会记录一些 IE 兼容性的解决方案。忙碌的时候，做个笔记。稍空的时候，记录下来。随着学习经验的积累，这就是财富。

###一，IE 背景穿透解决方案（空路径)

有时候，为了给页面的某一个元素设置一个空的背景，那么不去设置<code class="v-code">background</code>属性，恰巧这个元素有交互效果，要么是<code class="v-code">mouseover</code>， 要么是<code class="v-code">mouseout</code>。而在 IE 下，会导致该元素没有出发交互动作。或者说是穿透到了下一个元素中去。

这样的案例，经常发生在一些有小三角型的**tips**里面。于是，我通常的解决方法如下：

<pre class="css" name="colorcode">
.sl-through {
	*background: url(about:blank);      	/* for IE 6-7 */
	background: url(about:blank)\0;			/* for IE 8 */
}
:root .sl-through background:rgba(0,0,0,0); /* for IE 9 */
</pre>


###二，Iframe 背景半透明解决方法

先说一下透明的通用解决方法，例如使用<code class="v-code">Opacity</code>来为一个<code class="v-code">div</code>层做半透明，其实不是很建议，因为这个元素的子元素会继承半透明的属性。解决了半透明问题，结果又得处理文字上的不透明问题。

通常的解决方法是通过<code class="v-code">ruba</code>(高级浏览器)和<code class="v-code">渐变滤镜</code>(IE浏览器)做一个层的透明解决方案：

<pre class="css" name="colorcode">
/*
 * filter 中的 StartColorStr 和 EndColorStr:
 *    #4c000000 是 30% 透明度的 #000000 的意思
 *    组成: # + 透明度 + 颜色
 *    算法: Math.floor(0.6 * 255).toString(16);
 */
.sl-rgba{
    background:rgba(0, 0, 0, 0.3);	/* 支持高级浏览器 */
    filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#4c000000', EndColorStr='#4c000000'); /* for IE */
}
:root .rgba{
    filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#00000000', EndColorStr='#00000000'); /* for IE9 */ 
}
</pre>

以上解决的只是一个页面里面的半透明解决方案，解下来说为一个页面里的**Iframe**做半透明。

**Iframe**里面的样式控制：

<pre class="css" name="colorcode">
html, body { background: none; }
</pre>

父页面的**Iframe**需要添加一个属性：<code class="v-code">allowTransparency='true'</code>，这样就可以解决**iframe**的半透明问题。


###三，IE8 下使用滤镜效果与 a 标签兼容问题

如上文的半透明解决方案，使用了**IE**的滤镜来解决半透明问题。但**IE**滤镜的使用，在**IE8**下，有时候会导致子元素里面的 **a** 标签链接没有<code class="v-code">a:hover</code>效果。

举个例子，为一个<code class="v-code">div</code>层做个阴影，使用了滤镜。那么，需要对**a**标签增加一个属性<code class="v-code">position: relative</code>。

###四，投影问题

在 <a href="http://www.aliceui.com" target="_blank" title="aliceui">Aliceui</a> 中，我们罗列出了一些解决方案，例如跨浏览器背景阴影，就很好地解决了阴影问题。现更新如下：

<pre class="css" name="colorcode">
.sl-shadow {
	/* modern web browsers */
	-moz-box-shadow:1px 3px 12px #bbb;
	-webkit-box-shadow:1px 3px 12px #bbb;
	box-shadow:1px 3px 12px #bbb;

	/* 一定要设置background, 不然 ie 会显示在字体上 */
	background: #fff;

	/* gte=ie8 */
	-ms-filter:"progid:DXImageTransform.Microsoft.Glow(color=#aaaaaa,strength=3) progid:DXImageTransform.Microsoft.Shadow(color=#eeeeee,direction=0,strength=6) progid:DXImageTransform.Microsoft.Shadow(color=#dddddd,direction=90,strength=10) progid:DXImageTransform.Microsoft.Shadow(color=#dddddd,direction=180,strength=6) progid:DXImageTransform.Microsoft.Shadow(color=#eeeeee,direction=270,strength=6)";

	/* lte=ie7 */
	*filter:
    progid:DXImageTransform.Microsoft.Shadow(color=#eeeeee,direction=0,strength=7)
    progid:DXImageTransform.Microsoft.Shadow(color=#dddddd,direction=90,strength=10)
    progid:DXImageTransform.Microsoft.Shadow(color=#dddddd,direction=180,strength=10)
    progid:DXImageTransform.Microsoft.Shadow(color=#eeeeee,direction=270,strength=7);
}
:root .sl-shadow { filter:none\9; }  /* IE9 不使用滤镜 */
.sl-shadow a { position: relative; } /* 解决上文所说的 a:hover 问题 */
</pre>

###五，IE 下未安装 flash 引起页面的白屏等待状态

这里简单带过，在没有安装**flash**的机器上运行有<code class="v-code">object</code>的代码时，**IE**里面会导致页面停留在加载**flash**安装文件的进程上，直到浏览器下载完毕再渲染接下来的**DOM**结构。

经过排查，这样的情况会导致页面刷新白屏加载一段时间：

1, 机器未安装**flash**，页面有**flash**相关代码
	
2, <code class="v-code">object</code> 代码与下一个**DOM**结构之间存在<code class="v-code">script</code>标签。
	
初步原因分析：没有安装**flash**的机器，渲染页面的时候，会请求**flash**网站，发送回来安装文件。这时候在**IE**下如果有<code class="v-code">script</code>标签，浏览器可能会误认为这段脚本即将使用**flash**，或者进行通讯。于是必须执行。这导致的结果就是必须得等安装文件加载好，才去渲染页面。就有白屏了。

解决方法：将<code class="v-code">script</code>标签包在<code class="v-code">div</code>里面，或者移到最底端。

##六、IE6 最小高度控制

我们在定义一个页面的时候，或许会给这个页面一个最小的高度，通常很简单<code class="v-code">min-height: 500px;</code>，这样就可以解决很多浏览器。但是 IE6 不认这个。好吧，简单把代码贴下，定一个高度为 520px 的容器：

<pre class="css" name="colorcode">
.sl-minheight {
    height: auto !important;
    _height: 520px;
    min-height: 520px;
	_overflow: visible;
}
</pre>

##七、其他

**a** 链接的空路径，有时候在思考是使用 <code class="v-code">javascript:void(0);</code>，还是<code class="v-code">javascript:;</code>, 其实在有**Iframe**的页面，这两种写法在**IE6**下，触发事件都会阻塞页面的渲染进程的。所以使用<code class="v-code">#</code>会更好。

日后更多积累，再补充。(2012.06.12)





