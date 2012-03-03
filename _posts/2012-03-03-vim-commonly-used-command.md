---
layout: post
title: Vim 常用命令总结
description: 使用 Vim 作为主要的编辑器，使我的工作效率提高了不少。这篇文章对 Vim 的一些常用命令做了简单总结。
keywords: Vim, command, 常用命令
---

使用 <strong>Vim</strong> 的时间不长，但如今已经离不开熟悉的 <strong>Vim</strong> 编辑模式了。 <strong>Vim</strong> 的学习曲线是非常陡的，一开始学习的时候，面对很多的操作命令要去记住，常常望而却步。

其实，只要记住一些常用的命令，加之在工作中坚持使用 <strong>Vim</strong> 进行编辑，很快就能得心应手了。

###光标移动(Cursor Movement)
<table width="100%">
	<tbody >
		<tr>
			<th width="20%">命令</th>
			<th width="80%">作用（解释）</th>
		</tr>
		<tr>
			<td><code class="v-code">h,j,k,l</code></td>
			<td><code class="v-code">h</code>表示往左，<code class="v-code">j</code>表示往下，<code class="v-code">k</code>表示往右，<code class="v-code">l</code>表示往上</td>
		</tr>
		<tr>
			<td><code class="v-code">Ctrl</code>+<code class="v-code">f</code></td>
			<td>上一页</td>
		</tr>
		<tr>
			<td><code class="v-code">Ctrl</code>+<code class="v-code">b</code></td>
			<td>下一页</td>
		</tr>
		<tr>
			<td><code class="v-code">w</code>, <code class="v-code">e</code>, <code class="v-code">W</code>, <code class="v-code">E</code></td>
			<td>跳到单词的后面，小写包括标点</td>
		</tr>
		<tr>
			<td><code class="v-code">b</code>, <code class="v-code">B</code></td>
			<td>以单词为单位往前跳动光标，小写包含标点</td>
		</tr>
		<tr>
			<td><code class="v-code">O</code></td>
			<td>开启新的一行</td>
		</tr>
		<tr>
			<td><code class="v-code">^</code></td>
			<td>一行的开始</td>
		</tr>
		<tr>
			<td><code class="v-code">$</code></td>
			<td>一行的结尾</td>
		</tr>
		<tr>
			<td><code class="v-code">gg</code></td>
			<td>文档的第一行</td>
		</tr>
		<tr>
			<td><code class="v-code">[N]G</code></td>
			<td>文档的第N行或者最后一行</td>
		</tr>
	</tbody>
</table>

###插入模式(Insert Mode)
<table width="100%">
	<tbody>
		<tr>
			<th width="20%">命令</th>
			<th width="80%">作用（解释)</th>
		</tr>
		<tr>
			<td>
				<code class="v-code">i</code>
			</td>
			<td>插入到光标前面</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">I</code>
			</td>
			<td>插入到行的开始位置</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">a</code>
			</td>
			<td>插入到光标的后面</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">A</code>
			</td>
			<td>插入到行的最后位置</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">o</code>, <code class="v-code">O</code>
			</td>
			<td>新开一行</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">Esc</code>
			</td>
			<td>关闭插入模式</td>
		</tr>
	</tbody>
</table>

###编辑(Editing)
<table width="100%">
	<tbody>
		<tr>
			<th width="20%">命令</th>
			<th width="80%">作用（解释）</th>
		</tr>
		<tr>
			<td>
				<code class="v-code">r</code>
			</td>
			<td>在插入模式替换光标所在的一个字符</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">J</code>
			</td>
			<td>合并下一行到上一行</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">s</code>
			</td>
			<td>删除光标所在的一个字符, 光标还在当行</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">S</code>
			</td>
			<td>删除光标所在的一行，光标还在当行，不同于<code class="v-code">dd</code></td>
		</tr>
		<tr>
			<td>
				<code class="v-code">u</code>
			</td>
			<td>撤销上一步操作</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">ctrl</code>+<code class="v-code">r</code>
			</td>
			<td>恢复上一步操作</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">.</code>
			</td>
			<td>重复最后一个命令</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">~</code>
			</td>
			<td>变换为大写</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">[N]>></code>
			</td>
			<td>一行或N行往右移动一个tab</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">[N]<<</code>
			</td>
			<td>一行或N行往左移动一个tab</td>
		</tr>
	</tbody>
</table>

###关闭(Exiting)
<table width="100%">
	<tbody>
		<tr>
			<th width="20%">命令</th>
			<th width="80%">作用（解释)</th>
		</tr>
		<tr>
			<td>
				<code class="v-code">:w</code>
			</td>
			<td>保存</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">:wq</code>,
				<code class="v-code">:x</code>
			</td>
			<td>保存并关闭</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">:q</code>
			</td>
			<td>关闭（已保存）</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">:q!</code>
			</td>
			<td>强制关闭</td>
		</tr>
	</tbody>
</table>

###搜索(Search)
<table width="100%">
	<tbody>
		<tr>
			<th width="20%">命令</th>
			<th width="80%">作用（解释)</th>
		</tr>
		<tr>
			<td>
				<code class="v-code">/pattern</code>
			</td>
			<td>搜索（非插入模式)</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">?pattern</code>
			</td>
			<td>往后搜索</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">n</code>
			</td>
			<td>光标到达搜索结果的前一个目标</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">N</code>
			</td>
			<td>光标到达搜索结果的后一个目标</td>
		</tr>
	</tbody>
</table>

###视觉模式(Visual Mode)
<table width="100%">
	<tbody>
		<tr>
			<th width="20%">命令</th>
			<th width="80%">作用（解释)</th>
		</tr>
		<tr>
			<td>
				<code class="v-code">v</code>
			</td>
			<td>选中一个或多个字符</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">V</code>
			</td>
			<td>选中一行</td>
		</tr>
	</tbody>
</table>

###剪切和复制(Cut and Paste)
<table width="100%">
	<tbody>
		<tr>	
			<th width="20%">命令</th>
			<th width="80%">作用（解释)</th>
		</tr>
		<tr>
			<td>
				<code class="v-code">dd</code>
			</td>
			<td>删除一行</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">dw</code>
			</td>
			<td>删除一个单词</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">x</code>
			</td>
			<td>删除后一个字符</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">X</code>
			</td>
			<td>删除前一个字符</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">D</code>
			</td>
			<td>删除一行最后一个字符</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">[N]yy</code>
			</td>
			<td>复制一行或者N行</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">yw</code>
			</td>
			<td>复制一个单词</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">p</code>
			</td>
			<td>粘贴</td>
		</tr>
	</tbody>
</table>

###窗口操作
<table width="100%">
	<tbody>
		<tr>
			<th width="20%">命令</th>
			<th width="80%">作用（解释)</th>
		</tr>
		<tr>
			<td>
				<code class="v-code">:split</code>
			</td>
			<td>水平方向分割出一个窗口</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">:vsplit</code>
			</td>
			<td>垂直方向分割出一个窗口</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">:close</code>
			</td>
			<td>关闭窗口</td>
		</tr>
		<tr>
			<td>
				<code class="v-code">Ctrl</code>+<code class="v-code">W</code>
			</td>
			<td>切换窗口, <code class="v-code">h</code>到左边窗口，<code class="v-code">j</code>到下方窗口，<code class="v-code">k</code>到上方窗口，<code class="v-code">l</code>到右边窗口</td>
		</tr>
	</tbody>
</table>
