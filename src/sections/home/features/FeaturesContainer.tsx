import {
  Box,
  Grid2 as Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import UserAndRolesIcon from "@/assets/features/user-and-roles-icon.svg";
import AccommodationIcon from "@/assets/features/accommodation-icon.svg";
import FarePlansIcon from "@/assets/features/fareplans-icon.svg";
import ContractsIcon from "@/assets/features/contracts-icon.svg";
import ReservationsIcon from "@/assets/features/reservations-icon.svg";
import NomenclatorsIcon from "@/assets/features/nomenclators-icon.svg";
import { useTranslation } from "react-i18next";
import { secondary } from "@/theme/colors";

export default function FeaturesContainer() {
  const { t } = useTranslation();
  const md = useMediaQuery("(max-width: 640px)");
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        ...(!md && {
          display: "grid",
          placeContent: "center",
          gap: 12,
        }),
      }}
    >
      <Stack spacing={3} sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            fontWeight: 700,
            color: secondary.text,
          }}
        >
          {t("home.features.subtitle")}
        </Typography>
        <Typography
          sx={{
            fontSize: md ? "1.5rem" : "2.25rem",
            lineHeight: md ? "2rem" : "2.5rem",
            fontWeight: 800,
          }}
        >
          {t("home.features.title")}
        </Typography>
      </Stack>
      <Grid
        container
        rowSpacing={8}
        columnSpacing={3}
        sx={{ justifyContent: "center", px: md ? undefined : 18 }}
      >
        {modules.map(({ title, description, icon }) => (
          <Grid
            size={{ md: 4 }}
            sx={{ display: "flex", justifyContent: "center" }}
            key={title}
          >
            <Stack spacing={3} sx={{ width: "fit-content" }}>
              <img
                src={icon}
                width={114}
                height={98}
                style={{ marginInline: "auto" }}
              />
              <Stack
                spacing={1}
                sx={{ textAlign: "center", color: secondary.text }}
              >
                <Typography
                  sx={{
                    fontSize: "1.125rem",
                    lineHeight: "1.75rem",
                    fontWeight: 700,
                  }}
                  className=" text-lg font-bold"
                >
                  {t(title)}
                </Typography>
                <p style={{ width: "18rem" }}>{t(description)}</p>
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const modules = [
  {
    title: "home.features.module1.title",
    description: "home.features.module1.description",
    icon: UserAndRolesIcon,
  },
  {
    title: "home.features.module2.title",
    description: "home.features.module2.description",
    icon: AccommodationIcon,
  },
  {
    title: "home.features.module3.title",
    description: "home.features.module3.description",
    icon: FarePlansIcon,
  },
  {
    title: "home.features.module4.title",
    description: "home.features.module4.description",
    icon: ContractsIcon,
  },
  {
    title: "home.features.module5.title",
    description: "home.features.module5.description",
    icon: ReservationsIcon,
  },
  {
    title: "home.features.module6.title",
    description: "home.features.module6.description",
    icon: NomenclatorsIcon,
  },
];
