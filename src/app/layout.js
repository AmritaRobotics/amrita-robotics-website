"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./globals.css"; // your existing CSS

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#4cc9f0" },
    background: { default: "#06102b", paper: "rgba(255,255,255,0.06)" }
  },
  shape: { borderRadius: 18 }
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
