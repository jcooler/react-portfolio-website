import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import './Carousel.css';
import { images } from "./carouselData";


export default function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <BsFillArrowLeftCircleFill style={{ fontSize: 30 }} />
        </div>
        <div className="center">
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <BsFillArrowRightCircleFill style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}