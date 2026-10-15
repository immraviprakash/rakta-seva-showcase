import Navbar from './components/Navbar/Navbar';
import HeroSection from './sections/HeroSection/HeroSection';
import ProjectOverview from './sections/ProjectOverview/ProjectOverview';
import ApplicationShowcase from './sections/ApplicationShowcase/ApplicationShowcase';
import Features from './sections/Features/Features';
import Workflow from './sections/Workflow/Workflow';
import Technology from './sections/Technology/Technology';
import Contributions from './sections/Contributions/Contributions';
import ResourcesSection from './sections/Resources/ResourcesSection';
import Footer from './sections/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectOverview />
        <ApplicationShowcase />
        <Features />
        <Workflow />
        <Technology />
        <Contributions />
        <ResourcesSection />
      </main>
      <Footer />
    </>
  );
}
