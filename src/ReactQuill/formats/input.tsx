import Quill from 'quill';

const Inline = Quill.import('blots/inline');

class Input extends Inline {
  static create(value) {
    const node = super.create(value);
    debugger;
    node.setAttribute('type', 'text');
    node.setAttribute('data-plugin', 'input');
    return node;
  }

  format(name, value) {
    debugger;
    // if (name !== this.statics.blotName || !value) {
    //   super.format(name, value);
    // } else {
    //   this.domNode.setAttribute('href', this.constructor.sanitize(value));
    // }
  }
}
Input.blotName = 'input';
Input.tagName = 'INPUT';
Input.className = 'ql-input-xxg';

export default Input;
