import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./componentes/LandingP";
import Home from "./componentes/Home";
import CreateActivities from "./componentes/CreateActivities";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/activities" component={CreateActivities} />
      </BrowserRouter>
    </div>
  );
}

export default App;
