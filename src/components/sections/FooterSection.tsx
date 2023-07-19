import { WrapperContainer } from "@/wrapper";

import { footerIcons } from "@/utils";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#233148] py-11 text-white">
      <WrapperContainer>
        <div className="flex flex-col gap-y-6 items-center lg:flex-row lg:justify-between min-h-[6.25rem]">
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
    </footer>
  );
};

export default FooterSection;
