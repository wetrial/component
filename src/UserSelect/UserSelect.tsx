import React, { useState, useRef, useEffect } from 'react';
import { Select, Avatar, Button, Popover } from 'antd';

import './index.less';
import { IKeyValue } from '@wetrial/core';

interface fields {
  id: string;
  name: string;
  avatar: string;
}
interface UserSelectProps {
  defaultValue?: Array<string>;
  dataSource?: Array<IKeyValue<any>>;
  onChange?: (value) => void;
  value: Array<string>;
  fields: fields;
  cardInfo: (key) => void;
}
const { Option } = Select;

const UserSelect: React.FC<UserSelectProps> = (props) => {
  const { defaultValue, dataSource, onChange, value, fields, cardInfo } = props;
  const [avaList, setAva] = useState<any[]>([]);
  const [selectVisible, changeShow] = useState(false);
  const [values, setValues] = useState<any[]>(defaultValue ? defaultValue : value);
  const refSelect = useRef<any>();
  let firstLoad = false;
  useEffect(() => {
    firstLoad = true;
  }, []);
  useEffect(() => {
    const initAva = [] as Array<any>;
    values?.map((i) => {
      dataSource?.map((item) => {
        if (item[fields.id] === i) {
          initAva.push({ key: item[fields.id], value: item[fields.id], label: item[fields.name] });
        }
      });
    });
    setAva(initAva);
    triggerChange();
  }, [values]);

  const showPanel = () => {
    changeShow(true);
    setTimeout(function () {
      refSelect.current.focus();
    }, 100);
  };
  const hidePanel = () => {
    changeShow(false);
  };
  const removeUser = (value) => {
    setValues(values.filter((item) => item !== value));
  };
  const handleChange = (val, users) => {
    const ava = [] as Array<any>;
    users.map((item) => {
      ava.push({ key: item.key, value: item.value, label: item.children[1] });
    });
    setAva(ava);
    setValues(val);
  };

  const triggerChange = () => {
    onChange && !firstLoad && onChange(values);
  };

  return (
    <div>
      <div>
        <Avatar.Group>
          {avaList.map((item) => {
            return (
              <Popover
                key={item.key}
                title={item.label}
                content={() => {
                  return (
                    <div className="user-card">
                      {cardInfo(item.key)}
                      <div>
                        <Button danger size="small" onClick={removeUser.bind(null, item.key)}>
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
        value={values}
        style={{
          width: 'fit-content',
          minWidth: '150px',
          display: selectVisible ? 'block' : 'none',
        }}
        dropdownRender={(menu) => {
          return <div>{menu}</div>;
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

UserSelect.defaultProps = {
  fields: {
    id: 'UserId',
    name: 'FullName',
    avatar: 'Avatar',
  },
};

export default UserSelect;
