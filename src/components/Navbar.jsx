import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";


function Navbar() {

  const [isMenuOpen,setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className="flex justify-between  py-7  " >
        <span className="md:hidden ml-7 " onClick={()=>setIsMenuOpen(!isMenuOpen)} ><IoMdMenu className="w-[30px] h-[25px]" /></span>
        <div className="left  md:ml-10 lg:ml:12  ">  
            <button className="rounded-2xl px-2 text-[15px] shadow-sm shadow-[#c1c0c0] font-[medium] hover:cursor-pointer " >Available for New Project</button>
        </div>
        <div className="mid hidden md:flex items-center ">
            <ul className="flex justify-evenly gap-10">
                <li className="hover:bg-[black] hover:text-white rounded-2xl hover:px-2 hover:cursor-pointer " ><a href="#projects">Projects</a></li>
                <li className="hover:bg-[black] hover:text-white rounded-2xl hover:px-2 hover:cursor-pointer "><a href="#skills">Skills</a></li>
                <li className="hover:bg-[black] hover:text-white rounded-2xl hover:px-2 hover:cursor-pointer "><a href="#contact">Contact</a></li>
                
            </ul>
        </div>
        <div className="right lg:mr-12 md:mr-7 mr-4 ">
           <button className="bg-black text-white font-medium rounded-2xl px-2 shadow-sm shadow-black hover:cursor-pointer flex  "><a href="https://www.linkedin.com/in/aman-kumar-0a8122282/" target="_blank" >Let's Talk</a> <a href="https://www.linkedin.com/in/aman-kumar-0a8122282/" target="_blank" ><GoArrowUpRight  className="mx-2 mt-1.5"/> </a></button>
        </div>
      </nav>
    
    <div className={`${isMenuOpen ? "flex" : "hidden"} bg-white text-2xl text-black flex flex-col justify-center items-center list-none md:hidden `}>
      <li onClick={()=> setIsMenuOpen(false)} className="py-2 hover:bg-black hover:text-white w-[80%] flex items-center justify-center rounded "><a href="#projects" >Projects</a></li>
      <hr className="w-[80%] h-[2px] bg-black shadow-2xl  shadow-black " />

      <li onClick={()=> setIsMenuOpen(false)} className="py-2 hover:bg-black hover:text-white w-[80%] flex items-center justify-center rounded "><a href="#skills" >Skills</a></li>
      <hr className="w-[80%] h-[2px] bg-black shadow-2xl  shadow-black " />
      
      <li onClick={()=> setIsMenuOpen(false)} className="py-2 hover:bg-black hover:text-white w-[80%] flex items-center justify-center rounded "><a href="#contact">Contact</a></li>
      <hr className="w-[80%] h-[2px] bg-black shadow-2xl  shadow-black " />
    </div>

    </>
  )
}

export default Navbar
