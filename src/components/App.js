import React from 'react';
import DisplayDog from './DisplayDog.js';
import axios from 'axios';
import Kennel from './Kennel.js';
import NavBar from './NavBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      featuredDog: '',
      allDogs: '',
    }
    this.nextDog = this.nextDog.bind(this);
    this.previousDog = this.previousDog.bind(this);
    this.saveDoggy = this.saveDoggy.bind(this);
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
  }
  

  componentWillMount() {
    axios.get('/dog-tinder-api?location=07470') 
      .then(response => {
        return response.data;
      })
      .then(data => {
        this.setState({
          featuredDog: data.petfinder.pets.pet[0],
          allDogs: data.petfinder.pets.pet
        })
      })
      .catch(error => {
        console.error(error)
      });
  }
  
  nextDog() {
    let next = this.state.index + 1; 
    this.setState({
      featuredDog: this.state.allDogs[next],
      index: next
    });
  }

  previousDog() {
    let previous = this.state.index - 1;
    this.setState({
      featuredDog: this.state.allDogs[previous],
      index: previous
    });
  }

  saveDoggy(dog) {
    axios({
      method: 'post',
      url: '/dog-tinder-api', //confirm correct endpoint for saving dog to list
      data: dog
    });
  }
  
  //sends submitted zipcode to server to zipcode endpoint
  handleSearchQuery(zipcode, breed, age, sex) {
    axios.get('/dog-tinder-api?', { //correct endpoint needed
      params: {
        zipcode: zipcode,
        breed: breed,
        age: age,
        sex: sex
      }
    })
    .then(response => {
      this.setState({
        //set all dogs equal to animals retrieved from specified zipcode 
        allDogs: response.data
      }) 
    }) 
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    console.log('APP COMPONENT THIS.STATE:', this.state)
    return (
      <div>
        <h1 style={{fontSize:'50px'}}>Dog Tinder</h1>
        <NavBar submitQuery={this.handleSearchQuery}/>
        {this.state.featuredDog !== '' ? <DisplayDog dog={this.state.featuredDog} nextDog={this.nextDog} previousDog={this.previousDog} saveDoggy={this.saveDoggy} /> : <div></div>}
      </div>
    );
  }
}



