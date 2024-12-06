import TextField from "@/components/TextField";
import { Stack, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function RegisterForm() {
  const { t } = useTranslation();
  const md = useMediaQuery("(max-width: 640px)");
  return (
    <Stack spacing={1.5}>
      <TextField
        placeholder={t("register.form.name-placeholder")}
        label={`${t("register.form.name")} *`}
        name="name"
      />
      <TextField
        placeholder={t("register.form.email-placeholder")}
        label={`${t("register.form.email")} *`}
        type="email"
        name="email"
      />
      <Stack spacing={1.5} direction={md ? "column" : "row"}>
        <TextField
          placeholder="Ej: +53 5XX XXXXX"
          label={t("register.form.phone")}
          name="phone"
        />
        <TextField
          placeholder="Ej: Avangenio"
          label={`${t("register.form.company")} *`}
          name="enterprise"
        />
      </Stack>
      <TextField
        placeholder={t("register.form.reason-placeholder")}
        label={`${t("register.form.reason")} *`}
        name="motive"
      />
      <TextField
        placeholder={t("register.form.comment-placeholder")}
        label={t("register.form.comment")}
        multiline
        rows={4}
        name="comment"
      />
    </Stack>
  );
}
