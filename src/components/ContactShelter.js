import React from 'react';

class ContactShelter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shelterID: '',
      clicked: false
    };
  }
 
  render() {
    const contactInfo = this.props.contact;
    return (
        <div className="contact-shelter">
          {typeof contactInfo.email.$t === 'string' ? <span><b>Email: </b>{contactInfo.email.$t}</span> : <span><b>Email: </b>Not provided</span>}<br/>
          {contactInfo.phone.$t === undefined ? <span><b>Phone: </b>Not provided</span> : <span><b>Phone: </b>{contactInfo.phone.$t}</span>}
        </div>
    );
  }
}

export default ContactShelter;