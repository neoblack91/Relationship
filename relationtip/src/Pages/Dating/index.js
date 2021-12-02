import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "./styles.css";
import { NavBar } from "../../component/topbar/TopBar";
import { Container } from "@mui/material";

export default function DatingCard() {
  return (
    <div className="dateColor">
      <NavBar title="Dating"></NavBar>
      <Container maxWidth="sm" maxheight="lg">
        <ImageList>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <a href={item.URL}>
                <img
                  src={`${item.img}`}
                  srcSet={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                  className={"pic"}
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
    img: "../assets/images/datenight.png",
    // title: "Date Night Activities",
    URL: "../Activities",
  },
  {
    img: "../assets/images/firstdate.png",
    // title: "First Date Tips",
    URL: "../Datenight",
  },

  {
    img: "../assets/images/dealing.jpg",
    // title: "Dealing with Stress",
    URL: "../Stress",
  },
  {
    img: "../assets/images/danger.png",
    // title: "Communication Danger Signs(Dating)",
    URL: "../Communication",
  },
];
