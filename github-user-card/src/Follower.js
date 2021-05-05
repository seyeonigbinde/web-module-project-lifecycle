import React from 'react';

class Follower extends React.Component {

  render() {
      const { follower } = this.props;
      return(
      <div key={follower.id} className="App">
        <img src={follower.avatar_url} width='200' alt={follower.login} />
        <div>
          <h3>Username: {follower.login}</h3>
          <h3><a href={follower.url}>GitHub Link</a></h3>
        </div>
      </div>);
  }
}

export default Follower;