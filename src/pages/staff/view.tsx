import { Image } from "lucide-react";

export default function ViewPage() {
  return (
    <>
      <div>
        <h2 className="font-bold text-4xl mb-4">Student Information</h2>
        <div className="flex gap-10 w-full">
          <div className="w-52 h-64 flex justify-center items-center bg-gray-400/50 rounded-md">
            <Image className="w-12 h-12 text-gray-400/80" />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-bold text-3xl">Idjiot Sandwiches</h3>
              <h4 className="text-xl">2118033615</h4>
            </div>
            <div>
              <h4 className="font-bold text-xl">Date Chosen:</h4>
              <h5 className="text-lg">Wednesday, 20 November 2024</h5>
            </div>
            <div>
              <h4 className="font-bold text-xl">Time Chosen:</h4>
              <h5 className="text-lg">09:00 - 12:00</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
