"use client"

import { useState } from "react"



export default function Home(){
  let name = "Hüseyin"
  let age = 12
  let kullanici_adi = "userbasdsadad"
  const [acik_mi,ayarla] = useState(false)
  function toggle(){
    ayarla(!acik_mi)
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <button onClick={toggle} className="bg-blue-500 p-2
      text-white rounded-md shadow-lg">
        Aç / Kapa
      </button>
      {
        acik_mi
        ?
        <div className="bg-red-500 h-80 w-80">
        Kutu
        </div>
        :
        ""
      }

    </div>
  );
}



