import React from 'react';
import ContactShelter from './ContactShelter';


class KennelDogProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactClicked: false,
      clicked: false
    };
  }

  showContactInfo() {
    this.setState({contactClicked: !this.state.clicked})
  }

  closeProfile() {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    console.log('this.props from kenneldogprofile:', this.props.dog)
    console.log('this.props.dog.options', this.props.dog.options)
    const dog = this.props.dog;
    console.log('DOG', dog)
    if (this.state.clicked) {
        return (<div></div>);
    }
    else {
    return (
    <div>
     {/*<h3>{dog.name.$t}</h3>*/}
      <div className="doggyProfile" style={{display: 'flex', flexDirection: 'column', alignSelf: 'auto', borderStyle: 'solid'}}>
        <h3>{dog.name.$t}</h3>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <img src={dog.media.photos.photo[0]} style={{width: '50%', height: '40%' }}/>
          
          <ul className="options">
            {Array.isArray(dog.options.option) ? dog.options.option.map(info => <li>{info.$t}</li>) : <div></div>}
            {/*{dog.options.map(info => <li>{info.option.$t}</li>)}*/}
          </ul>

          <button type="button" className="btn btn default btn-sm" id="close-profile" onClick={() => this.closeProfile()}>
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
          
        </div>
        <div className="profile-description">{dog.description.$t}</div>
        <button className="btn btn-primary" onClick={() => this.showContactInfo()}>
          Contact Shelter
        </button>
        {this.state.contactClicked ? <ContactShelter contact={dog.contact} /> : <div></div>}
    
      </div>
    </div>
    );
  }
  }
}


export default KennelDogProfile;

{/*<div>
      <h1 className="page-header">My Kennel</h1>
        <ul className="media-list col-md-6">{this.props.animalList.map(function(dog){
          return <li className="media dog-box" key={dog.id.$t} style={{display: 'flex'}}>
                    <div className="media-left">
                      <img className="media-object img-rounded" src={dog.media.photos.photo[0]} width="50px" />
                    </div>
                    <h6 className="dogName">
                        {dog.name.$t}
                    </h6>
                    <div className="media-body">
                      <p>{dog.description.$t}</p>
                      {Array.isArray(dog.breeds.breed) ? dog.breeds.breed.map(function(breed) {
                        return <div><span className="label label-primary">Breed: {breed.$t}</span></div>
                      }) : <div><span className="label label-primary">Breed: {dog.breeds.breed.$t}</span></div> }
                      <div><span className="label label-primary">Age: {dog.age.$t}</span></div>
                      <div><span className="label label-primary">Sex: {dog.sex.$t}</span></div>
                    </div>
                </li>
        })}</ul></div>*/}
>>>>>>> Creatse KennelDogProfile component
