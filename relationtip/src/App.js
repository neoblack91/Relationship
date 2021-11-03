import "./App.css";
import GoalCard from "./component/Pages/Goal/index.js";
import MediaCard from "./component/Pages/Home/index";
import ButtonAppBar from "./component/TopBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrepareCard from "./component/Pages/Preparing/index.js";
import BreakCard from "./component/Pages/Breakup/index.js";
import DatingCard from "./component/Pages/Dating/index.js";
import CoupleCard from "./component/Pages/Couple/index.js";
import Container from "@mui/material/Container";
import DNTCard from "./component/Pages/Datenight/index.js";
import ActivitiesCard from "./component/Pages/Activities";

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
            
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
