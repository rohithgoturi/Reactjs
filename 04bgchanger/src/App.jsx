import { useState } from "react";

function App() {
  const [color, setColor] = useState("bg-olive-500");

  return (
    <>
      <div
        className={`w-full h-screen duration-200 flex flex-col items-center justify-center gap-4 ${color}`}
      >
        <h1 className="text-white text-3xl font-bold drop-shadow-lg">
          Background Changer
        </h1>

        <div className="flex gap-4">
          <button
            onClick={() => setColor("bg-red-500")}
            className="px-4 py-2 rounded-lg bg-red-500 text-white shadow-md hover:scale-105 duration-200"
          >
            Red
          </button>
          <button
            onClick={() => setColor("bg-green-500")}
            className="px-4 py-2 rounded-lg bg-green-500 text-white shadow-md hover:scale-105 duration-200"
          >
            Green
          </button>
          <button
            onClick={() => setColor("bg-blue-500")}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white shadow-md hover:scale-105 duration-200"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("bg-purple-500")}
            className="px-4 py-2 rounded-lg bg-purple-500 text-white shadow-md hover:scale-105 duration-200"
          >
            Purple
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
