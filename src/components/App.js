import React from 'react';
import DisplayDog from './DisplayDog';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredDog: this.props.dogs[0],
      allDogs: this.props.dogs
    }
  }

  render() {
    return (
      <div>
        <h1>Dog Tinder</h1>
        <div className="featured-dog">
          <DisplayDog  dog={this.state.featuredDog}/>
          {/*<DisplayDog dog={this.state.featuredDog} />*/}
        </div>
        <div className="all-dogs">
          {console.log('test')}
        </div>
      </div>
    );
  }
}


//export default App;

