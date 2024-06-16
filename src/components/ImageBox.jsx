import React from "react";

function ImageBox({ divStyles, imgStyles, src, alt, children }) {
  return (
    <div className={divStyles}>
      <img className={imgStyles} src={src} alt={alt} />
      {children}
    </div>
  );
}

export default ImageBox;
