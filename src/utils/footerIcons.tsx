import { IconType } from "react-icons";

import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoDribbble,
  BiLogoGooglePlus,
} from "react-icons/bi";
import { TfiYoutube } from "react-icons/tfi";

type FooterIconsProps = {
  companyName: string;
  companyLogo: IconType;
};

// Footer icons
const footerIcons: FooterIconsProps[] = [
  { companyName: "Facebook", companyLogo: BiLogoFacebook },
  { companyName: "Twitter", companyLogo: BiLogoTwitter },
  { companyName: "Dribbble", companyLogo: BiLogoDribbble },
  { companyName: "Google", companyLogo: BiLogoGooglePlus },
  { companyName: "Youtube", companyLogo: TfiYoutube },
];

export default footerIcons;
