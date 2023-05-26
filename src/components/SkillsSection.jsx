import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiMongodb, SiExpress } from "react-icons/si"
import SkillCard from "./SkillCard"
import Marquee from "react-fast-marquee"

export default function SkillsSection() {
  return (
    <div className="pt-48">
      <div>
        <Marquee>
          <snap className="text-7xl font-bold uppercase px-10">Skills</snap>
          <snap className="text-7xl font-bold uppercase px-10">&#x2022;</snap>
          <snap className="text-7xl font-bold uppercase px-10">Skills</snap>
          <snap className="text-7xl font-bold uppercase px-10">&#x2022;</snap>
          <snap className="text-7xl font-bold uppercase px-10">Skills</snap>
          <snap className="text-7xl font-bold uppercase px-10">&#x2022;</snap>
          <snap className="text-7xl font-bold uppercase px-10">Skills</snap>
          <snap className="text-7xl font-bold uppercase px-10">&#x2022;</snap>
        </Marquee>
      </div>
      <div className="grid grid-cols-4 gap-x-10 px-10 pt-10">
        <SkillCard icon={<FaReact size={70} />} title="ReactJs" description="Developer" />
        <SkillCard icon={<FaNodeJs size={70} />} title="NodeJS" description="Developer" />
        <SkillCard icon={<SiMongodb size={70} />} title="MongoDB" />
        <SkillCard icon={<SiExpress size={70} />} title="Express" />
      </div>
    </div>
  )
}