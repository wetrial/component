import React, { useRef, useEffect } from 'react';
import { Button, Space } from 'antd';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import './demo1.less';

class Counter {
  constructor(quill, options) {
    this.quill = quill;
    this.options = options;
    this.container = document.querySelector(options.container);
    quill.on('text-change', this.update.bind(this));
    this.update(); // Account for initial contents
  }

  calculate() {
    let text = this.quill.getText();
    if (this.options.unit === 'word') {
      text = text.trim();
      // Splitting empty text returns a non-empty array
      return text.length > 0 ? text.split(/\s+/).length : 0;
    } else {
      return text.length;
    }
  }

  update() {
    const length = this.calculate();
    let label = this.options.unit;
    if (length !== 1) {
      label += 's';
    }
    this.container.innerText = `${length} ${label}`;
  }
}

Quill.register('modules/counter', Counter);

export default ({ children = 'text' }) => {
  const editor = useRef<Quill>(null);
  const editorRef = useRef(null);
  useEffect(() => {
    // eslint-disable-next-line no-new
    editor.current = new Quill(editorRef.current, {
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
          ],
          // [{ direction: 'rtl' }], // text direction
          // [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
          // [{ font: [] }],
          // ['clean'],
        ],
        counter: {
          container: '#editor-count',
          unit: 'word',
        },
      },
      placeholder: 'Compose an epic...',
      theme: 'snow', // or 'bubble'
    });
  }, []);
  return (
    <div>
      <div className="editor-container">
        <div ref={editorRef}>{children}</div>
        <div id="editor-count" />
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
