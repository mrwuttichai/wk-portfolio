import Marquee from "react-fast-marquee";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <div className="pt-40">
      <div>
        <Marquee>
          <snap className="text-7xl font-bold uppercase px-10">Projects</snap>
          <snap className="text-7xl font-bold uppercase px-10">&#x2022;</snap>
          <snap className="text-7xl font-bold uppercase px-10">Projects</snap>
          <snap className="text-7xl font-bold uppercase px-10">&#x2022;</snap>
          <snap className="text-7xl font-bold uppercase px-10">Projects</snap>
          <snap className="text-7xl font-bold uppercase px-10">&#x2022;</snap>
          <snap className="text-7xl font-bold uppercase px-10">Projects</snap>
          <snap className="text-7xl font-bold uppercase px-10">&#x2022;</snap>
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