

function Projects() {
  return (
    <>
      <main className=" w-full h-full mt-20 md:mt-50">
         <h1 className="text-6xl  flex justify-center items-center" >/Projects</h1>

         <div className=" md:flex justify-between gap-5">
            <div className="fullstack bg-[#fbf9f9] mx-5 mt-13 m-2 pb-3 justify-center md:w-1/2 shadow-sm ">
                 <h1 className="flex items-center justify-center  text-4xl font-medium">Full Stack Projects</h1>
                    <div className="flex flex-col mt-2 gap-3">
                   <div className="flex  bg-[white] text-black rounded  py-3  text-2xl font-medium  mt-2  hover:bg-[black] hover:text-white shadow-sm shadow-[#cac6c6] mx-5 " >
                     <a className="mx-3 w-full" href="https://21-days-sigma.vercel.app/" target="_blank">Discipline Tool</a>
                   </div>

                    <div className="flex  bg-[white] text-black rounded  py-3  text-2xl font-medium  mt-2  hover:bg-[black] hover:text-white shadow-sm shadow-[#cac6c6] mx-5 " >
                     <a className="mx-3 w-full " href="https://expense-tracker-pied-beta.vercel.app/" target="_blank" >Expense Tracker</a>
                   </div>

                    <div className="flex  bg-[white] text-black rounded  py-3  text-2xl font-medium  mt-2  hover:bg-[black] hover:text-white shadow-sm shadow-[#cac6c6] mx-5 " >
                     <a className="mx-3 w-full" href="https://reel2link.site/" target="_blank" >Reel2Link</a>
                   </div>

                    <div className="flex  bg-[white] text-black rounded  py-3  text-2xl font-medium  mt-2  hover:bg-[black] hover:text-white shadow-sm shadow-[#cac6c6] mx-5 " >
                     <a className="mx-3 w-full" href="https://amansintelligence.netlify.app/" target="_blank" >Smart Ai Bot</a>
                   </div>
                   
                    
                    </div>
                
            </div>

            <div className="frontend bg-[#fbf9f9] mx-5 mt-13 m-2 pb-3 justify-center md:w-1/2 shadow-sm mb-5 ">
                 <h1 className="flex items-center justify-center  text-4xl font-medium">Frontend Projects</h1>
                    <div className="flex flex-col mt-2 gap-3">
                   <div className="flex  bg-[white] text-black rounded  py-3  text-2xl font-medium  mt-2  hover:bg-[black] hover:text-white shadow-sm shadow-[#cac6c6] mx-5 " >
                     <a className="mx-3 w-full" href="https://the-wolf-omega.vercel.app/" target="_blank" >The Wolf</a>
                   </div>

                    <div className="flex  bg-[white] text-black rounded  py-3  text-2xl font-medium  mt-2  hover:bg-[black] hover:text-white shadow-sm shadow-[#cac6c6] mx-5 " >
                     <a className="mx-3 w-full" href="https://fit-life-delta-eight.vercel.app/" target="_blank" >Fit Life</a>
                   </div>

                    {/* <div className="flex  bg-[white] text-black rounded  py-3  text-2xl font-medium  mt-2  hover:bg-[black] hover:text-white shadow-sm shadow-[#cac6c6] mx-5 " >
                     <p className="mx-3">Reel2Link</p>
                   </div>

                    <div className="flex  bg-[white] text-black rounded  py-3  text-2xl font-medium  mt-2  hover:bg-[black] hover:text-white shadow-sm shadow-[#cac6c6] mx-5 " >
                     <p className="mx-3">Expense Tracker</p>
                   </div> */}
                   
                    
                    </div>
                
            </div>
         </div>
      </main>
    </>
  )
}

export default Projects
