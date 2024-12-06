import type { ComponentProps } from "react";

interface Props extends ComponentProps<"img"> {
  icon: string;
}

export default function ContentIcon({ icon, style, ...props }: Props) {
  return (
    <img
      src={icon}
      style={{
        width: "4rem",
        height: "4rem",
        ...style,
      }}
      {...props}
    />
  );
}
