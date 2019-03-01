import React, { Component } from 'react';
import axios from 'axios'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newSmurf: {
      name: '',
      age: '',
      height: ''
      }
    };
  }

  addSmurf = () => {
    axios
    .post('http://localhost:3333/smurfs', this.state.newSmurf)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  handleInputChange = e => {
    let value = e.target.value;
    if (e.target.name === 'age') {
      value = parseInt(value, 10);
    }
    this.setState({ 
      newSmurf:{
        ...this.state.newSmurf,
        [e.target.name]: value
     }
   });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
