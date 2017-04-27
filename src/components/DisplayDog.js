import React from 'react';

export default class DisplayDog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
 
        {/*{props.dog.media.photos.photo[0]['$t']}*/}
        <img src={this.props.dog.media.photos.photo[0]['$t']} />
      </div>
    );
  }
}