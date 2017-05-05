import React from 'react';
//import NumericInput from 'react-numeric-input';
import { Button, DropdownButton, MenuItem, Navbar, FormGroup, FormControl } from 'react-bootstrap'; 

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: 0,
      breed: '',
      age: '',
      sex: ''
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  //on dropdown menu select, set of state property must be set to input value
    //the new state must be passed up to parent component 

  handleSelect(value, e) {
    this.setState({value: e.target.value});
    this.props.submitQuery(this.state);
  }
  

  render() {
    console.log('NAVBAR THIS.STATE:', this.state);
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
                  <FormControl type="number" placeholder="Zipcode" value={this.state.zipcode} onChange={(e) => this.setState({zipcode: e.target.value})}/>
                </FormGroup>
                <Button type="submit" onClick={() => this.props.submitQuery(this.state)}>Submit</Button>
              </Navbar.Form>

              <div className="container">

                <select>
                  <option value="test">Female</option>
                  <option value="test2">Male</option>
                </select>

                <select>
                  <option value="test">Young</option>
                  <option value="test2">Adult</option>
                  <option value="test2">Senior</option>
                </select>

              </div>
            
              {/*<DropdownButton  title={'Age'} id={`dropdown-basic-${1}`}>
                <MenuItem eventKey="1" value={this.state.age} onSelect={(e) => this.setState({age: e.target.value})}>Young</MenuItem>
                <MenuItem eventKey="2" value={this.state.age} onSelect={(e) => this.setState({age: e.target.value})}>Adult</MenuItem>
                <MenuItem eventKey="3" value={this.state.age} onSelect={(e) => this.setState({age: e.target.value})}>Senior</MenuItem>
              </DropdownButton>

              <DropdownButton  title={'Sex'} id={`dropdown-basic-${1}`}>
                <MenuItem eventKey="1" value={this.state.sex} onSelect={(e) => this.setState({sex: e.target.value})}>Female</MenuItem>
                <MenuItem eventKey="2" value={this.state.sex} onSelect={(e) => this.setState({sex: e.target.value})}>Male</MenuItem>
              </DropdownButton>
              
              <DropdownButton  title={'Breed'} id={`dropdown-basic-${1}`} >
                <MenuItem eventKey="1" >Female</MenuItem>
              </DropdownButton>*/}
              
             
              {/*<div className="dropdown clearfix"> <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> Dropdown <span className="caret"></span> </button> <ul className="dropdown-menu" aria-labelledby="dropdownMenu1"> <li><a href="#">Action</a></li> <li><a href="#">Another action</a></li> <li><a href="#">Something else here</a></li> </ul> </div>*/}



          </Navbar>

          {/*</nav>*/}
        {/*</div>*/}
      </div> 
    );
  }
}

export default NavBar;