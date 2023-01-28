export default function InputMovie(){
  
  return(
  
    <label id="inputMovie" className="flex flex-col items-center">
      Search Movie
      <input
      className="outline-0 bg-transparent h-8 w-3/4 px-3 rounded-full border-2 border-zinc-500"
      type="text"
      name="inputMovie"/>
    </label>
  
  )
  
}