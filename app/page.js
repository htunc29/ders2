"use client"

import Sayac from "@/components/Sayac"
import { useState } from "react"



export default function Home(){
  let age = 12
  let kullanici_adi = "userbasdsadad"
  const [acik_mi,ayarla] = useState(false)
  const [name,setName]=useState("Hüseyin")
  function toggle(){
    ayarla(!acik_mi)
  }
  function isimAyarla(e){
    setName(e.target.value)
  }
  return (
    <div>
      <h1>{name}</h1>

      <input onKeyUp={isimAyarla} type="text" placeholder="İsim girin" />

      <input
        onKeyUp={(e) => setName(e.target.value)}
        type="text"
        placeholder="İsim girin"
      />

      <Sayac />
     
    </div>
  );
}



