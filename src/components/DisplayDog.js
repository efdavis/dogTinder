import React from 'react';
import { Carousel } from 'react-bootstrap';

export default class DisplayDog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // index: this.props.index,
      // direction: null
    };
  }

  // handleSelect(selectedIndex, e) {
  //   this.setState({
  //     index: selectedIndex,
  //     direction: e.direction
  //   });
  // }

  render() {
    console.log('THIS IS THE PROPS.dog', this.props.dog.media.photos.photo)
    return (
      /*<Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
        <Carousel.Item>
        <img width={900} height={500} alt="900x500" src={this.props.dog.media.photos.photo[0]}/>
        <Carousel.Caption>
          {this.props.dog.name.$t}
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>*/

      <div className="bs-example bs-example-tabs">
      <div className="carousel slide">
        <div className="carousel-inner">
          <div className="item active">
            <img width={600} height={300} alt="600x300" src={this.props.dog.media.photos.photo[0]}/>
            <div className="carousel-caption">
              {this.props.dog.name.$t}
            </div>
          </div>
        </div>
        <a className="carousel-control left" role="button" href="#" onClick={() => this.props.nextDog()}>
          <span className="glyphicon glyphicon-chevron-left">
          </span>
          <span className="sr-only">Next</span>
        </a>
        <a className="carousel-control right" role="button" href="#" onClick={() => this.props.previousDog()}>
          <span className="glyphicon glyphicon-chevon-right">
          <span className="sr-only">Previous</span>
          </span>
        </a>

        <button type="button" className="btn btn-default btn-lg" style={{"color": "red"}} >
          <span className="glyphicon glyphicon-heart" aria-hidden="true"></span> Save
        </button>
      </div>
      </div>

    
    );
  }
}

