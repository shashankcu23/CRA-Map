import React from 'react';
import { connect } from 'react-redux';
import { setSelectedRegion } from '../redux/actions';

const regions = [
  { name: 'Country 1', currency: '$', speedUnit: 'kmph', distanceUnit: 'kilometers', volumeUnit: 'liters', timezone: 'GMT+0' },
  { name: 'Country 2', currency: '€', speedUnit: 'kmph', distanceUnit: 'kilometers', volumeUnit: 'liters', timezone: 'GMT+1' },
  // Add more regions as needed
];

const RegionSelector = ({ setSelectedRegion }) => {
  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };

  return (
    <div>
      <h2>Region Selector</h2>
      {regions.map((region, index) => (
        <button key={index} onClick={() => handleRegionSelect(region)}>
          {region.name}
        </button>
      ))}
    </div>
  );
};

export default connect(null, { setSelectedRegion })(RegionSelector);
