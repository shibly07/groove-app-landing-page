import { AnimatedReveal, WrapperContainer } from "@/wrapper";

import { bottomLinks } from "@/utils";

const GetInTouchSection = () => {
  const delay = 0.5;
  return (
    <section>
      <div className="flex justify-center relative">
        <span className="absolute -top-6 bg-gradient-to-b from-[#ff7c6e] to-[#f5317f] py-3 px-10 text-white uppercase font-bold text-xl">
          Get the app today
        </span>
      </div>
      <div className="py-36">
        <WrapperContainer>
          <>
            <AnimatedReveal from="top" delay={delay} threshold={0.5}>
              <div className="grid grid-cols-2 gap-y-10 lg:flex lg:justify-evenly text-center lg:text-left">
                {bottomLinks.map((item, itemId) => (
                  <div key={`bottomlink-category-${itemId}`}>
                    <p className="text-[#233148] font-bold mb-7">
                      {item.sectionName}
                    </p>
                    <div className="flex flex-col gap-y-3">
                      {item.links.map((link, linkId) => (
                        <button
                          key={`bottomlink-category-${itemId}-${linkId}`}
                          className="text-[#6a6d89] py-2"
                        >
                          {link}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedReveal>

            <AnimatedReveal from="top" delay={delay + 0.4}>
              <div className="text-center mt-24">
                <p className="capitalize text-[#233148] font-semibold text-3xl mb-9">
                  Get In Touch
                </p>
                <p className="text-[#6a6d89] text-sm">
                  Subscribe to our newsletter and get notification for upcoming
                  cool stuff.
                </p>
              </div>
            </AnimatedReveal>
          </>
        </WrapperContainer>
      </div>
    </section>
  );
};

export default GetInTouchSection;
