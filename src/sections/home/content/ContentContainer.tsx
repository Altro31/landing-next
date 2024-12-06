import ContentCard from "@/sections/home/content/ContentCard";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import SettingsIcon from "@/assets/content/settings-icon.svg";
import ProgrammingIcon from "@/assets/content/programming-icon.svg";
import StructureIcon from "@/assets/content/structure-icon.svg";
import ContentIcon from "@/sections/home/content/ContentIcon";
import ContentCarousel from "@/sections/home/content/carousel/ContentCarousel";
import { useTranslation } from "react-i18next";
import { secondary } from "@/theme/colors";

export default function ContentContainer() {
  const { t } = useTranslation();
  const md = useMediaQuery("(max-width: 640px)");
  return (
    <Box
      sx={{
        height: "100vh",
        display: "grid",
        placeContent: "center",
      }}
    >
      <Stack spacing={3} sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: "0.75rem",
            lineHeight: "1rem",
            fontWeight: 700,
            color: secondary.text,
          }}
        >
          AVANGTUR
        </Typography>
        <Typography
          sx={{
            fontSize: md ? "1.5rem" : "2.25rem",
            lineHeight: md ? "2rem" : "2.5rem",
            fontWeight: 800,
            pb: 4
          }}
        >
          {t("home.content.subtitle")}
        </Typography>
      </Stack>
      {md ? (
        <ContentCarousel />
      ) : (
        <Stack direction="row" spacing={8}>
          <ContentCard
            icon={<ContentIcon icon={SettingsIcon} />}
            title={t("home.content.card1.title")}
            content={t("home.content.card1.content")}
          />
          <ContentCard
            icon={<ContentIcon icon={ProgrammingIcon} />}
            title={t("home.content.card2.title")}
            content={t("home.content.card2.content")}
            primary
          />
          <ContentCard
            icon={<ContentIcon icon={StructureIcon} />}
            title={t("home.content.card3.title")}
            content={t("home.content.card3.content")}
          />
        </Stack>
      )}
    </Box>
  );
}
