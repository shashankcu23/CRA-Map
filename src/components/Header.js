import React from 'react';
import { Button, Layout } from 'antd';

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader>
      <div className="header-content">
        <span>Welcome, Guest!</span>
        <Button>Log In</Button>
        <Button>Log Out</Button>
        <Button>Profile</Button>
      </div>
    </AntHeader>
  );
};

export default Header;
