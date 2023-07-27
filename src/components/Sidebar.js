import React from 'react';
import { Menu, Layout, Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setNightMode } from '../redux/actions';

const { Sider } = Layout;

const Sidebar = () => {
  const dispatch = useDispatch();
  const nightMode = useSelector((state) => state.nightMode);

  const handleNightModeToggle = (checked) => {
    dispatch(setNightMode(checked));
  };

  return (
    <Sider width={200}>
      <Menu mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<span className="anticon">🌎</span>}>
          United States
        </Menu.Item>
        <Menu.Item key="2" icon={<span className="anticon">🇮🇳</span>}>
          India
        </Menu.Item>
        <Menu.Item key="3" icon={<span className="anticon">🇬🇧</span>}>
          United Kingdom
        </Menu.Item>
      </Menu>
      <div className="night-mode-toggle">
        <span>Night Mode:</span>
        <Switch checked={nightMode} onChange={handleNightModeToggle} />
      </div>
    </Sider>
  );
};

export default Sidebar;
