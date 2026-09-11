import type { Dispatch, SetStateAction } from 'react';
import type { TechnologyType } from '../../types/TechType'
import { SiTarom } from 'react-icons/si';
import { FaStar } from 'react-icons/fa';

interface TechCardProps {
  tech: TechnologyType;
  stack: TechnologyType[];
  setStack: Dispatch<SetStateAction<TechnologyType[]>>;
}

const TechCard = ({tech, stack, setStack}: TechCardProps) => {

  const handleClick = () => {
    if (stack.includes(tech)) {
      setStack(stack.filter((t) => t !== tech));
    } else {
      setStack([...stack, tech]);
    }
  }
  return (
    <div className="">
        <div className={`card bg-base-100 shadow-sm inter ${stack.includes(tech) ? "border-2 border-[#64748B]" : ""}`}>
            <div className="card-body">
                <div className="flex justify-between">
                  <div className="flex flex-col max-lg:flex-row gap-4">
                    <img src={tech.icon} alt={tech.name} className="w-10 h-10"/>
                    <h2 className="card-title font-bold">{tech.name}</h2>
                  </div>
                      <span
                        className={`badge rounded-full text-xs ${
                          tech.badge === "Popular"
                            ? "bg-[#F0F9FF] text-[#0EA5E9] border-[#E0F2FE]"
                            : tech.badge === "Fast"
                            ? "bg-[#FFF7ED] text-[#EA580C] border-[#FFEDD5]"
                            : tech.badge === "Containers"
                            ? "bg-purple-100 text-purple-600 border-purple-200"
                            : tech.badge === "Essential"
                            ? "bg-[#ECFDF5] border-[#D1FAE5] text-[#059669]"
                            : tech.badge === "API Tool"
                            ? "bg-[#FEF2F2] text-[#DC2626] border-[#FEE2E2]"
                            : tech.badge === "Automation"
                            ? "bg-[#FFFBEB] text-[#D97706] border-[#FEF3C7]"
                            : tech.badge === "Reliable"
                            ? "bg-[#ECFEFF] text-[#0891B2] border-[#CFFAFE]"
                            : tech.badge === "Scaling"
                            ? "bg-[#FEF3C7] text-[#D97706] border-[#FEF3C7]"
                            : ""
                        }`}
                      >
                        {tech.badge}
                      </span>
                </div>

                
                
                <p className="text-[#64748B] max-lg:text-sm mt-4 mb-2">{tech.description}</p>
                <div className="mt-4 flex justify-between text-xs items-center">
                    <span className="badge text-xs bg-[#F1F5F9] text-[#475569]">{tech.category}</span>
                    <span className="text-[#64748B]">{tech.difficulty}</span>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-[#F59E0B] text-sm max-lg:text-xs"/> 
                      <span className="text-[#334155] font-semibold max-lg:text-[#F59E0B]">{tech.rating}</span>
                      
                    </div>
                </div>
                <div className="mt-2">
                <button onClick={handleClick} disabled={stack.includes(tech)} className={`btn rounded-xl w-full font-normal ${stack.includes(tech) ? "btn-disabled text-[#334155] font-semibold" : "text-white dark-color-bg "}`}>
                  {stack.includes(tech) ? "Added to Stack" : "Add to Stack"}
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TechCard







