import React from 'react';
import { withRouter, Link } from 'react-router-dom';

function Card(props) {

    // console.log(props);
    const {post} = props;
    console.log(props);

    

    return (
        <div className="card mt-2" style={ { width: "18rem" } }>
            <div className="card-body">
                <h5 className="card-title">{post.id}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{post.title}</h6>
                <p className="card-text">{post.body}</p>
                <Link
           to={`${props.match.url}/${post.id}`}
           className="card-link bg-transparent border-0 text-primary">
            More 
          </Link>
                <button className="card-link bg-transparent border-0 text-danger">Delete</button>
            </div>
        </div>
    )
}

export default withRouter(Card);

