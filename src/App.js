import './App.css';

import Login from "./page/login/index"
import LayoutPage from "./page/layout/index"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { Component } from 'react';
import { connect } from 'react-redux';
class App extends Component {

  constructor(props) {
    super(props)
    console.log("") 
  }
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {
            this.props.tokens || sessionStorage.getItem('token') ?
              <Route path='/' component={LayoutPage} /> : <Route path='/login' component={Login} />
          }
          <Redirect from='/' to='/login' />
        </Switch>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};
export default connect(mapStateToProps)(App);
