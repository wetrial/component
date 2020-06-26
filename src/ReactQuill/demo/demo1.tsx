import React, { useRef, useEffect } from 'react';
import { Button, Space } from 'antd';
import { ReactQuill } from '@wetrial/component';
import 'quill/dist/quill.snow.css';
import './demo1.less';

export default ({ children = 'text' }) => {
  const editor = useRef<ReactQuill>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // eslint-disable-next-line no-new
    editor.current = new ReactQuill(editorRef.current.querySelector('.wt-quill-body'), {
      modules: {
        toolbar: [
          [
            {
              header: [1, 2, 3, 4, 5, 6, false],
            },
          ],
          [
            {
              align: [false, 'center', 'right'],
            },
            'bold',
            'italic',
            'underline',
            'strike',
          ],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          [
            { color: [] },
            { background: [] },
            { script: 'sub' },
            { script: 'super' },
            'blockquote',
            'link',
            'clean',
            // 'code-block',
            'input',
          ],
          // [{ direction: 'rtl' }], // text direction
          // [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
          // [{ font: [] }],
        ],
        // toolbar: {
        //   container: editorRef.current.querySelector('.wt-quill-toolbar'),
        //   handlers: {
        //     // insertInput: (a, b, c) => {
        //     //   debugger;
        //     //   const cursorPosition = editor.current.getSelection().index;
        //     //   editor.current.insertText(cursorPosition, '★');
        //     //   editor.current.setSelection(cursorPosition + 1, 1);
        //     // },
        //   },
        // },
        counter: {
          container: editorRef.current.querySelector('.wt-quill-count'),
          unit: 'word',
        },
      },
      placeholder: 'Compose an epic...',
      theme: 'snow', // or 'bubble'
    });
  }, []);
  return (
    <div>
      <div ref={editorRef} className="wt-quill-container">
        <div className="wt-quill-toolbar">
          <select className="ql-header" defaultValue="" onChange={e => e.persist()}>
            <option value="1">标题 1</option>
            <option value="2">标题 2</option>
            <option value="3">标题 3</option>
            <option selected>普通文本</option>
          </select>
          <button title="粗体" type="button" className="ql-bold" />
          <button title="斜体" type="button" className="ql-italic" />
          <select title="颜色" className="ql-color" />
          <button title="文本框" type="button" className="ql-input" />
        </div>
        <div className="wt-quill-body">{children}</div>
        <div className="wt-quill-count" />
      </div>
      <hr />
      <Space>
        <Button
          onClick={() => {
            console.log(editor.current.deleteText(0, 3, 'user'));
          }}
        >
          删除1-3
        </Button>
        <Button
          onClick={() => {
            console.log(editor.current.getContents());
          }}
        >
          getContent
        </Button>
        <Button
          onClick={() => {
            console.log(editor.current.getText());
          }}
        >
          getText
        </Button>
        <Button
          onClick={() => {
            console.log(
              editor.current.insertText(5, 'testcontent', {
                color: 'red',
                italic: true,
              }),
            );
          }}
        >
          insert Text
        </Button>
        <Button
          onClick={() => {
            const range = editor.current.getSelection(true);
            const date = Date.now();
            editor.current.insertEmbed(range.index, 'div', { id: date }, 'user');
            editor.current.setSelection({ index: range.index, length: 1 }, 'silent');
          }}
        >
          insert Html
        </Button>
      </Space>
    </div>
  );
};
