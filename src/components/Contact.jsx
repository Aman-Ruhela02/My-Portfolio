

function Contact() {
  return (
    <>
      <main className="flex flex-col justify-center items-center mb-8 ">
        <div className="flex flex-col justify-between items-center text-center  mt-50 mb-10 leading-4 ">
            <button className="bg-white rounded-2xl shadow-sm shadow-black mb-5 "><p className="mx-3 my-1">Available for New Project</p></button>
            <h1 className="text-5xl md:text-8xl my-4">HAVE A PROJECT IN MIND ?</h1>
            <p className="">Together , we can create something clear and impactful. Let's collaborate to bring our </p>
            <p>ideads to likfe in a way that resonates with everyone</p>
            <button className="bg-black text-white font-medium hover:bg-white hover:text-black hover:shadow-sm hover:shadow-black rounded-2xl mt-9 py-3 "><p className="mx-4">Contact Me</p></button>
        </div>
        <div className="flex justify-evenly w-full mb-15 mt-15 ">
            <h2 className="bg-white text-black shadow-sm shadow-black hover:bg-black hover:text-white rounded-2xl font-medium text-xl"><p className="mx-4 my-1"><a href="mailto:amank004433@gmail.com" target="_blank">Gmail</a></p></h2>
            <h2 className="bg-white text-black shadow-sm shadow-black hover:bg-black hover:text-white rounded-2xl font-medium text-xl"><p className="mx-4 my-1"><a href="https://www.linkedin.com/in/aman-kumar-0a8122282/" target="_blank" >LinkedIn</a></p></h2>
            {/* <h2 className="bg-white text-black shadow-sm shadow-black hover:bg-black hover:text-white rounded-2xl font-medium text-xl"><p className="mx-4 my-1"><a href="https://www.instagram.com/amanruhela02/" target="_blank">Instagram</a></p></h2> */}
            <h2 className="bg-white text-black shadow-sm shadow-black hover:bg-black hover:text-white rounded-2xl font-medium text-xl"><p className="mx-4 my-1"><a href="tel:+919760979188"></a>9760979188</p></h2>
        </div>
      </main>
    </>
  )
}

export default Contact
