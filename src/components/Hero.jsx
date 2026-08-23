import { GoArrowUpRight } from "react-icons/go";

function Hero() {
  return (
    <>
    {/*Mobile */}
    <main className=" md:hidden ">
        <div className="upper flex justify-center items-center  pb-5 ">
            <h1 className="text-[100px] flex justify-center items-center text-center leading-none ">Aman Ruhela</h1>
        </div>

        <div className="lower flex justify-between flex-col ">
            <div className="mid flex items-center justify-center relative ">
                <img src="../../public/ChatGPT Image Aug 23, 2026, 06_53_14 PM (1).png" alt="" 
                className=" " width="350px"  height="400px" />
                
            </div>
            <div className="left flex justify-between flex-col text-center pt-7 ">
                <h2 className="font-bold text-2xl ">UI/UX Designer</h2>
                <p>Designing digital products that are clear,</p>
                <p>usable, and conversion focused</p>
                <span>
                <button className="bg-black text-white rounded-2xl mt-5 my-3 px-5 py-1.5 hover:cursor-pointer hover:shadow-2xl hover:shadow-black  "> <span className="flex"> Let's Collaborate <GoArrowUpRight className="ml-2  mt-0.5 text-2xl" /></span>
 </button>
                </span>
            </div>
            
            <div className="right flex flex-col mt-5 ">
                <button className="bg-white rounded-2xl mx-5 border-white py-1.5 text-[15px] font-medium shadow-sm shadow-[#c1c0c0] mt-2  hover:bg-black hover:text-white " ><a href="https://www.linkedin.com/in/aman-kumar-0a8122282/" target="_blank" >LinkedIn</a></button>
                <button className="bg-white rounded-2xl mx-5 border-white py-1.5 text-[15px] font-medium shadow-sm shadow-[#c1c0c0] mt-2  hover:bg-black hover:text-white " ><a href="mailto:amank004433@gmail.com" target="_blank">Gmail</a></button>
                <button className="bg-white rounded-2xl mx-5 border-white py-1.5 text-[15px] font-medium shadow-sm shadow-[#c1c0c0] mt-2  hover:bg-black hover:text-white " ><a href="https://www.instagram.com/amanruhela02/" target="_blank">Instagram</a></button>
            </div>
        </div>
        
    </main>

   {/*Tab */}
    <main className="hidden md:flex flex-col ">
   <div className="lower flex justify-center items-center mb-5 ">
            <h1 className="text-[180px] lg:text-[240px] flex justify-center items-center text-center leading-none ">Aman Ruhela</h1>
        </div>

     <div className="lower flex justify-between   ">
           <div className="left mt-15 ml-8 justify-center lg:mt-35 lg:ml-25 ">
            <h2 className="font-bold text-3xl mb-2 lg:text-4xl ">UI/UX Designer</h2>
                <p>Designing digital products</p>
                <p> that are clear,usable, </p>
                <p>and conversion focused</p>
                <span>
                <button className="bg-black absolute text-white rounded-2xl mt-5 px-5 py-1 lg:text-xl hover:cursor-pointer hover:shadow-2xl hover:shadow-black"><span className="flex"> Let's Collaborate <GoArrowUpRight className="ml-2  mt-0.5 text-2xl" /></span></button>
                </span>
           </div>

           <div className="mid  mt-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <img src="../../public/ChatGPT Image Aug 23, 2026, 06_53_14 PM (1).png" alt="" className="lg:w-[500px]" width="650px" height="500"  />
           </div>
           <div className="right flex flex-col mt-15 mr-10 lg:mt-35 lg:mr-25">
             <button className="bg-white rounded-2xl mx-5 border-white py-1.5 px-3 text-[15px] lg:text-2xl lg:px-10 font-medium shadow-sm shadow-[#c1c0c0] mt-2 hover:bg-black hover:text-white " ><a href="https://www.linkedin.com/in/aman-kumar-0a8122282/" about="_blank" >LinkedIn</a></button>
                <button className="bg-white rounded-2xl mx-5 border-white py-1.5 text-[15px] lg:text-2xl lg:px-10 font-medium shadow-sm shadow-[#c1c0c0] mt-2  hover:bg-black hover:text-white " ><a href="mailto:amank004433@gmail.com" target="_blank">Gmail</a></button>
                <button className="bg-white rounded-2xl mx-5 border-white py-1.5 text-[15px] lg:text-2xl lg:px-10 font-medium shadow-sm shadow-[#c1c0c0] mt-2  hover:bg-black hover:text-white " ><a href="https://www.instagram.com/amanruhela02/" target="_blank">Instagram</a></button>
           </div>
         
        </div>
    </main>
    </>
  )
}

export default Hero
