import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleApiWrapper } from 'google-maps-react';
import Map from './Map.js';

export class MapContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Map google={this.props.google} dog={this.props.dog} />
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAP_API
})(MapContainer);
