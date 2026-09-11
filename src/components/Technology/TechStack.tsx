import React from 'react'

const TechStack = () => {
  return (
    <div>
        <div className="card bg-base-100 shadow-sm inter">
            <div className="card-body">
                  <div className="flex flex-col gap-2">
                    <h2 className="card-title font-bold">Your Stack</h2>
                     <p className="text-[#94A3B8] text-sm max-lg:text-xs">No technologies selected yet.</p>
                  </div>
                  
                <div className="mt-4 flex text-center items-center p-6 border border-dashed border-[#E2E8F0] rounded-xl">
                    <p className="text-[#94A3B8]">Your Stack is empty.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TechStack