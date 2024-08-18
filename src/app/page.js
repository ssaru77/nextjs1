import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]  container ">
 <Navbar/>
 <div class="container mt-24 mx-auto px-12 py-4 ">

 {/* <AboutSection/> */}
 <HeroSection/>
 <AchievementsSection/>
 <AboutSection/>
 <ProjectsSection/>
 <EmailSection/>
</div>
<Footer/>
 </main>
  );
}
