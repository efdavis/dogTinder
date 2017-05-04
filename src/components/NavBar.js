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
  }

  handleSelect() {
    this.props.submitQuery(filter)
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
            
              <DropdownButton  title={'Age'} id={`dropdown-basic-${1}`} onSelect={() => this.props.submitQuery(this.state)}>
                <MenuItem eventKey="1" value={this.state.age} onChange={(e) => this.setState({age: e.target.value})} >Young</MenuItem>
                <MenuItem eventKey="2" value={this.state.age} onChange={(e) => this.setState({age: e.target.value})}>Adult</MenuItem>
                <MenuItem eventKey="3" value={this.state.age} onChange={(e) => this.setState({age: e.target.value})}>Senior</MenuItem>
              </DropdownButton>

              <DropdownButton  title={'Sex'} id={`dropdown-basic-${1}`} onSelect={() => this.props.submitQuery(this.state)}>
                <MenuItem eventKey="1" value={this.state.sex} onChange={(e) => this.setState({sex: e.target.value})}>Female</MenuItem>
                <MenuItem eventKey="2" value={this.state.sex} onChange={(e) => this.setState({sex: e.target.value})}>Male</MenuItem>
              </DropdownButton>
              
              <DropdownButton  title={'Breed'} id={`dropdown-basic-${1}`} onSelect={() => this.props.submitQuery(this.state)}>
                <MenuItem eventKey="1" >Female</MenuItem>
              </DropdownButton>
              

          </Navbar>

          {/*</nav>*/}
        {/*</div>*/}
      </div> 
    );
  }
}

export default NavBar;