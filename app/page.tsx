import CalorieCard from "./components/CalorieCard";
import PhotoUpload from "./components/PhotoUpload";

export default function Home() {
  return (
    <div className="container mx-auto">
      <CalorieCard meals={2} calories={1242} />
      <PhotoUpload />
    </div>
  );
}
