"use client";
import { Nutrition } from "@/types/nutrition";
import ArrowLeft from "../../public/ArrowLeft.svg";

export default function DayPage() {
  const meals: Nutrition[] = [
    {
      name: "chicken, eggs, and rice",
      protein: 120,
      calories: 700,
      carbs: 90,
      fat: 100,
    },
    {
      name: "4 tacos",
      protein: 120,
      calories: 800,
      carbs: 100,
      fat: 40,
    },
    {
      name: "pho",
      protein: 50,
      calories: 800,
      carbs: 60,
      fat: 50,
    },
  ];
  return (
    <div className="container max-w-lg mx-auto px-6">
      <div className="flex justify-between items-center mt-12">
        <div>
          <h1
            className="font-semibold text-2xl 
 "
          >
            March 30, 2026
          </h1>
          <p className="text-sm text-neutral-500">3 meals logged</p>
        </div>
        <div className="flex text-neutral-500">
          <ArrowLeft className="w-4" />
          <span className="text-sm">back</span>
        </div>
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
          return (
            <div className="bg-neutral-900 px-5 rounded-xl" key={index}>
              <div className="flex justify-between py-3 border-b border-neutral-700">
                <h1 className="font-semibold">Oatmeal & banana</h1>
                <div>
                  <span className="font-semibold mr-1">420</span>
                  <span className="text-sm text-neutral-500">kcal</span>
                </div>
              </div>
              <div className="flex justify-between py-3">
                <div className="flex flex-col items-center flex-1">
                  <h1 className="font-semibold">{meal.protein}g</h1>
                  <p className="text-xs text-neutral-500">protein</p>
                </div>
                <div className="flex flex-col items-center border-x border-neutral-700 flex-1">
                  <h1 className="font-semibold">{meal.carbs}g</h1>
                  <p className="text-xs text-neutral-500">carbs</p>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <h1 className="font-semibold">{meal.fat}g</h1>
                  <p className="text-xs text-neutral-500">fat</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
