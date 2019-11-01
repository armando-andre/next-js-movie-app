import React from 'react';

import Link from 'next/link';

const header = {
  display: 'flex',
  justifyContent: 'space-between'
};

const Cart = () => {
  return (
    <Link href="/cart">
      <a>Cart: Number</a>
    </Link>
  )
}

class Header extends React.Component {
  render() {
    return (
      <div style={header}>
        <Link href="/">
          <a> Home</a>
        </Link>
        <Cart/>
      </div>
    )
  }
}

export default Header;