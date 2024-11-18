import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css"; // Import the styles

const ModalVideoExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  return (
    <div>
      <h2>React Modal Video Example</h2>
      <button onClick={openModal}>Open Video</button>
      <ModalVideo
        channel="youtube" // Platform: youtube, vimeo, or custom
        isOpen={isOpen}
        videoId="XxVg_s8xAms" // YouTube video ID
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default ModalVideoExample;
