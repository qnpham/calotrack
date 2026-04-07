"use client";
import { Nutrition } from "@/types/nutrition";
import { ArrowLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";
import MacroCard from "../components/MacroCard";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function DayPage() {
  const searchParams = useSearchParams();
  const dateParam = searchParams.get("date");
  const date = dateParam ? new Date(dateParam) : new Date();
  const [meals, setMeals] = useState<Nutrition[]>([]);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  useEffect(() => {
    async function handleFetch() {
      const response = await supabase.auth.getSession();
      const session = response.data.session;
      const userId = session?.user?.id;
      const { data, error } = await supabase
        .from("meals")
        .select("*")
        .eq("user_id", userId)
        .eq("date", dateParam);
      if (data) setMeals(data);
    }
    handleFetch();
  }, []);

  return (
    <div className="container max-w-lg mx-auto px-6">
      <div className="flex justify-between items-center mt-12">
        <div>
          <h1
            className="font-semibold text-2xl 
 "
          >
            {formattedDate}
          </h1>
          <p className="text-sm text-neutral-500">3 meals logged</p>
        </div>
        <Link href={"/calendar"}>
          <div className="flex text-neutral-500">
            <ArrowLeft className="w-4" />
            <span className="text-sm">back</span>
          </div>
        </Link>
      </div>
      <div className="flex justify-around mt-8 bg-neutral-900 py-4 rounded-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-xl">1,840</h1>
          <p className="text-sm text-neutral-500">calories</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-xl">142g</h1>
          <p className="text-sm text-neutral-500">protein</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-xl">180g</h1>
          <p className="text-sm text-neutral-500">carbs</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-xl">54g</h1>
          <p className="text-sm text-neutral-500">fat</p>
        </div>
      </div>
      <h1 className="text-sm text-neutral-500 mt-6">MEALS</h1>
      <div className="flex flex-col gap-4 mt-4">
        {meals.map((meal, index) => {
          return <MacroCard {...meal} key={index} />;
        })}
      </div>
    </div>
  );
}
