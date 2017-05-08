import React from 'react';
import axios from 'axios';
import DisplayDog from './DisplayDog';
import Kennel from './Kennel.js';
import NavBar from './NavBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      featuredDog: '',
      allDogs: '',
      animalList: []
    }
    this.nextDog = this.nextDog.bind(this);
    this.previousDog = this.previousDog.bind(this);
    this.saveDoggy = this.saveDoggy.bind(this);
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
  }
  

  componentWillMount(zipcode=94103) {
    axios.get('/dog-tinder-api', {
      params: {
        location: zipcode
      }
    }) 
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

  getBreeds() {
 
  }

  saveDoggy(dog) { 
    let tempArray = this.state.animalList.slice();
    tempArray.push(dog);
    let idArray = tempArray.map(function(item){return item.id.$t});
    axios({
      method: 'post',
      url: '/dog-tinder-api/list', 
      data: idArray
    }).then(() => {
      this.setState({animalList: tempArray});
    })
    .catch(function(){
      console.log("There was an error saving the list to the database")
    })
  }


  handleSearchQuery(zipcode = 94103, breed, age, sex) { 
    console.log('GET REQUEST PARAMETRS:')
    let data = {}; 
    const filterArgs = function() {
      data.zipcode = zipcode;
      if (breed !== '') { data.breed = breed; }
      if (age !== '') { data.age = age; }
      if (sex !== '') { data.sex = sex; }
    }
    axios.get('/dog-tinder-api', { 
      params: data
    })
    .then(response => {
      this.setState({
        allDogs: response.data
      }) 
    }) 
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    console.log(this.state.allDogs)
    return (
      <div>
        <h1 style={{fontSize:'50px'}}>Dog Tinder</h1>
        {this.state.allDogs !== '' && <NavBar submitQuery={this.handleSearchQuery} dogs={this.state.allDogs}/>}
        {this.state.featuredDog !== '' ? <DisplayDog dog={this.state.featuredDog} dogs={this.state.allDogs} nextDog={this.nextDog} previousDog={this.previousDog} saveDoggy={this.saveDoggy} /> : <div></div>}
        <Kennel animalList={this.state.animalList}/>
      </div>
    );
  }
}



export default App;