---
title: AvatarList 头像列表
group:
  title: 数据展示
  path: /data-display
  order: 600
---

## AvatarList 头像列表

一组用户头像，常用在项目/团队成员列表。可通过设置 `size` 属性来指定头像大小。

## 案例

### 简单案例

<code src="./demo/demo1.tsx" />

### 带最大数量

<code src="./demo/demo2.tsx" />

## API

### AvatarList

| 参数             | 说明             | 类型                                 | 默认值    |
| ---------------- | ---------------- | ------------------------------------ | --------- |
| size             | 头像大小         | `large`、`small` 、`mini`, `default` | `default` |
| maxLength        | 要显示的最大项目 | number                               | -         |
| excessItemsStyle | 多余的项目风格   | CSSProperties                        | -         |

### AvatarList.Item

| 参数 | 说明         | 类型      | 默认值 |
| ---- | ------------ | --------- | ------ |
| tips | 头像展示文案 | ReactNode | -      |
| src  | 头像图片连接 | string    | -      |
