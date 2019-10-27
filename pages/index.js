import React from 'react';
import Layout from '../components/MyLayout';
// import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

// const urlTitleFetch = async function() {
//   const res = await fetch(`http://www.omdbapi.com/?t=joker&apikey=432e9351`);
//   const data = await res.json();

//   return { data };
// };

class ApiUserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    const userInput = this.state.value;
    const apiFetch = async function() {
      const res = await fetch(`http://www.omdbapi.com/?t=${userInput}&apikey=432e9351`);
      const data = await res.json();

      console.log(data);
    }
    apiFetch();
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ApiUserInput;