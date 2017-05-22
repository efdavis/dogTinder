import React from 'react';
import ContactShelter from './ContactShelter';
import MapContainer from './MapContainer.js';
const Entities = require('html-entities').XmlEntities;
 
const entities = new Entities();

class KennelDogProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactClicked: false,
      dog: this.props.dog,
      index: 0,
      featuredImage: this.props.dog.media.photos.photo[0]
    };
  }


  prettyPrintOptions(optionString) {
    return optionString.replace(/([A-Z])/g, ' $1')
    .replace(/^./, function(str) { 
      return str.toUpperCase();
    });
  }

  nextPhoto() {
    let next = this.state.index + 1;
    if (next > this.state.dog.media.photos.photo.length - 1) {
      next = 0;
    }
    this.setState({
      featuredImage: this.state.dog.media.photos.photo[next],
      index: next
    });
  }

  previousPhoto() {
    let previous = this.state.index - 1;
    if (previous < 0) {
      previous = this.state.dog.media.photos.photo.length - 1;
    }
    this.setState({
      featuredImage: this.state.dog.media.photos.photo[previous],
      index: previous
    });
  }

  render() {

    const dog = this.state.dog;
    console.log('doggg', dog);
    console.log('doggo location', dog.contact.address1.$t, dog.contact.zip.$t);

    if (dog.media.photos.photo.length === 1) {
      return (
      <div className="kennelList">
        <div className="doggyProfile" >
          <div>
            <button type="button" className="btn btn default btn-sm pull-right" id="close-profile" onClick={() => this.props.clickName()}>
              <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </button>
          </div>

          <div className="dog-name">{dog.name.$t}</div>
          
          <div className="carousel-dog-profile" style={{display: 'flex', flexDirection: 'row'}}>
            <div className="carousel slide" style={{justifyContent: 'center', overflow: 'visible'}} >
              <div className="carousel-inner">
                <div className="item active" style={{backgroundColor: 'black'}}>  
                  <img className="img-fluid profile" src={this.state.featuredImage} />
                </div>
              </div>
            </div>

            <ul className="options fa-ul">
              {dog.options && Array.isArray(dog.options.option) ? dog.options.option.map(info => <li key={info.$t}><i className="fa-li fa fa-check-square"></i>{this.prettyPrintOptions(info.$t)}</li>) : <div></div>}
            </ul>
  
          </div>

            <div className="profile-description"><p >{entities.decode(dog.description.$t)}</p></div>

            <button className="btn btn-primary contact-shelter" style={{color: 'black', borderColor: '#22807a', backgroundColor: '#22807a'}} onClick={() => this.setState({contactClicked: !this.state.contactClicked})}>
              Contact Shelter
            </button>

            {/*<MapContainer dog={this.state.dog}/>*/}

            {this.state.contactClicked ? <ContactShelter contact={dog.contact} dog={this.state.dog} /> : <div></div>}

          </div>
        </div>
      );
    } else {
      return (
    <div className="kennelList">
      <div className="doggyProfile" >

        <div>
          <button type="button" className="btn btn default btn-sm pull-right" id="close-profile" onClick={() => this.props.clickName()}>
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
        </div>

        <div className="dog-name">{dog.name.$t}</div>

      
        <div className="carousel-dog-profile" style={{display: 'flex', flexDirection: 'row'}}>
          <div className="carousel slide" style={{justifyContent: 'center', overflow: 'visible'}} >
            <div className="carousel-inner">
              <div className="item active" style={{backgroundColor: 'black'}}>  
                <img className="img-fluid profile" 
                     src={this.state.featuredImage} />
              </div>
            
              <a className="carousel-control left" onClick={() => this.previousPhoto()}>
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
              </a>

              <a className="carousel-control right" onClick={() => this.nextPhoto()}>
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
              </a>
             
            </div>
          </div>

          <ul className="options fa-ul">
            {dog.options && Array.isArray(dog.options.option) ? dog.options.option.map(info => <li key={info.$t}><i className="fa-li fa fa-check-square"></i>{this.prettyPrintOptions(info.$t)}</li>) : <div></div>}
          </ul>
          
        </div>
          <div className="profile-description"><p >{entities.decode(dog.description.$t)}</p></div>

          <button className="btn btn-primary contact-shelter" style={{color: 'black', borderColor: '#22807a', backgroundColor: '#22807a'}} onClick={() => this.setState({contactClicked: !this.state.contactClicked})}>
            Contact Shelter
          </button>

          {/*<MapContainer dog={this.state.dog}/>*/}

          {this.state.contactClicked ? <ContactShelter contact={dog.contact} dog={this.state.dog} /> : <div></div>}

      </div>
    </div>
      );
    }
  }
}

export default KennelDogProfile;

