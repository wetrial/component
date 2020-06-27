import Quill from 'quill';
import Break from 'quill/blots/break';
import Inline from 'quill/blots/inline';
import TextBlot from 'quill/blots/text';
import Container from 'quill/blots/container';

class Div extends Container {
  // constructor(scroll, domNode) {
  //     super(scroll, domNode);
  // }
}
Div.blotName = 'div';
Div.tagName = 'div';
Div.defaultChild = Break;
Div.allowedChildren = [Break, Inline, EmbedBlot, TextBlot];

export default HorizontalRule;
