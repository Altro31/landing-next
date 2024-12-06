import AppButton from "@/components/AppButton";
import { useRegisterModal } from "@/hooks/use-register-modal";
import {
  registerSchema,
  type RegisterSchemaType,
} from "@/sections/register/form/register-schema";
import RegisterForm from "@/sections/register/form/RegisterForm";
import request from "@/server/actions/request";
import { primary, secondary } from "@/theme/colors";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stack, useMediaQuery } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export default function RegisterFormContainer() {
  const { setOpen, setSuccess, setEmail } = useRegisterModal();
  const { t } = useTranslation();
  const md = useMediaQuery("(max-width: 640px)");

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      enterprise: "",
      motive: "",
      comment: "",
      phone: "",
    },
    mode: "onChange" as const,
  });

  const onSubmit = form.handleSubmit(async (data: RegisterSchemaType) => {
    const { email } = data;
    
    try {
      const res = await request(data)
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      setEmail(email);
        setSuccess();
    } catch {
      toast.error(t("register.error"));
    }
  });

  return (
    <FormProvider {...form}>
      <form id="register" onSubmit={onSubmit}>
        <RegisterForm />
      </form>
      <Stack
        direction={md ? "column-reverse" : "row"}
        spacing={1}
        sx={{ justifyContent: md ? undefined : "end" }}
      >
        <AppButton
          sx={{ color: secondary.main }}
          onClick={() => setOpen(false)}
        >
          {t("register.back")}
        </AppButton>
        <AppButton
          sx={{ bgcolor: primary.main, fontWeight: 500 }}
          variant="contained"
          form="register"
          type="submit"
          disabled={!form.formState.isValid || form.formState.isSubmitting}
        >
          {t("register.request")}
        </AppButton>
      </Stack>
    </FormProvider>
  );
}
