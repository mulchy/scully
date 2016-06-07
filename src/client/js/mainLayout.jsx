import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <aside className="primary-aside"></aside>
        <main>
          {this.props.children}
        </main>
        <Footer/>
      </div>
    );
  }
}
