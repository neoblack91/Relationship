import "./App.css";
import GoalCard from "./Pages/Goal";
import MediaCard from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrepareCard from "./Pages/Preparing";
import BreakCard from "./Pages/Breakup";
import DatingCard from "./Pages/Dating";
import CoupleCard from "./component/Cards/Couple";
import Container from "@mui/material/Container";
import DNTCard from "./component/Cards/Datenight";
import ActivitiesCard from "./component/Cards/Activities";
import StressCard from "./component/Cards/Stress";
import ComCard from "./component/Cards/Communication";
import loveCard from "./component/Cards/Love";
import fCard from "./component/Cards/Future";
import betCard from "./component/Cards/Between";
import GdCard from "./component/Cards/GoalDate";
import moCard from "./component/Cards/Moveon";
import whatsNext from "./component/Cards/Whatsnext";
import Why from "./component/Cards/Why";
import Support from "./component/Cards/Support";
import emotion from "./component/Cards/Emotional";
import Yourself from "./component/Cards/Yourself";
import Companion from "./component/Cards/Companion";
import comG from "./component/Cards/ComGoal";

function App() {
  return (
    <div>
      <Container>
        <Router>
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
            <Route exact path="/ComGoal" component={comG} />
            <Route exact path="/Future" component={fCard} />
            <Route exact path="/Between" component={betCard} />
            <Route exact path="/Moveon" component={moCard} />
            <Route exact path="/GoalDate" component={GdCard} />
            <Route exact path="/Whatsnext" component={whatsNext} />
            <Route exact path="/Why" component={Why} />
            <Route exact path="/Support" component={Support} />
            <Route exact path="/Emotion" component={emotion} />
            <Route exact path="/Yourself" component={Yourself} />
            <Route exact path="/Companion" component={Companion} />
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
