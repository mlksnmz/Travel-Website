import React from "react";
import ReactCardSlider from "react-card-slider-component";

const slides = [
  {
    image: "https://cdn.tatilsepeti.com/Files/TurResim/28840/tsr28840638294221680304099.jpg",
    title: "Benelux - Paris",
    description: "$655",
    clickEvent: "/"
  },
  {
    image: "https://cdn.tatilsepeti.com/Files/TurResim/27301/tsr27301638291689930860830.jpg",
    title: "Bangkok - Pattaya - Phuket",
    description: "$1449",
    clickEvent: "/"
  },
  {
    image: "https://cdn.tatilsepeti.com/Files/TurResim/32890/tsr32890638259897839386722.jpg",
    title: "Japan - South Korea",
    description: "$4399",
    clickEvent: "/"
  },
  {
    image: "https://cdn.tatilsepeti.com/Files/TurResim/26799/tsr26799638072281148594557.jpg",
    title: "Andalusia",
    description: "$540",
    clickEvent: "/"
  },
  {
    image: "https://cdn.tatilsepeti.com/Files/TurResim/21781/tsr21781637971160252594840.jpg",
    title: "Milano - Nice - Marseilles",
    description: "$649",
    clickEvent: "/"
  },
  {
    image: "https://cdng.jollytur.com/files/packagephoto/packagephotos/a417e4ea-0f5f-4f07-a99d-b4a6b7d3a84a-1024.jpg",
    title: "Istanbul - Turkiye",
    description: "$400",
    clickEvent: "/"
  },
  {
    image: "https://www.detours.pt/wp-content/uploads/2019/11/livraria-lello.jpg",
    title: "Portugal - Porto",
    description: "$359",
    clickEvent: "/"
  },
  {
    image: "https://cdn.tatilsepeti.com/Files/TurResim/34946/tsr34946638302917613050464.jpg",
    title: "Thessaloniki - Athens - Kavala",
    description: "$209",
    clickEvent: "/"
  },
  {
    image: "https://cdn.tatilsepeti.com/Files/TurResim/32762/tsr32762638253705707417441.jpg",
    title: "Dubai",
    description: "$999",
    clickEvent: "/"
  },
  {
    image: "https://cdn.tatilsepeti.com/Files/TurResim/33215/tsr33215638270861882857434.jpg",
    title: "Bari - Napoli",
    description: "$349",
    clickEvent: "/"
  },
  {
    image: "https://cdn.tatilsepeti.com/Files/TurResim/26314/tsr26314638064607641329920.jpg",
    title: "Cuba",
    description: "$1799",
    clickEvent: "/"
  },
  {
    image: "https://cdn.tatilsepeti.com/Files/TurResim/23340/tsr23340638011711939168221.jpg",
    title: "The USA",
    description: "$2449",
    clickEvent: "/"
  },
];
const Cards = () => {
  return (
    <div style={{ marginTop: "5em" }}>
      <ReactCardSlider slides={slides} />
    </div>
  );
};

export default Cards;