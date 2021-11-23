import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./top.css";
import { Button } from "@mui/material";
// import BackButton from "../back";

export const NavBar = ({ title }) => {
  return (
    <div>
      <Box sx={{ flexGrow: 2 }}>
        <AppBar position="static">
          <Toolbar>
            <Button variant="contained" component="span">
              Back
            </Button>
            {/* <BackButton /> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
              <h3> {title}</h3>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
