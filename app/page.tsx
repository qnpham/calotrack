import MacroCard from "./components/MacroCard";
import CalendarDays from "../public/CalendarDays.svg";

export default function Home() {
  return (
    <div className="container max-w-lg mx-auto px-6">
      <div className="flex justify-between mt-8">
        <p className="text-sm text-neutral-500">TODAY</p>
        <div className="w-9 h-9 border border-neutral-800 rounded-lg flex items-center justify-center cursor-pointer">
          <CalendarDays className="w-5 h-5 text-neutral-500" />
        </div>
      </div>
    </div>
  );
}
