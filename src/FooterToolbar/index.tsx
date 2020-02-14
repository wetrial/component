import React from 'react';
import classNames from 'classnames';
import { debounce } from 'lodash';
import './index.less';

export interface FooterToolbarProps {
  className: string;
  extra: React.ReactNode;
  style?: React.CSSProperties;
}

class FooterToolbar extends React.PureComponent<FooterToolbarProps, any> {
  static defaultProps = {
    className: '',
  };

  state = {
    width: undefined,
  };

  // private refDiv = createRef<HTMLDivElement>();

  componentDidMount() {
    window.addEventListener('resize', this.resizeFooterToolbar);
    this.resizeFooterToolbar();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeFooterToolbar);
  }

  resizeFooterToolbar = debounce(() => {
    const container = document.querySelector('main.ant-layout-content');

    if (container == null) {
      return;
    }
    const style = container['currentStyle'] || window.getComputedStyle(container);
    // const width = container.offsetWidth, // or use style.width
    const margin = (parseFloat(style.marginLeft) || 0) + (parseFloat(style.marginRight) || 0);
    const padding = (parseFloat(style.paddingLeft) || 0) + (parseFloat(style.paddingRight) || 0);
    const border =
      (parseFloat(style.borderLeftWidth) || 0) + (parseFloat(style.borderRightWidth) || 0);
    const width = container.clientWidth + margin + padding + border;
    const { width: stateWidth } = this.state;
    if (stateWidth !== width) {
      this.setState({
        width,
      });
    }
  }, 200);

  render() {
    const { className, children, extra, ...restProps } = this.props;
    const { width } = this.state;
    const cls = classNames(className, 'wetrial-footer-toolbar');

    return (
      <div className={cls} style={{ width }} {...restProps}>
        <div className="left">{extra}</div>
        <div className="right">{children}</div>
      </div>
    );
  }
}

export default FooterToolbar;
