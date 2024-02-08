import React, { ReactNode } from 'react';
import { Drawer } from 'antd';



interface DrawerProps {
    title: string;
    placement?: 'top' | 'right' | 'bottom' | 'left';
    closable?: boolean;
    onClose: () => void;
    visible: boolean;
    children: ReactNode;
  }
  
  const CustomDrawer: React.FC<DrawerProps> = ({
    title,
    placement = 'bottom',
    closable = false,
    onClose,
    visible,
    children
  }) => {
    return (
        
      <Drawer
        title={title}
        placement={placement}
        closable={closable}
        onClose={onClose}
        visible={visible}
      >
      {children}
    </Drawer>
  );
};

export default CustomDrawer;
