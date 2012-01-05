---
layout:         post
title:          mac 下 xampp 的安全设置
description:    xampp 在 mac 上的安全设置是需要手动设置的，这里为你介绍如何设置。
keywords: mac, xampp, security
---
很早之前使用 xampp 是在 win 下面的，很多功能基本都是默认设置好的。今儿在 Mac 下
安装个 xampp ，随后遇到这样一个问题：
<pre class="js" name="colorcode">
The MySQL administrator has no password.
The MySQL daemon is accessible via network.
</pre>
默认的 MySQL 是没有设置密码的。恩，这点对于安全性来说很不好。

于是寻找解决的方法：

在终端下面执行这样的一句话：
<pre class="js" name="colorcode">
sudo /Applications/XAMPP/xamppfiles/xampp security
</pre>
接着会提示着询问你是否输入密码，进而设置好你的 MySQL 安全性，还有 apache 密码，
ftp 密码等。

