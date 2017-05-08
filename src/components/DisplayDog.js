import React from 'react';
import { Carousel } from 'react-bootstrap';
import Cards, { Card } from 'react-swipe-card';
import SaveDog from './SaveDog';

export default class DisplayDog extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const data = ['Alexandre', 'Thomas', 'Lucien']

    console.log('THIS IS THE PROPS.dog', this.props.dog.media.photos.photo)
    return (
/*
      <Cards style={{backgroundColor:'blue'}} onEnd={()=>console.log('end')} className='master-root'>
        {data.map(item => 
          <Card style={{backgroundColor:'blue'}}
            onSwipeLeft={()=>console.log('swiped left')} 
            onSwipeRight={()=>console.log('swiped left')}>
            <h2>{data}</h2>
          </Card>
        )}
      </Cards>*/



        <div id="featuredDog"className="carousel slide" style={{display: 'flex', justifyContent: 'center'}}>
          <div className="carousel-inner" >
            <div className="item active" id="dog">
              <div>
                <img className="img-fluid" height="250px" style={{display: 'flex'}} alt="Responsive image" src={this.props.dog.media.photos.photo[0]}/>
                <div className="carousel-caption">
                <div>{this.props.dog.name.$t}</div>
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
    );
  }
}

