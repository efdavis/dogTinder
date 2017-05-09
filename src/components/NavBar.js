import React from 'react';
//import NumericInput from 'react-numeric-input';
import { Button, DropdownButton, MenuItem, Navbar, FormGroup, FormControl } from 'react-bootstrap'; 

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
      breed: '',
      age: '',
      sex: ''
    };
  this.handleSelect = this.handleSelect.bind(this);
  }
 

  handleSelect() {
    this.props.submitQuery(this.state);
  }

  validate(zipcode){
    if(this.state.zipcode.length === 5 && Number.isInteger(parseInt(this.state.zipcode))) {
      console.log('hey its a zipcode!')
    }else{
      console.log('hey its not a zipcode!')
    }
  }


  render() {
    console.log('navbar this.state:', this.state)
    const breeds = this.props.breeds.petfinder.breeds.breed;

    return (
      <div style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'flex-start'}}>
          
          <div className="zipcode">
            <form onSubmit={this.handleSelect}>
              <label style={{display: 'flex', flexDirection: 'row', fontWeight: 400, height: '32px', backgroundColor: 'white', borderColor: '#ccc', marginRight: '17px'}}>
                <input placeholder="Zipcode" value={this.state.zipcode} onChange={(e) => this.setState({zipcode: e.target.value})} />                
              </label>
            </form>
          </div>
              

          <div className="formBox" style={{display: 'flex', flexDirection: 'row'}}>
         
            <form id="selectGender" >
              <label style={{display: 'flex', flexDirection: 'row', fontWeight: 400, height: '32px', backgroundColor: 'white', borderColor: '#ccc', marginRight: '17px'}}>
                <select value={this.state.sex} onChange={(e) => {this.setState({sex: e.target.value}); this.handleSelect()}} style={{ backgroundColor: 'white'}}>
                  <option defaultValue="gender">Gender</option>
                  <option value="F">Female</option>
                  <option value="M">Male</option>
                </select>
              </label>
            </form>

            <form id="selectAge">
              <label style={{display: 'flex', flexDirection: 'row', fontWeight: 400, height: '32px', backgroundColor: 'white', borderColor: '#ccc', marginRight: '17px'}}>
                <select value={this.state.age} onChange={(e) => {this.setState({age: e.target.value}); this.handleSelect()}} style={{ backgroundColor: 'white'}}>
                  <option defaultValue="age">Age</option>
                  <option value="Baby">Baby</option>
                  <option value="Young">Young</option>
                  <option value="Adult">Adult</option>
                  <option value="Senior">Senior</option>
                </select>
              </label>
            </form>

            <form id="selectBreed">
              <label style={{display: 'flex', flexDirection: 'row', fontWeight: 400, height: '32px', backgroundColor: 'white', borderColor: '#ccc', marginRight: '17px'}}>
                <select value={this.state.breed} onChange={(e) => {this.setState({breed: e.target.value}); this.handleSelect()}} style={{ backgroundColor: 'white'}}>
                  <option defaultValue="breed">Breed</option>
                  {breeds.map(dog =>  <option value={dog.$t} onSelect={console.log('breed has been selected!')}>{dog.$t}</option> )}
                </select>
              </label>
            </form>
            {/*<Button type="submit" onClick={() => this.handleSelect()}>Search</Button>*/}
            </div>            
          </div>
      
    );
  }
}

export default NavBar;
