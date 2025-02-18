import { ReactNode } from "react";

type IconButtonProps = {
  type?: "button" | "submit" | "reset";
  shape: "solid" | "outline" | "none";
  size: "xsmall" | "small" | "medium" | "large";
  color: "neutral" | "primary" | "grayscale";
  icon: ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  children?: string;
  disabled?: boolean;
};

export default function TextButton({
  type = "button",
  shape,
  color,
  size,
  icon,
  iconPosition,
  onClick,
  children = "",
  disabled = false,
}: IconButtonProps) {
  let buttonSize = "";
  let solidButtonColor = "";
  let outlineButtonColor = "";
  const isSolid = shape === "solid";
  const isNone = shape === "none";

  switch (size) {
    case "medium":
      buttonSize = "px-12 py-2";
      break;
    case "large":
      buttonSize = "px-16 py-2";
      break;
    case "small":
      buttonSize = "px-6 py-2";
      break;
    case "xsmall":
      buttonSize = "px-2 py-2";
      break;
    default:
      buttonSize = "px-2 py-2";
  }

  switch (color) {
    case "primary":
      solidButtonColor =
        "bg-koser-primary-100 border-none text-koser-grayscale-0";
      break;
    case "grayscale":
      solidButtonColor =
        "bg-koser-grayscale-50 border-none text-koser-grayscale-0";
      break;
    case "neutral":
      solidButtonColor =
        "bg-koser-primary-60 border-none text-koser-grayscale-0";
      break;
    default:
      solidButtonColor =
        "bg-koser-primary-100 border-none text-koser-grayscale-0";
  }

  switch (color) {
    case "primary":
    case "neutral":
      outlineButtonColor =
        "bg-koser-primary-20 border border-koser-primary-90 text-koser-primary-90";
      break;
    case "grayscale":
      outlineButtonColor =
        "bg-transparent border border-koser-grayscale-40 text-koser-grayscale-90";
      break;
    default:
      outlineButtonColor =
        "bg-koser-primary-20 border border-koser-primary-90 text-koser-primary-90";
  }

  const borderRadius =
    size === "medium" || size === "large" ? "rounded-lg" : "rounded-md";

  const className = `_textButton ${
    disabled
      ? "bg-koser-grayscale-30 text-koser-grayscale-50"
      : isNone
      ? "bg-transparent border-none outline-none"
      : isSolid
      ? `${solidButtonColor}`
      : `${outlineButtonColor}`
  } ${buttonSize} ${borderRadius} ${
    isSolid
      ? "hover:bg-koser-primary-90 focus:bg-koser-primary-90 active:bg-koser-primary-70"
      : "hover:bg-koser-primary-30 focus:bg-koser-primary-30 active:bg-koser-primary-50"
  }`;

  return (
    <button
      className={className}
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={`${children} 버튼`}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
}
