type WrapperContainerProps = {
  children: JSX.Element;
  style?: string;
};

const WrapperContainer = ({ children, style }: WrapperContainerProps) => {
  return <div className={`px-4 sm:px-16 md:px-36 ${style}`}>{children}</div>;
};

export default WrapperContainer;
