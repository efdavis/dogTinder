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
        {/*Address: {contactInfo.address1.$t, contactInfo.city.$t, contactInfo.state.$t, contactInfo.zip.$t}*/}
        {/*Email: {contactInfo.email}*/}
        {typeof contactInfo.email.$t === 'string' ? <span>Email: {contactInfo.email.$t}</span> : <span>Email: Not provided</span>}<br/>
        Phone: {contactInfo.phone.$t}

      </div>
    );
  }
}

export default ContactShelter;