---
order: 1
title: 
  zh-CN: 使用数组作为参数
  en-US: Use Array as a parameter
---

Use Array as a parameter

``` tsx
import {RenderAuthorized} from 'Wetrial';
import { Alert } from 'antd';

const Authorized = RenderAuthorized('user');
const noMatch = <Alert message="No permission." type="error" showIcon />;

ReactDOM.render(
  <Authorized authority={['user', 'admin']} noMatch={noMatch}>
    <Alert message="Use Array as a parameter passed!" type="success" showIcon />
  </Authorized>,
  mountNode,
);
```
