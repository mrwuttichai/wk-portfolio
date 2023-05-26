import profileImage from "../assets/pic1.jpg"
import { useSectionRef } from "../shared/sectionRefContext"

function AboutMeSection() {
  const { aboutRef } = useSectionRef();
  return (
    <div className="pt-60 px-4"  >
      <div className="pt-20" ref={aboutRef}>
        <h1 className="uppercase max-lg:text-7xl max-lg:font-bold max-lg:pb-10">About me</h1>
      </div>
      <div className="flex items-center gap-x-10 max-lg:flex-col-reverse">
        <div className="flex flex-col justify-center items-center w-1/2 max-lg:pt-10  max-lg:w-full">
          <div>
            <h1 className="text-2xl"></h1>
            <p className="text-2xl pt-10 pb-20"> Dynamic and versatile software developer with a background in law, agriculture, and business. Skilled in front-end (HTML, CSS, Bootstrap, JavaScript, React JS), back-end (Node JS, Express JS), and database development (MongoDB, SQL). Collaborative team player experienced in agile-scrum methodologies. Strong communicator with problem-solving and strategic thinking abilities. Passionate about agritech, business and AI. Dedicated to creating effective digital solutions.</p>
            <button className="bg-black text-white px-4 py-2 rounded-sm transition-all hover:bg-slate-100 hover:text-black">
              <a href="https://drive.google.com/file/d/1PBy4oH7jhjvAJheAUkE-BhVVUWhBSVMB/view?usp=sharing" target="blank">RESUME</a>
            </button>
          </div>
        </div>
        <div className="w-1/2 shadow-xl max-lg:shadow-sm max-lg:w-full">
          <img className="block w-full rounded-xl shadow-xl" src={profileImage} />
        </div>
      </div>
    </div>
  )
}

export default AboutMeSection