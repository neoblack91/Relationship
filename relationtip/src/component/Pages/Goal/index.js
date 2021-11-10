import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "./goal.css";

export default function GoalCard() {
  return (
    <div className="goalColor">
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
    img: "../assets/images/Dollarphoto.jpg",
    // title: "Goal",
    URL: "../GoalDate/index.js",
  },
  {
    img: "../assets/images/love.png",
    // title: "Love",
    URL: "../Love/index.js",
  },
  {
    img: "../assets/images/4-communication-goals-for-2020-1.jpg",
    // title: "Communication",
    URL: "../ComGoal/index.js",
  },
  {
    img: "../assets/images/between.png",
    // title: "The In Between",
    URL: "../Between/index.js",
  },
  {
    img: "../assets/images/PR_Career_Goals.png",
    // title: "Future",
    URL: "../Future/index.js",
  },
];
