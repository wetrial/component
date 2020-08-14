import Quill from 'quill';
import Module from 'quill/core/module';

export default class Counter extends Module {
  private quill: Quill;
  private options: any;

  constructor(quill, options) {
    super(quill, options);
    this.quill = quill;
    this.options = options;

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
    this.options.container.innerText = `${length} ${label}`;
  }
}
