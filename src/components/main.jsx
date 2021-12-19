import React from 'react';
import Header from "./header";
import Jobs from './jobs';
import Footer from './footer';

class Main extends React.Component {
  render() { 
    return (
      <div className='wrapper-main'>
        <Header />        
        <Jobs />   
        {/* <Footer />      */}
      </div>
    );
  }
}
 
export default Main;