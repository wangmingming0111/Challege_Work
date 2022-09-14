import React from 'react';
import API from '../api';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {

    API.get(`users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });

        console.log(persons);
    });
  }

  render() {
    return (
      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.id}>{person.name}</li>
            )
        }
      </ul>
    )
  }
}
