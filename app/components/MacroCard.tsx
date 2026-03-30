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
    <div className="mt-8 sm:mt-12 md:mt-16">
      <div className="bg-neutral-800 w-80 mx-auto outline-1 outline-neutral-500 ">
        <div className="flex justify-between bg-neutral-900 p-4">
          <div>
            <span className="font-semibold">{name}</span>
          </div>
          <div>
            <span className="font-semibold mr-1">{calories}</span>
            <span>kcal</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="p-4 flex flex-col items-center flex-1">
            <span className="">{protein}g</span>
            <span>protein</span>
          </div>
          <div className="p-4 border-x border-neutral-500 flex flex-col items-center flex-1">
            <span>{carbs}g</span>
            <span>carbs</span>
          </div>
          <div className="p-4 flex flex-col items-center flex-1">
            <span>{fat}g</span>
            <span>fat</span>
          </div>
        </div>
      </div>
      <div className="mt-6 sm:mt-12 md:mt-16 flex justify-center">
        <button className="border-1 p-2 bg-white text-black rounded-full hover:cursor-pointer">
          TRACK
        </button>
      </div>
    </div>
  );
}
