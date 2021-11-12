import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from '@material-ui/core/Button'
// import { Item } from "./back";
import "./top.css";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <i class="fas fa-arrow-circle-left"variant="contained" color="primary"> 
            Back
          </i>
           */}

          <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
            <h3>TSB Changing Images</h3>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
