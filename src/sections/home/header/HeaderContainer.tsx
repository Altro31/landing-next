import AvangturLogo from "@/assets/AvangturLogo";
import AvangturLogoWithText from "@/assets/AvangturLogoWithText";
import LoginIcon from "@/assets/LoginIcon";
import AppButton from "@/components/AppButton";
import LanguageSelector from "@/components/LanguageSelector";
import TryDemoFreeButton from "@/components/TryDemoFreeButton";
import { secondary } from "@/theme/colors";
import { Box, Stack, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function HeaderContainer() {
  const { t } = useTranslation();
  const md = useMediaQuery("(max-width: 640px)");
  return (
    <Box
      sx={{ py: 2, position: "absolute", width: "100%", left: 0, zIndex: 10 }}
    >
      <Stack
        direction="row"
        sx={{
          px: "4px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="header-container"
      >
        {md ? <AvangturLogo className="logo" /> : <AvangturLogoWithText />}

        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <LanguageSelector />
          <Box>
            <AppButton
              variant="outlined"
              sx={{
                color: secondary.main,
                borderColor: secondary.main,
              }}
            >
              <a href={import.meta.env.VITE_REACT_APP_BACK_OFFICE_URL+"/auth/login"}>
                {md ? <LoginIcon /> : t("auth.login")}
              </a>
            </AppButton>
          </Box>
          <TryDemoFreeButton short sx={{py: 1}}/>
        </Stack>
      </Stack>
    </Box>
  );
}
