import  { useState } from 'react';
import ModalVideo from 'react-modal-video';
import "react-modal-video/css/modal-video.css"; // Don't forget to import the required CSS

const Custom = () => {
  const [isOpen, setIsOpen] = useState(false); // Declare state to control modal visibility

  const openVideo = () => {
    setIsOpen(true); // Open the modal when the video button is clicked
  };

  const closeVideo = () => {
    setIsOpen(false); // Close the modal when the modal close action is triggered
  };

  return (
    <div>
      <button onClick={openVideo}>Play Video</button>
      <ModalVideo
        channel='custom'
        isOpen={isOpen}
        url='https://your-custom-video-url.mp4'
        onClose={closeVideo} // Close modal on close event
      />
    </div>
  );
};

export default Custom;
