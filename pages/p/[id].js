import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import React from 'react';

class Post extends React.Component {
  render() {

    const rating = this.props.show.rating.average;

    const nullRating = () => {
      if(rating == null) {
        return "Unknown"
      } else {
        return rating;
      }
    }

    const genresObject = [this.props.show.genres];
    const arrayLastValue = genresObject[0].slice(-1);

    const genresIterator = genresObject[0].map(function(num) {
      if(num != arrayLastValue[0]) {
        return num + ', ';
      } else {
        return num;
      }
    });

    return (
      <Layout>
        <h1>{this.props.show.name}</h1>
        <img src={this.props.show.image.medium} />
        <p><b>Rating:</b> {nullRating()}</p>
        <p><b>Language:</b> {this.props.show.language}</p>
        <p><b>Genres:</b> {genresIterator}</p>
        <p><b>Description:</b> {this.props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      </Layout>
    )
  }
}

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

// export default Post;