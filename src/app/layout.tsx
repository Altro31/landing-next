import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avangtur Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledEngineProvider injectFirst>
          {children}
        </StyledEngineProvider>
      </body>
    </html>
  );
}
