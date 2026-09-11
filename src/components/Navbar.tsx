
const Navbar = () => {
  return (
    <nav className="top-0 sticky z-100 py-4 max-lg:py-4 text-sm max-lg:text-xs shadow-xs px-4 bg-white">
      
        <div className="relative flex justify-between items-center container mx-auto">
          <img src="/hamburger.png" alt="logo" className="lg:hidden"/>
          <img src="/logo-text.png" alt="logo" className="max-lg:w-24"/>
          <div className="flex items-center gap-8 text-[#475569] max-lg:hidden">
            <a href="#" className="text-[#D91B7E] font-semibold">Home</a>
            <a href="#" className="">Technologies</a>
            <a href="#" className="">Projects</a>
            <a href="#" className="">About</a>
            <a href="#" className="">Contact</a>
          </div>
          <div className="flex items-center gap-7 max-lg:gap-3 max-lg:text-xs">
            <button className="">Sign In</button>
            <button className="bg-[#D91B7E] text-white py-3 max-lg:py-1.5 px-6 max-lg:px-4 rounded-full">Sign Up</button>
          </div>
        </div>
    </nav>
  )
}

export default Navbar