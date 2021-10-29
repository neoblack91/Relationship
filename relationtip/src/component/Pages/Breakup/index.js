import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "./Break.css";
import Container from "@mui/material/Container";

export default function BreakCard() {
  return (
    <Container maxWidth="sm" className="breakUpColor">
      {/* <div className= "breakUpColor"> */}
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
      {/* </div> */}
    </Container>
  );
}

const itemData = [
  {
    img: "../assets/images/how.png",
    // title: "How to move on?",
    // URL: "./Preparing.js",
  },
  {
    img: "../assets/images/next.jpg",
    // title: "Whats Next?",
    // URL: "./Goal.js",
  },
  {
    img: "../assets/images/why.png",
    // title: "Why?!",
    // URL: "./Breakup.js",
  },
  {
    img: "../assets/images/Support.png",
    // title: "Support",
    // URL: "./Dating.js",
  },
];
