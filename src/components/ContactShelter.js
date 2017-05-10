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
    console.log('CONTACT SHELTER THIS.PROPS', typeof this.props.contact.email.$t)
    return (
      <div className="contact-shelter">
        {typeof contactInfo.email.$t === 'string' ? <span><b>Email: </b>{contactInfo.email.$t}</span> : <span><b>Email: </b>Not provided</span>}<br/>
        <b>Phone: </b>{contactInfo.phone.$t}
      </div>
    );
  }
}

export default ContactShelter;