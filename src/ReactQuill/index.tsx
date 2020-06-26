// import React, { useState, useRef } from 'react';
// import { isEqual } from 'lodash';
// import Quill, { QuillOptionsStatic, RangeStatic, BoundsStatic, Sources } from 'quill';
// import Delta from 'quill-delta';

// namespace ReactQuill {
//   export type Value = string | Delta;
//   export type Range = RangeStatic | null;

//   export interface QuillOptions extends QuillOptionsStatic {
//     tabIndex?: number;
//   }

//   export interface ReactQuillProps extends QuillOptionsStatic {
//     children?: React.ReactElement<any>;
//     className?: string;
//     defaultValue?: Value;
//     id?: string;
//     onChange?(value: string, delta: Delta, source: Sources, editor: UnprivilegedEditor): void;
//     onChangeSelection?(selection: Range, source: Sources, editor: UnprivilegedEditor): void;
//     onFocus?(selection: Range, source: Sources, editor: UnprivilegedEditor): void;
//     onBlur?(previousSelection: Range, source: Sources, editor: UnprivilegedEditor): void;
//     onKeyDown?: React.EventHandler<any>;
//     onKeyPress?: React.EventHandler<any>;
//     onKeyUp?: React.EventHandler<any>;
//     preserveWhitespace?: boolean;
//     style?: React.CSSProperties;
//     tabIndex?: number;
//     value?: Value;
//   }

//   export interface UnprivilegedEditor {
//     getLength(): number;
//     getText(index?: number, length?: number): string;
//     getHTML(): string;
//     getBounds(index: number, length?: number): BoundsStatic;
//     getSelection(focus?: boolean): RangeStatic;
//     getContents(index?: number, length?: number): Delta;
//   }
// }

// import Value = ReactQuill.Value;
// import Range = ReactQuill.Range;
// import QuillOptions = ReactQuill.QuillOptions;
// import ReactQuillProps = ReactQuill.ReactQuillProps;
// import UnprivilegedEditor = ReactQuill.UnprivilegedEditor;

// export default (props: ReactQuillProps = { theme: 'snow', modules: {}, readOnly: false }) => {
//   const codeRef = useRef(null);
//   // 是否设置了value值，如果设置了value值则算受控组件
//   const isControlled = 'value' in props;

//   useEffect(() => {}, props);

//   return <div ref={codeRef}>{JSON.stringify(props)}</div>;
// };

import Quill from 'quill';
import { merge } from 'lodash';
import Icons from 'quill/ui/icons';
import SnowTheme from 'quill/themes/snow';
import Counter from './modules/Counter';

// import InputIcon from './assets/icons/input.svg';

// Icons.input = InputIcon;

// SnowTheme.DEFAULTS = merge({}, SnowTheme.DEFAULTS, {
//   modules: {
//     toolbar: {
//       handlers: {
//         input(value) {
//           if (value) {
//             debugger;
//             // @ts-ignore
//             const range = this.quill.getSelection();
//             if (range == null || range.length === 0) return;
//             // @ts-ignore
//             let preview = this.quill.getText(range);
//             if (/^\S+@\S+\.\S+$/.test(preview) && preview.indexOf('mailto:') !== 0) {
//               preview = `mailto:${preview}`;
//             }
//             // @ts-ignore
//             const { tooltip } = this.quill.theme;
//             tooltip.edit('link', preview);
//           } else {
//             // @ts-ignore
//             this.quill.format('link', false);
//           }
//         },
//       },
//     },
//   },
// });

// Quill.register('ui/icons', Icons);

// Quill.register('themes/snow', SnowTheme);

// Quill.register('modules/counter', Counter);

export default Quill;
