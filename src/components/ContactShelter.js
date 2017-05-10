import React from 'react';

class ContactShelter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shelterID: '',
      clicked: false
    };
  }

  getShelterInfo(shelterID) {
  
  }

  showContactInfo() {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <div className="contact-shelter">
        <button className="btn btn-primary" onClick={() => this.showContactInfo()}>
          Contact Shelter
        </button>
        {this.state.clicked ? <div style={{borderStyle: 'solid'}}></div>: <div></div>}
      </div>
    );
  }
}

export default ContactShelter;