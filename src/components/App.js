import React from 'react';
import DisplayDog from './DisplayDog';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      featuredDog: this.props.dogs[0],
      allDogs: this.props.dogs,
      nextClicked: false
    }
    this.nextDog = this.nextDog.bind(this);
  }

  nextDog() {
    let next = this.state.index+1; 
    this.setState({
      featuredDog: this.state.allDogs[next],
      index: next
    });
  }

  render() {
    console.log(this.state.featuredDog)
    return (
      <div>
        <h1>Dog Tinder</h1>
        <div className="featured-dog">
          <DisplayDog  dog={this.state.featuredDog} nextDog={this.nextDog} />
        </div>
      </div>
    );
  }
}



