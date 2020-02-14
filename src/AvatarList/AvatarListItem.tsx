import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Avatar, Tooltip } from 'antd';

export type TSize = 'large' | 'small' | 'default' | number;

export interface AvatarListItemProps {
  size: TSize;
  tips: string | React.ReactNode;
  src: string;
  onClick?: () => void;
}

class AvatarListItem extends PureComponent<AvatarListItemProps> {
  static defaultProps = {
    size: 'default',
  };

  render() {
    const { tips, size, src, onClick } = this.props;

    const clsString = classNames('avatarItem', {
      // eslint-disable-next-line no-useless-computed-key
      ['avatarItemLarge']: size === 'large',
      // eslint-disable-next-line no-useless-computed-key
      ['avatarItemSmall']: size === 'small',
    });

    return (
      <li className={clsString} onClick={onClick}>
        {tips ? (
          <Tooltip title={tips}>
            <Avatar src={src} size={size} style={{ cursor: 'pointer' }} />
          </Tooltip>
        ) : (
          <Avatar src={src} size={size} />
        )}
      </li>
    );
  }
}

export default AvatarListItem;
