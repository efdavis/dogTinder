import React from 'react';
//import NumericInput from 'react-numeric-input';
import { Button, DropdownButton,MenuItem } from 'react-bootstrap'; 

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
        <div className="row navigation-bar">
          <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <input type="number" className="form-control" placeholder="Zipcode" 
                  value={this.state.zipcode} onChange={(e) => { this.setState({zipcode: e.target.value}) }}/>
                </div>
                <button type="submit" className="btn btn-default" onClick={() => this.props.submitQuery(this.state)}>Submit</button>
              </form>
            </div>
            
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
            
            <div className="dropdown clearfix">
              <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" id="dropdownMenu1" aria-haspopup="true" aria-expanded="false">
                Age
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">Young</a></li>
                <li><a href="#">Adult</a></li>
                <li><a href="#">Senior</a></li>
              </ul>
            </div>
    
            <div className="dropdown">
              <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Gender
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu">
                <li><a href="#">Female</a></li>
                <li><a href="#">Male</a></li>
              </ul>
            </div>

            <div className="dropdown">
              <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Breed
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu">
                {/*Map over breeds list and for each breed create li tag*/}
                {/*<li><a href="#">Female</a></li>
                <li><a href="#">Male</a></li>*/}
              </ul>
            </div>


          </nav>
        </div>
      </div> 
    );
  }
}

export default NavBar;