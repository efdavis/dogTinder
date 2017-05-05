import React from 'react';
import listOfDogs from '../../dummyKennelData.js';
import ReactDOM from 'react-dom'

class Kennel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dogList: listOfDogs
    };

  }

  render(){
    return (
    <div><h1 className="page-header">My Kennel</h1>
        
        <ul className="media-list col-md-6">{listOfDogs.map(function(dog){
          return <li className="media dog-box" key={dog.id.$t}>
                    <h3 className="media-heading">
                        {dog.name.$t}
                      </h3>
                    <div className="media-left">
                      <img className="media-object img-rounded" src={dog.media.photos.photo[0]} width="200px" />
                      
                    </div>
                    <div className="media-body">
                      <p>{dog.description.$t}</p>
                      {Array.isArray(dog.breeds.breed) ? dog.breeds.breed.map(function(breed) {
                        return <div><span className="label label-primary">Breed: {breed.$t}</span></div>
                      }) : <div><span className="label label-primary">Breed: {dog.breeds.breed.$t}</span></div> }
                      <div><span className="label label-primary">Age: {dog.age.$t}</span></div>
                      <div><span className="label label-primary">Sex: {dog.sex.$t}</span></div>
                    </div>
                </li>
        })}</ul></div>);
  
  }

}

ReactDOM.render(<Kennel />, document.getElementById("kennel"));



// </div>{dog.name}</div><p>{dog.description}</p></div>