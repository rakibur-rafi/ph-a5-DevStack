import Navbar from "./components/Navbar"

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
    </div>
  )
}

export default App