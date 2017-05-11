import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
    <div>
        DogTinder
      <br />
      San Francisco, CA
    </div>);
  }
}

ReactDOM.render(<Footer />, document.getElementById("footer"));