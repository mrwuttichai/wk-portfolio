import Marquee from "react-fast-marquee";
import ProjectCard from "./ProjectCard";
import { useSectionRef } from "../shared/sectionRefContext";
import justfitproject from "../assets/justfitproject.png";

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
        <ProjectCard 
          title={"JustFit"} 
          description={"An activity-tracking web application targeting working women seeking improved health that integrates features of activity tracking, goal setting, exercise videos, and healthy menus for an optimal user experience."} 
          textColor="" 
          backgroundColor={""} 
          isBlackWhiteImage={true}
          demoLink={"https://justfit-d2-sbg9.vercel.app/"}
          githubLink={"https://github.com/mrwuttichai"} />
          
        <ProjectCard 
          textColor="" 
          backgroundColor={"bg-gray-100"} 
          reverse={true} 
          isBlackWhiteImage={true} />
        <ProjectCard isBlackWhiteImage={true} />
      </div>
    </div>
  )
}