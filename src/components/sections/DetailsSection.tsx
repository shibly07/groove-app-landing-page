import { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import codingAnimation from "@/assets/lottie/codingAnimation.json";

import { WrapperContainer, AnimatedReveal } from "@/wrapper";

import checkIcon from "@/assets/icons/icon-check.png";

const DetailsSection = () => {
  const delay = 0.5;

  const lottieRef = useRef<LottieRefCurrentProps>(null);
  return (
    <section id="info" className="bg-[#fafafc] py-14">
      <WrapperContainer>
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex-1">
            {/* Lottie animation */}
            <AnimatedReveal from="left" delay={delay} threshold={0.5}>
              <Lottie
                lottieRef={lottieRef}
                onComplete={() => {
                  lottieRef.current?.setDirection(-1);
                  lottieRef.current?.play();
                }}
                animationData={codingAnimation}
              />
            </AnimatedReveal>
          </div>
          <div className="flex-1">
            <div className="lg:ml-32">
              <AnimatedReveal from="right" delay={delay + 0.3} threshold={0.5}>
                <>
                  <p className="font-bold text-3xl text-[#233148]">
                    Everything You Need
                  </p>

                  <p className="font-bold text-[#233148] flex flex-col gap-y-4 my-12">
                    <span className="flex items-center">
                      <img
                        src={checkIcon}
                        alt="check-icon"
                        className="mr-4 h-5 w-5"
                      />
                      Android
                    </span>
                    <span className="flex items-center">
                      <img
                        src={checkIcon}
                        alt="check-icon"
                        className="mr-4 h-5 w-5"
                      />
                      iPhone
                    </span>
                  </p>
                  <p>
                    If you are looking for performance, efficiency, security,
                    and compatibility, then say no more! We got everything you
                    want....
                  </p>
                </>
              </AnimatedReveal>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </section>
  );
};

export default DetailsSection;
