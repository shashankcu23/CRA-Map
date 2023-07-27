import React from 'react';

const RegionInfo = ({ currency, speedUnit, distanceUnit, volumeUnit, timezone }) => {
  return (
    <div className="region-info-card">
      <p>Region Information:</p>
      <p>Currency: {currency}</p>
      <p>Speed Unit: {speedUnit}</p>
      <p>Distance Unit: {distanceUnit}</p>
      <p>Volume Unit: {volumeUnit}</p>
      <p>Timezone: {timezone}</p>
    </div>
  );
};

export default RegionInfo;
