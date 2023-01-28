import Link from "next/link"

export default function Navbar(){
  return(
    <div className="bg-gray-500 h-12 w-screen shadow flex flex-col justify-center">
      <div className="text-center">
        <Link href="/" className="font-bold text-xl">Movie Library</Link>
      </div>
    </div>
  )
}