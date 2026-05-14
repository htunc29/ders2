import Link from "next/link";

export default async function Detail({params}){
  const {id}= await params
  const response = await fetch("https://fakestoreapi.com/products/"+id);
  const product = await response.json()
  return(
    <div>
      <h1 className="text-xl">{product.title}</h1>
      <p className="text-sm">{product.description}</p>
      <Link href={"/shop"}>Tüm ürünler</Link>
    </div>
  )
}
