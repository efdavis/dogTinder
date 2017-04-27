import React from 'react';
import DisplayDog from './DisplayDog';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredDog: this.props.dogs[0],
      allDogs: this.props.dogs
    }
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  handleNextClick() {
  //when next is clicked show next dog in list
   this.setState({
      
   });
  }

  render() {
    return (
      <div>
        <h1>Dog Tinder</h1>
        <div className="featured-dog">
          <DisplayDog  dog={this.state.featuredDog}/>
          {/*<DisplayDog dog={this.state.featuredDog} />*/}
        </div>
        <button classname="Next">Next</button>
        <div className="all-dogs">
          {console.log('test')}
        </div>
      </div>
    );
  }
}


//export default App;

