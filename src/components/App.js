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
import Footer from './Footer.js';


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
      shelterContactInfo: '',
      spinning: false,
      kennelSpinning: false
    }
    this.nextDog = this.nextDog.bind(this);
    this.previousDog = this.previousDog.bind(this);
    this.saveDoggy = this.saveDoggy.bind(this);
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.removeDogFromKennel = this.removeDogFromKennel.bind(this);
  }

  componentWillMount() {
    this.setState({kennelSpinning: true});
    axios.get('/dog-tinder-api/list')
    .then(response => {
      this.setState({kennelSpinning: false});
      this.setState({animalList: response.data});
    });
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
    if(next > this.state.allDogs.length - 1) {
      next = 0;
    }
    this.setState({
      featuredDog: this.state.allDogs[next],
      index: next
    });
  }

  previousDog() {
    let previous = this.state.index - 1;

    if (previous < 0) {
      previous = this.state.allDogs.length - 1;
    }
    
    this.setState({
      featuredDog: this.state.allDogs[previous],
      index: previous
    });
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

    console.log('idArray: ', idArray)
    if(cookies.get('loggedIn') === "true") {
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
    } else {
      this.setState({animalList: tempArray.reverse()}, () => {
        cookies.set('animalList', JSON.stringify(idArray), { path: '/'});
      });
    }

  }


  handleSearchQuery(theState) { 
    this.setState({spinning: true});
    let data = {}; 
    data.location = theState.zipcode;
    if (theState.breed !== '') { data.breed = theState.breed; }
    if (theState.age !== '') { data.age = theState.age; }
    if (theState.sex !== '') { data.sex = theState.sex; }

    axios.get('/dog-tinder-api', { 
      params: data
    })
    .then(response => {
      console.log('handle search query response data:', response.data);
      let data = response.data;
      this.setState({spinning: false})
      if(response.data.length === 0) {
        this.setState({dogNotFound: true });
      } else {
        this.setState({
          featuredDog: data[0],
          allDogs: data,
          dogNotFound: false,
          index: 0
        }) 
      }
    }) 
    .catch(error => {
      this.setState({dogNotFound: true });
    });
  };

  removeDogFromKennel(dog) {
    let tempArray = this.state.animalList.slice();

    tempArray.splice(tempArray.indexOf(dog), 1);
    this.setState({animalList: tempArray});
    
    let currentList = cookies.get('animalList');
    let dogId = parseInt(dog.id.$t);
    let indexToDelete = currentList.indexOf(dogId);
    currentList.splice(indexToDelete,1);
    cookies.set('animalList', currentList);

    if(cookies.get('loggedIn') === "true") {
      axios.delete('/dog-tinder-api/removeAnimal', {data: dog})
      .then(response => {
        console.log('remove dog success: ', response);
      })
      .catch(error => {
        console.log('remove dog error: ', error);
      })
    }
  };
  
  render() {
    var loginPrompt;
    var addDogs;
    if(cookies.get('loggedIn') === "true") {
      loginPrompt = <div>Welcome Back <a href="/logout">Logout</a></div>;
      addDogs = <a href="" className="add-dog-link" onClick={this.handleAddDogClick}><i className="fa fa-plus-square" aria-hidden="true"></i> Add animals looking for a home</a>;
    } else {
      loginPrompt = <FacebookLogin />;
      addDogs = null;
    }

    var kennelComponent;
    if(this.state.kennelSpinning) {
      kennelComponent = <div><i className="kennel-spin fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                        <span className="sr-only">Loading...</span></div>
    } else {
      kennelComponent = <Kennel 
          animalList={this.state.animalList.reverse()} 
          shelterContact={this.state.shelterContactInfo} 
          removeDog={this.removeDogFromKennel}
          spinning={this.state.kennelSpinning}
        />
    }

    return (
      <div className="homepage">
        <div className="title-logo">
          <div className="title">Dog Tinder</div>
          <img className="dogPaw" src="images/cuteDog.svg"/>
          <div className="facebook-login">{loginPrompt}</div>
        </div>
        {this.state.allDogs != '' && <NavBar submitQuery={this.handleSearchQuery} dogs={this.state.allDogs} spinning={this.state.spinning}/>}
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
        {addDogs}
        {kennelComponent}
      </div>
    );
  }
}



export default App;