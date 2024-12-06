import AvangturLogo from "@/assets/avangtur-logo.svg";
import GradientText from "@/components/GradientText";
import TryDemoFreeButton from "@/components/TryDemoFreeButton";
import FooterBackgroundFigures from "@/sections/home/footer/FooterBackgroundFigures";
import { secondary } from "@/theme/colors";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function FooterContainer() {
  const { t } = useTranslation();
  const md = useMediaQuery("(max-width: 640px)");
  return (
    <Stack spacing={4} sx={{ height: md ? undefined : "100vh", pb: 4 }}>
      <Stack
        direction="column"
        sx={{
          px: 2,
          position: "relative",
          alignItems: "center",
          textAlign: "center",
          py: 7,

          ...(!md && {
            display: "grid",
            placeContent: "center",
            height: "100%",
          }),
        }}
        className="avangtur-gradient"
      >
        <FooterBackgroundFigures />
        <GradientText
          style={{
            fontSize: md ? "1.5rem" : "3rem",
            lineHeight: md ? "2rem" : "1",
            marginBottom: "1rem",
          }}
        >
          {t("home.footer.title")}
        </GradientText>
        <Typography
          sx={{
            maxWidth: md ? "18rem" : "32rem",
            mb: md ? 6 : 7,
            color: secondary.text,
            mx: "auto"
          }}
        >
          {t("home.footer.description")}
        </Typography>

        <TryDemoFreeButton withIcon sx={{ mx: "auto" }} />
      </Stack>

      <Stack is="footer">
        <img
          src={AvangturLogo}
          style={{
            height: "2.75rem",
            width: "2.75rem",
            marginInline: "auto",
          }}
        />
        <Box
          sx={{
            textAlign: "center",
            fontSize: "0.75rem",
            lineHeight: "1rem",
          }}
        >
          <div>© All rights reserved</div>
          <div>made by Avangenio</div>
        </Box>
      </Stack>
    </Stack>
  );
}
