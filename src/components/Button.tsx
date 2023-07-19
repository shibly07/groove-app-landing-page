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

  const buttonStyle =
    "font-bold text-base md:text-lg rounded-md h-10 w-44 text-center";

  if (props.variant !== "variant4") {
    return (
      <button className={`${buttonStyle} ${buttonVariants[props.variant]}`}>
        {props.text}
      </button>
    );
  } else if (props.variant === "variant4") {
    const Icon = props.icon;
    return (
      <button
        className={`text-white font-bold text-base md:text-lg  rounded-md flex ${
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
