import SuccessIcon from "@/assets/SuccessIcon";
import { useRegisterModal } from "@/hooks/use-register-modal";
import { secondary } from "@/theme/colors";
import { Card, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function RegisterSuccess() {
  const { t } = useTranslation();
  const { email } = useRegisterModal();

  return (
    <Card
      sx={{
        mt: 12,
        mb: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textItems: "center",
        gap: 3,
        p: 5,
      }}
    >
      <SuccessIcon />
      <Stack spacing={1} sx={{ alignItems: "center" }}>
        <h2
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
            fontWeight: 700,
          }}
        >
          {t("register.success.title")}
        </h2>
        <p style={{ maxWidth: "24rem", color: secondary.text }}>
          {t("register.success.content1")} <span>{email}</span>{" "}
          {t("register.success.content2")}
        </p>
      </Stack>
    </Card>
  );
}
