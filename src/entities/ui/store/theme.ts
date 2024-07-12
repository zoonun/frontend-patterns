import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeConfig {
  codeStyle: string;
}

const defaultTheme: ThemeConfig = {
  codeStyle: "",
};

interface ThemeState {
  theme: ThemeConfig;
  setTheme: (themeConfig: ThemeConfig) => void;
}

export const useThemeStore = create(
  persist<ThemeState>(
    (set) => ({
      theme: defaultTheme,
      setTheme: (theme: ThemeConfig) => set({ theme }),
    }),
    {
      name: "theme",
    }
  )
);
