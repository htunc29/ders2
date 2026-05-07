"use client"

import Ogrenci from "@/components/Ogrenci"
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
  const liste = [
    {
      Ad: "Ahmet",
      Soyad: "Çelik",
      Bölüm: "Bilgisayar Programcılığı",
      No: 2311081001,
      Sınıf: 1,
      Cinsiyet: "Erkek",
    },
    {
      Ad: "Mehmet",
      Soyad: "Demir",
      Bölüm: "Elektrik",
      No: 2311081020,
      Sınıf: 1,
      Cinsiyet: "Erkek",
    },
    {
      Ad: "Ayşe",
      Soyad: "Deniz",
      Bölüm: "Ormancılık",
      No: 2311081030,
      Sınıf: 2,
      Cinsiyet: "Kız",
    },
  ];
  return (
    <div>
      <h1>{name}</h1>

      <input onKeyUp={isimAyarla} type="text" placeholder="İsim girin" />

      <input
        onKeyUp={(e) => setName(e.target.value)}
        type="text"
        placeholder="İsim girin"
      />

      <Sayac miktar={2} başlangıç={2} />
      <Sayac miktar={5} başlangıç={12} />
      <Sayac miktar={10} başlangıç={102} />

      <div className="grid grid-cols-3 gap-4 p-2">
        {liste.map((ogrenci) => (
          <Ogrenci
            key={ogrenci.No}
            no={ogrenci.No}
            ad={ogrenci.Ad}
            Soyad={ogrenci.Soyad}
            bolum={ogrenci.Bölüm}
            sinif={ogrenci.Sınıf}
            cinsiyet={ogrenci.Cinsiyet}
          />
        ))}
      </div>
    </div>
  );
}



