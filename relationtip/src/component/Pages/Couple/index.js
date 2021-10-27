import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "./styles.css";

export default function CoupleCard() {
  return (
    <div className="coupleColor">
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
    img: "../assets/images/couplegames.jpg",
    title: "Couple Games?",
    // URL: "./Preparing.js",
  },
  {
    img: "../assets/images/couple-talking.jpg",
    title: "Communication?",
    // URL: "./Goal.js",
  },
  // {
  //   img: "../assets/images/why.jpg",
  //   title: "Why?!",
  //   // URL: "./Breakup.js",
  // },
  // {
  //   img: "../assets/images/giving-emotional-support.jpg",
  //   title: "Support",
  //   // URL: "./Dating.js",
  // },
];
