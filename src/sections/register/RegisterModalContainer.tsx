import { useRegisterModal } from "@/hooks/use-register-modal";
import RegisterModal from "@/sections/register/RegisterModal";
import RegisterSuccess from "@/sections/register/RegisterSuccess";
import { Backdrop, Card, useMediaQuery } from "@mui/material";
import { useCallback, type MouseEventHandler } from "react";

export default function RegisterModalContainer() {
  const { open, success, setOpen } = useRegisterModal();
  const md = useMediaQuery("(max-width: 640px)");

  const handleClose: MouseEventHandler<HTMLElement> = useCallback((e) => {
    if (e.target === e.currentTarget) setOpen(false);
  }, []);

  return (
    <Backdrop
      open={open}
      onClick={success ? handleClose : undefined}
      sx={{
        zIndex: 20,
        overflow: "auto",
        bgcolor: "rgb(255 255 255 / 0.8)",
      }}
      key={Date.now()}
    >
      {success ? (
        <RegisterSuccess />
      ) : (
        <Card sx={{ mt: md ? 36 : 16, mb: 4 }} className="content-card">
          <RegisterModal />
        </Card>
      )}
    </Backdrop>
  );
}
