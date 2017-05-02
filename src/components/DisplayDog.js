import React from 'react';

export default class DisplayDog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: 0
    }
  }
  render() {
    console.log('THIS IS THE PROPS.dog', this.props.dog.media.photos.photo)
    return (
      <div className="container">
        <div className="col-md-7">
          <img src={this.props.dog.media.photos.photo[0]} />
        </div>
        <div className="col-md-9">
          <div className="name"><bold>{this.props.dog.name['$t']}</bold></div>
          <div className="age">{this.props.dog.age['$t']}</div>
          <div className="breed">{this.props.dog.breeds.breed['$t']}</div>
          <button className="btn btn-default" onClick={() => this.props.nextDog()}>Next</button>
        </div>
      </div>
    );
  }
}

