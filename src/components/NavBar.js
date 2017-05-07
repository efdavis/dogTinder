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
  
  handleSelect() {
    this.props.submitQuery(this.state);
  }

  render() {
    console.log('NAVBAR THIS.STATE:', this.state);
    // console.log('NAVBAR THIS.PROPS.DOGS', this.props.submitQuery)
  
    return(
      <div className="container">
        {/*<div className="row navigation-bar">
          <nav className="navbar navbar-default" role="navigation">*/}

            <Navbar>
              
              <Navbar.Form pullLeft>
                <FormGroup>
                  <FormControl type="number" placeholder="Zipcode" value={this.state.zipcode} onChange={(e) => this.setState({zipcode: e.target.value})}/>
                </FormGroup>
                <Button type="submit" onClick={() => this.props.submitQuery(this.state)}>Submit</Button>
              </Navbar.Form>

              {/*<div className="container">*/}

              <form id="selectGender">
                <label>
                  <select value={this.state.sex} onChange={(e) => {this.setState({sex: e.target.value}); this.handleSelect()}}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                </label>
              </form>
 
              <form id="selectAge">
                <label>
                  <select value={this.state.age} onChange={(e) => {this.setState({age: e.target.value}); this.handleSelect()}} >
                    <option>Young</option>
                    <option>Adult</option>
                    <option>Senior</option>
                  </select>
                </label>
              
              </form>

               <form id="selectBreed">
                <label>
                  <select value={this.state.breed} onChange={(e) => this.setState({breed: e.target.value})}>
                    
                  </select>
                </label>
              </form>

                

              {/*</div>*/}
            
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