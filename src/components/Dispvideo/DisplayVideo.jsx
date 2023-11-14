import React from "react";
import "./Dispvid.css";

const DisplayVideo = () => {
  return (
    <>
      <div className="img-div">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/13Z2eU0X8Is?si=jQG5DWybovuBmpN5"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default DisplayVideo;
