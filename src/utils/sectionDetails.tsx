import cart from "@/assets/icons/icon-cart.png";
import message from "@/assets/icons/icon-message.png";
import brush from "@/assets/icons/icon-brush.png";
import phone from "@/assets/icons/icon-phone.png";

type AboutDetailsProps = {
  icon: string;
  title: string;
  description: string;
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
