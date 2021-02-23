import "./App.css";
import ImagesGrid from "./components/ImagesGrid";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Modal from "./components/Modal";
import UploadForm from "./components/UploadForm";
import { useState } from "react";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Nav />
      <Title />
      <UploadForm />
      <ImagesGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
