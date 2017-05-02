import React from 'react';
import axios from 'axios';
import DisplayDog from './DisplayDog';
import NavBar from './NavBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      selectAnimal: '',
      featuredDog: '',
      allDogs: '',
    }
    this.nextDog = this.nextDog.bind(this);
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
  }
  
  componentWillMount() {
    let that = this;
    axios.get('/dog-tinder-api?location=07470')
      .then(function(response) {
        return response.data;
      })
      .then(function(data) {
        that.setState({
          featuredDog: data.petfinder.pets.pet[0],
          allDogs: data.petfinder.pets.pet
        })
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  // componentWillMount() {
  //   axios.get('/dog-tinder-api?location=07470') 
  //     .then(response => {
  //       return response.data;
  //     })
  //     .then(data => {
  //       this.setState({
  //         featuredDog: data.petfinder.pets.pet[0],
  //         allDogs: data.petfinder.pets.pet
  //       })
  //     })
  //     .catch(error => {
  //       console.error(error)
  //     });
  // }

  nextDog() {
    let next = this.state.index+1; 
    this.setState({
      featuredDog: this.state.allDogs[next],
      index: next
    });
  }
  
  //sends submitted zipcode to server to zipcode endpoint
  handleSearchQuery(query) {
    axios.get('/dog-tinder-api?', {
      params: query
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
    console.log(this.state)
    return (
      <div>
        <h1 style={{fontSize:'50px'}}>Dog Tinder</h1>
        
          {this.state.featuredDog !== '' ? <DisplayDog dog={this.state.featuredDog} nextDog={this.nextDog} submitQuery={this.handleSearchQuery}/> : <div></div>}
      </div>
    );
  }
}



