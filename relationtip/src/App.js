import "./App.css";
import GoalCard from "./component/Pages/Goal";
import MediaCard from "./component/Pages/home/Home";
import ButtonAppBar from "./component/TopBar";
// import heart from "./component/Images/heart.jpg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrepareCard from "./component/Pages/Preparing";
import BreakCard from "./component/Pages/Breakup";
import DatingCard from "./component/Pages/Dating";

function App() {
  return (
    <div
      // className="landing-wrapper"
      // style={{ backgroundImage: `url (${heart})` }}
    >
      <Router>
        <ButtonAppBar />
        <Switch>
          <Route exact path="/" component={MediaCard} />
          <Route exact path="/Preparing.js" component={PrepareCard} />
          <Route exact path="/Goal.js" component={GoalCard} />
          <Route exact path="/Breakup.js" component={BreakCard} />
          <Route exact path="/Dating.js" component={DatingCard} />

          {/* <MediaCard /> */}
          {/* <GoalCard /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
