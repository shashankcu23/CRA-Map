import React from 'react';
import { Form, Select, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { setRegion } from '../redux/actions'

const { Option } = Select;

const FloatingControls = () => {
  const dispatch = useDispatch();

  const handleRegionChange = (value) => {
    dispatch(setRegion(value));
  };

  const handleLoadClick = () => {
    // Implement any action required when the 'Load' button is clicked
    // For example, fetching region information from an API using 'turf'
  };

  return (
    <div className="floating-controls">
      <Form>
        <Form.Item>
          <Select defaultValue="us" style={{ width: 120 }} onChange={handleRegionChange}>
            <Option value="us">United States</Option>
            <Option value="in">India</Option>
            <Option value="uk">United Kingdom</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleLoadClick}>
            Load
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FloatingControls;
