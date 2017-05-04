import React from 'react';
//import NumericInput from 'react-numeric-input';
import { Button, DropdownButton, MenuItem, Navbar, FormGroup, FormControl } from 'react-bootstrap'; 

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //title: 'test',
      zipcode: 0,
      breed: '',
      age: '',
      sex: ''
    };
  }
  render() {
    return(
      <div className="container">
        {/*<div className="row navigation-bar">
          <nav className="navbar navbar-default" role="navigation">*/}

           {/*<div className="container-fluid">
              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <input type="number" className="form-control" placeholder="Zipcode" 
                  value={this.state.zipcode} onChange={(e) => { this.setState({zipcode: e.target.value}) }}/>
                </div>
                <button type="submit" className="btn btn-default" onClick={() => this.props.submitQuery(this.state)}>Submit</button>
              </form>
            </div>*/}

            <Navbar>
              <Navbar.Form pullLeft>
                <FormGroup>
                  <FormControl type="number" placeholder="Zipcode" />
                </FormGroup>
              </Navbar.Form>
            
            
            <DropdownButton  title={'Age'} id={`dropdown-basic-${1}`}>
              <MenuItem eventKey="1" onClick={()=>{console.log('hi')}} >Young</MenuItem>
              <MenuItem eventKey="2">Adult</MenuItem>
              <MenuItem eventKey="3" active>Senior</MenuItem>
            </DropdownButton>

            <DropdownButton  title={'Sex'} id={`dropdown-basic-${1}`}>
              <MenuItem eventKey="1" onClick={()=>{console.log('hi')}} >Female</MenuItem>
              <MenuItem eventKey="2">Male</MenuItem>
            </DropdownButton>
            
            <DropdownButton  title={'Breed'} id={`dropdown-basic-${1}`}>
              <MenuItem eventKey="1" onClick={()=>{console.log('hi')}} >Female</MenuItem>
            </DropdownButton>
            
          </Navbar>

          {/*</nav>*/}
        {/*</div>*/}
      </div> 
    );
  }
}

export default NavBar;