
const Hero = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 items-center px-4">
        <div className="flex flex-col max-lg:gap-4 max-lg:text-center">
            <h1 className="inter max-lg:text-3xl text-6xl font-extrabold mb-6 max-lg:mb-2.5"><span className="dark-color">Build Your Ideal</span> 
            <br />
            <span className="gradient-text-1">Development Stack</span></h1>
            <p className="text-[#4B5563] max-lg:text-sm mb-12 max-lg:mb-2.5">Explore frontend, backend, database, and tooling options,
                compare them side by side, and put together the stack that fits your
                next project.</p>
            <div className="flex gap-4 max-lg:gap-2 max-lg:justify-center text-sm max-lg:text-xs">
                <button className="gradient-bg text-white py-3 px-6 rounded-xl">Explore Technologies</button>
                <button className="border border-[#E5E7EB] text-[#374151] py-3 px-12 rounded-xl">Learn More</button>
            </div>
        </div>
        <div className="flex justify-center lg:justify-end">
            <img src="/banner-stack.png" alt="Banner"
            className="w-full max-w-xl object-center max-lg:object-contain"
            />
      </div>
    </div>
  )
}

export default Hero
