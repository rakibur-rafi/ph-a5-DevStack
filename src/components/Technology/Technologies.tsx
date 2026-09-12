import { use } from "react"
import type { TechnologyType } from "../../types/TechType"
import TechnologiesList from "./TechnologiesList"


const Technologies = ({ TechPromise }: { TechPromise: Promise<TechnologyType[]> }) => {
  const technologies = use(TechPromise)
  return (
    <div className="container mx-auto px-4 mb-10 max-lg:mb-2">
        <div className="max-lg:text-center">
          <h2 className="inter md:text-4xl max-md:text-2xl font-extrabold mb-2">Explore the <span className="gradient-text-2">Technologies</span></h2>
          <p className="text-[#64748B] max-md:text-xs">Pick one technology per category to build your ideal stack.</p>
        </div>

        <div className="mt-10">
            <TechnologiesList technologies={technologies}/>
        </div>
    </div>
  )
}

export default Technologies