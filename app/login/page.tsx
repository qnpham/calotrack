"use client";
import CubeTransparent from "../../public/CubeTransparent.svg";
import { FcGoogle } from "react-icons/fc";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");

  async function handleMagicLink() {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: "http://localhost:3000/auth/confirm",
      },
    });
    if (error) console.error(error);
    else alert("Check your email for the login link!");
  }

  return (
    <div className="container max-w-lg mx-auto px-6">
      <div className="mt-70 ">
        <CubeTransparent className="w-18 mx-auto mb-6" />
        <h1 className="text-center font-semibold text-xl">CaloTrack AI</h1>
        <div className="mt-8">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-neutral-900 border border-neutral-700 rounded-lg p-2 text-white "
              placeholder="Enter your email"
            />
            <button
              className=" rounded-lg p-2 px-4 mx-auto bg-white text-black hover:pointer-cursor"
              onClick={handleMagicLink}
            >
              Send link
            </button>
          </div>
          <p className="text-center mt-4 text-neutral-500">
            A login link will be sent to your email
          </p>
        </div>
      </div>
    </div>
  );
}
