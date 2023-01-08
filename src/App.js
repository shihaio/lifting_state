import { useState } from "react";
import "./index.css";
import imagesArr from "./imageData";
import "./App.css";
import BigImage from "./BigImage";
import SmallImage from "./SmallImage";

function App() {
  const [bigImage, setBigImage] = useState(imagesArr[0]);

  const handleClick = (imageUrl) => setBigImage(imageUrl);

  const images = imagesArr.map(
    (
      image,
      index // NOTE: this area is faulty.
    ) => (
      <img
        className="thumb"
        src={image.img}
        alt={image.city}
        key={index}
        onClick={() => handleClick(image)}
      />
    )
  );

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        <BigImage image={bigImage} />
        {/* <img id="bigimage" src={bigImage.img} alt={bigImage.city} /> */}
        <SmallImage // NOTE: this area is faulty.
          id={image.city}
          src={image.img}
          alt={image.city}
          key={index}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default App;
