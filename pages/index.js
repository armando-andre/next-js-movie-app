import React from 'react';
import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

class ApiUserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInputSearchValue: '',
      data: []
    };
  }

  handleChange = (event) => {
    this.setState({userInputSearchValue: event.target.value});
  }

  handleSubmit = async (event) => {    
    this.setState({ data: [] })
    event.preventDefault();
    
    let res = await fetch(`http://www.omdbapi.com/?s=${this.state.userInputSearchValue}&apikey=432e9351`);
    let data = await res.json();

    this.setState({ data: data.Search })
 
    return data;
  }

  render() {
    return (
      <Layout>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search For Your Favorite Movie or Show: <br />
            <input type="text" value={this.state.userInputSearchValue} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <h1>Title: {this.state.userInputSearchValue.charAt(0).toUpperCase() + this.state.userInputSearchValue.slice(1)}</h1>

        <h2>Content: 
          <ul>
            {this.state.data.map(show => (
              <li key={show.imdbID}>
                {console.log(show.imdbID)}
                {/* <Link href="/p/[id]" as={`/p/${show.id}`}> */}
                  <a>{show.Title},&nbsp;({(show.Year.length == 4) ? show.Year : show.Year.slice(0, 4)})</a>
                {/* </Link> */}
              </li>
            ))}
          </ul>
        </h2>
        
        {/* {console.log('STATE: ', this.state.data)} */}
      </Layout>
    );
  }
}

export default ApiUserInput;