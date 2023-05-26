import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiMongodb, SiExpress } from "react-icons/si"
import SkillCard from "./SkillCard"
import Marquee from "react-fast-marquee"

export default function SkillsSection() {
  return (
    <div className="pt-48" id="skills">
      <div>
        <Marquee className="py-4">
          <span className="text-7xl font-bold uppercase px-10">Skills</span>
          <span className="text-7xl font-bold uppercase px-10">&#x2022;</span>
          <span className="text-7xl font-bold uppercase px-10">Skills</span>
          <span className="text-7xl font-bold uppercase px-10">&#x2022;</span>
          <span className="text-7xl font-bold uppercase px-10">Skills</span>
          <span className="text-7xl font-bold uppercase px-10">&#x2022;</span>
          <span className="text-7xl font-bold uppercase px-10">Skills</span>
          <span className="text-7xl font-bold uppercase px-10">&#x2022;</span>
        </Marquee>
      </div>
      <div className="grid grid-cols-4 gap-x-10 px-10 pt-10 max-lg:grid-cols-2 max-lg:gap-y-8 max-md:grid-cols-1">
        <SkillCard icon={<FaReact size={70} />} title="ReactJs" description="Developer" />
        <SkillCard icon={<FaNodeJs size={70} />} title="NodeJS" description="Developer" />
        <SkillCard icon={<SiMongodb size={70} />} title="MongoDB" />
        <SkillCard icon={<SiExpress size={70} />} title="Express" />
      </div>
    </div>
  )
}
