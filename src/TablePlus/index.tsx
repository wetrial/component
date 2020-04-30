import React, { CSSProperties } from 'react';
import { TableProps } from 'antd/es/table';
import ProTable, { ProColumns } from '@ant-design/pro-table';

export declare type DensitySize = 'middle' | 'small' | 'large' | undefined;

export interface ColumnsState {
  show?: boolean;
  fixed?: 'right' | 'left' | undefined;
}

export interface ActionType {
  reload: (resetPageIndex?: boolean) => void;
  fetchMore: () => void;
  reset: () => void;
  clearSelected: () => void;
}

export interface ITablePlusProps<
  T,
  U extends {
    [key: string]: any;
  }
> extends Omit<TableProps<T>, 'columns' | 'rowSelection'> {
  /**
   * 搜索类型，默认为simple
   */
  type?: 'simple' | 'advance';
  searchForm: React.ReactNode | false;
  columns?: ProColumns<T>[];
  columnsStateMap?: {
    [key: string]: ColumnsState;
  };
  onColumnsStateChange?: (map: { [key: string]: ColumnsState }) => void;
  onSizeChange?: (size: DensitySize) => void;
  /**
   * 初始化的参数，可以操作 table
   */
  actionRef?: React.MutableRefObject<ActionType | undefined> | ((actionRef: ActionType) => void);
  /**
   * 渲染操作栏
   */
  toolBarRender?: () => React.ReactNode[] | false;
  /**
   * 给封装的 table 的 className
   */
  tableClassName?: string;
  /**
   * 给封装的 table 的 style
   */
  tableStyle?: CSSProperties;
  style?: React.CSSProperties;
}

function TablePlus<
  T = any,
  U extends {
    [key: string]: any;
  } = {}
>(props: ITablePlusProps<T, U>) {
  const { type = 'simple', searchForm, toolBarRender, ...otherProps } = props;
  return (
    <ProTable<T, U>
      {...otherProps}
      toolBarRender={() => {
        return toolBarRender ? toolBarRender() : false;
      }}
      headerTitle={type === 'simple' ? searchForm : null}
      options={{ density: true, fullScreen: true, setting: true, reload: false }}
      dateFormatter="string"
      type="list"
      search={false}
    />
  );
}

export default TablePlus;
export { ProColumns };
