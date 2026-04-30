import { useState } from "react";

export default function Sayac(){
  const [sayı,setSayı] = useState(0)
  function arttır(){
    setSayı(sayı+1)
  }
  function azalt(){
    setSayı(sayı-1)
  }
  return (
    <div className="flex gap-4 m-4 items-center">
      <button onClick={azalt} className="bg-red-500 p-2 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700 hover:scale-105">
        -
      </button>
      <p className="font-bold text-xl">{sayı}</p>
      <button onClick={arttır} className="bg-blue-500 p-2 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-700 hover:scale-105">
        +
      </button>
    </div>
  );
}
