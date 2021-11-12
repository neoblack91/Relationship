import { Router } from "@material-ui/icons";
import React from "React";
import { Route } from "react-router";
// import { useHistory } from "react-router-dom";

// export const Item = () => {
//   let past = useHistory();

//   return (
//     <>
//       <i class="fas fa-arrow-circle-left" button onClick={() => past.goBack()}>
//         Back
//       </i>
//     </>
//   );
// };
const BrowserHistory = require("react-router/lib/BrowserHistory").default;

const App = React.createClass({
  render: () => {
    return (
      <div>
        <button onClick={BrowserHistory.goBack}>Go Back</button>
      </div>
    );
  },
});

React.render(
  <Router history={BrowserHistory}>
    <Route path="/" component={App} />
  </Router>,
  document.body
);
