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
    const dog = this.props.dog;
    if (this.state.clicked) {
        return (<div></div>);
    }
    else {
    return (
    <div>
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
          <div onClick={() => {this.props.removeDog(this.props.dog)}}>REMOVE DOG</div>

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

