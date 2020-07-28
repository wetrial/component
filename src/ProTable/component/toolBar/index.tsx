import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { ConfigConsumer, ConfigConsumerProps } from 'antd/lib/config-provider/context';
import ColumnSetting from '../columnSetting';
import { UseFetchDataAction } from '../../useFetchData';

import './index.less';
import FullScreenIcon from './FullscreenIcon';
import DensityIcon from './DensityIcon';

export interface OptionConfig<T> {
  density: boolean;
  fullScreen: OptionsType<T>;
  setting: boolean;
}

export type OptionsType<T = unknown> = ((e: React.MouseEvent<HTMLSpanElement>) => void) | boolean;

export interface ToolBarProps<T = unknown> {
  action: UseFetchDataAction;
  options?: OptionConfig<T> | false;
  className?: string;
}

const getButtonText = <T, U = {}>() => ({
  fullScreen: {
    text: '全屏',
    icon: <FullScreenIcon />,
  },
  setting: {
    text: '列设置',
    icon: <SettingOutlined />,
  },
  density: {
    text: '表格密度',
    icon: <DensityIcon />,
  },
});

/**
 * 渲染默认的 工具栏
 * @param options
 * @param className
 */
const renderDefaultOption = <T, U = {}>(
  options: ToolBarProps<T>['options'],
  className: string,
  defaultOptions: OptionConfig<T>,
) =>
  options &&
  Object.keys(options)
    .filter((item) => item)
    .map((key) => {
      const value = options[key];
      if (!value) {
        return null;
      }
      if (key === 'setting') {
        return <ColumnSetting key={key} />;
      }
      if (key === 'fullScreen') {
        return (
          <span
            key={key}
            className={className}
            onClick={value === true ? defaultOptions[key] : value}
          >
            <FullScreenIcon />
          </span>
        );
      }
      const optionItem = getButtonText<T>()[key];
      if (optionItem) {
        return (
          <span
            key={key}
            className={className}
            onClick={() => {
              if (value && defaultOptions[key] !== true) {
                if (value !== true) {
                  value();
                  return;
                }
                defaultOptions[key]();
              }
            }}
          >
            <Tooltip title={optionItem.text}>{optionItem.icon}</Tooltip>
          </span>
        );
      }
      return null;
    })
    .filter((item) => item);

const ToolBar = <T, U = {}>({
  action,
  options = {
    density: true,
    fullScreen: () => action.fullScreen && action.fullScreen(),
    setting: true,
  },
  className,
}: ToolBarProps<T>) => {
  const optionDom =
    renderDefaultOption<T>(options, `${className}-item-icon`, {
      fullScreen: () => action.fullScreen && action.fullScreen(),
      density: true,
      setting: true,
    }) || [];
  return (
    <div className={className}>
      <div className={`${className}-option`}>
        <div className={`${className}-default-option`}>{optionDom}</div>
      </div>
    </div>
  );
};

const WarpToolBar = <T, U = {}>(props: ToolBarProps<T>) => (
  <ConfigConsumer>
    {({ getPrefixCls }: ConfigConsumerProps) => {
      const className = getPrefixCls('pro-table-toolbar');
      return <ToolBar className={className} {...props} />;
    }}
  </ConfigConsumer>
);

export default WarpToolBar;
