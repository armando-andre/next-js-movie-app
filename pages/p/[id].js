import { useContext } from 'react';
import fetch from 'isomorphic-unfetch';

import Layout from '../../components/MyLayout';
import UserContext from '../../components/MovieCartContext';

const Post = (props) => {
  const { cartItems } = useContext(UserContext);

  const addToCartFunction = (event) => {
    event.preventDefault();

    cartItems.push(props.show);
    console.log(cartItems)
  }

  return (
    <Layout>
      <h1>Title: {props.show.Title}</h1>
      <img src={props.show.Poster} />
      <p><b>Rated:</b> {props.show.Rated}</p>
      <p><b>Released:</b> {props.show.Released}</p>
      <p><b>Runtime:</b> {props.show.Runtime}</p>
      <p><b>Genre:</b> {props.show.Genre}</p>
      <p><b>Director:</b> {props.show.Director}</p>
      <p><b>Actors:</b> {props.show.Actors}</p>
      <p><b>Writer:</b> {props.show.Writer}</p>
      <p><b>Plot:</b> {props.show.Plot}</p>
      <p><b>Rating:</b> {props.show.imdbRating}</p>

      <form onSubmit={addToCartFunction}>
        <input type="submit" value="Submit" />
      </form>
    </Layout>
  )
};

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=432e9351`);
  const show = await res.json();

  return { show };
};

export default Post;