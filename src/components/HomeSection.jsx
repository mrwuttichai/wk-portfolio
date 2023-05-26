import { BsGithub } from "react-icons/bs"
import { ImLinkedin } from "react-icons/im"
import { BsFacebook } from "react-icons/bs"
import { SiInstagram } from "react-icons/si"
import { MdEmail } from "react-icons/md";
import TypewriterComponent from "typewriter-effect"

export default function HomeSection() {
  return (
    <div className="pb-52">
      <div className="flex justify-between items-center pt-40 px-32">
        <div className="">
          <h3 className="text-gray-500">
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter.typeString('HI! All.')
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString('Welcome to my web portfilo.')
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("Enjoy!")
                  .start()
              }}
            />
          </h3>
        </div>
        <div>
          <div>
            {/* <h1 className="">block mounse with dev soon.</h1> */}
          </div>
        </div>
      </div>
      <div className="text-8xl font-extrabold flex flex-col items-center text-left tracking-wider pb-40">
        <div className="">
          <h1 className="max-lg:pb-10">Wuttichai Kantaseema</h1>
          <h1>Software Developer.</h1>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex items-center gap-x-1">
          <a href="https://github.com/mrwuttichai" target="blank">
            <BsGithub className="text-5xl p-3 rounded-full border-2 border-gray-100" />
          </a> 
          <a href="https://www.linkedin.com/in/mr-wuttichai/" target="blank">
           <ImLinkedin className="text-5xl p-3 rounded-full border-2 border-gray-100" />
          </a>
          <a href="https://mr.wuttichai.ktsm@gmail.com" target="blank">
            <MdEmail className="text-5xl p-3 rounded-full border-2 border-gray-100" />
          </a>
          {/* <a href="" target="blank">
           <BsFacebook className="text-5xl p-3 rounded-full border-2 border-gray-100" />
          </a>
          <a href="" target="blank">
            <SiInstagram className="text-5xl p-3 rounded-full border-2 border-gray-100" />
          </a> */}
        </div>
      </div>
    </div>
  )
}

