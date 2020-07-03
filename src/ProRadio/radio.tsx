import * as React from 'react';
import RcCheckbox from 'rc-checkbox';
import classNames from 'classnames';
import { RadioProps, RadioChangeEvent } from 'antd/es/radio';
import { ConfigContext } from 'antd/es/config-provider';
import RadioGroupContext from 'antd/es/radio/context';
import { composeRef } from 'antd/es/_util/ref';
import devWarning from 'antd/es/_util/devWarning';

const InternalRadio: React.ForwardRefRenderFunction<unknown, RadioProps> = (props, ref) => {
  const context = React.useContext(RadioGroupContext);
  const { getPrefixCls, direction } = React.useContext(ConfigContext);
  const innerRef = React.useRef<HTMLElement>();
  const mergedRef = composeRef(ref, innerRef);

  React.useEffect(() => {
    devWarning(!('optionType' in props), 'Radio', '`optionType` is only support in Radio.Group.');
  }, []);

  const onChange = (e: RadioChangeEvent) => {
    if (props.onChange) {
      props.onChange(e);
    }

    if (context?.onChange) {
      context.onChange(e);
    }
  };

  const toggleClick = (e) => {
    const value = context?.value;
    if (e.target.value === value) {
      if (context?.onChange) {
        context.onChange({
          target: {
            ...e.target,
            chedked: false,
          },
        } as RadioChangeEvent);
      }
    }
  };

  const { prefixCls: customizePrefixCls, className, children, style, ...restProps } = props;
  const prefixCls = getPrefixCls('radio', customizePrefixCls);
  const radioProps: RadioProps = { ...restProps };
  if (context) {
    radioProps.name = context.name;
    radioProps.onChange = onChange;
    radioProps.checked = props.value === context.value;
    radioProps.disabled = props.disabled || context.disabled;
  }
  const wrapperClassString = classNames(className, {
    [`${prefixCls}-wrapper`]: true,
    [`${prefixCls}-wrapper-checked`]: radioProps.checked,
    [`${prefixCls}-wrapper-disabled`]: radioProps.disabled,
    [`${prefixCls}-wrapper-rtl`]: direction === 'rtl',
  });

  return (
    // eslint-disable-next-line
    <label
      className={wrapperClassString}
      style={style}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <RcCheckbox
        {...radioProps}
        onClick={toggleClick}
        prefixCls={prefixCls}
        ref={mergedRef as any}
      />
      {children !== undefined ? <span>{children}</span> : null}
    </label>
  );
};

const Radio = React.forwardRef<unknown, RadioProps>(InternalRadio);
Radio.displayName = 'Radio';

Radio.defaultProps = {
  type: 'radio',
};

export default Radio;
