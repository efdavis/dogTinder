import React from 'react';

class KennelDogProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false};
  }

  closeProfile() {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    console.log('this.props from kenneldogprofile:', this.props.dog)
    const dog = this.props.dog;
    if (this.state.clicked) {
        return (<div></div>);
    }
    else {
    return (
    <div>
     <h3>{dog.name.$t}</h3>
      <div className="doggyProfile" style={{display: 'flex', flexDirection: 'row', alignSelf: 'auto', borderStyle: 'solid'}}>
        {/*<div><h3>{this.props.dog.name.$t}</h3></div>*/}
        <img src={dog.media.photos.photo[0]} style={{width: '50%', height: '40%' }}/>
        <div className="profile-description">{dog.description.$t}</div>
        <button type="button" className="btn btn default btn-sm" onClick={() => this.closeProfile()}>
          <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </button>
      </div>
    </div>
    );
  }
  }
}

export default KennelDogProfile;