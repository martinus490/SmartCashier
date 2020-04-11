import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import WebView  from './WebView';
import PostSubmit from './PostSubmit';
import FinishScreen from './FinishScreen';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={props => (<WebView {...props}/>)} />
            <Route path="/PostSubmit" render={props => (<PostSubmit {...props}/>)} />
            <Route path="/FinishScreen" render={props => (<FinishScreen {...props}/>)} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

//React.Fragment -> wrap all component in return