import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/MyLayout';

const formStyling = {
  fontSize: '20px'
}

const inputStyling = {
  fontSize: '15px'
}

class ApiUserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInputSearchValue: '',
      data: []
    };
  }

  handleChange = (event) => {
    this.setState({userInputSearchValue: event.target.value})
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    this.setState({ data: [] })
    
    let res = await fetch(`http://www.omdbapi.com/?s=${this.state.userInputSearchValue}&apikey=432e9351`);
    let data = await res.json();

    this.setState({ data: data.Search })
  
    return data;
  }

  render() {
    return (
      <Layout>
        <h1>Welcome to BlueBox</h1>

        <h2>Looking for movies or series to watch? You have come to the right place.</h2>

        <form onSubmit={this.handleSubmit}>
          <div style={formStyling}>
            <label>
              <b>Search For Your Favorite Title: &nbsp;</b>
              <input type="text" value={this.state.userInputSearchValue} onChange={this.handleChange} style={inputStyling} />&nbsp;
            </label>
            <input type="submit" value="Submit" style={inputStyling} />
          </div>
        </form>

        <h3>Title Searched: {this.state.userInputSearchValue.charAt(0).toUpperCase() + this.state.userInputSearchValue.slice(1)}</h3>

        <h3>
          <ul>
            {this.state.data.map(show => (
              <li key={show.imdbID}>
                <Link href="/p/[id]" as={`/p/${show.imdbID}`}>
                  <a>{show.Title},&nbsp;({(show.Year.length == 4) ? show.Year : show.Year.slice(0, 4)})</a>
                </Link>
              </li>
            ))}
          </ul>
        </h3>
      </Layout>
    );
  }
}

export default ApiUserInput;