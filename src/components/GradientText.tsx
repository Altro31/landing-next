import type { ComponentProps } from "react";

export default function GradientText({
  children,
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <p className={"gradient-text " + className} {...props}>
      {children}
    </p>
  );
}
