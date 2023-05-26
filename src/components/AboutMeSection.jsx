import profileImage from "../assets/pic1.jpg"

export default function AboutMeSection() {
  return (
    <div className="p-8">
      <div>
          <h1 className="uppercase">About me</h1>
      </div>
      <div className="flex items-center gap-x-10">
        <div className="flex flex-col justify-center items-center w-1/2">
          <div>
            <h1 className="text-2xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h1>
            <p className="text-2xl pt-10 pb-20">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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