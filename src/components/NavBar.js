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
    console.log('handle select invoked')
    this.props.submitQuery(this.state);
    // this.setState({zipcode: ''})
    // e.preventDefault();
  }

  validate(zipcode){
    if(this.state.zipcode.length === 5 && Number.isInteger(parseInt(this.state.zipcode))) {
      console.log('hey its a zipcode!')
    }else{
      console.log('hey its not a zipcode!')
    }
  }


  render() {
    console.log('NAVBAR THIS.STATE:', this.state);
    console.log('THIS IS THIS.PROPS.DOGS', this.props.dogs)
  
    return (
      <div style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'flex-start'}}>
          
          {/*<div className="zipcode" style={{display: 'flex', flexDirection: 'row', fontWeight: 400, height: '32px', backgroundColor: 'white', borderColor: '#ccc', marginRight: '17px'}}>
            <Navbar.Form pullLeft>
              <FormGroup>
              <FormControl placeholder="Zipcode" value={this.state.zipcode} onChange={(e) => {this.setState({zipcode: e.target.value}); this.handleSelect()}}/>
              </FormGroup>              
            </Navbar.Form>
          </div>*/}

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
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </label>
            </form>

            <form id="selectAge">
              <label style={{display: 'flex', flexDirection: 'row', fontWeight: 400, height: '32px', backgroundColor: 'white', borderColor: '#ccc', marginRight: '17px'}}>
                <select value={this.state.age} onChange={(e) => {this.setState({age: e.target.value}); this.handleSelect()}} style={{ backgroundColor: 'white'}}>
                  <option defaultValue="age">Age</option>
                  <option value="young">Young</option>
                  <option value="adult">Adult</option>
                  <option value="senior">Senior</option>
                </select>
              </label>
            </form>

            {/*<form id="selectBreed">
              <label style={{display: 'flex', flexDirection: 'row', fontWeight: 400, height: '32px', backgroundColor: 'white', borderColor: '#ccc', marginRight: '17px'}}>
                <select value={this.state.breed} onChange={(e) => {this.setState({age: e.target.value}); this.handleSelect()}} style={{ backgroundColor: 'white'}}>
                  <option defaultValue="breed">Breed</option>
                  {this.props.dogs.map(dog =>  <option value="breed">{dog.breeds.breed.$t}</option> )}
                </select>
              </label>
            </form>*/}
            <Button type="submit" onClick={() => this.handleSelect()}>Search</Button>
            </div>            
          </div>
      
    );
  }
}

export default NavBar;
