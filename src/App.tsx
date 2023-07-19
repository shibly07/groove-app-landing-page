import {
  AboutSection,
  AccordionSection,
  DetailsSection,
  FooterSection,
  GetInTouchSection,
  HeroSection,
  NavBar,
  NowAvailableSection,
} from "@/components";

function App() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <AccordionSection />
      <DetailsSection />
      <NowAvailableSection />
      <GetInTouchSection />
      <FooterSection />
    </div>
  );
}

export default App;
