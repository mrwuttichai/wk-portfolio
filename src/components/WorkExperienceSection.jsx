import { VerticalTimeline } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import WorkExperienceCard from "./WorkExperienceCard";
import Marquee from "react-fast-marquee";
import { useSectionRef } from "../shared/sectionRefContext";


export default function WorkExperienceSection() {
  const experiences = [
    {
      title: "Accountant (Part-time)",
      companyName: "BSK Power Engineering Ltd., Part.",
      icon: "https://cdn-icons-png.flaticon.com/128/1024/1024914.png",
      iconBg: "#383E56",
      date: "Jun 2022 - Jul 2022",
      points: [
        "Streamlined data entry processes by implementing automation tools, resulting in a 50% reduction in errors and saving 10 hours of manual work per week.",
        "Improved attendance tracking system by introducing biometric scanning technology, reducing the margin of error to less than 1% and on payroll discrepancies.",
        "Analyzed weekly expense reports to identify cost-saving opportunities, leading to a 15% reduction in operational expenses.",
      ],
    },
    {
      title: "Barista",
      companyName: "Khum Setthi coffee shop",
      icon: "https://cdn-icons-png.flaticon.com/128/751/751621.png",
      iconBg: "#383E56",
      date: "Aug 2022 - Jan 2023",
      points: [
        "Managed inventory levels effectively, reducing waste by 50% and increasing profitability by ฿40,000 per month.",
        "Developed and executed a new training program for incoming employees, resulting in a 90% increase in customer satisfaction scores.",
      ],
    },
    {
      title: "Co-Founder",
      companyName: "Chiang Klang Tourism Community Enterprise",
      icon: "https://cdn-icons-png.flaticon.com/128/7596/7596530.png",
      iconBg: "#383E56",
      date: "Dec 2021 - present",
      points: [
        "Developed and executed a comprehensive marketing strategy that significantly increased tourism to the Chiang Klang Community-based Tourism enterprise during the high season This resulted in daily revenues of over 100,000 baht and a 10-15% increase in sales for partners.",
        "Managed the financial recording and accounting of the company's revenue, expenses, and transactions.",
        "Monitored to ensure that business partners comply with legal regulations, which allows the business to operate in good governance and ethical way.",
      ],
    },
  ]

  const { workRef } = useSectionRef();

  return (
    <div className="pt-40" ref={workRef}>
      <div className="h-full">
        <Marquee className="text-6xl py-4">
          <span className=" font-bold uppercase px-10">Work Experience</span>
          <span className=" font-bold uppercase px-10">&#x2022;</span>
          <span className=" font-bold uppercase px-10">Work Experience</span>
          <span className=" font-bold uppercase px-10">&#x2022;</span>
          <span className=" font-bold uppercase px-10">Work Experience</span>
          <span className=" font-bold uppercase px-10">&#x2022;</span>
          <span className=" font-bold uppercase px-10">Work Experience</span>
          <span className=" font-bold uppercase px-10">&#x2022;</span>
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