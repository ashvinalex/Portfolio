import {HERO_CONTENT} from "../constants"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35"> 
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
           <div className="flex flex-col items-center lg:items-start">
                <motion.h1 
                 initial={{x:-100,opacity:0}}
                 animate={{x:0,opacity:1 }}
                 transition={{duration:0.5 ,delay:1}}
                 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
                    Ashvin Alex
                </motion.h1> 
                <motion.span className="type-profiles bg-gradient-to-r from-teal-300 to-indigo-500 bg-clip-text text-4xl tracking-tight text-transparent ">{"I'am "}a </motion.span>
                <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</p>
              </div> 
        </div>
      
      </div>
    </div>
  )
}

export default Hero
