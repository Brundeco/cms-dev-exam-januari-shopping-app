import "./App.scss";
import { BottomShape, PageWrapper } from "./components";
import {Login, Home} from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";

export default () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </div>
      <Menu/>
    </Router>
  );
}