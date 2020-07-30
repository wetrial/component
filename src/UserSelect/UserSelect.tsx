import React from 'react';
import { Select, Avatar } from 'antd';
// import Item from 'antd/lib/list/Item';
import classNames from 'classnames';
import './index.less';

interface UserSelectProps {
  message?: string;
  data?: Array<any>;
  selectedData?: Array<any>;
  UserInfo?: Array<any>;
}
const { Option, OptGroup } = Select;

const UserSelect: React.FC<UserSelectProps> = (props) => {
  const { data, selectedData, userInfo } = props;
  return (
    <div>
      <Select
        className="wt-select-default"
        mode="tags"
        showSearch={true}
        style={{ width: 'fit-content', minWidth: '80px' }}
        dropdownRender={(menu) => {
          return (
            <div>
              {menu}
              <div> footer</div>
            </div>
          );
        }}
        tagRender={(props) => {
          return <Avatar>{props.label[1]}</Avatar>;
        }}
      >
        {userInfo.map((item) => {
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

UserSelect.defaultProps = {
  message: 'Hello',
};

export default UserSelect;
