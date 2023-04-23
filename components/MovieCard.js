import Image from "next/image"
import { useState, useEffect } from "react"

export default function MovieCard({data, genres}){
  const [limitedGenres, setLimitedGenres] = useState([])
  
  useEffect(() => {
    const mappedGenres = data.genre_ids.map(item => {
      const foundGenre = genres.find(el => {
        return el.id == item
      })
      return <div className="px-1 mx-2 mt-2 text-sm rounded-full border-2 border-zinc-400 text-zinc-500">{foundGenre.name}</div>
    })
    setLimitedGenres([mappedGenres[0], mappedGenres[1], mappedGenres[2]])
  }, [])
  
  return (
  
  <div className="smler:w-64 bg-white my-5 rounded-3xl p-2 shadow-xl md:w-96 md:flex md:mx-3 md:h-72">
    <div className="mr-2">
      <Image width="100" height="50" src={`https://image.tmdb.org/t/p/original${data.poster_path}`} className="smler:w-full rounded-3xl h-full md:w-[500px]"/>
    </div>
    
    <div className="">
      <div className="flex flex-wrap">
        
        {limitedGenres}
        
      </div>
      <h1 className="text-sm font-bold my-3">{data.title}</h1>
      <p className="font-thin">{data.overview.substring(0,60)+"..."}</p>
      <button className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-center text-slate-100 font-bold smler:mt-4 py-2">Details</button>
    </div>
      
  </div>
  
  )
}