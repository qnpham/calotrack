"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { useRouter } from "next/navigation";
import "react-day-picker/style.css";

export default function CalendarView() {
  const [selected, setSelected] = useState<Date | undefined>();
  const router = useRouter();

  function handleSelect(date: Date | undefined) {
    setSelected(date);
    if (date) {
      router.push(`/day?date=${date.toISOString()}`);
    }
  }

  useEffect(() => {
    console.log(selected);
  }, [selected]);
  return (
    <div className="container max-w-lg mx-auto px-6 ">
      <div className="flex mt-6">
        <Link href="/" className=" ml-auto">
          <div className="flex text-neutral-500">
            <ArrowLeft className="w-4" />
            <span className="text-sm">back</span>
          </div>
        </Link>
      </div>
      <div className=" flex justify-center mt-38">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={handleSelect}
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
