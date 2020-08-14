import Quill from 'quill';

const Module = Quill.import('core/module');

export default class InputModule extends Module {
  constructor(quill, options) {
    super(quill, options);

    this.quill = quill;

    const toolbar = quill.getModule('toolbar');
    if (!toolbar) {
      if (options.debug) {
        console.error(`can't get toolbar in input module`);
      }
      return;
    }
    // toolbar.addHandler('input', this.handleInput.bind(this));
    const qlInput = toolbar.container.querySelector('.ql-input');
    if (qlInput) {
      qlInput.innerHTML =
        '<svg t="1593226317007" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2164" width="18" height="18"><path d="M873.301333 149.674667v725.333333h-725.333333v-725.333333h725.333333m64-64h-853.333333v853.333333h853.333333v-853.333333z" p-id="2165"></path><path d="M376.170667 207.914667h268.928v64H376.170667v-64z m0 538.090666h268.928v64H376.170667v-64z m102.464-475.605333h64v477.141333h-64V270.4z" p-id="2166"></path></svg>';
    }
  }

  handleInput() {
    const selection = this.quill.getSelection();
    debugger;
    // if (selection.length === 0) return;
    // this.quill.formatText(selection.index, 'input');
    this.quill.insertEmbed(selection.index, 'block', '<div class="myClass"></div>');
  }
}
