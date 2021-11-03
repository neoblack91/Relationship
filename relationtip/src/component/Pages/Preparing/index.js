import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "./Prepare.css";

export default function PrepareCard() {
  return (
    <div className="prepareColor">
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
    img: "../assets/images/nature-person.png",
    // title: "Find Yourself",
    // URL: "./Preparing.js",
  },
  {
    img: "../assets/images/emotions.png",
    // title: "Emotional Safety",
    // URL: "./Goal.js",
  },
  {
    img: "../assets/images/companion.png",
    // title: "Why companionship?",
    // URL: "./Breakup.js",
  },
  {
    img: "../assets/images/couple.png",
    // title: "Being a Couple",
    URL: "/Couple/index.js",
  },
];
