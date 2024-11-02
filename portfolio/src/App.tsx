import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./i18n.ts";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
  const { t } = useTranslation();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <>
        <Header />
        <main className="grow">
          <div className="w-content mx-auto my-3">
            <h1 className="text-[#4340F2] text-6xl font-black">Florian Göth</h1>
            <h2 className="text-[#FAFAFF] text-2xl">{t("fullstackWebdev")}</h2>
          </div>
        </main>
        <Footer />
      </>
    </ThemeProvider>
  );
}
