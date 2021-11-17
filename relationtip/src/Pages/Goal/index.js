import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "./goal.css";
import { NavBar } from "../../component/topbar/TopBar";

export default function GoalCard() {
  return (
    <div className="goalColor">
      <NavBar title="Goal Setting"></NavBar>
      <ImageList>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <a href={item.URL}>
              <img
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                loading="lazy"
                className="pic"
              />
            </a>
            <ImageListItemBar title={item.title} position="below" />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: "../assets/images/goal.png",
    // title: "Goal",
    URL: "./GoalDate",
  },
  {
    img: "../assets/images/love.png",
    // title: "Love",
    URL: "./Love",
  },
  {
    img: "../assets/images/communication.png",
    // title: "Communication",
    URL: "./ComGoal",
  },
  {
    img: "../assets/images/between.png",
    // title: "The In Between",
    URL: "./Between",
  },
  {
    img: "../assets/images/future.png",
    // title: "Future",
    URL: "./Future",
  },
];
