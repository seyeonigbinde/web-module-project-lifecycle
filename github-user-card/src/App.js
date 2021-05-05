import React from 'react';
import axios from 'axios';
import Followers from './Followers'
import './App.css';

class App extends React.Component{
   state = {
      gitHubCard: [],
      profile: "seyeonigbinde",
      profile2: "dustinmyers",
      followers: [],
   }

   componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.profile}`)
        .then(res=> {
            this.setState({
              gitHubCard: res.data 
            });
            axios.get(`https://api.github.com/users/${this.state.profile2}/followers`)
            .then(res=> {
                this.setState({
                  followers: res.data 
                });
        })
        .catch(err => {
            console.log(err);
          });
        })
        .catch(err => {
            console.log(err);
        });
}


   render() {
    return(
    <>
      <div className="App">
        <h1>GitHub User's Profile</h1>
        <div className="">
           <img key={this.state.gitHubCard.image} width='200' src={this.state.gitHubCard.avatar_url} alt={this.state.gitHubCard.image}/>
           <p><b>Name:</b> {this.state.gitHubCard.name}</p>
           <p><b>Username:</b> {this.state.gitHubCard.login}</p>
           <p><b>Bio:</b>  {this.state.gitHubCard.bio}</p>
           <p><b>Location:</b> {this.state.gitHubCard.location}</p>
           <p><b>No of Repositories:</b> {this.state.gitHubCard.public_repos}</p>
           <p><b>No of Followers:</b> {this.state.gitHubCard.followers}</p> 
            </div>
            <div> 
            <h1>The Followers of {this.state.profile2} </h1>
            <Followers followers={this.state.followers}/>  
            </div>
          
           
      </div>
   
      </>
    )}

}

export default App;

