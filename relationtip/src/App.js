import "./App.css";
import GoalCard from "./component/Pages/Goal/index.js";
import MediaCard from "./component/Pages/Home/index";
import ButtonAppBar from "./component/TopBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrepareCard from "./component/Pages/Preparing";
import BreakCard from "./component/Pages/Breakup";
import DatingCard from "./component/Pages/Dating";
import CoupleCard from "./component/Pages/Couple";
import Container from "@mui/material/Container";
import DNTCard from "./component/Pages/Datenight";
import ActivitiesCard from "./component/Pages/Activities";
import StressCard from "./component/Pages/Stress";
import ComCard from "./component/Pages/Communication";
import loveCard from "./component/Pages/Love";
import comGCard from "./component/Pages/ComGoal";
import fCard from "./component/Pages/Future";
import betCard from "./component/Pages/Between";
import GdCard from "./component/Pages/GoalDate";

function App() {
  return (
    <div>
      <Container maxWidth="sm" maxHeight="md">
        <Router>
          <ButtonAppBar />
          <Switch>
            <Route exact path="/" component={MediaCard} />
            <Route exact path="/Preparing/index.js" component={PrepareCard} />
            <Route exact path="/Goal/index.js" component={GoalCard} />
            <Route exact path="/Breakup/index.js" component={BreakCard} />
            <Route exact path="/Dating/index.js" component={DatingCard} />
            <Route exact path="/Couple/index.js" component={CoupleCard} />
            <Route exact path="/Datenight/index.js" component={DNTCard} />
            <Route exact path="/Activities/index.js" component={ActivitiesCard} />
            <Route exact path="/Stress/index.js" component={StressCard} />
            <Route exact path="/Communication/index.js" component={ComCard} />
            <Route exact path="/Love/index.js" component={loveCard} />
            <Route exact path="/ComGoal/index.js" component={comGCard} />
            <Route exact path="/Future/index.js" component={fCard} />
            <Route exact path="/Between/index.js" component={betCard} />
            <Route exact path="/GoalDate/index.js" component={GdCard} />
            
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
