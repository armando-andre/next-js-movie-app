import { useContext } from 'react';
import Link from 'next/link';

import Layout from '../components/MyLayout';
import UserContext from '../components/MovieCartContext';


const Cart = (props) => {
  const { cartItems } = useContext(UserContext);

  const sameIdErrorHandler = () => {
    try {
      
    } catch (error) {
      
    }
  }

  return(
    <Layout>
      <h1>Welcome to the cart page</h1>
      <h2>List:</h2>
      
      <h3>
        <ul>
          {cartItems.map(show => (
            <li key={show.imdbID}>
              <Link href="/p/[id]" as={`/p/${show.imdbID}`}>
                <a>{`${show.Title}, (${show.Year})`}</a>
              </Link>
            </li>
          ))}
        </ul>
      </h3>
    </Layout>
  )
}

export default Cart;