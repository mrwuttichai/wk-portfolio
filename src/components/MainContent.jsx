import AboutMeSection from "./AboutMeSection"
import HomeSection from "./HomeSection"
import SkillsSection from "./SkillsSection"

import ProjectsSection from "./ProjectsSection"
import ContactSection from "../contactme/ContactSection"
import CertificatesSection from "../certificates/CertificatesSection"
import WorkExperienceSection from "./WorkExperienceSection"

export default function MainContent() {
  return (
    <main>
      <HomeSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <WorkExperienceSection />
      <CertificatesSection />
      <ContactSection />
    </main>
  )
}

