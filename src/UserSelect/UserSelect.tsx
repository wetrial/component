import React, { useState, useRef, useEffect } from 'react';
import { Select, Avatar, Divider, Input, Button, Popover } from 'antd';
// import Item from 'antd/lib/list/Item';
import classNames from 'classnames';
import './index.less';
import { IKeyValue } from '@wetrial/core';

interface UserSelectProps {
  defaultValue?: Array<string>;
  dataSource?: Array<any>;
}
const { Option } = Select;

const UserSelect: React.FC<UserSelectProps> = (props) => {
  const { defaultValue, dataSource, onChange } = props;
  const [selectedData, setSelected] = useState<any[]>([]);
  const [selectVisible, changeShow] = useState(false);
  const selectRef = useRef<any>();

  useEffect(() => {
    const initValue = [] as Array<any>;
    defaultValue?.map((i) => {
      dataSource?.map((item) => {
        if (item.UserId === i) {
          initValue.push({ key: item.UserId, value: item.UserId, label: item.FullName });
        }
      });
    });
    setSelected(initValue);
  }, [defaultValue]);

  const showPanel = () => {
    changeShow(true);
    setTimeout(function () {
      selectRef.current.focus();
    }, 100);
  };
  const hidePanel = () => {
    changeShow(false);
  };
  const handleChange = (value, users) => {
    const result = [];
    users.map((item) => {
      result.push({ key: item.key, value: item.value, label: item.children[1] });
    });
    setSelected(result);
    onChange(value);
  };

  return (
    <div>
      <div>
        <Avatar.Group>
          {selectedData.map((item) => {
            return (
              <Popover
                key={item.key}
                title={item.label}
                content={() => {
                  return (
                    <div className="user-card">
                      <div>
                        <Button danger size="small">
                          移除
                        </Button>
                      </div>
                    </div>
                  );
                }}
              >
                <Avatar>{item.label}</Avatar>
              </Popover>
            );
          })}
          <span onClick={showPanel}>
            <Avatar>+</Avatar>
          </span>
        </Avatar.Group>
      </div>

      <Select
        ref={selectRef}
        className="wt-select-default"
        mode="multiple"
        showSearch={true}
        open={selectVisible ? true : false}
        defaultValue={defaultValue}
        // labelInValue
        style={{
          width: 'fit-content',
          minWidth: '150px',
          display: selectVisible ? 'block' : 'none',
        }}
        dropdownRender={(menu) => {
          return (
            <div>
              {menu}
              <div> footer</div>
            </div>
          );
        }}
        tagRender={(props) => {
          return <></>;
        }}
        onBlur={hidePanel}
        onChange={handleChange}
        filterOption={(input, option) =>
          option.children[1].toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {dataSource &&
          dataSource.length > 0 &&
          dataSource.map((item) => {
            return (
              <Option key={item.UserId} value={item.UserId}>
                <Avatar>{item.FullName}</Avatar>
                {item.FullName}
              </Option>
            );
          })}
      </Select>
    </div>
  );
};

UserSelect.defaultProps = {};

export default UserSelect;
