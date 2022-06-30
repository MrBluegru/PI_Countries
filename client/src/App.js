import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./componentes/LandingP";
import Home from "./componentes/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
