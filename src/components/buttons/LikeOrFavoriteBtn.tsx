import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const LikeOrFavoriteBtn = ({ children, ...props }: Props) => {
  return (
    <button
      {...props}
      className="border border-primary rounded-md text-primary text-sm p-1 bg-none hover:text-white hover:bg-primary"
    >
      {children}
    </button>
  );
};
export default LikeOrFavoriteBtn;
