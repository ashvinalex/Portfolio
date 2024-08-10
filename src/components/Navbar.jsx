import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import { SiTableau } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
        
        <h1 className="mx-2 w-10  font-normal text-3xl">Aa</h1>

        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
        
            <a href="https://public.tableau.com/app/profile/ashvin.alex/vizzes"><SiTableau /></a>
            <a href="https://www.linkedin.com/in/ashvin-alex/"><FaLinkedin /></a>
            <a href="https://github.com/ashvinalex"> <FaGithub/></a>
            
        </div>

    </nav>
  )
}

export default Navbar
