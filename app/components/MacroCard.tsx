"use client";
import { Nutrition } from "@/types/nutrition";
export default function MacroCard({
  name,
  protein,
  calories,
  carbs,
  fat,
}: Nutrition) {
  return (
    <div className="bg-neutral-900 px-5 rounded-xl">
      <div className="flex justify-between py-3 border-b border-neutral-700">
        <h1 className="font-semibold">{name}</h1>
        <div>
          <span className="font-semibold mr-1">{calories}</span>
          <span className="text-sm text-neutral-500">kcal</span>
        </div>
      </div>
      <div className="flex justify-between py-3">
        <div className="flex flex-col items-center flex-1">
          <h1 className="font-semibold">{protein}g</h1>
          <p className="text-xs text-neutral-500">protein</p>
        </div>
        <div className="flex flex-col items-center border-x border-neutral-700 flex-1">
          <h1 className="font-semibold">{carbs}g</h1>
          <p className="text-xs text-neutral-500">carbs</p>
        </div>
        <div className="flex flex-col items-center flex-1">
          <h1 className="font-semibold">{fat}g</h1>
          <p className="text-xs text-neutral-500">fat</p>
        </div>
      </div>
    </div>
  );
}
