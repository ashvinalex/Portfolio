import { CERTIFICATES } from "../constants"
const Certificates = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-gray-400  text-3xl">Certificates</h1>
      <div >{CERTIFICATES.map((certificate,index) =>(
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full lg:w-1/4">
          <img src={certificate.image } alt={certificate.title} width={150} height={150} className="mb-6 rounded"/>
          </div>
          <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold"><a href={certificate.link} target="_blank">{certificate.title}</a></h6>
            <p className="mb-4 text-neutral-400 font-light tracking-tighter text-">{certificate.description}</p>
            {certificate.technologies.map((tech,index)=>(
              <span key={index} className="mr-2 rounded  bg-neutral-900 px-2 py-2 text-sm font-medium text-cyan-700">{tech}</span>

            )
            )}
          </div>
        </div>
      ))}</div>      
    </div>
  )
}

export default Certificates
