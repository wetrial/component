---
title: ProTable Table组件
order: 10
nav:
  title: 组件
  path: /list
group:
  title: 数据展示
  path: /data-display
legacy: /data-display/pro-table
---

# ProTable Table 组件

pro-table 在 antd 的 table 上进行了一层封装，支持了一些预设，并且封装了一些行为。这里只列出与 antd table 不同的 api。

## 案例

### 基础使用

<code src="./demo/demo1.tsx" />

### 自定义容器样式提示块

<code src="./demo/demo2.tsx" />

## Table

| 参数                                                     | 说明                                                       | 类型                                                                        | 默认值 |
| -------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------- | ------ |
| toolBarRender                                            | 渲染工具栏，支持返回一个 dom 数组，会自动增加 margin-right | `() => React.ReactNode[]`                                                   | -      | - |
| containerClassName                                       | 设置容器元素的 class                                       | string                                                                      | -      |
| containerStyle                                           | 设置容器元素的 style                                       | CSSProperties                                                               | -      |
| options                                                  | table 的工具栏，设置为 false 可以关闭它                    | `{ fullScreen: true, reload:true, setting: true}`                           |
| onSizeChange                                             | table 尺寸发生改变                                         | `(size: 'default' | 'middle' | 'small' | undefined) => void`                | -      |
| columnsStateMap                                          | columns 的状态枚举                                         | `{[key: string]: { show:boolean, fixed: "right"|"left"} }`                  | -      |
| onColumnsStateChange                                     | columns 状态发生改变                                       | `(props: {[key: string]: { show:boolean, fixed: "right"|"left"} }) => void` | -      |
| [更多属性 ](https://ant.design/components/table-cn/#API) |                                                            |                                                                             |        |

## Columns

| 参数                                                         | 说明                                                | 类型                                                                    | 默认值 |
| ------------------------------------------------------------ | --------------------------------------------------- | ----------------------------------------------------------------------- | ------ |
| valueEnum                                                    | 值的枚举，会自动转化把值当成 key 来取出要显示的内容 | [valueEnum](#valueEnum)                                                 | -      |
| valueType                                                    | 值的类型                                            | `'money'、'option'、'date'、'dateTime'、'time'、'index'、'indexBorder'` | 'text' |
| [更多 属性 ](https://ant.design/components/table-cn/#Column) |                                                     |

## valueType

现在支持的值如下

| 类型          | 描述                                                            | 示例                                    |
| ------------- | --------------------------------------------------------------- | --------------------------------------- |
| money         | 转化值为金额                                                    | ¥10,000.26                              |
| date          | 日期                                                            | 2019-11-16                              |
| dateRange     | 日期区间                                                        | 2019-11-16 2019-11-18                   |
| dateTime      | 日期和时间                                                      | 2019-11-16 12:50:00                     |
| dateTimeRange | 日期和时间区间                                                  | 2019-11-16 12:50:00 2019-11-18 12:50:00 |
| time          | 时间                                                            | 12:50:00                                |
| option        | 操作项，会自动增加 marginRight，只支持一个数组,表单中会自动忽略 | `[<a>操作a</a>,<a>操作b</a>]`           |
| index         | 序号列                                                          | -                                       |
| indexBorder   | 带 border 的序号列                                              | -                                       |
| progress      | 进度条                                                          | -                                       |
| digit         | 单纯的数字                                                      | -                                       |

## valueEnum

当前列值的枚举

```typescript | pure
interface IValueEnum {
  [key: string | number]: string;
}
```
