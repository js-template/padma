import { useTheme } from "next-themes"

export default function useThemeToggle() {
   const { theme, setTheme } = useTheme()
   const toggleTheme = () => {
      setTheme(theme === "dark" ? "light" : "dark")
   }
   return { toggleTheme, mode: theme, setTheme }
}
