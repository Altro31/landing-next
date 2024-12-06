import StartIcon from "@/assets/start-icon.svg";
import AppButton from "@/components/AppButton";
import { useRegisterModal } from "@/hooks/use-register-modal";
import { primary } from "@/theme/colors";
import { useMediaQuery, type ButtonProps } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function TryDemoFreeButton({
  withIcon = false,
  sx,
  short,
  ...props
}: {
  withIcon?: boolean;
  short?: boolean;
} & ButtonProps) {
  const { setOpen } = useRegisterModal();
  const { t } = useTranslation();
  const md = useMediaQuery("(max-width: 640px)");
  return (
    <>
      <AppButton
        variant="contained"
        sx={{
          bgcolor: primary.main,
          display: "flex",
          gap: 1,
          width: "fit-content",
          fontSize: md ? "12px" : "16px",
          lineHeight: md ? "16px" : "24px",
          fontWeight: 600,
          px: "12px",
          ...sx,
        }}
        {...props}
        onClick={() => setOpen(true)}
      >
        {withIcon && <img src={StartIcon} />}
        {short ? t("home.header.try-for-free") : t("home.header.try-demo")}
      </AppButton>
    </>
  );
}
