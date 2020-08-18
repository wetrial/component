import React, { useState, useRef, useEffect } from 'react';
import { Select, Avatar, Divider, Input, Button, Popover } from 'antd';
import classNames from 'classnames';
import './index.less';

interface UserSelectProps {
  defaultValue?: Array<string>;
  dataSource?: Array<any>;
  onChange?: (value) => any;
  value: any;
}
const { Option } = Select;

const UserSelect: React.FC<UserSelectProps> = (props) => {
  const { defaultValue, dataSource, onChange, value } = props;
  const [selectedData, setSelected] = useState<any[]>([]);
  const [selectVisible, changeShow] = useState(false);

  const refSelect = useRef<any>();
  let defaultList;
  defaultValue ? (defaultList = defaultValue) : (defaultList = value);

  useEffect(() => {
    const initValue = [] as Array<any>;
    defaultList?.map((i) => {
      dataSource?.map((item) => {
        if (item.UserId === i) {
          initValue.push({ key: item.UserId, value: item.UserId, label: item.FullName });
        }
      });
    });
    setSelected(initValue);
  }, [defaultList]);

  const showPanel = () => {
    changeShow(true);
    setTimeout(function () {
      refSelect.current.focus();
    }, 100);
  };
  const hidePanel = () => {
    changeShow(false);
  };
  const handleChange = (val, users) => {
    const result = [] as Array<any>;
    users.map((item) => {
      result.push({ key: item.key, value: item.value, label: item.children[1] });
    });
    setSelected(result);
    console.log(val);
    onChange && onChange(val);
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
        ref={refSelect}
        className="wt-select-default"
        mode="multiple"
        showSearch={true}
        open={selectVisible ? true : false}
        defaultValue={defaultList}
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
          option ? option.children[1].toLowerCase().indexOf(input.toLowerCase()) >= 0 : false
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
