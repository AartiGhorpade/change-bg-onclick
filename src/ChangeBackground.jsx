import React, { useRef } from "react";

const ChangeBackground = () => {
  const arr = ["purple", "#2ec757", "violet", "#940a5b"];
  const getRef = useRef(document.body);

  const changeBg = (color) => {
    getRef.current.style.backgroundColor = color;
  };
  return (
    <div className="container mt-5">
      <div className="row">
        {arr.map((color, ind) => {
          return (
            <div className=" col text-center" key={ind}>
              <div
                className="card p-4 mt-4"
                style={{ backgroundColor: `${color}`, color: "white" }}
                onClick={() => changeBg(color)}
              >
                {" "}
                Pick a color to change Background Color
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChangeBackground;

