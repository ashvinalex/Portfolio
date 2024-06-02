import {CONTACT} from "../constants"
function Contact() {
  return (
    <div className="border-b border-neutral-800 pb-20">
        <h3 className="my-10  text-gray-400  text-center text-3xl">
            Get In Touch
        </h3>
        <div className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.address} </p>
            <p className="my-4">{CONTACT.phoneNo} </p>
            <a href="ashvinalex@gmail.com" className="border-b">ashvinalex@gmail.com</a>
        </div>

    </div>
  )
}

export default Contact
