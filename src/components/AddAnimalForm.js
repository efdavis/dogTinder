import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import allBreeds from '../../utils/All_Breeds.js'

class AddAnimalForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      age: '',
      animal: 'Dog',
      breed: '',
      address1: '',
      address2: '',
      city: '',
      email: '',
      phone: '',
      state: '',
      zip: '',
      description: '',
      photo: '',
      mix: '',
      name: '',
      sex: '',
      size: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    axios.post('/dog-tinder-api/dog', {
      data: this.state
    })
    .catch(()=> console.log("There was an error submitting this form."));
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div className="form-group dog-form-short">
          <label className="form-group">Dog's Name</label>
          <input className="form-control" name="name" type="text" onChange={this.handleChange}/>
        </div>

        <div className="form-group dog-form">
          <label className="form-group">Dog's Breed</label>
          <select className="form-control" name="breed" onChange={this.handleChange}>
            {allBreeds.map(breed => <option value={breed.$t} key={breed.$t} onChange={this.handleChange}>{breed.$t}</option>)}
          </select>
        </div>

        <div className="form-group dog-form">
          <label className="form-group">Description of Dog</label>
          <textarea className="form-control" name="description" rows="5" onChange={this.handleChange}></textarea>
        </div>
        <div className="form-group dog-form-short">
          <label className="form-group">Paste a Photo URL Here</label>
          <input className="form-control" name="photo" type="text" onChange={this.handleChange}/>
        </div>
        <div className="form-group dog-form-x-short">
          <label className="form-group">Mixed?</label>
          <select className="form-control" name="mix" onChange={this.handleChange}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="form-group dog-form-x-short">
          <label className="form-group">Dog's Sex</label>
          <select className="form-control" name="sex" onChange={this.handleChange}>
            <option value="F">Female</option>
            <option value="M">Male</option>
          </select>
        </div>
        <div className="form-group dog-form-x-short">
          <label className="form-group">Dog's Age</label>
          <select className="form-control" name="age" onChange={this.handleChange}>
            <option value="Baby">Baby</option>
            <option value="Young">Young</option>
            <option value="Adult">Adult</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
        <div className="form-group dog-form-x-short">
          <label className="form-group">Dog's Size</label>
          <select className="form-control" name="size" onChange={this.handleChange}>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">X-Large</option>
          </select>
        </div>
        <div className="form-group dog-form">
          <label className="form-group">Contact Address 1</label>
          <input className="form-control" name="address1" type="text" onChange={this.handleChange}/>
        </div>
        <div className="form-group dog-form">
          <label className="form-group">Address 2</label>
          <input className="form-control" name="address2" type="text" onChange={this.handleChange}/>
        </div>
        <div className="form-group dog-form-short">
          <label className="form-group">City</label>
          <input className="form-control" name="city" type="text" onChange={this.handleChange}/>
        </div>
        <div className="form-group dog-form-x-short">
          <label className="form-group">State</label>
          <select className="form-control" name="state" onChange={this.handleChange}>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>	
        </div>
        <div className="form-group dog-form-short">
          <label className="form-group">Zip Code</label>
          <input className="form-control" name="zip" type="number" max="99999" onChange={this.handleChange}/>
        </div>
        <div className="form-group dog-form-short">
          <label className="form-group">Email</label>
          <input className="form-control" name="email" type="text" onChange={this.handleChange}/>
        </div>
        <div className="form-group dog-form-short">
          <label className="form-group">Phone</label>
          <input className="form-control" name="phone" type="text" onChange={this.handleChange}/>
        </div>
        <input type="submit" value="Submit"/>
      </form>
    );
  }

}

module.exports = AddAnimalForm;