---
layout: post
title: 使用 PNG 图片制作动态 Loading
description: 使用 CSS3 和 PNG 图片实现 GIF Loading 效果。
keywords: CSS3,PNG,Loading
---

曾经遇到过在一个 GIF 图片里面制作一个半透明的 Loading，无论怎么折腾，总有锯齿，非常不好处理。最后无奈地使用了非半透明的“菊花”，视觉有所降级。

其实如果不兼容 IE 的话，还是可以使用 CSS3 + PNG 图片完成这个动态的 GIF Loading 的。具体效果见 <a href="http://pizn.github.io/demo/loading.html" target="_blank" title="demo">DEMO</a>。

实现的方法和代码如下：

<pre name="colorcode" class="css">
#loading {
     width: 36px;
     height: 36px;
     position: absolute;
     top: 50%;
     left: 50%;
     margin: -18px 0 0 -18px;
     text-indent: -9999em;
     overflow: hidden;
     /** loading 图片地址 **/
     background: url(loading.png) no-repeat 0 0;
     /** webkit **/
     -webkit-animation-name: loadRotate;
     -webkit-animation-duration: 1s;
     -webkit-animation-iteration-count: infinite;
     -webkit-animation-timing-function: linear;
     /** firefox **/ 
     -moz-animation-name: loadRotate;
     -moz-animation-duration: 1s;
     -moz-animation-iteration-count: infinite;
     -moz-animation-timing-function: linear;
     /** w3c **/
     animation-name: loadRotate;
     animation-duration: 1s;
     animation-iteration-count: infinite;
     animation-timing-function: linear;
 }
 /** webkit **/
 @-webkit-keyframes loadRotate {
     from {
         -webkit-transform:rotate(0deg);
     }
     25% {

     }
     to {
         -webkit-transform:rotate(360deg);
     }
 }
 /** firefox **/
 @-moz-keyframes loadRotate {
     from {
         -moz-transform:rotate(0deg);
     }
     to {
         -moz-transform:rotate(360deg);
     }

 }
 /** w3c **/
 @keyframes loadRotate {
     form {
         transform: rotate(0deg);
     }
     to {
         transform: rotate(360deg);
     }
 }
</pre>

HTML 代码如下：
<pre class="html" name="colorcode">
&lt;p id="loading"&gt;Loading&lt;/p&gt;
</pre>

恩，这样就 OK 了。

后话：Loading 的“菊花”样式，有一个 JS 可以实现，就是 <a href="http://fgnass.github.com/spin.js/" title="spin.js" target="_blank">spin.js</a>，也能兼容 IE 。但其兼容 IE 的方式是使用滤镜，对性能有所影响。
