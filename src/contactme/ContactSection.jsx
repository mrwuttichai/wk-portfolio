import { useSectionRef } from "../shared/sectionRefContext"

export default function ContactSection({ sectionTitleColor, sectionDescriptionColor, sectionDescriptionText, sectionEmailText, backgroundColor, yourNameColor, yourEmailColor, yourMessageColor, buttonBackgroundColor, backgroundTextColor }) {
  const { contactRef } = useSectionRef();

  return (
    <div className={`grid grid-cols-12 bg-black p-10 max-lg:grid-cols-1`} ref={contactRef}>

      {/* Left text */}
      <div className="col-span-6 text-white">
        <div>
          <h1 className="text-7xl uppercase font-bold pb-4">Let's Talk</h1>
        </div>
        <div className="text-xl w-9/12 flex flex-col gap-y-4">
          <h1>If you would like to work with me or just want to get in touch, i'd love to hear from you!</h1>
          <p>wk@example.com</p>
        </div>
      </div>

      {/* Right Form */}
      <div className="col-span-6 text-xl flex flex-col gap-y-4 max-md:pt-16">
        <div>
          <h1 className="text-xl text-white font-medium">Your Name</h1>
        </div>
        <div>
          <input className="w-full p-2 rounded-sm outline-black" type="text" placeholder="What's your good name?"/>
        </div>
        <div>
          <h1 className="text-xl text-white font-medium">Your email</h1>
        </div>
        <div>
          <input className="w-full p-2 rounded-sm outline-black" type="text" placeholder="What's your web address?" />
        </div>
        <div>
          <h1 className="text-xl text-white font-medium">Your Message</h1>
        </div>
        <div>
          <textarea className="w-full p-2 rounded-sm outline-black resize-none h-52" placeholder="What you want to say?" />
        </div>
        <div>
          <button className="text-xl bg-white px-8 py-2 rounded-md font-medium">Send</button>
        </div>
      </div>
    </div>
  )
}