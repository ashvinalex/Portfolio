import {RiReactjsLine} from "react-icons/ri"
import {GithubOriginalIcon } from "react-devicons";
import {JavaOriginalIcon} from "react-devicons";
import {PythonOriginalIcon} from "react-devicons";
import {FlaskOriginalIcon} from "react-devicons";
import {AmazonwebservicesPlainWordmarkIcon} from "react-devicons";
import {MysqlOriginalIcon} from "react-devicons";
import {ApachesparkPlainWordmarkIcon} from "react-devicons";
import {NumpyPlainWordmarkIcon} from "react-devicons";
import {PandasPlainWordmarkIcon} from "react-devicons";
import { SiDatabricks } from "react-icons/si";
import { IoLogoTableau } from "react-icons/io5";
import { SiApacheairflow } from "react-icons/si";



const Tech = () => {
  return (
    <div className=" border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-gray-400 text-3xl"> Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-2 border-neutral-800 p-4">
            <RiReactjsLine className="text-2xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-2 border-neutral-800 p-4">
            <GithubOriginalIcon className="text-2xl text-cyan-400" color="white" />
            </div>

            <div className="rounded-2xl border-2 border-neutral-800 p-4">
            <JavaOriginalIcon className="text-2xl" color="white" />
            </div>

            <div className="rounded-2xl border-2 border-neutral-800 p-4">
            <PythonOriginalIcon className="text-2xl" color="white" />
            </div>

            <div className="rounded-2xl border-2 border-neutral-800 p-4">
            <NumpyPlainWordmarkIcon className="text-2xl" color="white" />
            </div>

            <div className="rounded-2xl border-2 border-neutral-800 p-4">
            <SiDatabricks className="text-2xl" color="white" />
            </div>


            <div className="rounded-2xl border-2 border-neutral-800 p-4">
            <PandasPlainWordmarkIcon className="text-2xl" color="white" />
            </div>

            <div className="rounded-2xl border-2 border-neutral-800 p-4">
            <FlaskOriginalIcon className="text-2xl" color="white" />
            </div>
      
            <div className="rounded-2xl border-2 border-neutral-800 p-4">
            <MysqlOriginalIcon className="text-2xl" color="white" />
            </div>
            <div className="rounded-2xl border-2 border-neutral-800 p-4">
            <AmazonwebservicesPlainWordmarkIcon className="text-2xl" color="white" />
            </div>

            <div className="rounded-2xl border-2 border-neutral-800 p-4">
            <ApachesparkPlainWordmarkIcon className="text-2xl" color="white" />
            </div>

            <div className="rounded-2xl border-2 border-neutral-800 p-4">
            <SiApacheairflow className="text-2xl" color="white" />
            </div>

            <div className="rounded-2xl border-2 border-neutral-800 p-4">
            <IoLogoTableau className="text-2xl" color="white" />
            </div>


            
        </div>
      
    </div>
  )
}

export default Tech
