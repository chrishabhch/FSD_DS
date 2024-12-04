import React, { useState } from "react";
import "./ImageApp.css";
import pic from "../images/img1.jpg";

const ImageApp = () => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [rotation, setRotation] = useState(0);

  return (
    <div className='parent'>
      <div className="card">
        <div className="disp">
      <img
        src={pic}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          transform: `rotate(${rotation}deg)`,
        }}
        alt="Example"
      />
      <button
        onClick={() => {
          setWidth(width + 10);
        }}
      >
        Increase width
      </button>
      <button
        onClick={() => {
          setWidth(width - 10);
        }}
      >
        Decrease width
      </button>
      <button
        onClick={() => {
          setHeight(height + 10);
        }}
      >
        Increase height
      </button>
      <button
        onClick={() => {
          setHeight(height - 10);
        }}
      >
        Decrease height
      </button>
      <button
        onClick={() => {
          setRotation(rotation + 10);
        }}
      >
        Rotate Clockwise
      </button>
      <button
        onClick={() => {
          setRotation(rotation - 10);
        }}
      >
        Rotate Anticlockwise
      </button>
    </div>
    </div>
    </div>
  );
};

export default ImageApp;
