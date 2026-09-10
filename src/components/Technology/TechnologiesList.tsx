import type { TechnologyType } from "../../types/TechType"
import TechCard from "./TechCard"

const TechnologiesList = ({technologies} : { technologies: TechnologyType[] } ) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:col-span-2">
            {
                technologies.map((tech) => (
                    <TechCard key={tech.id} tech={tech}/>
                ))
            }
        </div>
        <div className="">

        </div>
    </div>
  )
}

export default TechnologiesList