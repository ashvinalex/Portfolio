import { EDUCATION } from "../constants"
const Education = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
          <h1 className="my-20 text-center text-gray-400  text-3xl">Education</h1>
          <div >{EDUCATION.map((education,index) =>(
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4">
              <img src={education.image } alt={education.Course} width={150} height={150} className="mb-6 rounded"/>
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">{education.Course}</h6>
                <p className="mb-4 text-neutral-400 font-light tracking-tighter text-">{education.University}</p>
        
            
              </div>
            </div>
          ))}</div>      
        </div>
      )
    }
export default Education