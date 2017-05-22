import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

export class Map extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    console.log('current props1', this.props.dog);
    // console.log('addy', this.props.dog.contact.address1.$t, 'city', this.props.dog.contact.city.$t, 'state', this.props.dog.contact.state.$t);
    if (this.props && this.props.google) {
      // google is available
      const { google } = this.props;
      const maps = google.maps;
      var geocoder = new google.maps.Geocoder();

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      //
      // var lat;
      // var lng;

      // var address = { zipcode } or {city and state};
      // var address = { zipcode };

      geocoder.geocode({ 'address': this.props.dog.contact.address1.$t + this.props.dog.contact.city.$t + ',' + this.props.dog.contact.state.$t}, function (results, status) {
        // console.log('current props', this.props.dog.contact.address1.$t);
        if (status === google.maps.GeocoderStatus.OK) {
          var lat = results[0].geometry.location.lat();
          var lng = results[0].geometry.location.lng();
          
        // } else {
        //   console.log('map did not load correctly');

          console.log('lat, long', lat, lng);
          let zoom = 14;
          // let lat = 37.774929;
          // let lng = -122.419416;

          const center = new maps.LatLng(lat, lng);
          const mapConfig = Object.assign({}, {
            center: center,
            zoom: zoom
          });
          this.map = new maps.Map(node, mapConfig);
        }
      
      });
      //  alert('Latitude: ' + lat + ' Logitude: ' + lng);
       //
      
    }
  }


  render() {

    const style = {
      width: '30vw',
      height: '30vh'
    };


    return (
        <div ref='map' style={style}>
          Loading map...
        </div>
    );
  }
}
export default Map;


