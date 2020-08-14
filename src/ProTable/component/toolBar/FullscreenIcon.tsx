import React, { useEffect, useState } from 'react';
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

const FullScreenIcon = () => {
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  useEffect(() => {
    document.onfullscreenchange = () => {
      setFullscreen(!!document.fullscreenElement);
    };
  }, []);
  return fullscreen ? (
    <Tooltip title="全屏">
      <FullscreenExitOutlined />
    </Tooltip>
  ) : (
    <Tooltip title="全屏">
      <FullscreenOutlined />
    </Tooltip>
  );
};

export default FullScreenIcon;
