import aboutimg from "../assets/about.jpg"
import img from "../assets/t1.jpg"
import {ABOUT_TEXT} from "../constants"
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-gray-400 text-3xl"> About <span className="text-neutral-500">Me</span> </h2>
        
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl h-96 w-96" src={img} alt="about me" />
                </div>
                
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-center">
                        <p className="my-2 max-w-xl font-light py-6 tracking-tighter">{ABOUT_TEXT}</p>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
