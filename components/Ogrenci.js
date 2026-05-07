export default function Ogrenci(props){
  return (
    <div className="border border-gray-300 rounded-md">
      <div className="flex justify-between p-4 bg-gray-300 ">
        <h1 className="text-3xl font-bold">
          {props.ad} {props.Soyad}
        </h1>
        <div
          className={
            props.cinsiyet == "Erkek"
              ? "bg-blue-500 w-12 h-12 rounded-full"
              : "bg-pink-500 w-12 h-12 rounded-full"
          }
        ></div>
      </div>

      <div className="p-4">
        <ul className="list-disc p-4">
          <li>{props.no}</li>
          <li>{props.bolum}</li>
          <li>{props.sinif}</li>
        </ul>
      </div>
    </div>
  );
}
