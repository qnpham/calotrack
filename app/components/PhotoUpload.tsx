"use client";
import PlaceHolderIcon from "../../public/placeholder.svg";

import { useRef, useState } from "react";
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

  return (
    <div>
      <div className="flex justify-center gap-4 mt-8 sm:mt-12 md:mt-16">
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          onClick={handleUpload}
          className="bg-gray-700 text-white rounded-full py-2 px-4 "
        >
          Upload file
        </button>
        <button
          onClick={handleCamera}
          className="bg-white text-black rounded-full p-2 px-4"
        >
          Take photo
        </button>
      </div>
      <h1
        className="text-center mt-4 text-xs text-gray-400
"
      ></h1>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="placeholder"
          className="w-80 mx-auto mt-8 sm:mt-12 md:mt-16"
        />
      ) : (
        <PlaceHolderIcon className="w-80 mx-auto mt-8 text-gray-400 outline-4 rounded-md md:mt-16" />
      )}

      <div className="flex justify-center mt-8 sm:mt-12 md:mt-16">
        <input
          type="text"
          placeholder="chicken, rice, 3 eggs"
          className="bg-neutral-800 text-white rounded-sm p-1 w-48 border border-neutral-600 mr-3
"
        />
        <button
          className="bg-white text-black p-2 rounded-full
"
        >
          Analyze
        </button>
      </div>
    </div>
  );
}
