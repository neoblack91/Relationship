import "./App.css";
// import GoalCard from './component/Pages/Goal';
import MediaCard from "./component/Pages/Home";
// import ButtonAppBar from './component/NavBar';
import heart from "./component/Images/heart.jpg";

function App() {
  return (
    <div
      className="landing-wrapper"
      style={{ backgroundImage: `url (${heart})` }}
    >
      {/* <ButtonAppBar /> */}
      <MediaCard />
      {/* <GoalCard /> */}
    </div>
  );
}

export default App;
