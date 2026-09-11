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
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TechnologiesList