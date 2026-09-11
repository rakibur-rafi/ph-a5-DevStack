import type { Dispatch, SetStateAction } from 'react'
import type { TechnologyType } from '../../types/TechType'
import { MdClose } from 'react-icons/md'
import { toast, ToastContainer } from 'react-toastify'
interface TechStackProps {
  stack: TechnologyType[]
  setStack: Dispatch<SetStateAction<TechnologyType[]>>
}

const TechStack = ({ stack, setStack }: TechStackProps) => {
  const handleRemove = (id: string) => {
    setStack(stack.filter((tech) => tech.id !== id))
    const tech = stack.find((tech) => tech.id === id)
    toast.success(`${tech?.name} removed from stack.`)
  }

  const handleRemoveAll=()=>{
    setStack([])
    toast.success("All technologies removed.")
  }

  return (
    <div>
   

      <div className="card bg-base-100 shadow-sm inter">
        <div className="card-body">
          <div className="flex flex-col gap-2">
            <h2 className="card-title font-bold">Your Stack</h2>
            <p className="text-[#94A3B8] text-sm max-lg:text-xs">
              {stack.length === 0
                ? "No technologies selected yet."
                : `${stack.length} Technology Selected.`}
            </p>
          </div>

          {stack.length === 0? (
            <div className="mt-4 flex text-center items-center justify-center p-6 border border-dashed border-[#E2E8F0] rounded-xl">
              <p className="text-[#94A3B8]">
                Your Stack is empty.
              </p>
            </div>
          ) : (
            <div className="mt-4 flex flex-col gap-3">
              {stack.map((tech) => (
                <div key={tech.id} className="flex items-center justify-between p-4 border border-[#E2E8F0] rounded-xl">
                  <div className="flex items-center gap-3">
                    <img src={tech.icon} alt={tech.name} className="w-10 h-10"/>

                    <div className="flex flex-col gap-0.5">
                      <span className="font-semibold text-sm">{tech.name}</span>
                      <p className="text-[#94A3B8] text-xs">{tech.category}</p>
                    </div>
                  </div>

                  <button onClick={() => handleRemove(tech.id)}className="text-sm text-red-500">
                    <MdClose size={20} className="text-[#94A3B8]" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {
            stack.length > 0 && (
              <div className="mt-10">
                <button onClick={handleRemoveAll} className="btn text-[#D82C20] border border-[#ED8C85] w-full rounded-xl">Remove All</button>
                
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default TechStack