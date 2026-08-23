

function Skills() {
  return (
    <>
      <main className="mt-15 ">
        <h1 className="flex justify-center text-5xl mb-5 pb-5">/Skills</h1>
        <div className="m-4 md:grid md:grid-cols-2 ">
          <div className="bg-[#121212] text-white hover:bg-white hover:text-black hover:shadow-sm hover:shadow-black m-2 rounded-2xl pb-2 " >
            <div className="p-2 m-5 ">
                <h2 className="text-2xl font-medium p-2 ">Frontend</h2>
                <div className="">
                <button className="bg-white  text-black font-medium rounded mx-2 px-2 mt-2">HTML</button>
                <button className="bg-white text-black font-medium rounded mx-2 px-2 mt-2">CSS</button>
                <button className="bg-white text-black font-medium rounded mx-2 px-2 mt-2">React.js</button>
                <button className="bg-white text-black font-medium rounded mx-2 px-2 mt-2">Tailwind CSS</button>
                <button className="bg-white text-black font-medium rounded mx-2 px-2 mt-2">GSAP</button>
                
             </div>
            </div>
        </div>

          <div className=" text-black hover:bg-black hover:text-white shadow-sm shadow-black m-2 rounded-2xl pb-2 " >
            <div className="p-2 m-5">
                <h2 className="text-2xl font-medium p-2 ">Backend</h2>
                <div className="">
                <button className="bg-white text-black font-medium rounded mx-2 px-2 mt-2">Node.js</button>
                <button className="bg-white text-black font-medium rounded mx-2 px-2 mt-2">Express.js</button>
                <button className="bg-white text-black font-medium rounded mx-2 px-2 mt-2 ">REST APIs</button>
                <button className="bg-white text-black font-medium rounded mx-2 px-2  mt-2">Tailwind CSS</button>
                
             </div>
            </div>
        </div>

         <div className="bg-[#121212] text-white hover:bg-white hover:text-black hover:shadow-sm hover:shadow-black m-2 rounded-2xl pb-2 " >
            <div className="p-2 m-5">
                <h2 className="text-2xl font-medium p-2 ">Languages</h2>
                <div className="">
                <button className="bg-white text-black font-medium rounded mx-2 px-2 ">JavaScript</button>
                 <button className="bg-white text-black font-medium rounded mx-2 px-2 ">C</button>
                  <button className="bg-white text-black font-medium rounded mx-2 px-2 ">C++</button>
                 
                
             </div>
            </div>
        </div>

         <div className=" text-black hover:bg-black hover:text-white shadow-sm shadow-black m-2 rounded-2xl pb-2 " >
            <div className="p-2 m-5">
                <h2 className="text-2xl font-medium p-2 ">Databases</h2>
                <div className="">
                <button className="bg-white text-black font-medium rounded mx-2 px-2 ">MongoDB</button>
                 <button className="bg-white text-black font-medium rounded mx-2 px-2 ">SupaBase</button>
                  <button className="bg-white text-black font-medium rounded mx-2 px-2 ">SQL</button>  
             </div>
            </div>

            
        </div>

   <div className="bg-[#121212] text-white hover:bg-white hover:text-black hover:shadow-sm hover:shadow-black m-2 rounded-2xl pb-2 " >
            <div className="p-2 m-5">
                <h2 className="text-2xl font-medium p-2 ">Tools</h2>
                <div className="">
                <button className="bg-white text-black font-medium rounded mx-2 px-2 ">VS Code</button>
                 <button className="bg-white text-black font-medium rounded mx-2 px-2 ">Git</button>
                  <button className="bg-white text-black font-medium rounded mx-2 px-2 ">GitHub</button> 
                  <button className="bg-white text-black font-medium rounded mx-2 px-2 ">Postman</button>  
             </div>
            </div>

            
        </div>
</div>
        
      </main>
    </>
  )
}

export default Skills
