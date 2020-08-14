---
title: ProSelect 下拉选择
order: 30
nav:
  title: 组件
  path: /list
group:
  title: 数据录入
  path: /data-collect
legacy: /data-collect/select-plus
---

# ProSelect 下拉选择

扩展 Select 功能，支持直接传递一个数据源，指定数据源的 key、labe 即可

## 案例

### 基础使用

<code src="./demo/demo1.tsx" />

### 指定 keyProp、labelProp

<code src="./demo/demo2.tsx" />

### Form 中使用

<code src="./demo/use-in-form.tsx" />

### 案例

## API

### ProSelect

| 参数                                                                     | 说明                        | 类型       | 默认值 |
| ------------------------------------------------------------------------ | --------------------------- | ---------- | ------ |
| list                                                                     | 数据源数组                  | `Array<T>` | -      |
| keyProp                                                                  | 数据源中作为 key 的属性名   | `string`   | key    |
| labelProp                                                                | 数据源中作为 label 的属性名 | `string`   | label  |
| [更多 属性 ](https://next.ant.design/components/select-cn/#Select-props) |                             |            |        |
