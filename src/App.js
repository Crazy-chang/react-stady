import './App.css';

import Login from "./page/login/index"
import LayoutPage from "./layout/index"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)

    this.token = localStorage.getItem('token')
  }

  //   {
  //   router.map((item) => (
  //     <Route path=fitem.pathi exact render=fprops => fitem .auth
  //     ? (auth_token ? <item.component {...props} /> : <Login />): (<item.component [...props]/>)}}/ >))
  // }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {
            this.token ?
              <Route path='/' component={LayoutPage} /> : <Route path='/login' component={Login} />
          }
          <Redirect from='/' to='/login' />
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
