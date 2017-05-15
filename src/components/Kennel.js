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

  showProfile(dog) {
    this.setState({
      selectedDog: dog
    })
  }

  render() {
    console.log('animal list from kennel:', this.props.animalList)
    return (

      <div>
        {this.props.animalList.length === 0 ? <div></div> : <div className="page-header-kennel">My Kennel</div> }
        <div style={{display: 'flex', flexWrap: 'nowrap'}}>
          <ul className="media-list" style={{flexWrap: 'nowrap'}}>{this.props.animalList.map((dog) => {
            return <li className="media dog-box" key={dog.id.$t} style={{display: 'flex', justifyContent: 'flex-start'}}>
                      <div className="media-left">
                        <img className="media-object img-rounded" src={dog.media.photos.photo[0]} width="50px" height="50px" />
                      </div>
                      <div className="doglist-removebutton">
                        <h5 className="dogName" onClick={() => {this.clickDogName(); this.showProfile(dog)}}> {dog.name.$t} / {Array.isArray(dog.breeds.breed) ? <span>{dog.breeds.breed[0].$t}, {dog.breeds.breed[1].$t}</span> : dog.breeds.breed.$t}  / {dog.age.$t} / {dog.sex.$t}</h5>
                        <button className="btn btn-default btn-xs" id="remove-dog" onClick={() => {this.props.removeDog(dog)}}>Remove</button>
                      </div>
                   </li>
            })}
          </ul>
          {this.state.nameClicked ? 
            <div>
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
