import React from 'react';
import breeds from '../../utils/All_Breeds.js'
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
  this.handleZipChange = this.handleZipChange.bind(this);
  }
 

  handleSelect(event) {
    event.preventDefault();
    const name = event.target.name;
    let value = event.target.value;
    if (value === "Breed" || value === "Age" || value === "Gender") {
      value = '';
    }
    this.setState({[name]: value}, () => {
      console.log(this.state);
      this.props.submitQuery(this.state);
    });
    
    // this.props.submitQuery(this.state);
  }

  validate(zipcode){
    if(this.state.zipcode.length === 5 && Number.isInteger(parseInt(this.state.zipcode))) {
      console.log('hey its a zipcode!')
    }else{
      console.log('hey its not a zipcode!')
    }
  }

  handleZipChange(e){
    if(e.target.value.length === 5 && Number.isInteger(parseInt(e.target.value))) {
      this.setState({zipcode: e.target.value}, () => {
        this.props.submitQuery(this.state);
      })
    }
  }


  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'flex-start'}}>
          
        <form onSubmit={this.handleSelect}>
          <div className="zipcode">
            <label style={{display: 'flex', flexDirection: 'row', fontWeight: 400, height: '32px', backgroundColor: 'white', borderColor: '#ccc', marginRight: '17px'}}>
              <input placeholder="07470" onChange={this.handleZipChange} />                
            </label>
          </div>

          <div className="formBox" style={{display: 'flex', flexDirection: 'row'}}>
            <label style={{display: 'flex', flexDirection: 'row', fontWeight: 400, height: '32px', backgroundColor: 'white', borderColor: '#ccc', marginRight: '17px'}}>
              <select name="sex" onChange={this.handleSelect} style={{ backgroundColor: 'white'}}>
                <option defaultValue="gender">Gender</option>
                <option value="F">Female</option>
                <option value="M">Male</option>
              </select>
            </label>

            <label style={{display: 'flex', flexDirection: 'row', fontWeight: 400, height: '32px', backgroundColor: 'white', borderColor: '#ccc', marginRight: '17px'}}>
              <select name="age" onChange={this.handleSelect} style={{ backgroundColor: 'white'}}>
                <option defaultValue="age">Age</option>
                <option value="Baby">Baby</option>
                <option value="Young">Young</option>
                <option value="Adult">Adult</option>
                <option value="Senior">Senior</option>
              </select>
            </label>
    
            <label style={{display: 'flex', flexDirection: 'row', fontWeight: 400, height: '32px', backgroundColor: 'white', borderColor: '#ccc', marginRight: '17px'}}>
              <select name="breed" onChange={this.handleSelect} style={{ backgroundColor: 'white'}}>
                <option defaultValue="breed">Breed</option>
                {breeds.map(dog =>  <option key={dog.$t} value={dog.$t} >{dog.$t}</option> )}
              </select>
            </label>
          </div>            
        </form>
      </div>
      
    );
  }
}

export default NavBar;


{/*<Button type="submit" onClick={() => this.handleSelect()}>Search</Button>*/}
