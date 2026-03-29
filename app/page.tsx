import CalorieCard from "./components/CalorieCard";
import PhotoUpload from "./components/PhotoUpload";
import MacroCard from "./components/MacroCard";

export default function Home() {
  return (
    <div className="container mx-auto">
      <CalorieCard meals={2} calories={1242} />
      <PhotoUpload />
      <div className="mt-8">
        <MacroCard
          name={"chicken and eggs"}
          protein={90}
          calories={900}
          carbs={120}
          fat={50}
        />
      </div>
    </div>
  );
}
