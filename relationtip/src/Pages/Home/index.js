import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "./styles.css";
import { NavBar } from "../../component/topbar/TopBar";

export default function MediaCard() {
  return (
    <div className="homeColor" target="homeColor">
      <NavBar title="Relationship Guru"></NavBar>
      <ImageList>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <a href={item.URL}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
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
    img: "./assets/images/preparing.png",
    // title: "Preparing for a Relationship",
    URL: "./Preparing",
  },
  {
    img: "./assets/images/dating.png",
    // title: "Dating",
    URL: "./Dating",
  },
  {
    img: "./assets/images/breakup.png",
    // title: "Break Up",
    URL: "./Breakup",
  },
  {
    img: "./assets/images/goal.png",
    // title: "Goal",
    URL: "./Goal",
  },
];