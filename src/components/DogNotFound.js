import React from 'react';

class DogNotFound extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h4>Sorry, no search results!</h4>
    </div>
    );
  }
}

export default DogNotFound;