type CalorieCardProps = {
  meals: number;
  calories: number;
};

export default function CalorieCard({ meals, calories }: CalorieCardProps) {
  return (
    <div className="bg-stone-900 p-4  rounded-xl mt-4 w-full sm:mt-12">
      <div className="flex justify-between text-xs sm:text-sm md:text-base items-center">
        <h1 className="text-gray-400">TODAY</h1>
        <div className="bg-white p-1 rounded-md">
          <p className="text-black">{meals} meals</p>
        </div>
      </div>
      <div className="mt-2 flex items-baseline">
        <h1 className="text-xl sm:text-2xl md:text-3xl mr-2 font-semibold">
          {calories}
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-400">
          calories
        </p>
      </div>
    </div>
  );
}
