import { WrapperContainer } from "@/components";

import footerIcons from "@/utils/footerIcons";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#233148] py-11 text-white">
      <WrapperContainer>
        <div className="flex flex-col gap-y-6 items-center lg:flex-row lg:justify-between">
          <span className="capitalize">{currentYear} - All Right Reserved</span>
          <div className="flex gap-x-10">
            {footerIcons.map((item) => {
              const Icon = item.companyLogo;

              return (
                <Icon key={item.companyName + "logo"} className="h-6 w-6" />
              );
            })}
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};

export default FooterSection;
