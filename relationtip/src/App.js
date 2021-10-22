import "./App.css";
import GoalCard from "./component/Pages/Goal";
import MediaCard from "./component/Pages/Home/index";
import ButtonAppBar from "./component/TopBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrepareCard from "./component/Pages/Preparing";
import BreakCard from "./component/Pages/Breakup";
import DatingCard from "./component/Pages/Dating";

function App() {
  return (
    <div>
      <Router>
        <ButtonAppBar />
        <Switch>
          <Route exact path="/" component={MediaCard} />
          <Route exact path="/Preparing/index.js" component={PrepareCard} />
          <Route exact path="/Goal/index.js" component={GoalCard} />
          <Route exact path="/Breakup/index.js" component={BreakCard} />
          <Route exact path="/Dating/index.js" component={DatingCard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
