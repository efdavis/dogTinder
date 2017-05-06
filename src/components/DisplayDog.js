import React from 'react';
import { Carousel } from 'react-bootstrap';
import SaveDog from './SaveDog';

export default class DisplayDog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('THIS IS THE PROPS.dog', this.props.dog.media.photos.photo)
    return (



        <div id="featuredDog"className="carousel slide" >
          <div className="carousel-inner" >
            <div className="item active" id="dog">
              <div>
                <img className="img-fluid" height="250px" alt="Responsive image" src={this.props.dog.media.photos.photo[0]}/>
                <div className="carousel-caption">
                {this.props.dog.name.$t}
              </div>
              <SaveDog currentDog={this.props.dog} saveDog={this.props.saveDoggy}/>
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
    );
  }
}

