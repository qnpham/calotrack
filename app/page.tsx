"use client";
import MacroCard from "./components/MacroCard";
import CalendarDays from "../public/CalendarDays.svg";
import Camera from "../public/Camera.svg";
import { useRef, useState } from "react";
import Link from "next/link";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  function handleUpload() {
    if (inputRef.current) {
      inputRef.current.removeAttribute("capture");
      inputRef.current.click();
    }
  }

  function takePhoto() {
    if (inputRef.current) {
      inputRef.current.setAttribute("capture", "environment");
      inputRef.current.click();
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      console.log(file);
      setImageUrl(URL.createObjectURL(file));
    }
  }

  return (
    <div className="container max-w-lg mx-auto px-6">
      <div className="flex justify-between mt-8">
        <p className="text-sm text-neutral-500">TODAY</p>
        <div className="w-9 h-9 border border-neutral-800 rounded-lg flex items-center justify-center cursor-pointer">
          <Link href="/calendar">
            <CalendarDays className="w-5 h-5 text-neutral-500" />
          </Link>
        </div>
      </div>
      <div>
        <h1
          className="inline text-4xl mr-2 font-semibold
"
        >
          1,230
        </h1>
        <span className="text-neutral-500">kcal</span>
        <p className="text-neutral-500 text-sm">2 meals logged</p>
      </div>
      <div className="flex mt-4 gap-2 border-b border-neutral-700 pb-6">
        <div className="flex flex-col items-center flex-1 bg-neutral-900 py-2 rounded-xl">
          <h1 className="font-semibold text-sm">142g</h1>
          <p className=" text-neutral-500 text-sm">protein</p>
        </div>
        <div className="flex flex-col items-center flex-1 bg-neutral-900 py-2 rounded-xl">
          <h1 className="font-semibold text-sm">54g</h1>
          <p className=" text-neutral-500 text-sm">carbs</p>
        </div>
        <div className="flex flex-col items-center flex-1 bg-neutral-900 py-2 rounded-xl">
          <h1 className="font-semibold text-sm">54g</h1>
          <p className=" text-neutral-500 text-sm">fat</p>
        </div>
      </div>
      <div className="mt-8">
        {imageUrl ? (
          <img src={imageUrl} className="w-full h-48 object-cover rounded-xl" />
        ) : (
          <div className="bg-neutral-900 rounded-xl h-48 flex justify-center items-center">
            <div className="text-neutral-800">
              <Camera className="w-8 mx-auto " />
              <p className="text-center">No Photo added</p>
            </div>
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          capture="user"
          ref={inputRef}
          className="hidden"
          onChange={handleFileChange}
        />
        <div className="flex mt-6 gap-2">
          <button
            className="flex-1 border  border-neutral-800 rounded-2xl py-1 text-sm"
            onClick={handleUpload}
          >
            Upload file
          </button>
          <button
            className="flex-1 bg-white text-black text-sm py-1 rounded-2xl"
            onClick={takePhoto}
          >
            Take photo
          </button>
        </div>
      </div>
      <div className="flex gap-2 mt-6">
        <input
          className="border flex-2  bg-neutral-900 border-neutral-800 rounded-lg px-2"
          type="text"
          placeholder="chicken, rice, and eggs"
        />
        <button className="flex-1 border border-neutral-800 rounded-lg p-1">
          Analyze
        </button>
      </div>
      <div className="mt-8">
        <MacroCard
          name={"slice of pizza"}
          protein={90}
          calories={350}
          carbs={100}
          fat={90}
        />
      </div>
      <div className="flex justify-center mt-8">
        <button className="border border-neutral-800 rounded-lg p-2 px-4 mx-auto">
          Track
        </button>
      </div>
    </div>
  );
}
