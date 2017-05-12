import React from 'react';
import ContactShelter from './ContactShelter';
const Entities = require('html-entities').XmlEntities;
 
const entities = new Entities();

class KennelDogProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactClicked: false
    };
  }

  showContactInfo() {
    this.setState({contactClicked: !this.state.clicked})
  }

  render() {
    const dog = this.props.dog;

    return (
    <div className="kennelList">
      <div className="doggyProfile" >
          <div>
            <button type="button" className="btn btn default btn-sm pull-right" id="close-profile" onClick={() => this.props.clickName()}>
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </button>
          </div>
        <div className="dog-name">{dog.name.$t}</div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <img src={dog.media.photos.photo[0]} style={{width: '50%', height: '40%' }}/>
          
          <ul className="options fa-ul">
            {Array.isArray(dog.options.option) ? dog.options.option.map(info => <li key={info.$t}><i className="fa-li fa fa-check-square"></i>{info.$t}</li>) : <div></div>}
          </ul>
          
        </div>
          <div className="profile-description"><p>{entities.decode(dog.description.$t)}</p></div>
          {/*<div onClick={() => {this.props.removeDog(this.props.dog)}}>REMOVE DOG</div>*/}

          <button className="btn btn-primary contact-shelter" style={{color: 'black', borderColor: '#22807a', backgroundColor: '#22807a'}} onClick={() => this.showContactInfo()}>
            Contact Shelter
          </button>

          {this.state.contactClicked ? <ContactShelter contact={dog.contact} /> : <div></div>}

      </div>
    </div>
    );
  }
}

export default KennelDogProfile;

