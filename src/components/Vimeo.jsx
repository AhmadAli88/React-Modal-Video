import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css'; // Import the styles

const Vimeo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  return (
    <div>
      <h2>React Modal Video Example</h2>
      <button onClick={openModal}>Open Video</button>
      <ModalVideo
        channel='vimeo'
        isOpen={isOpen}
        videoId='76979871' // Vimeo video ID
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default Vimeo;
