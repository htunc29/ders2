import Link from "next/link";

export default async function Shop(){
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json()
  console.log(products)

  return(
    <div className="max-w-7xl mx-auto">
      <h1>Mağaza</h1>
      <div className="grid grid-cols-5 gap-4">
        {
          products.map((product)=>(
            <div key={product.id} className="border rounded-md hover:shadow-md group h-64 border-gray-300 p-2 hover:scale-105">

              <div className="flex justify-center items-center">
                <img src={product.image} alt={product.title} className="w-32 h-32" />
              </div>

            <div className="mt-4">
              <h3>{product.title.substring(0,10)}...</h3>
              <p className="text-orange-500">{product.price} $</p>
              <Link href={"/shop/"+product.id}
                className="bg-black text-white rounded-md py-2 px-4 mt-2"
              >Göz At
              </Link>
            </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
