import { IconType } from "react-icons";

type NormalButtonProps = {
  text: string;
  variant: "variant1" | "variant2" | "variant3";
};

type DownloadButtonProps = {
  variant: "variant4";
  text1: string;
  text2: string;
  icon: IconType;
};

type ButtonProps = NormalButtonProps | DownloadButtonProps;

const Button = (props: ButtonProps) => {
  const buttonVariants: {
    variant1: string;
    variant2: string;
    variant3: string;
    variant4: string;
  } = {
    variant1: "bg-white",
    variant2: "border border-white text-white",
    variant3: "bg-[#33D2FD] text-white",
    variant4: "bg-black",
  };

  if (props.variant !== "variant4") {
    return (
      <button
        className={`font-bold text-base md:text-lg px-9 py-4 rounded-md ${
          buttonVariants[props.variant]
        }`}
      >
        {props.text}
      </button>
    );
  } else if (props.variant === "variant4") {
    const Icon = props.icon;
    return (
      <button
        className={`text-white font-bold text-base md:text-lg px-3 py-2 rounded-md flex ${
          buttonVariants[props.variant]
        }`}
      >
        <Icon className="text-white h-9 w-9 mr-2" />
        <div className="text-left">
          <p className="text-xs">{props.text1}</p>
          <p>{props.text2}</p>
        </div>
      </button>
    );
  }
};

export default Button;
