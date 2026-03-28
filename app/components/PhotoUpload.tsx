"use client";

import { useRef, useState } from "react";
import PlaceHolderIcon from "../../public/placeholder.svg";
export default function PhotoUpload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      console.log(file);
      const url = URL.createObjectURL(file);
      setImageUrl(url);
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

  function setMacros() {}

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
      ></h1>
      {imageUrl ? (
        <img src={imageUrl} alt="placeholder" className="w-80 mx-auto mt-8" />
      ) : (
        <PlaceHolderIcon className="w-80 mx-auto mt-8 text-gray-400 outline-4 rounded-md" />
      )}

      <div className="flex justify-center mt-8">
        <input
          type="text"
          placeholder="chicken and rice"
          className="bg-neutral-800 text-white rounded-sm p-1 w-48 border border-neutral-600 mr-3
"
        />
        <button
          className="bg-white text-black p-1 rounded-md
"
        >
          Analyze
        </button>
      </div>
    </div>
  );
}
