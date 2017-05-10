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
    const dog = this.props.dog;
    if (this.state.clicked) {
        return (<div></div>);
    }
    else {
    return (
    <div>
     <h3>{dog.name.$t}</h3>
      <div className="doggyProfile" style={{display: 'flex', flexDirection: 'column', alignSelf: 'auto', borderStyle: 'solid'}}>
        {/*<div><h3>{this.props.dog.name.$t}</h3></div>*/}
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <img src={dog.media.photos.photo[0]} style={{width: '50%', height: '40%' }}/>
          <button type="button" className="btn btn default btn-sm" id="close-profile" onClick={() => this.closeProfile()}>
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
        </div>
        <div className="profile-description">{dog.description.$t}</div>
        <button className="btn btn-primary" onClick={() => this.showContactInfo()}>
          Contact Shelter
        </button>
        {this.state.contactClicked ? <ContactShelter /> : <div></div>}
    
      </div>
    </div>
    );
  }
  }
}

export default KennelDogProfile;