import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Loading from "../../assets/loading.gif";

function More(props) {
  console.log(props);

  const [state, setstate] = useState(null);

  useEffect(() => {
    if (!state) {
      axios.get(props.match.url)
        .then((response) => {
          setstate((prevState) => ({ ...prevState, ...response }))
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [state, props.match.url]);

  console.log(state);

  const goBack = () => {
    props.history.push('/posts');
}

  let details = <img width={200} height={200} src={Loading} alt="loading...." />;

  if (state) {
    details = (
        <div>
          <div className="card">
              <div className="card-header">{state.id}</div>
              <div className="card-body">
                <h5 className="card-title">{state.title}</h5>
                <p className="card-text">{state.body}</p>
                <button onClick={goBack} class="btn btn-primary">Back</button>
              </div>
          </div>   
        </div> 
    )
  }

  console.log(props);
  return (

    <div className="card text-center">
        {details}
    </div>
  );
}

export default More;
