import { WrapperContainer } from "@/components";
import checkIcon from "@/assets/icons/icon-check.png";

import test from "@/assets/test.png";

const DetailsSection = () => {
  return (
    <div id="info" className="bg-[#fafafc] py-14">
      <WrapperContainer>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            {/* Lottie animation */}
            <img src={test} alt="" className="w-full" />
          </div>
          <div className="flex-1">
            <div className="lg:ml-32">
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                provident iste libero vitae, accusamus nesciunt repellendus amet
                sunt, sint illum beatae, itaque nam impedit tenetur.
              </p>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};

export default DetailsSection;
