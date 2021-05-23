import React, { Component } from 'react';
import axios from 'axios';
import loading from '../../assets/loading.gif';
import Card from '../Card/Card';

class Posts extends Component {

  state = {
    posts: []
  }

  componentDidMount(){
    axios.get("/posts")
    .then(response => {
      this.setState({ posts: response.splice(0, 6) });
    })
    .catch(error => {
      console.log(error);
    })
  }

  onDeletePost = (id) => {
    axios.delete("/posts/" + id)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {

    let posts = ( <img src={loading} alt="loading" /> )
    if(this.state.posts.length > 0) 
      posts = this.state.posts.map( ( post, index ) => (
        <Card key={index} post={post} />
      ) );

    return (
      <div>
         <div className="container mt-2 p-2 jumbotron d-flex flex-wrap justify-content-around ">{posts}</div>
      </div>
    )
  }
}

export default Posts;