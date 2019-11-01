import React from 'react';
import App from 'next/app';

import UserContext from '../components/MovieCartContext';

export default class MyApp extends App {
  state = {
    cartItems: []
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <UserContext.Provider value={{ cartItems: this.state.cartItems }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    );
  }
}