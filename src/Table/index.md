---
title: Table Table组件
order: 10
nav:
  title: 组件
  path: /list
group:
  title: 数据展示
  path: /data-display
legacy: /data-display/table
---

# Table 组件

Table 在 antd 的 table 上进行了一层封装，支持了一些预设，并且封装了一些行为，如:列宽允许拖拽

## 说明

请根据情况使用，勿滥用

## 案例

### 基础使用

<code src="./demo/demo1.tsx" />

## Table

| 参数                                                     | 说明           | 类型      | 默认值 |
| -------------------------------------------------------- | -------------- | --------- | ------ |
| resizeable                                               | 是否允许伸缩列 | `boolean` | -      | - |
| [更多属性 ](https://ant.design/components/table-cn/#API) |                |           |        |

## Columns

| 参数                                                         | 说明 | 类型 | 默认值 |
| ------------------------------------------------------------ | ---- | ---- | ------ |
| [更多 属性 ](https://ant.design/components/table-cn/#Column) |      |

> 注意
> 列上必须有设置`width`属性，已经固定 scroll.x 为`max-content`
