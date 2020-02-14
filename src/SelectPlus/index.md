## Select加强版
扩展Select功能，支持直接传递一个数据源，指定数据源的key、labe即可

### 使用方式
直接引入使用

### 案例
``` tsx
const list=[
  {key:'C#',label:'C#'},
  {key:'PPT',label:'最好的语言'},
  {key:'react',label:'React'}
]
<FormItem {...FORM_TWO_LAYOUT} label="语言">
    {getFieldDecorator('type', {
      initialValue:'C#'
    })(
      <SelectPlus list={list} key="key" label="label" />
    )}
</FormItem>

## API

### SelectPlus

| 参数               | 说明       | 类型                                 | 默认值       |
| ---------------- | -------- | ---------------------------------- | --------- |
| list             | 数据源数组     | Array<T> | [] |
| keyName        | 数据源中作为key的属性名 | string                             | "key"         |
| label | 多余的项目风格  | 数据源中作为label的属性名                      | "label"         |
| [更多API ](https://ant.design/components/select-cn/) |   |                       |          |
