import { Suspense } from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Technologies from "./components/Technology/Technologies"

const TechFetch =async ()=>{
  const res= await fetch("/data.json")
  const data= await res.json()
  return data
}


const App = () => {
  const TechPromise= TechFetch()

  return (
    <div className="bg-white">
      <Navbar/>
      <Hero/>
       <Suspense fallback={
        <div className="flex justify-center items-center min-h-40">
          <span className="loading loading-spinner loading-lg text-[#D91B7E] scale-200"></span>
        </div>
      }>
        <Technologies TechPromise={TechPromise}/>
      </Suspense>
    </div>
  )
}

export default App