import React from 'react';

class Follower extends React.Component {

  render() {
      const { follower } = this.props;
      return(
        <div>
      <div key={follower.id} >
        <img src={follower.avatar_url} width='200' alt={follower.login} />
        <div>
          <h3>Username: {follower.login}</h3>
          <h3><a href={follower.url}>GitHub Link</a></h3>
        </div>
      </div>
      </div>);
  }
}

export default Follower;