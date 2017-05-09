import React from 'react';
import listOfDogs from '../../dummyKennelData.js';
import ReactDOM from 'react-dom';
import KennelDogProfile from './KennelDogProfile';

class Kennel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      selectedDog: ''
    };
  this.clickDogName = this.clickDogName.bind(this);
  this.showProfile = this.showProfile.bind(this);
  }

  clickDogName() {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  showProfile(dog) {
    this.setState({
      selectedDog: dog
    })
  }



  render(){
    return (

    <div>
      <h1 className="page-header">My Kennel</h1>
        <ul className="media-list col-md-6">{this.props.animalList.map((dog) => {
          return <li className="media dog-box" key={dog.id.$t} style={{display: 'flex'}}>
                    <div className="media-left">
                      <img className="media-object img-rounded" src={dog.media.photos.photo[0]} width="50px" height="50px" />
                    </div>
                    <h5 className="dogName" onClick={() => {this.clickDogName(); this.showProfile(dog)}}>{dog.name.$t}</h5>
                </li>
        })}</ul>
        {this.state.clicked ? <KennelDogProfile dog={this.state.selectedDog}/> : <div></div> }    

    </div>
    </div>
    );  
  }
}


module.exports = Kennel;
// </div>{dog.name}</div><p>{dog.description}</p></div>