import React from 'react';
import { AvatarList } from '@wetrial/component';

export default () => {
  return (
    <AvatarList size="mini">
      <AvatarList.Item
        tips="Jake"
        src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"
      />
      <AvatarList.Item
        tips="Andy"
        src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"
      />
      <AvatarList.Item
        tips="Niko"
        src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"
      />
    </AvatarList>
  );
};
