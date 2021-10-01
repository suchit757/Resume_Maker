import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.scss";
import Resume from './resume/resume';
import OutResume from './OutResume/OutResume';
import EmptyResume from './emptyResume/emptyResume';

export default class App extends React.Component {

  render() {
    return (
      <div style={{backgroundColor:"lightgray"}}>
        <BrowserRouter>
          <Switch>
              <Route path="/" component={Resume} exact/>
              <Route path="/popup/redirect" component={OutResume} exact/>
              <Route path="/empty/resume/templete" component={EmptyResume} exact/>
              <Route component={Resume}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
