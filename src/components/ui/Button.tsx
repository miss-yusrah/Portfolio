interface ButtonProps {
  containerClass?: string;
  title?: string;
  handleClick?: () => void;
  asLink?: boolean;
}

const Button = ({ containerClass, title, handleClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center px-5 py-3 rounded-md text-[15px] font-medium transition-colors ${
        containerClass ?? "bg-ink text-fog"
      }`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
