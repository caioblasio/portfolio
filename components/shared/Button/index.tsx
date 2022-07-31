import React, { forwardRef, ReactNode } from "react";
import { classNames } from "../../../utils/helpers/classnames";

enum Variant {
  PRIMARY,
  SECONDARY,
  OUTLINED,
}
enum Size {
  SMALL,
  NORMAL,
  LARGE,
}

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  pill?: boolean;
}

const SIZE_MAPS: Record<Size, string> = {
  [Size.SMALL]: "px-2 py-1 text-sm",
  [Size.NORMAL]: "px-4 py-2",
  [Size.LARGE]: "px-8 py-3 text-lg",
};
const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.PRIMARY]: "bg-blue-500 hover:bg-blue-800 text-white",
  [Variant.SECONDARY]:
    "bg-gray-200 hover:bg-gray-800 text-gray-900 hover:text-white",
  [Variant.OUTLINED]:
    "border border-blue-700 text-blue-800 hover:bg-blue-800 hover:text-white",
};

const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    {
      children,
      type = "button",
      className,
      variant = Variant.PRIMARY,
      size = Size.NORMAL,
      pill,
      disabled = false,
      ...props
    }: IButton,
    ref
  ) => (
    <button
      ref={ref}
      disabled={disabled}
      type={type}
      className={classNames(
        "focus:outline-none transition ease-in-out duration-300 rounded-md py-3",
        VARIANT_MAPS[variant],
        SIZE_MAPS[size],
        disabled && "opacity-50 cursor-not-allowed",
        pill && "rounded-full"
      )}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";

export { Variant as ButtonVariants, Size as ButtonSizes };

export default Button;
