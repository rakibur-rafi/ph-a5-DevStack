import type { TechnologyType } from '../../types/TechType'

const TechCard = ({tech}: { tech: TechnologyType }) => {
  return (
    <div>
        <div className="card bg-base-100 shadow-sm">
            
            <div className="card-body">
                <div className="flex justify-between w-full">
                    <h2 className="flex-1 card-title">{tech.name}</h2>
                    <p className="badge">{tech.badge}</p>
                </div>
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TechCard







