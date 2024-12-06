import ContentContainer from "@/sections/home/content/ContentContainer";
import FeaturesContainer from "@/sections/home/features/FeaturesContainer";
import FooterContainer from "@/sections/home/footer/FooterContainer";
import HeaderContainer from "@/sections/home/header/HeaderContainer";
import HeroContainer from "@/sections/home/hero/HeroContainer";
import RegisterModalContainer from "@/sections/register/RegisterModalContainer";
import { Box, Stack, useMediaQuery } from "@mui/material";

export default function Container() {
  const md = useMediaQuery("(max-width: 640px)");
  return (
    <Box>
      <HeaderContainer />
      <Stack spacing={md ? 18 : 24}>
        <HeroContainer />
        <ContentContainer />
        <FeaturesContainer />
        <FooterContainer />
      </Stack>
      <RegisterModalContainer />
    </Box>
  );
}
