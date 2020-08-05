import React from 'react';
import { Button, Form } from 'antd';
import { ProSelect } from '@wetrial/component';

const list = [
  { id: 'C#', text: 'C#' },
  { id: 'PPT', text: '最好的语言' },
  { id: 'react', text: 'React' },
];

const FormItem = Form.Item;

export default () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log(values);
  };

  return (
    <Form onFinish={handleFinish} form={form}>
      <FormItem label="语言" name="language">
        <ProSelect style={{ width: 200 }} list={list} keyProp="id" labelProp="text" />
      </FormItem>
      <FormItem>
        <Button htmlType="submit">保存</Button>
      </FormItem>
    </Form>
  );
};
