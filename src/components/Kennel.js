import React from 'react';
import listOfDogs from '../../dummyKennelData.js';
import ReactDOM from 'react-dom';
import KennelDogProfile from './KennelDogProfile';


class Kennel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameClicked: false,
      selectedDog: ''
    };
  this.clickDogName = this.clickDogName.bind(this);
  this.showProfile = this.showProfile.bind(this);
  }
  
  clickDogName() {
    this.setState({nameClicked: !this.state.nameClicked})
  }


  // closeProfile() {
  //   this.setState({clicked: !this.state.clicked})
  // }

  showProfile(dog) {
    this.setState({
      selectedDog: dog
    })
  }

  render() {
    console.log('THIS.STATE.CLICKED', this.state.nameClicked)
    return (
    <div>
    <h1 className="page-header">My Kennel</h1>
    <div style={{display: 'flex'}}>
        <ul className="media-list col-md-6">{this.props.animalList.map((dog) => {
          return <li className="media dog-box" key={dog.id.$t} style={{display: 'flex', justifyContent: 'flex-start'}}>
                    <div className="media-left">
                      <img className="media-object img-rounded" src={dog.media.photos.photo[0]} width="50px" height="50px" />
                    </div>
                    <h5 className="dogName" onClick={() => {this.clickDogName();console.log('dogname clicked!'); this.showProfile(dog)}}> {dog.name.$t} / {Array.isArray(dog.breeds.breed) ? <span>Mixed Breed</span> : dog.breeds.breed.$t}  / {dog.age.$t} / {dog.sex.$t}</h5>
                    {/*{this.state.clicked ? <div>{this.state.selectedDog.name.$t}</div> : <div></div>}*/}
                    {/*{this.state.clicked ? <KennelDogProfile name={dog.name.$t} image={dog.media.photos.photo[0]}breed={dog.breeds.breed.$t} age={dog.age.$t} sex={dog.sex.$t} description={dog.description.$t}/> : <div></div>}*/}
                </li>
        })}</ul>
        {this.state.nameClicked ? 
          <div>
            {/*{() => {this.clickDogName(); console.log('made it into conditional render')}}*/}
            <KennelDogProfile dog={this.state.selectedDog} removeDog={this.props.removeDog} clickName={this.clickDogName}/> 
          </div>
          : <div></div> 
        }    
    </div>
    </div>
    );
  }
}


module.exports = Kennel;
