import React from 'react';
import DisplayDog from './DisplayDog';
import axios from 'axios';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      selectAnimal: '',
      //featuredDog: this.props.dogs[0],
      // allDogs: this.props.dogs,
      featuredDog: '',
      allDogs: '',
      nextClicked: false
    }
    this.nextDog = this.nextDog.bind(this);
  }
  
  componentWillMount() {
    let that = this;
    axios.get('/dog-tinder-api?location=07470')
      .then(function(response) {
        console.log('AXIOS GET REQUEST RESPONSE DATA', response.data);
        return response.data;
      })
      .then(function(data) {
        console.log('THIS IS FEATURED DOG', data.petfinder.pets.pet[0])
        that.setState({
          featuredDog: data.petfinder.pets.pet[0],
          allDogs: data.petfinder.pets.pet
        })
      })
      .catch(function (error) {
        console.error(error);
      })
  }

  nextDog() {
    let next = this.state.index+1; 
    this.setState({
      featuredDog: this.state.allDogs[next],
      index: next
    });
  }

  // selectAnimal(animal) {
  //   axios({
  //     method: 'get',
  //     url: '',
  //     data: {
  //       animal: animal
  //     }
  //   });
  // }

  render() {
    return (
      <div>
        <h1>Dog Tinder</h1>
        {this.state.featuredDog !== '' ? <DisplayDog dog={this.state.featuredDog} nextDog={this.nextDog}/> : <div></div>}
        {/*<form action='/dog-tinder-api/' method="GET" onSubmit={ (e) => 
          e.preventDefault();
          let animal = document.getElementById('dropdown').value }>
        </form>
        <label>
        <select id="dropdown" value={this.state.value}>
          <option value="barnyard">barnyard</option>
          <option value="bird">bird</option>
          <option value="cat">cat</option>
          <option value="dog">dog</option>
          <option value="horse">horse</option>
          <option value="pig">pig</option>
          <option value="reptile">reptile</option>
          <option value="smallfurry">smallfurry</option>
        </select>
        </label>*/}

        {/*<div className="featured-dog">
          <DisplayDog  dog={this.state.featuredDog} nextDog={this.nextDog} />
        </div>*/}

      </div>
    );
  }
}



