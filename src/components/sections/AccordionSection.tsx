import { Button, WrapperContainer, MuiAccordionComp } from "@/components";

const AccordionSection = () => {
  return (
    <div id="app" className="pt-36 pb-9 lg:pb-32">
      <WrapperContainer>
        <div className="flex flex-col lg:flex-row lg:gap-x-36">
          <div className="flex flex-col items-center lg:flex-1 lg:items-end">
            <h1 className="text-[#374358] font-bold text-3xl mb-14">
              Stable And Ready
            </h1>
            <p className="mb-8">test</p>
            <Button text="Download Free" variant="variant3" />
          </div>
          <div className="flex justify-center lg:flex-1 mt-8 lg:mt-0 mb-10">
            {/* Accordion using MUI Accordion component */}
            <MuiAccordionComp />
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};

export default AccordionSection;
