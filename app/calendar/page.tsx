"use client";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
export default function CalendarView() {
  const [selected, setSelected] = useState<Date | undefined>();
  useEffect(() => {
    console.log(selected);
  }, [selected]);
  return (
    <div className="container max-w-lg mx-auto px-6 ">
      <div className="flex mt-6">
        <div className="flex text-neutral-500 ml-auto">
          <ArrowLeft className="w-4" />
          <span className="text-sm">back</span>
        </div>
      </div>
      <div className=" flex justify-center mt-38">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          classNames={{
            day: "text-white",
            selected: "bg-white !text-black rounded-full",
            today: "text-white font-bold",
            chevron: "!fill-white",
          }}
        />
      </div>
    </div>
  );
}
