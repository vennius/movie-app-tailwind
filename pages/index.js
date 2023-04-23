import Navbar from "../components/Navbar"
import MovieCard from "../components/MovieCard"
import InputMovie from "../components/InputMovie"
import axios from "axios"

export default function Home({ data, genres }) {
  return (

    <>

      <div className="smler:flex smler:items-center smler:flex-col md:flex-row md:flex-wrap md:justify-center">

        <InputMovie />

        {data.map(item => {
          return <MovieCard key={item.id} genres={genres} data={item} />
        })}
      </div>

    </>

  )

}

export async function getServerSideProps(ctx) {

  const { API_KEY, BASE_URL } = process.env;

  try {
    const moviesResponse = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const genresResponse = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
    return {
      props: {
        data: moviesResponse.data.results,
        genres: genresResponse.data.genres
      }
    }
  } catch (err) {
    console.log(err);
  }

  return {
    props: {

    }
  }
}
