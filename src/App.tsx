import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HorizontalSlideShow from "./components/HorizontalSlideShow";

function App() {
  const listImage: string[] = [
    "image1.png",
    "image2.png",
    "image3.png",
    "a",
    "c",
  ];
  const listInformation: string[] = [
    "a",
    "b",
    "c",
    "umbalaxibua",
    "vung oi mo ra",
  ];
  return (
    <HorizontalSlideShow
      listImage={listImage}
      listInformation={listInformation}
    />
  );
}

export default App;
