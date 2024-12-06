import { Button, type ButtonProps } from "@mui/material";

export default function AppButton({ disabled, sx, ...props }: ButtonProps) {
  return (
    <Button
      sx={{
        borderRadius: "0.375rem",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: 700,
        bgcolor: disabled ? "rgb(156 163 175)" : undefined,
        color: disabled ? "white" : undefined,
        ...sx,
      }}
      {...props}
    />
  );
}
