---
title: SelectPlus 下拉选择
group:
  title: 数据录入
  path: /data-display
  order: 900
---

# SelectPlus 下拉选择

扩展 Select 功能，支持直接传递一个数据源，指定数据源的 key、labe 即可

## 案例

### 基础使用

<code src="./demo/demo1.tsx" />

### 指定 keyName、labelName

<code src="./demo/demo2.tsx" />

### 案例

## API

### SelectPlus

| 参数                                                                     | 说明                      | 类型                        | 默认值  |
| ------------------------------------------------------------------------ | ------------------------- | --------------------------- | ------- |
| list                                                                     | 数据源数组                | Array\<T\>                  | -       |
| keyName                                                                  | 数据源中作为 key 的属性名 | string                      | "key"   |
| labelName                                                                | 多余的项目风格            | 数据源中作为 label 的属性名 | "label" |
| [更多 属性 ](https://next.ant.design/components/select-cn/#Select-props) |                           |                             |         |
