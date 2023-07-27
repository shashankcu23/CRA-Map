import React from 'react';
import { Form, Select, Button } from 'antd';

const { Option } = Select;

const FormInput = ({ onChange, onSubmit, selectedRegion }) => {
  const handleRegionChange = (value) => {
    onChange(value);
  };

  const handleLoadClick = () => {
    onSubmit();
  };

  return (
    <div className="floating-controls">
      <Form>
        <Form.Item>
          <Select value={selectedRegion} style={{ width: 120 }} onChange={handleRegionChange}>
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

export default FormInput;
