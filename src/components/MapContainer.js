import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleApiWrapper } from 'google-maps-react';
import Map from './Map.js';

export class MapContainer extends React.Component {

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Map google={this.props.google} />
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAP_API
})(MapContainer);
