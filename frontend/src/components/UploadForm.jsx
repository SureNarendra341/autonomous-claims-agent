import React, { useState } from "react";
import axios from "../api/axios";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post("/claims/process", formData);
    setResult(res.data);
  };

  return (
    <div>
      <h2>Upload FNOL Document</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={uploadFile}>Process</button>

      {result && (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
};

export default UploadForm;
