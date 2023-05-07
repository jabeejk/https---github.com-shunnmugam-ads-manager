import React from 'react';
import { Divider, Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

import siderStyle from './Sidebar.module.css';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('Dashboard', '/dashboard'),
  getItem('Funds', '/funds'),
  getItem('Campaigns', '/campaigns'),
  getItem('Profile', '/profile'),
  getItem('Settings', '/settings'),
  getItem('Crisp.chat', '/crisp')
];

const Siderbar: React.FC = () => {
  const navigate = useNavigate();
  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };
  return (
    <>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        // onBreakpoint={() => {}}
        // onCollapse={() => {}}
        className={siderStyle.side}
        theme="light"
      >
        <div className={siderStyle.logo} />
        <Divider style={{ background: '#f0f0f0' }}></Divider>
        <Menu
          onClick={onClick}
          // style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
        />
      </Sider>
    </>
  );
};

export default Siderbar;
