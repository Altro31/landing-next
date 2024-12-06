import { RegisterModalContext } from "@/hooks/use-register-modal";
import { useEffect, useState, type PropsWithChildren } from "react";

export default function RegisterModalProvider({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const body = document.body;
    body.classList.toggle("modal-open", open);
    setSuccess(false);
    setEmail("");
  }, [open]);

  return (
    <RegisterModalContext.Provider
      value={{
        open,
        setOpen,
        email,
        setEmail,
        success,
        setSuccess: () => setSuccess(true),
      }}
    >
      {children}
    </RegisterModalContext.Provider>
  );
}
