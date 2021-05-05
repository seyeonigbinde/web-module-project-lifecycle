import React from 'react';
import Follower from './Follower';

class Followers extends React.Component {


  render() {
    
    return (
      <>
        {this.props.followers.map(follower => (
          <Follower key={follower.id} follower={follower}/>
        ))}
      </>
    );
  }
}

export default Followers;
