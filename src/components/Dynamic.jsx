import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css"; // Don't forget to import the CSS

const Dynamic = () => {
  const [isOpen, setIsOpen] = useState(false); // Declare isOpen state to manage modal visibility
  const [videoId, setVideoId] = useState("");

  const openVideo = (id) => {
    setVideoId(id);
    setIsOpen(true); // Open the modal when video is selected
  };

  return (
    <div>
      <button onClick={() => openVideo("XxVg_s8xAms")}>Play Video</button>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setIsOpen(false)} // Close the modal when triggered
      />
    </div>
  );
};

export default Dynamic;
