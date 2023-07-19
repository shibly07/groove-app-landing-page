import { Button, MuiAccordionComp } from "@/components";
import { AnimatedReveal, WrapperContainer } from "@/wrapper";

const AccordionSection = () => {
  const delay = 0.5;
  return (
    <section id="app" className="pt-36 pb-9 lg:pb-32">
      <WrapperContainer>
        <div className="flex flex-col lg:flex-row lg:gap-x-36">
          <AnimatedReveal from="left" delay={delay} threshold={0.5}>
            <div className="flex flex-col items-center lg:flex-1 lg:items-end">
              <h1 className="text-[#374358] font-bold text-3xl mb-14">
                Stable And Ready
              </h1>
              <p className="mb-8 text-center lg:text-right">
                Tested intensely to ensure stable product with cross platform
                accessibility.
              </p>
              <Button text="Download Free" variant="variant3" />
            </div>
          </AnimatedReveal>
          <div className="flex justify-center lg:flex-1 mt-8 lg:mt-0 mb-10">
            {/* Accordion using MUI Accordion component */}
            <AnimatedReveal from="right" delay={delay + 0.3} threshold={0.5}>
              <MuiAccordionComp />
            </AnimatedReveal>
          </div>
        </div>
      </WrapperContainer>
    </section>
  );
};

export default AccordionSection;
