import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import WorkExperienceCard from "./WorkExperienceCard";
import Marquee from "react-fast-marquee";

export default function WorkExperienceSection() {
  const experiences = [
    {
      title: "React.js Developer",
      companyName: "Starbucks",
      icon: "https://cdn-icons-png.flaticon.com/128/919/919847.png",
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React.js Developer",
      companyName: "Starbucks",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React.js Developer",
      companyName: "Starbucks",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png",
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ]

  return (
    <div className="pt-40">
      <div>
        <Marquee>
          <snap className="text-7xl font-bold uppercase px-10">Work Experience</snap>
          <snap className="text-7xl font-bold uppercase px-10">&#x2022;</snap>
          <snap className="text-7xl font-bold uppercase px-10">Work Experience</snap>
          <snap className="text-7xl font-bold uppercase px-10">&#x2022;</snap>
          <snap className="text-7xl font-bold uppercase px-10">Work Experience</snap>
          <snap className="text-7xl font-bold uppercase px-10">&#x2022;</snap>
          <snap className="text-7xl font-bold uppercase px-10">Work Experience</snap>
          <snap className="text-7xl font-bold uppercase px-10">&#x2022;</snap>
        </Marquee>
      </div>
      <div className='pt-20'>
        <VerticalTimeline lineColor="#000">
          {experiences.map((experience, index) => (
            <WorkExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}