---
layout:         post
title:          Hello Node.js
description:    Node.js 的应用已经很广泛了，今天小试了下。
keywords: node.js
---
在这里记下第一个 node.js
<pre name="colorcode" class="js">
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type' : 'text/plain' });
    res.end('Hello Node.js\n');
}).listen(8822, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8822/');
</pre>

接着，在终端输入:
<pre name="colorcode" class="js">
node hello_node.js
server running at http://127.0.0.1:8822/
</pre>

最后到浏览器输入上面的路径，就可以看到了。恭喜恭喜。

