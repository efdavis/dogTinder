import React from 'react';

class SaveDog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button type="button" className="btn btn-default btn-lg" style={{"color": "red"}} >
        <span className="glyphicon glyphicon-heart" aria-hidden="true"></span> Save
      </button>
    );
  }
}

export default SaveDog;