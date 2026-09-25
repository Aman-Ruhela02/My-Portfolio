import {useEffect, useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Intro = () => {
    const text = "Hello"
    const [displayText, setDisplayText] = useState("")
    const [showIntro, setShowIntro] = useState(true)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setShowIntro(false)
        },2000)

        return ()=> clearTimeout(timer)
    },[])

    useEffect(()=>{
        let index =0 
        const interval = setInterval(()=>{
            setDisplayText(text.slice(0,index+1))
            index++

            if(index === text.length){
                clearInterval(interval)
            }
        },250)
        return ()=> clearInterval(interval)
    },[])

  return (
    <>
      <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[white] text-black flex items-center justify-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl md:text-9xl font-bold"
          >
            <h1 className="hello text-7xl md:text-9xl font-bold">
        {displayText}
        <span className="animate-pulse">|</span>
      </h1>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}

export default Intro
