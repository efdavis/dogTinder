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
<<<<<<< HEAD
=======
   console.log('hi')
>>>>>>> Renders no search results message when no dog is found
   if (this.props.dogNotFound) {
     return (
       <DogNotFound />
     );
   }
    else {
    return (
<<<<<<< HEAD
      <div style={{display: 'flex'}}>
        <div id="featuredDog"className="carousel slide" style={{display: 'flex', justifyContent: 'center', overflow: 'visible'}}>
          <div className="carousel-inner" style={{overflow: 'visible'}} >
=======
      
        <div id="featuredDog"className="carousel slide" style={{display: 'flex', justifyContent: 'center'}}>
          <div className="carousel-inner" >
>>>>>>> Renders no search results message when no dog is found
            <div className="item active" id="dog">
              <div>
                <img className="img-fluid" height="250px" style={{display: 'flex'}} alt="Responsive image" src={this.props.dog.media.photos.photo[0]}/>
                <div className="carousel-caption">
                {/*<div style={{position: 'relative', left: 'auto', right: 'auto', flexDirection: 'row', borderStyle: 'solid'}}>{this.props.dog.name.$t}</div>*/}
                <SaveDog currentDog={this.props.dog} saveDog={this.props.saveDoggy} style={{zIndex: 5}}/>
              </div>  
            </div>
          </div>
          <a className="carousel-control left" role="button" href="#" onClick={() => this.props.previousDog()}>
            <span className="glyphicon glyphicon-chevron-left">
            </span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control right" role="button" href="#" onClick={() => this.props.nextDog()}>
            <span className="glyphicon glyphicon-chevron-right">
            <span className="sr-only">Next</span>
            </span>
          </a>
        </div>
      </div>

       <div className="dogInfo" style={{display: 'flex', position: 'float', width: '160px', flexDirection: 'row'}}>
         <ul>
           <h5><b>Meet {this.props.dog.name.$t}!</b></h5>
           {/*<li><b>Name: </b>{this.props.dog.name.$t}</li>*/}
           {Array.isArray(this.props.dog.breeds.breed) ? <li><b>Breed: </b>Mixed Breed</li> : <li><b>Breed: </b>{this.props.dog.breeds.breed.$t}</li>}
           {/*<li><b>Breed: </b>{Array.isArray(dogs.breeds.breed ? <}this.props.dog.breeds.breed.$t}</li>*/}
           <li><b>Age: </b>{this.props.dog.age.$t}</li>
           <li><b>Sex: </b>{this.props.dog.sex.$t}</li>
         </ul>
      </div>
    </div>
    );
  }
  }
}

export default DisplayDog;
