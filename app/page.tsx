import CalorieCard from "./components/CalorieCard";
import PhotoUpload from "./components/PhotoUpload";
import MacroCard from "./components/MacroCard";
import CalendarDays from "../public/CalendarDays.svg";

export default function Home() {
  return (
    <div className="container mx-auto max-w-lg">
      <div className="flex justify-between items-center gap-4 px-4">
        <CalorieCard meals={2} calories={1242} />
        <CalendarDays className="w-18" />
      </div>
      <PhotoUpload />

      <MacroCard
        name={"chicken and eggs"}
        protein={90}
        calories={900}
        carbs={120}
        fat={50}
      />
    </div>
  );
}
