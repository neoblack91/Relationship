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
import moCard from "./component/Pages/Moveon";
import whatsNext from "./component/Pages/Whatsnext";
import Why from "./component/Pages/Why";
import Support from "./component/Pages/Support";

function App() {
  return (
    <div>
      <Container maxWidth="sm" maxHeight="md">
        <Router>
          <ButtonAppBar />
          <Switch>
            <Route exact path="/" component={MediaCard} />
            <Route exact path="/Preparing" component={PrepareCard} />
            <Route exact path="/Goal" component={GoalCard} />
            <Route exact path="/Breakup" component={BreakCard} />
            <Route exact path="/Dating" component={DatingCard} />
            <Route exact path="/Couple" component={CoupleCard} />
            <Route exact path="/Datenight" component={DNTCard} />
            <Route exact path="/Activities" component={ActivitiesCard} />
            <Route exact path="/Stress" component={StressCard} />
            <Route exact path="/Communication" component={ComCard} />
            <Route exact path="/Love" component={loveCard} />
            <Route exact path="/ComGoal" component={comGCard} />
            <Route exact path="/Future" component={fCard} />
            <Route exact path="/Between" component={betCard} />
            <Route exact path="/Moveon" component={moCard} />
            <Route exact path="/GoalDate" component={GdCard} />
            <Route exact path="/Whatsnext" component={whatsNext} />
            <Route exact path="/Why" component={Why} />
            <Route exact path="/Support" component={Support} />
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
