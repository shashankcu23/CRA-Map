import React from 'react';
import { Layout } from 'antd';
import { Provider } from 'react-redux'
import MapCard from '../src/components/MapCard';
import store from '../src/redux/store';
import Header from '../src/components/Header';
import Sidebar from '../src/components/Sidebar';
import RegionSelector from '../src/redux/RegionSelector';
import Map from '../src/components/MapContainer';
import FloatingControls from '../src/components/FloatingControls';
// import RegionInfo from './components/RegionInfo';
import RegionInfo from '../src/components/RegionInfo'
import './App.css';

const { Footer } = Layout;

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Header />
        <Layout>
          <Sidebar />
          <Layout style={{ padding: '24px' }}>
            <div className="content">
              <Map />
              <FloatingControls />
              {/* Example region info (replace with actual data from API) */}
              <RegionInfo
                currency="$"
                speedUnit="kmph"
                distanceUnit="kilometers"
                volumeUnit="liters"
                timezone="UTC+5:30"
              />
            </div>
          </Layout>
        </Layout>
        <Footer className="footer">Plain text footer</Footer>
      </Layout>
    </Provider>
  );
}

export default App;
