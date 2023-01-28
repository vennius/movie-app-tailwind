import Navbar from "../components/Navbar"
import MovieCard from "../components/MovieCard"
import InputMovie from "../components/InputMovie"

export default function Home() {
  return (
    
    <div>
      
      <div className="flex justify-center my-5">
        <InputMovie/>
      </div>
      
      <div className="smler:flex smler:items-center smler:flex-col">
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
      </div>
    </div>
  
  )
  
}

export function getServerSideProps(ctx){
  
  console.log("test");
  return {
    props: {
      
    }
  }
}