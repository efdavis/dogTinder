import React from 'react';

class DogNotFound extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h4>No dog matches search results!</h4>
      <img className="sad-dog" src="images/droopy.jpg"/>
    </div> 
    );
  }
}

export default DogNotFound;