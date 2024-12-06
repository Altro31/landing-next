import { m } from "framer-motion";
import CustomPopover, { usePopover } from "@/components/custom-popover";
import Iconify from "@/components/iconify";
import { IconButton, MenuItem } from "@mui/material";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

interface LangOption {
  label: string;
  value: string;
  icon: string;
}

const allLangs: LangOption[] = [
  {
    label: "English",
    value: "en",
    icon: "flagpack:gb-nir",
  },
  {
    label: "Español",
    value: "es",
    icon: "flagpack:es",
  },
];

const varHover = (hover = 1.09, tap = 0.97) => ({
  hover: { scale: hover },
  tap: { scale: tap },
});

export default function LanguagePopover() {
  const popover = usePopover();
  const { i18n } = useTranslation();
  const language = i18n.language;

  const currentLang =
    allLangs.find((option) => option.value === language) ?? allLangs[0];

  const handleChangeLang = useCallback(
    (option: LangOption) => () => {
      i18n.changeLanguage(option.value);
      popover.onClose()
    },
    [language]
  );

  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={popover.onOpen}
        sx={{
          width: 40,
          height: 40,
          ...(popover.open && {
            bgcolor: "action.selected",
          }),
        }}
      >
        <Iconify
          icon={currentLang.icon}
          sx={{ borderRadius: 0.65, width: 28 }}
        />
      </IconButton>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        sx={{ width: 160 }}
      >
        {allLangs.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === currentLang.value}
            onClick={handleChangeLang(option)}
          >
            <Iconify
              icon={option.icon}
              sx={{ borderRadius: 0.65, width: 28 }}
            />

            {option.label}
          </MenuItem>
        ))}
      </CustomPopover>
    </>
  );
}
