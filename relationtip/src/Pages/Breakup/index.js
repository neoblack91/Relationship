import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "./Break.css";
import Container from "@mui/material/Container";
import { NavBar } from "../../component/topbar/TopBar";

export default function BreakCard() {
  return (
    <div>
      <NavBar title="Break Up"></NavBar>
      <Container maxWidth="sm" className="breakUpColor">
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
      </Container>
    </div>
  );
}

const itemData = [
  {
    img: "../assets/images/how.png",
    // title: "How to move on?",
    URL: "../Moveon",
  },
  {
    img: "../assets/images/whatsnext.png",
    // title: "Whats Next?",
    URL: "../Whatsnext",
  },
  {
    img: "../assets/images/why.png",
    // title: "Why?!",
    URL: "../Why",
  },
  {
    img: "../assets/images/Support.png",
    // title: "Support",
    URL: "../Support",
  },
];
