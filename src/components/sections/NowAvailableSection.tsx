import { Button, WrapperContainer } from "@/components";

import { AiFillApple } from "react-icons/ai";
import { BiLogoPlayStore } from "react-icons/bi";

import smartPhone from "@/assets/image-smartphone.png";

const NowAvailableSection = () => {
  return (
    <div className="bg-[url('@/assets/backgrounds/bg-blue_wave.png')] w-full bg-cover bg-no-repeat bg-center min-h-[62rem] flex justify-center items-center">
      <WrapperContainer>
        <div className="lg:flex lg:items-center">
          <div className="flex justify-center lg:flex-1">
            <img
              src={smartPhone}
              alt={`${smartPhone}-image`}
              className="h-[35rem]"
            />
          </div>

          <div className="lg:flex-1">
            <div className="max-w-[28rem]">
              <p className="text-3xl font-bold text-[#233148]">Now Available</p>
              <p className="text-white text-sm my-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae voluptas corporis, laudantium at eum, illo quisquam
                totam delectus, suscipit sequi autem nisi eius quo a!
              </p>
              <div className="flex justify-between">
                <Button
                  variant="variant4"
                  text1="Download on the"
                  text2="App Store"
                  icon={AiFillApple}
                />
                <Button
                  variant="variant4"
                  text1="Get it on"
                  text2="GooglePlay"
                  icon={BiLogoPlayStore}
                />
              </div>
            </div>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};

export default NowAvailableSection;
