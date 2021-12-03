import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

function BackButton() {
  let history = useHistory();

  function handleClick() {
    history.goBack("/");
  }

  return (
    <Button
      variant="contained"
      component="span"
      style={{ marginRight: "50px" }}
      onClick={handleClick}
    >
      back
    </Button>
  );
}
export default BackButton;
