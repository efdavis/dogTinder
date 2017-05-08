import React from 'react';
//import NumericInput from 'react-numeric-input';
import { Button, DropdownButton, MenuItem, Navbar, FormGroup, FormControl } from 'react-bootstrap'; 

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: null,
      breed: '',
      age: '',
      sex: ''
    };
  this.handleSelect = this.handleSelect.bind(this);
  }
  
  handleSelect() {
    this.props.submitQuery(this.state);
  }

  render() {
    console.log('NAVBAR THIS.STATE:', this.state);
    console.log('THIS IS THIS.PROPS.DOGS', this.props.dogs)
    // console.log('NAVBAR THIS.PROPS.DOGS', this.props.submitQuery)
  
    return (
      <div style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'flex-start'}}>
          
          <div>
            <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type="number" placeholder="Zipcode" value={this.state.zipcode} onChange={(e) => this.setState({zipcode: e.target.value})}/>
              </FormGroup>
              <Button type="submit" onClick={() => this.handleSelect()}>Search</Button>
            </Navbar.Form>
          </div>
              

          <div className="formBox" style={{display: 'flex', flexDirection: 'row'}}>

            <form id="selectGender" >
              <label style={{display: 'flex', flexDirection: 'row', fontWeight: 400, height: '32px', backgroundColor: 'white', borderColor: '#ccc', marginRight: '17px'}}>
                <select value={this.state.sex} onChange={(e) => {this.setState({sex: e.target.value}); this.handleSelect()}} style={{ backgroundColor: 'white'}}>
                  <option selected="gender">Gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </label>
            </form>

            <form id="selectAge">
              <label style={{display: 'flex', flexDirection: 'row', fontWeight: 400, height: '32px', backgroundColor: 'white', borderColor: '#ccc', marginRight: '17px'}}>
                <select value={this.state.age} onChange={(e) => {this.setState({age: e.target.value}); this.handleSelect()}} style={{ backgroundColor: 'white'}}>
                  <option selected="gender">Age</option>
                  <option value="young">Young</option>
                  <option value="adult">Adult</option>
                  <option value="senior">Senior</option>
                </select>
              </label>
            </form>

              <form id="selectBreed">
              <label style={{display: 'flex', flexDirection: 'row', fontWeight: 400, height: '32px', backgroundColor: 'white', borderColor: '#ccc', marginRight: '17px'}}>
                <select value={this.state.breed} onChange={(e) => {this.setState({age: e.target.value}); this.handleSelect()}} style={{ backgroundColor: 'white'}}>
                  <option selected="gender">Breed</option>
                  {this.props.dogs.map(dog =>  <option value="breed">{dog.breeds.breed.$t}</option> )}
                </select>
              </label>
            </form>
            </div>
          </div>
      
    );
  }
}

export default NavBar;