import AvangturLogo from "@/assets/avangtur-logo.svg";
import GradientText from "@/components/GradientText";
import RegisterFormContainer from "@/sections/register/form/RegisterFormContainer";
import { Card, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function RegisterModal() {
  const { t } = useTranslation();
  const md = useMediaQuery("(max-width: 640px)");
  return (
    <Card sx={{ p: 5 }}>
      <Stack>
        <img
          src={AvangturLogo}
          style={{ width: "6rem", height: "6rem", marginInline: "auto" }}
        />
      </Stack>
      <Stack spacing={2}>
        <Typography
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            justifyContent: "center",
            mb: 4,
            fontSize: md ? undefined : "1.5rem",
            lineHeight: md ? undefined : "2rem",
            fontWeight: 700,
          }}
        >
          <span>{t("register.title1")}</span>
          <GradientText
            style={{
              fontSize: md ? "1rem" : "1.5rem",
              lineHeight: md ? "1.5rem" : "2rem",
            }}
          >
            AVANGTUR
          </GradientText>
          <span>{t("register.title2")}</span>
        </Typography>
        <RegisterFormContainer />
      </Stack>
    </Card>
  );
}
