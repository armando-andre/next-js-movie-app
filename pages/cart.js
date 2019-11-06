import Layout from '../components/MyLayout';

const Cart = () => {
  let algo = []

  const unableSessionStorageUssage = () => {
    if (typeof window !== 'undefined') {
      for (var i = 0; i < sessionStorage.length; i++) {
        algo[i] = sessionStorage.key(i)
      }
    } 
  }

  unableSessionStorageUssage()
  
  return(
    <Layout>
      <h1>Welcome to the cart page</h1>
      <h2>List:</h2>
      
      <h3>
        <ul>
          {algo.map(show => (
            <li key={show}>
              <a>{show}</a>
            </li>
          ))}
        </ul>
      </h3>
    </Layout>
  )
}

export default Cart;