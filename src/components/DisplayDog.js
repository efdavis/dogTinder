import React from 'react';
import { Carousel } from 'react-bootstrap';
import Cards, { Card } from 'react-swipe-card';
import SaveDog from './SaveDog';
import DogNotFound from './DogNotFound';

class DisplayDog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   if (this.props.dogNotFound) {
     return (
       <DogNotFound />
     );
   }
   else {
     return (
      <div className="carousel">
        <div id="featuredDog"className="carousel slide" style={{display: 'flex', justifyContent: 'center', overflow: 'visible'}}>
          <div className="carousel-inner" style={{overflow: 'visible'}} >
            <div className="item active" id="dog">
              <div>
                <img className="img-fluid" height="250px" style={{display: 'flex'}} alt="Responsive image" src={this.props.dog.media.photos.photo[0]}/>
                <div className="carousel-caption">
                <SaveDog currentDog={this.props.dog} saveDog={this.props.saveDoggy} style={{zIndex: 5}}/>
              </div>  
            </div>
          </div>
          <a className="carousel-control left" role="button" onClick={() => this.props.previousDog()}>
            <span className="glyphicon glyphicon-chevron-left">
            </span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control right" role="button" onClick={() => this.props.nextDog()}>
            <span className="glyphicon glyphicon-chevron-right">
            <span className="sr-only">Next</span>
            </span>
          </a>
        </div>
      </div>
       <div className="dogInfo">
         <ul className="carousel-dog-info">
           <div className="dogInfoTitle">Meet {this.props.dog.name.$t}!</div>
           {Array.isArray(this.props.dog.breeds.breed) ? <li className="bullet"><b>Breed: </b>Mixed Breed</li> : <li className="bullet"><b>Breed: </b>{this.props.dog.breeds.breed.$t}</li>}
           <li className="bullet"><b>Age: </b>{this.props.dog.age.$t}</li>
           <li className="bullet"><b>Sex: </b>{this.props.dog.sex.$t}</li>
         </ul>
      </div>
    </div>
    );
  }
  }
}

export default DisplayDog;
