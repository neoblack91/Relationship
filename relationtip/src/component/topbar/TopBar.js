import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./top.css";
import BackButton from "../back";
import { useLocation } from "react-router-dom";

export const NavBar = ({ title }) => {
  const location = useLocation();

  return (
    <div>
      <Box>
        <AppBar position="static">
          <Toolbar>
            {location.pathname !== "/" ? <BackButton /> : null}

            <Typography variant="h6" component="div">
              <h3> {title}</h3>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
