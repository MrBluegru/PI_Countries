import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./componentes/LandingP";
import Home from "./componentes/Home";
import CreateActivities from "./componentes/CreateActivities";
import Details from "./componentes/Details.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/activities" component={CreateActivities} />
          <Route
            path="/countrie/:id"
            render={({ match }) => <Details country={match.params.id} />}
          ></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
