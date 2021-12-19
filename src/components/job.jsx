import React from 'react';

class Job extends React.Component {
  render() { 
    return (
      <div className='job'>        
        <h2>{this.props.title}</h2>
        <div className='details'>
          <div>
            <h5>Location</h5>     
            <h5>{this.props.location}</h5>               
            
            <h5>Salary</h5>     
            <h5>{'$' + this.props.salary}</h5>               
            
            <h5>Rating</h5>     
            <h5>{this.props.rating + ' stars' } </h5>               
          </div>
        
          <p>{this.props.description}</p>

        </div>
        <button className='btn btn-primary'>Submit</button>
      </div>      
    );          
  }
}
 
export default Job;