【前端代码标准最佳实践：HTML篇 -  CSDN App】https://blog.csdn.net/powertoolsteam/article/details/7916014?sharetype=blogdetail&shareId=7916014&sharerefer=APP&sharesource=2203_75806854&sharefrom=link


```markdown
# 前端代码标准最佳实践：HTML篇

## HTML代码的基本规范

### 1. HTML的命名和格式

- **大小写**：HTML标签名和属性应小写，属性值用双引号包裹。
- **id和class命名**：id使用下划线连接关键词，class使用中划线连接关键词。
- **代码缩进**：使用4个空格进行层级缩进。
- **空元素**：空元素应单独占用一行，如`<br/>`, `<hr/>`, `<input/>`, `<img/>`等。

### 2. CSS代码和HTML代码分离

- 避免在HTML标签的`style`属性或`style`标签内写样式，应将样式写入独立的CSS文件中。

### 3. 写标准的HTML代码

- 确保所有HTML标签正确闭合。
- 避免使用不再被规范推荐的标签和属性，如`<center>`, `<font>`, `<s>`, `<strike>`, `<u>`, `<menu>`等。
- 使用CSS替代不再推荐的属性，如`align`, `nowrap`, `width`, `height`等。
- 定期使用W3C验证工具检查代码标准性。

## 高可读性的HTML代码

### 1. 合适的地方用合适的标签

- **语义化标签**：使用具有明确语义的HTML标签，如`<h1>~<h6>`, `<em>`, `<strong>`, `<table>`, `<ul>`, `<ol>`, `<li>`等。
- **避免无语义标签**：在没有更合适的语义标签之前，避免使用`<div>`和`<span>`。

### 2. 给页面添加必要的meta

- 在页面的`head`部分添加meta信息，如作者、版权、关键词、日期等。

### 3. 不要省略某些标签的属性

- 为`<img>`标签添加`alt`属性，为`<a>`标签添加`title`属性。

## 高性能的HTML代码

### 1. CSS文件在前，JavaScript文件在后

- CSS文件应在JavaScript文件之前加载，JavaScript文件应放在页面底部。
- 使用`async`或`defer`属性来异步加载和执行JavaScript文件。

### 2. 精简HTML代码

- 删除不必要的标签以减少页面传输和渲染时间。
- 动态加载和渲染非关键区域的内容。

### 3. 谨慎使用iframe

- 考虑iframe对页面加载的影响，如阻塞主页面的Onload事件和共享连接池限制。
- 通过JavaScript动态设置iframe的`src`属性来避免这些问题。

## 总结

本文总结了HTML开发中应注意的一些关键点，包括代码的可读性、可维护性和性能。养成良好的编码习惯比熟悉某项开发技术更为重要。在实践中不断总结和改进，以提升代码质量和开发效率。
```