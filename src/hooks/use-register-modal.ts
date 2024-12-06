import { createContext, useContext } from "react";

interface RegisterModalType {
  open: boolean;
  setOpen: (open: boolean) => void;
  email: string;
  setEmail: (email: string) => void;
  success: boolean;
  setSuccess: () => void;
}

export const RegisterModalContext = createContext<RegisterModalType>({
  open: false,
  setOpen: () => {},
  email: "",
  setEmail: () => {},
  success: false,
  setSuccess: () => {},
});

export function useRegisterModal() {
  return useContext(RegisterModalContext);
}
