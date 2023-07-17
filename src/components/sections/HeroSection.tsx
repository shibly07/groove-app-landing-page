import { Button, WrapperContainer } from "@/components";
import smartphoneImage from "@/assets/image-smartphone.png";

const HeroSection = () => {
  return (
    <div
      id="hero"
      className={`relative h-[720px] md:h-[65rem] bg-[url('@/assets/backgrounds/bg-blue_wave.png')] bg-no-repeat bg-cover bg-bottom pt-5`}
    >
      <WrapperContainer style="h-full w-full flex flex-col justify-center items-center">
        <>
          <div className="flex flex-col items-center gap-y-20">
            <h1 className="text-white font-bold text-2xl md:text-5xl text-center leading-normal">
              Choose a better way to <br /> represent your app
            </h1>
            <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-7">
              <Button text="Download Free" variant="variant1" />
              <Button text="Contact Us" variant="variant2" />
            </div>
          </div>

          {/* Half hidden smartphone image */}
          <img
            src={smartphoneImage}
            alt="smartphone-image"
            className="w-36 sm:w-52 lg:w-56 absolute -bottom-28"
          />
        </>
      </WrapperContainer>
    </div>
  );
};

export default HeroSection;
