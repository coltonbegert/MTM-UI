import React from 'react';

/**
 * About component shows information about the contact information
 */
export default class About extends React.Component {
  
  render() {
    return (
      <div>
        <div className= 'container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2>About</h2>
            </div>
            <div className='col-lg-12 text-center'>
              <header> Colton Begert </header>
            </div>
            <div className='col-lg-12'>
              <text>Wow look at this beautiful left justified text!</text>
            </div>
          </div>
        </div>
      </div>

    );
  }
  
}
