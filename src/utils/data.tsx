import { IconType } from "react-icons";

import cart from "@/assets/icons/icon-cart.png";
import message from "@/assets/icons/icon-message.png";
import brush from "@/assets/icons/icon-brush.png";
import phone from "@/assets/icons/icon-phone.png";

import { AiOutlineHeart } from "react-icons/ai";
import { GiPriceTag } from "react-icons/gi";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { PiPencilDuotone } from "react-icons/pi";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoDribbble,
  BiLogoGooglePlus,
} from "react-icons/bi";
import { TfiYoutube } from "react-icons/tfi";

type AboutDetailsProps = {
  icon: string;
  title: string;
  description: string;
};

type AccordionDataProps = {
  title: string;
  description: string;
  icon: IconType;
};

type BottomLinksProps = {
  sectionName: string;
  links: string[];
};

type FooterIconsProps = {
  companyName: string;
  companyLogo: IconType;
};

// Data for About section
export const aboutDetails: AboutDetailsProps[] = [
  {
    icon: cart,
    title: "First 7 Days Free",
    description:
      "Test our coverage to see how we keep you connected. Our 7-day trial works right on your phone alongside your current service.",
  },
  {
    icon: message,
    title: "Fully Support",
    description: "Customer support 24/7 from anywhere in the world!",
  },
  {
    icon: brush,
    title: "Modern Flat Design",
    description:
      "Flat design allows users to view and understand website content with ease regarding mobile or desktop devices.",
  },
  {
    icon: phone,
    title: "User Friendly",
    description:
      "Professional design and it is easy for anyone who visits your website to navigate ",
  },
];

// Data for Accordion section
export const accordionData: AccordionDataProps[] = [
  {
    title: "Made With Love",
    description:
      "Need best software? Great, we love building things. Our software engineering work is extensive.",
    icon: AiOutlineHeart,
  },
  {
    title: "Free of Use",
    description:
      "Use for free!!! Try premium version with greater access to more features.",
    icon: GiPriceTag,
  },
  {
    title: "Fully Support Available",
    description:
      "Contact our tech support by phone, by email, or just chat from anywhere, anytime!!!",
    icon: LiaSuitcaseSolid,
  },
  {
    title: "Flat and Modern UI & UX",
    description:
      "Built with modern looks and feel and provides greater resilience and ability to remain in sync with the rapid changes of your needs and wants.",
    icon: PiPencilDuotone,
  },
];

// Bottom Links
export const bottomLinks: BottomLinksProps[] = [
  { sectionName: "Company", links: ["Home", "Jobs", "Press"] },
  { sectionName: "Development", links: ["iOS", "Android"] },
  { sectionName: "Community", links: ["Social", "Forum", "Contact", "FAQ"] },
  { sectionName: "Info", links: ["Terms of Service", "Privacy Policy"] },
];

// Footer icons
export const footerIcons: FooterIconsProps[] = [
  { companyName: "Facebook", companyLogo: BiLogoFacebook },
  { companyName: "Twitter", companyLogo: BiLogoTwitter },
  { companyName: "Dribbble", companyLogo: BiLogoDribbble },
  { companyName: "Google", companyLogo: BiLogoGooglePlus },
  { companyName: "Youtube", companyLogo: TfiYoutube },
];
