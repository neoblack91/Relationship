import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "./styles.css";

export default function DatingCard() {
  return (
    <div className="dateColor">
      <ImageList>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <a href={item.URL}>
              <img
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                loading="lazy"
                className={("pic", "responsive")}
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
    img: "../assets/images/Japanese-Hill-and-Pond-Garden-Brooklyn-Botanic-Gar.png",
    // title: "Date Night Activities",
    URL: "../Activities/index.js",
  },
  {
    img: "../assets/images/firstdate.png",
    // title: "First Date Tips",
    URL: "../Datenight/index.js",
  },
  {
    img: "../assets/images/man-arm-around-woman.png",
    // title: "All About Dating",
    // URL: "./Breakup.js",
  },
  {
    img: "../assets/images/dealing.jpg",
    // title: "Dealing with Stress",
    URL: "../Stress/index.js",
  },
  {
    img: "../assets/images/danger.png",
    // title: "Communication Danger Signs(Dating)",
     URL: "../Communication/index.js",
  },
];
