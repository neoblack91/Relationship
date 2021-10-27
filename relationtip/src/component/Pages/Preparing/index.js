import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "./styles.css";

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
            <ImageListItemBar
              title={item.title}
              // subtitle={<span>by: {item.author}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: "../assets/images/lovecouple.jpeg",
    title: "Find Yourself",
    // URL: "./Preparing.js",
  },
  {
    img: "../assets/images/ways-to-improve-emotional-support-in-your-relationship.jpg",
    title: "Emotional Safety",
    // URL: "./Goal.js",
  },
  {
    img: "../assets/images/companionship-relationship.jpg",
    title: "Why companionship?",
    // URL: "./Breakup.js",
  },
  {
    img: "../assets/images/couples.jpg",
    title: "Being a Couple",
    URL: "/Couple/index.js",
  },
];
