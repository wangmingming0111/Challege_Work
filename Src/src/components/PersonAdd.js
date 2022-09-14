import React from 'react';
import API from '../api';

export default class PersonAdd extends React.Component {
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  testFunc = async () => {
    const user = {
        name: this.state.name
      };

      const res = await API.post(`users`, { user });
      console.log(res);
      console.log(res.data);
  }

  handleSubmit = async(event) => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    const res = await API.post(`users`, { user });
    console.log(res);
    console.log(res.data);

    // API.post(`users`, { user })
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
