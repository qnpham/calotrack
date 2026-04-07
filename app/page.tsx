"use client";
import MacroCard from "./components/MacroCard";
import CalendarDays from "../public/CalendarDays.svg";
import Camera from "../public/Camera.svg";
import { useRef, useState } from "react";
import Link from "next/link";
import type { Nutrition } from "@/types/nutrition";
import { LogOut } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [result, setResult] = useState<Nutrition>({
    name: "",
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const router = useRouter();

  function descriptionChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDescription(e.target.value);
  }

  async function handleAnalyze() {
    setIsLoading(true);
    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description, imageBase64 }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      if (error) setError(null);
      setResult(data);
      setIsLoading(false);
    } catch (error) {
      setError("Gemini is busy, please try again");
      setIsLoading(false);
    }
  }

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

  async function handleTrack() {
    const response = await supabase.auth.getSession();
    const session = response.data.session;
    const userId = session?.user?.id;
    const { error } = await supabase.from("meals").insert({
      user_id: userId,
      name: result.name,
      calories: result.calories,
      protein: result.protein,
      carbs: result.carbs,
      fat: result.fat,
      date: new Date().toISOString().split("T")[0],
    });
    if (error) console.error(error);
    alert("tracked!");
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === "image/heic" || file.name.endsWith(".heic")) {
        alert("HEIC files are not supported. Please use JPEG or PNG.");
        return;
      }
      setImageUrl(URL.createObjectURL(file));
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setImageBase64(base64);
      };
      reader.readAsDataURL(file);
    }
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <div className="container max-w-lg mx-auto px-6">
      <div className="flex justify-between mt-8">
        <p className="text-sm text-neutral-500">TODAY</p>
        <div className="flex gap-2">
          <div className="w-9 h-9 border border-neutral-800 rounded-lg flex items-center justify-center cursor-pointer">
            <Link href="/calendar">
              <CalendarDays className="w-5 h-5 text-neutral-500" />
            </Link>
          </div>
          <div
            className="w-9 h-9 border border-neutral-800 rounded-lg flex items-center justify-center cursor-pointer"
            onClick={handleSignOut}
          >
            <LogOut className="w-5 h-5 text-neutral-500" />
          </div>
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
          placeholder="Describe your food (optional)"
          onChange={descriptionChange}
          value={description}
        />
        <button
          className="flex-1 border border-neutral-800 rounded-lg p-1"
          onClick={handleAnalyze}
          disabled={isLoading}
        >
          {isLoading ? "Analyzing..." : "Analyze"}
        </button>
      </div>
      {error && (
        <p className="text-red-400 text-sm text-center mt-6">{error}</p>
      )}
      <div className="mt-8">
        <MacroCard
          name={result.name}
          protein={result.protein}
          calories={result.calories}
          carbs={result.carbs}
          fat={result.fat}
        />
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="border border-neutral-800 rounded-lg p-2 px-4 mx-auto"
          onClick={handleTrack}
        >
          Track
        </button>
      </div>
    </div>
  );
}
