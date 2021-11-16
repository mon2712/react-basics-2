import React, { useEffect, useState } from "react";
import { dogsGifs } from "./gifData";
import Gif from "./Gif";

const GifList = () => {
  const [array, setArray] = useState(dogsGifs);

  useEffect(() => {
    setArray(dogsGifs.map((gif) => gif.url));
  }, []);

  return (
    <div>
      {array.map((url, index) => (
        <Gif key={index} url={url} />
      ))}
    </div>
  );
};

export default GifList;
