import { WrapperContainer } from "@/components";

import { aboutDetails } from "@/utils/sectionDetails";

import smartPhone from "@/assets/image-smartphone.png";

const cardPosition = (index: number): string => {
  if (index === 0) return "left-32 top-20";
  if (index === 1) return "left-[32rem] top-44";
  if (index === 2) return "left-4 top-[30rem]";
  if (index === 3) return "left-[24rem] top-[36rem]";

  return "";
};

const Card = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="w-72 h-80 flex flex-col items-center gap-y-7 px-5 shadow-xl">
      <img src={icon} alt={`about-icon-${icon}`} className="h-12 w-12 mt-16" />
      <h1 className="font-bold text-base text-[#233148]">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div id="about" className="min-h-[77rem] bg-[#fafafc]">
      <div className="relative">
        <div className="absolute w-full h-[40rem] z-10 bg-[url('@/assets/backgrounds/bg-about.png')] -mt-20 sm:-mt-28 lg:-mt-[16rem] xl:-mt-[22rem] bg-no-repeat bg-cover bg-center sm:bg-top" />
        <div className="relative">
          <div className="overflow-x-hidden py-9 absolute z-20 w-full bg-[#fafafc]">
            <WrapperContainer>
              <div className="lg:flex max-w-[90rem] mx-auto">
                <div className="flex-1 lg:py-56">
                  <img
                    src={smartPhone}
                    alt={`${smartPhone}-image`}
                    className="h-[35rem] hidden lg:block"
                  />
                </div>
                <div className="overflow-y-hidden flex flex-col flex-[2_2_0%] items-center lg:items-start gap-y-4">
                  {/* Cards */}
                  <div className="lg:relative">
                    {aboutDetails.map((item, index) => (
                      <div
                        key={`about-item-${index}`}
                        className={`lg:absolute ${cardPosition(index)}`}
                      >
                        <Card
                          icon={item.icon}
                          title={item.title}
                          description={item.description}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </WrapperContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
