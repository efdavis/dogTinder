import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import DisplayDog from './DisplayDog';
import Kennel from './Kennel.js';
import NavBar from './NavBar';
import DogNotFound from './DogNotFound';
import Cookies from 'universal-cookie';
import uniqBy from 'lodash.uniqby';
import uniq from 'lodash.uniq';
import AddAnimalForm from './AddAnimalForm.js';
import FacebookLogin from './FacebookLogin.js';

const cookies = new Cookies();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      featuredDog: '',
      allDogs: '',
      animalList: [],
      dogNotFound: false,
      shelterContactInfo: ''

    }
    this.nextDog = this.nextDog.bind(this);
    this.previousDog = this.previousDog.bind(this);
    this.saveDoggy = this.saveDoggy.bind(this);
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.getShelter = this.getShelter.bind(this);
    this.formatDogName = this.formatDogName.bind(this);
    this.removeDogFromKennel = this.removeDogFromKennel.bind(this);
  }

  componentWillMount() {
    // if user has an animalList in their cookies
    if(cookies.get('animalList')) {
      axios.get('/dog-tinder-api/list')
      .then(response => {
        this.setState({animalList: response.data});
      })
    }
    axios.get('/dog-tinder-api?location=07470') 
      .then(response => {
        console.log('componentwillmount response.data', response.data)
        return response.data;
      })
      .then(data => {
        this.setState({
          featuredDog: data[0],
          allDogs: data
        })
      })
      .catch(error => {
        console.error('Error on componentWillMount', error)
      });
  }
  
  nextDog() {
    let next = this.state.index + 1; 
    console.log('next dog index', next)
    if (next > 25) {
      this.setState({
        featuredDog: this.state.allDogs[next],
        index: 0
      })
    } else {
    this.setState({
      featuredDog: this.state.allDogs[next],
      index: next
    });
    }
  }

  previousDog() {
    let previous = this.state.index - 1;
    console.log('previous dog index:', previous)
    if (previous < 0) {
      this.setState({
        featuredDog: this.state.allDogs[previous],
        index: 25
      })
    } else {
    this.setState({
      featuredDog: this.state.allDogs[previous],
      index: previous
    });
    }
  }

  handleAddDogClick(event) {
    event.preventDefault();
    ReactDOM.render(<AddAnimalForm />, document.getElementById("main"));
  }

  saveDoggy(dog) { 
    let tempArray = this.state.animalList.slice();
    tempArray.push(dog);
    tempArray = uniqBy(tempArray, 'id.$t');
    let idArray = uniq(tempArray.map(function(item){return parseInt(item.id.$t)}));

    axios({
      method: 'post',
      url: '/dog-tinder-api/list', 
      data: idArray
    }).then(() => {
      this.setState({animalList: tempArray});
      cookies.set('animalList', JSON.stringify(idArray), { path: '/'});
    })
    .catch(() => {
      // this.setState({animalList: uniq(tempArray)});
      // cookies.set('animalList', JSON.stringify(idArray), { path: '/'});
      console.log("There was an error saving the list to the database")
    })
  }


  handleSearchQuery(theState) { 
    let data = {}; 
    data.location = theState.zipcode;
    if (theState.breed !== '') { data.breed = theState.breed; }
    if (theState.age !== '') { data.age = theState.age; }
    if (theState.sex !== '') { data.sex = theState.sex; }

    axios.get('/dog-tinder-api', { 
      params: data
    })
    .then(response => {
      console.log('handle search query response data:', response.data)
      let data = response.data
      this.setState({
        featuredDog: data[0],
        allDogs: data
      }) 
    }) 
    .catch(error => {
      this.setState({dogNotFound: !this.state.dogNotFound })
    });
  }

  removeDogFromKennel(dog) {
    console.log('You clicked me! Here is your dog: ', dog);
    axios.delete('/dog-tinder-api/removeAnimal', {data: dog})
    .then(response => {
      console.log('remove dog success: ', response);
    })
    .catch(error => {
      console.log('remove dog error: ', error);
    })
  }
  
  //Passes in shelter id from ContactShelter component
  getShelter(shelterID) {
    axios.get('/dog-tinder-api/shelter', { 
      params: {
        ID: shelterID
      }
    })
    .then(response => {
      console.log('get request for shelter contact info:', response);
      let data = response.data;
      this.setState({
        shelterContactInfo: data
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  formatDogName() {
    
  }
  

  
  render() {

    console.log('animalList: ', this.state.animalList)
    // console.log(this.state.allDogs)
    var loginPrompt;
    var addDogs;
    if(cookies.get('loggedIn') === "true") {
      loginPrompt = <div>Welcome Back <a href="/logout">Logout?</a></div>;
      addDogs = <a onClick={this.handleAddDogClick}>Add animals looking for a home</a>;
    } else {
      loginPrompt = <FacebookLogin />;
      addDogs = null;
    }


    return (
      <div className="homepage">
        <div className="title-logo">
          <h1 className="title">Dog Tinder</h1>
          <img className="dogPaw" src="images/dogPaw.svg"/>
        </div>
        {loginPrompt}
        {this.state.allDogs != '' && <NavBar submitQuery={this.handleSearchQuery} dogs={this.state.allDogs}/>}
        {this.state.featuredDog !== '' ? 
        <DisplayDog 
          dog={this.state.featuredDog} 
          dogs={this.state.allDogs} 
          nextDog={this.nextDog} 
          previousDog={this.previousDog} 
          saveDoggy={this.saveDoggy} 
          dogNotFound={this.state.dogNotFound} 
        /> 
        : 
        <div></div>
        }
        <Kennel 
          animalList={this.state.animalList} 
          shelterContact={this.state.shelterContactInfo} 
          removeDog={this.removeDogFromKennel}
        />
        {addDogs}
      </div>
    );
  }
}



export default App;