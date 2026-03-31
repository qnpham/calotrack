import CubeTransparent from "../../public/CubeTransparent.svg";
import { FcGoogle } from "react-icons/fc";

export default function loginPage() {
  return (
    <div className="container max-w-lg mx-auto px-6">
      <div className="mt-70 ">
        <CubeTransparent className="w-18 mx-auto mb-6" />
        <h1 className="text-center font-semibold text-xl">CaloTrack AI</h1>
        <div className="flex justify-center items- gap-2 border rounded-md py-2 mt-6 border-neutral-700">
          <FcGoogle size={20} />
          <span>Continue with Google</span>
        </div>
      </div>
    </div>
  );
}
