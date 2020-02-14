import React, { PureComponent } from 'react';
import AvatarItem, { TSize } from './AvatarListItem';
import { Avatar } from 'antd';
import classNames from 'classnames';

export interface AvatarListProps {
  size: TSize;
  maxLength?: number;
  excessItemsStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  children: React.ReactElement<AvatarItem> | React.ReactElement<AvatarItem>[];
}

const avatarSizeToClassName = (size: TSize) =>
  classNames('avatarItem', {
    // eslint-disable-next-line no-useless-computed-key
    ['avatarItemLarge']: size === 'large',
    // eslint-disable-next-line no-useless-computed-key
    ['avatarItemSmall']: size === 'small',
  });

class AvatarList extends PureComponent<AvatarListProps> {
  static Item: typeof AvatarItem;

  static defaultProps = {
    size: 'default',
  };

  render() {
    const { size, maxLength, excessItemsStyle, children } = this.props;

    const numOfChildren = React.Children.count(children);
    let numToShow = numOfChildren;
    if (maxLength) {
      numToShow = maxLength > numOfChildren ? numOfChildren : maxLength;
    }

    const childrenWithProps = React.Children.toArray(children)
      .slice(0, numToShow)
      .map(child =>
        // @ts-ignore
        React.cloneElement(child, {
          size,
        }),
      );

    if (maxLength && numToShow < numOfChildren) {
      const cls = avatarSizeToClassName(size);

      childrenWithProps.push(
        <li key="exceed" className={cls}>
          <Avatar size={size} style={excessItemsStyle}>{`+${numOfChildren - maxLength}`}</Avatar>
        </li>,
      );
    }
    return <ul className="wetrial-avatar-list"> {childrenWithProps} </ul>;
  }
}

export default AvatarList;
