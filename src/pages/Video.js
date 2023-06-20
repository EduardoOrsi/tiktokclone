import React, { useRef, useState } from "react";
import "./video.css";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  const handdleStart = () => {
    if (!play) {
      videoRef.current.play();
      setPlay(true);
    } else {
      videoRef.current.pause();
      setPlay(false);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        ref={videoRef}
        loop
        onClick={handdleStart}
      ></video>
    </div>
  );
}

export default Video;
