import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./top.css";

import BackButton from "../back";


export const NavBar = ({ title }) => {
  return (
    <div>
      <Box >
        <AppBar position="static">
          <Toolbar>
            {/* <Button variant="contained" component="span">
              Back
            </Button> */}
            <BackButton />
            <br></br>
            <br></br>
            <br></br>
            <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
              <h3> {title}</h3>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
