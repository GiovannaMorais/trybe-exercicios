import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Clients from "./Clients";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/clients" component={Clients} />
          </Switch>
        </BrowserRouter>
       </Provider>
    );
  }
}
