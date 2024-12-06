import GradientText from "@/components/GradientText";
import TryDemoFreeButton from "@/components/TryDemoFreeButton";
import HeroBackgroundFigures from "@/sections/home/hero/HeroBackgroundFigures";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import HomeHero from "@/assets/home-hero.webp";

export default function HeroContainer() {
  const { t } = useTranslation();
  const md = useMediaQuery("(max-width: 640px)");
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "120vh",
        width: "100%",
        px: md ? undefined : 18,
        display: "flex",
        alignItems: "center",
      }}
      className="avangtur-gradient"
    >
      <HeroBackgroundFigures />
      <Stack sx={{ width: "516px" }}>
        <img src={HomeHero} className="home-hero" />
        <Stack
          direction="column"
          spacing={1}
          sx={{
            px: 2,
            pb: 6,
            textAlign: md ? "center" : "start",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <GradientText className="avangtur">Avangtur</GradientText>
          </Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: md ? "1.5rem" : "1.875rem",
              lineHeight: md ? "2rem" : "2.25rem",
            }}
          >
            {t("home.hero.subtitle")}
          </Typography>
          <p style={{ paddingBottom: 16 }}>{t("home.hero.description")}</p>
          <Box sx={{ width: "100%" }}>
            <TryDemoFreeButton withIcon sx={{ mx: md ? "auto" : undefined }} />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
