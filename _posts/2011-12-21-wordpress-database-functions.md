---
layout: post
title: WordPress 数据库操作常用函数
description: 最近还在折腾 WordPress, 对一些数据库操作方面的使用，在这里总结一下。WordPress 提供了一些数据库操作上的方法，简单而且比较方便。
keywords:  hello, wordpress
---
最近还在折腾 WordPress, 对一些数据库操作方面的使用，在这里总结一下。WordPress 提
供了一些数据库操作上的方法，简单而且比较方便。

你可以在 /wp-includes/wp-db.php 里面找到这些方法的使用和文档。在这里就将一些比较
常用的写出来。哈，因为这几天使用到，方便以后查阅。

###常用的 WordPress 数据库操作函数

* insert($table, $data, $format) -- 通过数组，将数据插入到表的一行中
* update($table, $data, $where, $format, $where_format) -- 通过数据，更新表中的一行
* get_var($query, $x, $y) -- 在数据库中检索单个变量
* query($query) -- 执行数据库查询
* get_results($query, $output) -- 检索数据库中的一个或多个行，返回结果

###常用的 WordPress 数据库操作方法

* set_prefix($prefix) -- 用来设置表前缀
* prepare($query) -- 准备一个这行的 sql 语句
* get_row($query, $output, $y) -- 获取一行的内容
* get_col($query, $x) -- 获取一列的内容

###使用示例
<pre class="js" name="colorcode">
/**
 * insert
 */
$wpdb->insert( $wpdb->posts, array('post_title' => $title ) );
/**
 * update
 */
$wpdb->update( $wpdb->posts, array('post_title' => $title ), array( 'ID' => $id) );
/**
 * query
 */
$wpdb->query( "DELETE FORM $wpdb->options WHERE option_name = '$name'" );
</pre>
