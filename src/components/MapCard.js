import React from 'react';
import { connect } from 'react-redux';

const MapCard = ({ selectedRegion }) => {
  return (
    <div>
      <h2>Map Card</h2>
      {selectedRegion && (
        <div>
          <p>Currency: {selectedRegion.currency}</p>
          <p>Speed Unit: {selectedRegion.speedUnit}</p>
          <p>Distance Unit: {selectedRegion.distanceUnit}</p>
          <p>Volume Unit: {selectedRegion.volumeUnit}</p>
          <p>Timezone: {selectedRegion.timezone}</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedRegion: state.selectedRegion,
  };
};

export default connect(mapStateToProps)(MapCard);
