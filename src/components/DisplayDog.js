import React from 'react';

export default class DisplayDog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('THIS IS THE PROPS.dog', this.props.dog.media.photos.photo)
    return (
      <div>
        <img src={this.props.dog.media.photos.photo[0]} />
          <div className="name"><bold>{this.props.dog.name['$t']}</bold></div>
          <div className="age">{this.props.dog.age['$t']}</div>
          <div className="breed">{this.props.dog.breeds.breed['$t']}</div>
        <button className="next" onClick={() => this.props.nextDog()}>Next</button>
      </div>
    );
  }
}