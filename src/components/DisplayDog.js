import React from 'react';

export default class DisplayDog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
       {console.log('THIS IS THIS.PROPS', this.props) }
        <img src={this.props.dog.media.photos.photo[0]['$t']} />
          <div className="header">{this.props.dog.name['$t']}</div>
          <div className="age">{this.props.dog.age['$t']}</div>
          <div className="breed">{this.props.dog.breeds.breed['$t']}</div>
        <button className="next" onClick={() => this.props.nextDog()}>Next</button>
      </div>
    );
  }
}