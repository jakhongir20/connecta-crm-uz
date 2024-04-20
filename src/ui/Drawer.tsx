import { Drawer } from 'antd';

import React from 'react';
import DrawerControl from '../features/drawer/DrawerControl';
import DrawerHeader from '../features/drawer/DrawerHeader';

function DrawerApp({ open, isFullScreen, onFullScreen, onClose }): React.FC {
  const drawerWith = isFullScreen ? 'calc(100% - 56px)' : '76%';

  return (
    <div>
      <Drawer
        title={
          <DrawerHeader
            isFullScreen={isFullScreen}
            onClose={onClose}
            onFullScreen={onFullScreen}
          />
        }
        placement="right"
        open={open}
        getContainer={false}
        width={drawerWith}
        height="calc(100% - 56px)"
        maskClosable={false}
        closeIcon={false}
      >
        <DrawerControl
          isFullScreen={isFullScreen}
          onClose={onClose}
          onFullScreen={onFullScreen}
        />
        <p>
          Some contents... Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Labore quo quasi esse sit eos sequi repellat minus quam
          voluptates temporibus qui, voluptatibus amet eius, eligendi non
          voluptate, id dolor adipisci aspernatur. Consequuntur, ullam
          laboriosam.
        </p>
      </Drawer>
    </div>
  );
}

export default DrawerApp;
