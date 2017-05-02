import React from 'react';
//import NumericInput from 'react-numeric-input';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: {
        location: 0,
        breed: '',
        age: '',
        sex: ''
      }
    };
  }
  render() {
    return(
      <div className="container">
        {/*<div className="row header">
          <div className="col-xs-12 text-center">
            
          </div>
        </div>*/}

        <div className="row navigation-bar">
          <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <input type="number" minlength="6" maxLength="6" className="form-control" placeholder="Zipcode" 
                  value={this.state.query.zipcode} onChange={(e) => this.setState({query.zipcode: e.target.value})}/>
                </div>
                <button type="submit" className="btn btn-default" onClick={() => this.props.submitQuery(this.state)}>Submit</button>
              </form>
            </div>
            
            <div className="dropdown">
              <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Age
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu">
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