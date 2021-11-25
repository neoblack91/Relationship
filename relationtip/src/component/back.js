import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

function BackButton() {
  let history = useHistory();

  function handleClick() {
    history.goBack("/");
  }

  return (
    // <button type="button" onClick={handleClick}>
    //   Back
    // </button>
    <Button variant="contained" component="span" onClick={handleClick} >
    Back
  </Button>
  );
}
export default BackButton;
