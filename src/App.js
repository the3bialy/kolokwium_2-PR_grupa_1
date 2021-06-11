import './App.css';
import Home from "./components/kbhome";
import { Route, Switch, Redirect } from "react-router-dom";
import Posts from "./components/posts";
import Navbar from "./components/navbar";

function App() {

  return (
      <div className="container-fluid">
          <Navbar/>
        <div className="container">
            <div className="content">
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/home" exact component={Home} />

                </Switch>
            </div>
        </div>
      </div>
  );
}

export default App;
