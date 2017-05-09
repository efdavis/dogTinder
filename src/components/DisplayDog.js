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
      <div style={{display: 'flex'}}>
        <div id="featuredDog"className="carousel slide" style={{display: 'flex', justifyContent: 'center', overflow: 'visible'}}>
          <div className="carousel-inner" style={{overflow: 'visible'}} >
            <div className="item active" id="dog">
              <div>
                <img className="img-fluid" height="250px" style={{display: 'flex'}} alt="Responsive image" src={this.props.dog.media.photos.photo[0]}/>
                <div className="carousel-caption">
                {/*<div style={{position: 'relative', left: 'auto', right: 'auto', flexDirection: 'row', borderStyle: 'solid'}}>{this.props.dog.name.$t}</div>*/}
                <SaveDog currentDog={this.props.dog} saveDog={this.props.saveDoggy} style={{zIndex: 5}}/>
              </div>  
            </div>
          </div>
          <a className="carousel-control left" role="button" href="#" onClick={() => this.props.nextDog()}>
            <span className="glyphicon glyphicon-chevron-left">
            </span>
            <span className="sr-only">Next</span>
          </a>
          <a className="carousel-control right" role="button" href="#" onClick={() => this.props.previousDog()}>
            <span className="glyphicon glyphicon-chevron-right">
            <span className="sr-only">Previous</span>
            </span>
          </a>
        </div>
      </div>

       <div className="dogInfo" style={{display: 'flex', position: 'float', width: '140px', flexDirection: 'row', borderStyle: 'solid'}}>
         <ul>
           <li>{this.props.dog.name.$t}</li>
           <li>Breed: {this.props.dog.breeds.breed.$t}</li>
           <li>Age: {this.props.dog.age.$t}</li>
           <li>Sex: {this.props.dog.sex.$t}</li>
         </ul>
      </div>
    </div>
    );
  }
  }
}

export default DisplayDog;

