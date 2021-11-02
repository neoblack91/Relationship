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
    // URL: "./Preparing.js",
  },
  {
    img: "../assets/images/love.png",
    // title: "Love",
    // URL: "./Goal.js",
  },
  {
    img: "../assets/images/4-communication-goals-for-2020-1.jpg",
    // title: "Communication",
    // URL: "./Breakup.js",
  },
  {
    img: "../assets/images//8-differences-between-dating-and-being-in-a-relationship.jpg",
    title: "The In Between",
    // URL: "./Dating.js",
  },
  {
    img: "../assets/images/PR_Career_Goals.jpg",
    title: "Future",
    // URL: "./Dating.js",
  },
];
