import { useState } from "react";

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
  const [showMobileNavMenu, setShowMobileNavMenu] = useState<boolean>(false);

  return (
    <>
      <NavBar
        showMobileNavMenu={showMobileNavMenu}
        setShowMobileNavMenu={setShowMobileNavMenu}
      />
      <HeroSection />
      <AboutSection />
      <AccordionSection />
      <DetailsSection />
      <NowAvailableSection />
      <GetInTouchSection />
      <FooterSection />
    </>
  );
}

export default App;
