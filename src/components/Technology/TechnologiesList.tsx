import { useState } from "react"
import type { TechnologyType } from "../../types/TechType"
import TechCard from "./TechCard"
import TechStack from "./TechStack"

const TechnologiesList = ({technologies} : { technologies: TechnologyType[] } ) => {
    const [stack, setStack]= useState<TechnologyType[]>([])
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:col-span-3">
            {
                technologies.map((tech) => (
                    <TechCard key={tech.id} tech={tech} stack={stack} setStack={setStack}/>
                ))
            }
        </div>
        <div className="">
            <TechStack stack={stack} setStack={setStack}/>
        </div>
    </div>
  )
}

export default TechnologiesList