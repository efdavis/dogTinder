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
        <div className="header">{this.props.dog.name['$t']}</div>
          <div className="age">{this.props.dog.age['$t']}</div>
          <div className="breed">{this.props.dog.breeds.breed['$t']}</div>
      </div>
    );
  }
}