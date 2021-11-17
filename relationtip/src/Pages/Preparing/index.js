import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "./Prepare.css";
import { NavBar } from "../../component/topbar/TopBar";

export default function PrepareCard() {
  return (
    <div className="prepareColor">
      <NavBar title="Preparing for Relationship"></NavBar>
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
    img: "../assets/images/yourself.png",
    // title: "Find Yourself",
    URL: "./Yourself",
  },
  {
    img: "../assets/images/emotions.png",
    // title: "Emotional Safety",
    URL: "./Emotion",
  },
  {
    img: "../assets/images/companion.png",
    // title: "Why companionship?",
    URL: "./Companion",
  },
  {
    img: "../assets/images/couple.png",
    // title: "Being a Couple",
    URL: "./Couple",
  },
];
