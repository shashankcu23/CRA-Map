import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const selectedRegion = useSelector((state) => state.selectedRegion);

  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        url={`https://tile.openstreetmap.org/{z}/{x}/{y}${
          selectedRegion === 'us' ? '.png' : '_dark.png'
        }`}
      />
    </MapContainer>
  );
};

export default Map;
