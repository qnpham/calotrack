import CalorieCard from "./components/CalorieCard";

export default function Home() {
  return (
    <div className="container mx-auto">
      <CalorieCard meals={2} calories={1240} />
    </div>
  );
}
