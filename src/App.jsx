import './App.css';
import Custom from './components/Custom';
import Dynamic from './components/Dynamic';
import ModalVideoExample from './components/ModalVideoExample';
import Vimeo from './components/Vimeo';

function App() {
  return (
    <div>
      <ModalVideoExample />
      <Vimeo/>
      <Dynamic/>
      <Custom/>
    </div>
  );
}

export default App;
