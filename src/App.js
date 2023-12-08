import "./App.css";

import Login from "./page/login/index";
import LayoutPage from "./page/layout/index";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Component } from "react";
import { connect } from "react-redux";
import store from "./redux/index";
class App extends Component {
  constructor(props) {
    super(props);
    let useEquipment = "pc";
    if (
      /AppleWebKit.*Mobile/i.test(navigator.userAgent) ||
      /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(
        navigator.userAgent
      )
    ) {
      useEquipment = "phone";
    } else {
      useEquipment = "pc";
    }
    console.log("执行了几次哈哈", useEquipment);
    store.dispatch({ type: "SETUSEEQUIPMENT", useEquipment });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          {this.props.tokens || sessionStorage.getItem("token") ? (
            <Route path="/" component={LayoutPage} />
          ) : (
            <Route path="/login" component={Login} />
          )}
          <Redirect from="/" to="/login" />
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
