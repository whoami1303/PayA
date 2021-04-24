import logo from './logo.svg';
import './App.module.css';
import {Route, Switch, withRouter } from 'react-router-dom';


import PageDestination from './pages/Page_Destination';
import PageDetails from './pages/Page_Details';
import PageSendMoney from './pages/Page_Home';
import PageVerification from './pages/Page_Verification';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/destination" component={PageDestination} />
        <Route path="/details" component={PageDetails} />
        <Route path="/verification" component={PageVerification} />
        <Route path="/" exact component={PageSendMoney} />
      </Switch>
    </div>
  );
}


export default withRouter(App);
