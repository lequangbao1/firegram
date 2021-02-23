import React from "react";
import { useState } from "react";

import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let uploadFile = e.target.files[0];

    if (!uploadFile || !types.includes(uploadFile.type)) {
      setFile(null);
      setError("Please select an image file (png of jpeg)!!!");
      return;
    }
    setFile(uploadFile);
    setError("");
  };

  return (
    <div className="uploadForm">
      <label htmlFor="uploadFile">
        <input
          type="file"
          accept="image/*"
          onChange={changeHandler}
          id="uploadFile"
        />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="output--error">{error}</div>}
        {file && <div className="output--message">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </div>
  );
};

export default UploadForm;
