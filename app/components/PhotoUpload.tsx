"use client";

import { useRef, useState } from "react";

export default function PhotoUpload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageText, setImageText] = useState<string>("No Image selected.");
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      console.log(file);
      setImageText(file.name);

      e.target.value = "";
    }
  }

  function handleUpload() {
    if (inputRef.current) {
      inputRef.current.removeAttribute("capture");
      inputRef.current.click();
    }
  }

  function handleCamera() {
    if (inputRef.current) {
      inputRef.current.setAttribute("capture", "environment");
      inputRef.current.click();
    }
  }

  return (
    <div>
      <div className="flex place-content-around mt-12">
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          onClick={handleUpload}
          className="bg-red-50 text-black rounded-lg p-2"
        >
          Upload file
        </button>
        <button
          onClick={handleCamera}
          className="bg-red-50 text-black rounded-lg p-2"
        >
          Take photo
        </button>
      </div>
      <h1
        className="text-center mt-4 text-xs text-gray-400
"
      >
        {imageText}
      </h1>
    </div>
  );
}
