import React from 'react';

class KennelDogProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('this.props from kenneldogprofile:', this.props.dog)
    // const dog = this.props.dog;
    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <h3>{this.props.dog.name.$t}</h3>
        <img src={this.props.dog.media.photos.photo[0]} />
      </div>
    );
  }
}

export default KennelDogProfile;

{/*<div>
      <h1 className="page-header">My Kennel</h1>
        <ul className="media-list col-md-6">{this.props.animalList.map(function(dog){
          return <li className="media dog-box" key={dog.id.$t} style={{display: 'flex'}}>
                    <div className="media-left">
                      <img className="media-object img-rounded" src={dog.media.photos.photo[0]} width="50px" />
                    </div>
                    <h6 className="dogName">
                        {dog.name.$t}
                    </h6>
                    <div className="media-body">
                      <p>{dog.description.$t}</p>
                      {Array.isArray(dog.breeds.breed) ? dog.breeds.breed.map(function(breed) {
                        return <div><span className="label label-primary">Breed: {breed.$t}</span></div>
                      }) : <div><span className="label label-primary">Breed: {dog.breeds.breed.$t}</span></div> }
                      <div><span className="label label-primary">Age: {dog.age.$t}</span></div>
                      <div><span className="label label-primary">Sex: {dog.sex.$t}</span></div>
                    </div>
                </li>
        })}</ul></div>*/}