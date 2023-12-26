import React, { useState } from "react";

const Holes = () => {
  const [invisible, setInvisible] = useState(false);
  const [changeImage, setChangeImage] = useState("");

  const image2 =
    "https://png.pngtree.com/png-vector/20220520/ourmid/pngtree-blue-fire-ring-realistic-burn-png-image_4711884.png";
  const image1 =
    "https://static.vecteezy.com/system/resources/previews/008/513/667/original/mexican-nachos-and-guacamole-illustration-png.png";
  const imagez = [image1, image2];
  const changingImage = (index) => {
    setChangeImage(imagez.forEach[index]);
  };
  const changingImage1 = () => {
    setChangeImage(image2);
  };
  const InvisibleImage = () => {
    setInvisible(!invisible);
  };

  const Clickable = () => {
    InvisibleImage();

    changingImage();
  };

  const Clickable1 = () => {
    console.log("hello 2");
  };

  const Clickable2 = () => {
    console.log("hello 3");
  };

  const Clickable3 = () => {
    console.log("hello 4");
  };

  const Clickable4 = () => {
    console.log("hello 5");
  };

  return (
    <div className="MainCard">
      <div className="GuacHoles" onClick={Clickable}>
        {invisible && (
          <img src={changeImage} height={"100vh"} alt="guacamole" />
        )}
      </div>
      <div className="GuacHoles" onClick={Clickable1}></div>
      <div className="GuacHoles" onClick={Clickable2}></div>
      <div className="GuacHoles" onClick={Clickable3}></div>
      <div className="GuacHoles" onClick={Clickable4}></div>
    </div>
  );
};

export default Holes;
