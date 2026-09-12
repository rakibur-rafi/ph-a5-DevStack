
const Footer = () => {
  return (
    <div className="container mx-auto py-12 px-4 mt-20 max-lg:mt-12 max-sm:bg-white border-t border-[#E2E8F0]">
        <div className="flex flex-col gap-12 max-lg:gap-8">
            <div className="flex max-lg:flex-col justify-between">
                <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
                    <img src="/logo-text.png" alt="" />
                    <p className="text-[#64748B] text-sm ">Curated tools, technologies, and resources for developers building
                        modern software.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a className="text-[#475569] text-sm font-semibold max-lg:font-normal" href="">Github</a>
                        <p className="text-[#475569] text-sm font-semibold max-lg:font-normal lg:hidden">•</p>
                        <a className="text-[#475569] text-sm font-semibold max-lg:font-normal" href="">Twitter</a>
                        <p className="text-[#475569] text-sm font-semibold max-lg:font-normal  lg:hidden">•</p>
                        <a className="text-[#475569] text-sm font-semibold max-lg:font-normal" href="">Linkedin</a>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-4 max-lg:hidden">
                    <h2 className="font-bold text-sm">PRODUCT</h2>
                    <a className="text-[#64748B] text-sm" href="">Home</a>
                    <a className="text-[#64748B] text-sm" href="">Technologies</a>
                    <a className="text-[#64748B] text-sm" href="">Projects</a>
                </div>
                <div className="flex flex-col items-start gap-4 max-lg:hidden">
                    <h2 className="font-bold text-sm">COMPANY</h2>
                    <a className="text-[#64748B] text-sm" href="">About</a>
                    <a className="text-[#64748B] text-sm" href="">Contact</a>
                    <a className="text-[#64748B] text-sm" href="">Careers</a>
                </div>
                <div className="flex flex-col items-start gap-4 max-lg:hidden">
                    <h2 className="font-bold text-sm">LEGAL</h2>
                    <a className="text-[#64748B] text-sm" href="">Privacy Policy</a>
                    <a className="text-[#64748B] text-sm" href="">Terms of Service</a>
                </div>
            </div>
            <div className="flex justify-between items-center max-lg:gap-1 border-t border-[#F1F5F9] pt-8 max-lg:pt-6">
                <p className="text-[#94A3B8] text-sm max-lg:text-xs">© 2026 Dev Stack. All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <a className="text-[#94A3B8] text-sm max-lg:text-xs" href="">Privacy</a>
                    <a className="text-[#94A3B8] text-sm max-lg:text-xs" href="">Terms</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer