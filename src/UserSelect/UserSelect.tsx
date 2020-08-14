import React, { useState, useRef } from 'react';
import { Select, Avatar, Divider, Input, Tooltip } from 'antd';
// import Item from 'antd/lib/list/Item';
import classNames from 'classnames';
import './index.less';

interface UserSelectProps {
  selectedData?: Array<any>;
  dataSource?: Array<any>;
}
const { Option, OptGroup } = Select;

const UserSelect: React.FC<UserSelectProps> = (props) => {
  const { selectedData, dataSource } = props;
  const [resultList, setResult] = useState([]);
  const [selectVisible, changeShow] = useState(false);

  const selectRef = useRef(null);

  const addUser = (data) => {
    setResult([...resultList, { id: data.key, value: data.value }]);
  };
  const removeUser = (data) => {
    const newResult = resultList.filter((item) => item.id !== data.key);
    setResult(newResult);
  };

  const showSelect = () => {
    changeShow(true);
    setTimeout(function () {
      selectRef.current.focus();
    }, 100);
  };
  const hideSelect = () => {
    changeShow(false);
  };

  return (
    <div>
      <div>
        <Avatar.Group>
          {resultList.map((item) => {
            return <Avatar key={item.value}>{item.value}</Avatar>;
          })}
          <Tooltip onClick={showSelect}>
            <Avatar>+</Avatar>
          </Tooltip>
        </Avatar.Group>
      </div>

      <Select
        ref={selectRef}
        className="wt-select-default"
        mode="multiple"
        showSearch={true}
        open={selectVisible ? true : false}
        style={{
          width: 'fit-content',
          minWidth: '150px',
          display: selectVisible ? 'inline-block' : 'none',
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
          return;
        }}
        onSelect={(value, data) => {
          addUser(data);
          console.log(selectRef);
        }}
        onDeselect={(value, data) => {
          removeUser(data);
        }}
        onBlur={hideSelect}
      >
        {dataSource &&
          dataSource.length > 0 &&
          dataSource.map((item) => {
            return (
              <Option key={item.UserId} value={item.FullName}>
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
