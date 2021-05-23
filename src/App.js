import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Posts from './Components/Posts/Posts';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import More from './Components/More/More';

class App extends Component {

  render() {

    return (
      <BrowserRouter>
          <Navigation />

          <Switch>
            <Route path='/posts/:id' component={More} />
            <Route path="/posts" exact component={Posts} />
            <Route path="/" exact component={Home} />
          </Switch>
          
      </BrowserRouter>
    )
  }
}

export default App;