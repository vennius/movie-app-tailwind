import Image from "next/image"

export default function MovieCard(){
  return (
  
  <div className="w-64 bg-white my-5 rounded-3xl p-2">
    <Image width="100" height="50" src="/poster.jpeg" className="w-full rounded-3xl"/>
    <h1 className="text-xl font-bold my-3">Avengers Endgame</h1>
    <p className="font-thin">incididunt esse enim elit velit in veniam aliquip ut velit</p>
    <button className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-center text-slate-100 font-bold mt-4 py-2">Details</button>
  </div>
  
  )
}