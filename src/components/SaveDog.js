import React from 'react';

class SaveDog extends React.Component {
  constructor(props) {  //this.props.saveDog 
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <button type="button" className="btn btn-default btn-lg save-dog" style={{"color": "#ef4a2d", marginBottom: '-30px', opacity: 0.6}} onClick={() =>{this.props.saveDog(this.props.currentDog)}} >
        <span className="glyphicon glyphicon-heart" aria-hidden="true"></span> Add to kennel
      </button>
    );
  }
}

export default SaveDog;