import "@/global.css";
import "@/preflight.css";
import RegisterModalProvider from "@/providers/RegisterModalProvider";
import Container from "@/sections/home/Container";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <RegisterModalProvider>
      <Container />
      <ToastContainer />
    </RegisterModalProvider>
  );
}
