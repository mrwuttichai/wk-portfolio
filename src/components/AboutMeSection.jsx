import profileImage from "../assets/pic1.jpg"

export default function AboutMeSection() {
  return (
    <div className="p-8">
      <div>
          <h1 className="uppercase ">About me</h1>
      </div>
      <div className="flex items-center gap-x-10">
        <div className="flex flex-col justify-center items-center w-1/2">
          <div>
            <h1 className="text-2xl"></h1>
            <p className="text-2xl pt-10 pb-20"> Dynamic and versatile software developer with a background in law, agriculture, and business. Skilled in front-end (HTML, CSS, Bootstrap, JavaScript, React JS), back-end (Node JS, Express JS), and database development (MongoDB, SQL). Collaborative team player experienced in agile-scrum methodologies. Strong communicator with problem-solving and strategic thinking abilities. Passionate about agritech, business and AI. Dedicated to creating effective digital solutions.</p>
            <button className="bg-black text-white px-4 py-2 rounded-sm transition-all hover:bg-slate-100 hover:text-black">RESUME</button>
          </div>
        </div>
        <div className="w-1/2 shadow-xl">
          <img className="block w-full rounded-xl shadow-xl" src={profileImage} />
        </div>
      </div>
    </div>
  )
}