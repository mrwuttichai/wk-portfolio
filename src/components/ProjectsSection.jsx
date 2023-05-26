import Marquee from "react-fast-marquee";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { useSectionRef } from "../shared/sectionRefContext";

export default function ProjectsSection() {
  const { projectsRef } = useSectionRef();
  return (
    <div className="pt-40" ref={projectsRef}>
      <div>
        <Marquee className="py-4">
          <span className="text-7xl font-bold uppercase px-10">Projects</span>
          <span className="text-7xl font-bold uppercase px-10">&#x2022;</span>
          <span className="text-7xl font-bold uppercase px-10">Projects</span>
          <span className="text-7xl font-bold uppercase px-10">&#x2022;</span>
          <span className="text-7xl font-bold uppercase px-10">Projects</span>
          <span className="text-7xl font-bold uppercase px-10">&#x2022;</span>
          <span className="text-7xl font-bold uppercase px-10">Projects</span>
          <span className="text-7xl font-bold uppercase px-10">&#x2022;</span>
        </Marquee>
      </div>
      <div className="pt-10">
        <ProjectCard title={""} description={""} textColor="" backgroundColor={""} isBlackWhiteImage={true} />
        <ProjectCard textColor="" backgroundColor={"bg-gray-100"} reverse={true} isBlackWhiteImage={true} />
        <ProjectCard isBlackWhiteImage={true} />
      </div>
    </div>
  )
}